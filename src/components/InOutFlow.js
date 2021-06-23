import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { InputFields, SubmitButton } from '../styledComponents/Content';

export default function InOutFlow({ inOrOut }){

    const [ value, setvalue ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ disabled, setDisabled ] = useState(false);
    let history = useHistory();

    function SendForms( ){
        setDisabled(true);
        const body = { name: description, value, type: inOrOut };
        const request = axios.post('/inout',body);
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