import styled from 'styled-components';
import { ExitOutline } from 'react-ionicons';
import { useHistory } from 'react-router-dom';
import { AddCircleOutline } from 'react-ionicons'
import { RemoveCircleOutline } from 'react-ionicons'

export default function Home(){
    
    let history = useHistory();

    function Exit(){
        history.push('/');
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
            <EmptyStatement>
                    <p>Não há registros de <br/> entrada ou saída</p>
            </EmptyStatement>
            <InOutContainer>
                <div>
                    <AddCircleOutline
                        className='icon'
                        color={'#fff'} 
                        height="26px"
                        width="26px"
                    />
                    <p>Nova<br/>Entrada</p>
                </div>
                <div>
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

const InOutContainer = styled.div`
    width: 85%;
    height: 14.5vh;
    margin: 13px auto 0 auto;
    display: flex;
    justify-content: space-between;
    div{
        height: 100%;
        background-color: #A328D6;
        width: 45%;
        border-radius: 5px;
        padding: 4px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        p{
            font-size: 17px;
            font-weight: bold;
            color: #fff;
        }
        :hover{
            cursor: pointer;
        }
    }

`

const Statement = styled.div`
    width: 85%;
    height: 66vh;
    margin: 22px auto 0 auto;
    border-radius: 5px;
    background-color: #fff;

`
const EmptyStatement = styled.div`
    width: 85%;
    height: 66vh;
    margin: 22px auto 0 auto;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;
    font-size: 20px;
    color: #868686;
    display: flex;
    justify-content: center;
    align-items: center;
`


const NameDiv = styled.div`
    width: fit-content;
    font-size: 26px;
    font-weight: bold;
    color: #fff;
`;

const Container = styled.div`
    width:85%;
    margin: 30px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .exitIcon:hover{
        cursor: pointer;
    }
`