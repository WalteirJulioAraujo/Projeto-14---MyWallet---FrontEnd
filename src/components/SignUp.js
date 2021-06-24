import axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Logo,InputFields, SubmitButton, RedirectTo } from "../styledComponents/Content";

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

        const validName = name.trim(); 
        const body = { name: validName, email, password };
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
            <RedirectTo>
                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </RedirectTo>
        </>
    );
}

