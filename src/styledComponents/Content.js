import styled from "styled-components";

export const Logo = styled.div`
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    color: #fff;
    text-align: center;
    margin-top: 160px;
`;

export const InputFields = styled.div`
    width: 85%;
    margin: 26px auto 0 auto;
    input {
        height: 58px;
        width: 100%;
        color: #000;
        font-size: 20px;
        margin-top: 13px;
        border-radius: 5px;
        border: none;
        padding-left: 32px;
    }
    input::placeholder {
        color: #000;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }   
    input[type=number] {
    -moz-appearance: textfield;
    }
`;

export const SubmitButton = styled.button`
    height: 46px;
    width: 100%;
    margin: 13px auto 0 auto;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    display: block;
    border: none;
    background-color: #a328d6;

    :hover{
        cursor: pointer;
    }
`;

export const RedirectTo = styled.div`
    width: fit-content;
    margin: 32px auto 0 auto;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`;