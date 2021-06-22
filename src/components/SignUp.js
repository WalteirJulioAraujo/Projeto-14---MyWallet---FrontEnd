import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SignUp(){
    return(
        <>
            <Logo>
                MyWallet
            </Logo>
            <InputFields>
                <form>
                    <input type='text' placeholder='Nome' required />
                    <input type='email' placeholder='Email' required />
                    <input type='password' placeholder='Senha' required />
                    <input type='password' placeholder='Confirme a senha' required />
                    <SubmitButton type='submit'>
                        Cadastrar
                    </SubmitButton>
                </form>
            </InputFields>
            <RedirectToLogin>
                <Link to='/'>
                    Já tem uma conta? Entre agora!
                </Link>
            </RedirectToLogin>
        </>

    )
}


const Logo =  styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFF;
    text-align: center;
    margin-top: 160px;
`;

const InputFields = styled.div`
    width: 80%;
    margin: 26px auto 0 auto;
    input{
        height: 58px;
        width:100%;
        color: #000;
        font-size:20px;
        margin-top: 13px;
        border-radius: 5px;
        border: none;
        padding-left: 32px;
    }
    input::placeholder{
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
    background-color:#A328D6;
`;

const RedirectToLogin = styled.div`
    width: fit-content;
    margin: 32px auto 0 auto;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`;
