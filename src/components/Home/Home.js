import { ExitOutline } from 'react-ionicons';
import { useHistory } from 'react-router-dom';
import { AddCircleOutline } from 'react-ionicons'
import { RemoveCircleOutline } from 'react-ionicons'
import { useState } from 'react';
import Entry from '../Entry';
import { Statement, EmptyStatement, NameDiv, Container, InOutContainer } from './StylesHome.js'

export default function Home({ setInOrOut }){
    const [ hasEntrys, setHasEntrys ] = useState(false);
    const [ data, setData ] = useState([{date:'30/11', name:'Almoço mãe', price:'39,90', type:0},{date:'02/12', name:'Deposito', price:'120,00', type:1}]);
    let history = useHistory();

    function Exit(){
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
                <NameDiv>Olá, Fulano</NameDiv>
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
                    {data.map((e)=><Entry date={e.date} name={e.name} price={e.price} type={e.type} />)}
                </Statement>
            :   <EmptyStatement>
                    <p>Não há registros de <br/> entrada ou saída</p>
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

