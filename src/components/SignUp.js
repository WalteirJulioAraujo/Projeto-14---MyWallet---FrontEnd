import axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ disabled, setDisabled ] = useState(false);
    let history = useHistory();

    function SendForms(e){
        e.preventDefault();
        if(password !== confirmPassword){
            alert('As senhas não são iguais!');
            return;
        }
        setDisabled(true);

        const body = { name, email, password };
        const request = axios.post('http://localhost:4001/signup',body);
        request.then((e)=>{
            history.push('/');
        })
        request.catch((e)=>{
            setDisabled(false);
            if(e.response?.status === 409){
                alert("O Email inserido já foi cadastrado!");
                return;
            }
        })
    }

    return (
        <>
            <Logo>MyWallet</Logo>
            <InputFields>
                <form onSubmit={SendForms}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={disabled}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        disabled={disabled}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        disabled={disabled}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirme a senha"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        disabled={disabled}
                        required
                    />
                    <SubmitButton type="submit" disabled={disabled}>Cadastrar</SubmitButton>
                </form>
            </InputFields>
            <RedirectToLogin>
                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </RedirectToLogin>
        </>
    );
}

const Logo = styled.div`
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    color: #fff;
    text-align: center;
    margin-top: 160px;
`;

const InputFields = styled.div`
    width: 80%;
    margin: 26px auto 0 auto;
    input {
        height: 58px;
        width: 100%;
        color: #000;
        font-size: 20px;
        margin-top: 13px;
        border-radius: 5px;
        border: none;
        padding-left: 32px;
    }
    input::placeholder {
        color: #000;
    }
`;

const SubmitButton = styled.button`
    height: 46px;
    width: 100%;
    margin: 13px auto 0 auto;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    display: block;
    border: none;
    background-color: #a328d6;
`;

const RedirectToLogin = styled.div`
    width: fit-content;
    margin: 32px auto 0 auto;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`;
