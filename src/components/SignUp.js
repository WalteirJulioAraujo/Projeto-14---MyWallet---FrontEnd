import styled from 'styled-components';

export default function SignUp(){
    return(
        <>
            <Logo>
                MyWallet
            </Logo>
            <InputFields>
                <input placeholder='Nome' />
                <input placeholder='Email' />
                <input placeholder='Senha' />
                <input placeholder='Confirme a senha' />
            </InputFields>
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

`;

