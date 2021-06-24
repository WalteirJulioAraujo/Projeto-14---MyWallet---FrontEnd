import axios from 'axios';
import { useContext, useState } from 'react';
import { Alert } from 'react-ionicons';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { InputFields, SubmitButton } from '../styledComponents/Content';

export default function InOutFlow({ inOrOut }){
    const { user } = useContext(UserContext);
    const [ value, setvalue ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ disabled, setDisabled ] = useState(false);
    let history = useHistory();

    const token = sessionStorage.getItem("userMyWalletToken");
    

    function SendForms(e){
        e.preventDefault();
        const validValue = Number(value).toFixed(2);

        // if(validValue!==validValue.toFixed(2)){
        //     alert("O valor deve ter no máximo 2 casas decimais!");
        //     return;
        // }
        console.log(inOrOut);
        setDisabled(true);
        const valueInCents = validValue*100;
        const validDescription = description.trim();
        const body = { name: validDescription, value:valueInCents, type: inOrOut };
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const request = axios.post('http://localhost:4001/inout',body,config);
        request.then(()=>{
            history.push('/home')
        });
        request.catch(()=>{
            setDisabled(false);
            alert('Os dados não foram inseridos corretamente!');
        })
    }

    const typeTitle = inOrOut ? 'entrada' : 'saída';

    return(
        <>
            <Title>
                {'Nova ' + typeTitle}
            </Title>
            <InputFields>
                <form onSubmit={SendForms}>
                        <input
                            type="number"
                            placeholder="Valor"
                            value={value}
                            onChange={(e) => setvalue(e.target.value)}
                            disabled={disabled}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Descrição "
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            disabled={disabled}
                            required
                        />
                        <SubmitButton type="submit" disabled={disabled}>{'Salvar ' + typeTitle}</SubmitButton>
                </form>
            </InputFields>
            <Link to='/home'><BackToHome>Voltar</BackToHome></Link>
        </>
    
    )
}

const Title = styled.div`
    width: 85%;
    font-size: 26px;
    margin: 30px auto 0 auto ;
    font-weight: bold;
    color: #fff;
`;

const BackToHome = styled.button`
    border: none;
    display: block;
    width: 85%;
    height: 46px;
    margin: 10px auto 0 auto;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    background-color: #a328d6;

    :hover{
        cursor: pointer;
    }
`