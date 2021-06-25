import axios from "axios";
import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Logo,InputFields, SubmitButton, RedirectTo } from "../styledComponents/Content";

export default function LogIn(){
    const { setUser } = useContext(UserContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ disabled, setDisabled ] = useState(false);
    let history = useHistory();

    if(sessionStorage.getItem("userMyWallet")){
        history.push('/home');
    }

    function SendForms(e){
        e.preventDefault();
        
        setDisabled(true);
    
        const body = { email, password };
        const request = axios.post('http://localhost:4001/login',body);
        request.then((e)=>{
            sessionStorage.setItem("userMyWallet", JSON.stringify(e.data));
            setUser(e.data.name);
            history.push('/home');
        })
        request.catch((e)=>{
            setDisabled(false);
            if(e.response?.status === 401){
                alert("Email e/ou senha não foi inserido corretamente!");
                return;
            }
        })
    }

    return(
        <>
            <Logo>MyWallet</Logo>
            <InputFields>
                <form onSubmit={SendForms}>
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
                    <SubmitButton type="submit" disabled={disabled}>Entrar</SubmitButton>
                </form>
            </InputFields>
            <RedirectTo>
                <Link to="/signup">Primeira vez? Cadastre-se!</Link>
            </RedirectTo>
        </>
    )
}