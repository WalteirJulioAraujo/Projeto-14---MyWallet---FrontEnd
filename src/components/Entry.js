import styled from 'styled-components';
import dayjs from 'dayjs';

export default function Entry({ date, name, value, type }){
    const formatDate = dayjs(date).format('DD/MM');
    return(
        <EntryInfo type={type}>
            <div className='container'>
                <div className='date'>{formatDate}</div>
                <div className='name'>{name}</div>
            </div>
            
            <div className='value'>{value}</div>
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
        margin-right: 30px;
    }
    .name{
        color: #000;
    }

    .value{
        color: ${ props => props.type  ? '#42AD22':'#C73B19'}
    }
`;