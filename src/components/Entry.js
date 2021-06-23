import styled from "styled-components"

export default function Entry({ date, name, price, type }){
    return(
        <EntryInfo type={type}>
            <div className='container'>
                <div className='date'>{date}</div>
                <div className='name'>{name}</div>
            </div>
            
            <div className='price'>{price}</div>
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

    .price{
        color: ${ props => props.type  ? '#42AD22':'#C73B19'}
    }
`;