import styled from 'styled-components';
import dayjs from 'dayjs';
import { TrashBinOutline } from 'react-ionicons'

export default function Entry({ date, name, value, type }){
    const formatDate = dayjs(date).format('DD/MM');
    const formatValue = ((value / 100).toFixed(2)).replace('.',',');
    return(
        <EntryInfo type={type}>
            <div className='container'>
            <TrashBinOutline
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