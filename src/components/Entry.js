import styled from 'styled-components';
import dayjs from 'dayjs';
import { TrashBinOutline } from 'react-ionicons';
import axios from 'axios';

export default function Entry({ date, name, value, type, datenow, SearchData }){
    const formatDate = dayjs(date).format('DD/MM');
    const formatValue = ((value / 100).toFixed(2)).replace('.',',');

    const userSession = JSON.parse(sessionStorage.getItem('userMyWallet'));
    const token = userSession.token;

    function deleteTransaction(){
        if(window.confirm("Deseja apagar essa transação?")){
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const body = { date, name, value, type, datenow };
            const request = axios.post('http://localhost:4001/deleteTransaction', body, config);
            request.then(()=>{
                SearchData();
            })
            request.catch(()=>{
                alert('Erro ao deletar a transação!')
            })
        }
       return;
    }

    return(
        <EntryInfo type={type}>
            <div className='container'>
            <TrashBinOutline
                onClick={deleteTransaction}
                color={'#740101'} 
                height="17px"
                width="17px"
            />
                <div className='date'>{formatDate}</div>
                <div className='name'>{name}</div>
            </div>
            
            <div className='value'>{formatValue}</div>
        </EntryInfo>
    )
}


const EntryInfo = styled.div`
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    .container{
        display: flex;

    }
    .date{
        color: #c6c6c6;
        margin-right: 25px;
        margin-left: 15px;
    }
    .name{
        color: #000;
    }

    .value{
        color: ${ props => props.type  ? '#42AD22':'#C73B19'}
    }
`;