import { ExitOutline } from 'react-ionicons';
import { useHistory } from 'react-router-dom';
import { AddCircleOutline } from 'react-ionicons'
import { RemoveCircleOutline } from 'react-ionicons'
import { useEffect, useState } from 'react';
import Entry from '../Entry';
import { Statement, EmptyStatement, NameDiv, Container, InOutContainer, Balance } from './StylesHome.js'
import axios from 'axios';

export default function Home({ setInOrOut }){
    const [ hasEntrys, setHasEntrys ] = useState(true);
    const [ data, setData ] = useState([]);
    const [ searchError, setSearchError ] = useState(false);
    const [ total, setTotal ] = useState("");
    const [ totalNumber, setTotalNumber ] = useState(0);
    let history = useHistory();

    const userSession = JSON.parse(sessionStorage.getItem('userMyWallet'));
    const token = userSession.token;
    
    useEffect(()=>SearchData(),[]);
    
    function SearchData(){
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/inout`,config);
        request.then((e)=>{
            e.data.data.length? setHasEntrys(true) : setHasEntrys(false);
            const totalFormat = ((e.data.total/100).toFixed(2)).replace('.',',');
            setTotal(totalFormat);
            setData(e.data.data);
            setTotalNumber(e.data.total);
        });
        request.catch(()=>{
            setHasEntrys(false);
            setSearchError(true);
        })
    }

    function Exit(){
        sessionStorage.removeItem("userMyWallet");
        history.push('/');
    }

    function NewFlow(e){
        if(e===0){
            setInOrOut(false);
        }
        if(e===1){
            setInOrOut(true);
        }
        history.push('/inoutflow');
    }

    return(
        <>
            <Container>
                <NameDiv>Olá, {userSession.name}</NameDiv>
                <ExitOutline 
                    className='exitIcon'
                    color={'#fff'} 
                    height="32px"
                    width="32px"
                    onClick={Exit}
                />
            </Container>
            {hasEntrys
            ?   <Statement>
                    <div>
                        {data.map((e,i)=><Entry key={i} date={e.date} name={e.name} value={e.value} type={e.type} datenow={e.datenow} SearchData={SearchData}/>)}
                    </div>
                    <Balance total={totalNumber}>
                        <div className='total'>Saldo</div>
                        <div className='totalValue'>{total}</div>
                    </Balance>
                </Statement>
            :   <EmptyStatement>
                {searchError
                ? <p>Erro ao procurar <br/> os dados</p>
                : <p>Não há registros de <br/> entrada ou saída</p>
                }
                </EmptyStatement>    
            }
            <InOutContainer>
                <div onClick={() => NewFlow(1)}>
                    <AddCircleOutline
                        className='icon'
                        color={'#fff'} 
                        height="26px"
                        width="26px"
                    />
                    <p>Nova<br/>Entrada</p>
                </div>
                <div onClick={() => NewFlow(0)}>
                    <RemoveCircleOutline
                        className='icon'
                        color={'#fff'} 
                        height="26px"
                        width="26px"
                    />
                    <p>Nova<br/>Saída</p>
                </div>
            </InOutContainer>
        </> 
    )
}

