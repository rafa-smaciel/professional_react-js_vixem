import styled, { css } from 'styled-components';

export const Container = styled.div`
    background-color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif; /* fonte padrão */
    line-height: 1.5; /* altura da linha */
    width: 100%; /* largura do artigo */
    height: 100%;
    padding-bottom: 40px;
    font-family: 'Montserrat', sans-serif;
    h1 {    
        padding-top: 20px;
        margin-top: 50px;
        font-size: 20px;
        font-weight: bold;
        text-align: center; /*Alinha o texto no centro*/
    }
    p {
        margin-bottom: 1em; /* espaço entre os parágrafos */
    }
    img {
        margin: 1em auto; /* centralizar as imagens */
    }
    a {
        color: blue; /* cor padrão dos links */
        text-decoration: none; /* remover a sublinhado */ 
    }
    .image1{
        @media (max-width: 414px) {
            width: 110%; 
            height: 110%;
        }
    }
    ${props => props.prevArrow && css`
        &::before {
            content: "";
            width: 20px;
            height: 20px;
            background-color: #891A14;
            color: black;
            font-size: 10px;
            line-height: 40px;
            text-align: center;
            border-radius: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: -999;
            right: -50px;
            display: block;
            @media (max-width: 414px) {
            display: none;
        }
        @media (max-width: 414px) {
            display: none;
            z-index: 1;
        }
        }
    `}
    ${props => props.nextArrow && css`
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            background-color: #891A14;
            color: black;
            font-size: 10px;
            line-height: 40px;
            text-align: center;
            border-radius: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: -999;
            left: -50px;
            display: block;
            @media (max-width: 414px) {
            display: none;
        }
        @media (max-width: 414px) {
            display: none;
            z-index: 1;
        }
        }
    `}
`;
export const Validation1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    img {
        background-color: green;
        /* height: 1%; */
        width: 20%;
    }
    p {
        font-size: 100px;
    }
`;
export const Validation2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    img {
        background-color: green;
        height: 100px;
    }
    p {
        font-size: 100px;
    }
`;
export const Validation3 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    img {
        background-color: green;
        height: 100px;
    }
    p {
        font-size: 100px;
    }
`;
export const Validation4 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    img {
        background-color: green;
        height: 100px;
    }
    p {
        font-size: 100px;
    }
`;