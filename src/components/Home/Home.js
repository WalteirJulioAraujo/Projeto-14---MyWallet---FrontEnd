import { ExitOutline } from 'react-ionicons';
import { useHistory } from 'react-router-dom';
import { AddCircleOutline } from 'react-ionicons'
import { RemoveCircleOutline } from 'react-ionicons'
import { useEffect, useState, useContext } from 'react';
import Entry from '../Entry';
import { Statement, EmptyStatement, NameDiv, Container, InOutContainer } from './StylesHome.js'
import axios from 'axios';
import UserContext from '../../contexts/UserContext';

export default function Home({ setInOrOut }){
    const { user } = useContext(UserContext);
    const [ hasEntrys, setHasEntrys ] = useState(true);
    const [ data, setData ] = useState([]);
    const [ searchError, setSearchError ] = useState(false);
    let history = useHistory();

    const userSession = JSON.parse(sessionStorage.getItem('userMyWallet'));
    const token = userSession.token;
    
    useEffect(()=>SearchData(),[]);

    function SearchData(){
        console.log('1')
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const request = axios.get('http://localhost:4001/inout',config);
        request.then((e)=>{
            console.log('2')
            e.data.length? setHasEntrys(true) : setHasEntrys(false);
            setData(e.data);
        });
        request.catch(()=>{
            console.log('3')
            setHasEntrys(false);
            setSearchError(true);
        })
    }

    function Exit(){
        sessionStorage.removeItem("userMyWallet");
        // sessionStorage.removeItem("userMyWalletToken");
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
                    {data.map((e,i)=><Entry key={i} date={e.date} name={e.name} value={e.value} type={e.type} />)}
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

