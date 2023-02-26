import styled from 'styled-components';

const primaryColor = '#7B1FA2';
const secondaryColor = '#BDBDBD';

export const Container = styled.div`
  // Define a fonte principal como Montserrat
  font-family: 'Montserrat', sans-serif;
  
  // Define a largura como 100%
  width: 100%;
  
  // Define a altura como 982px
  height: 982px;
  
  // Define a exibição como flex (elementos filhos posicionados ao longo do eixo principal, um ao lado do outro)
  display: flex;
  
  // Define a direção dos elementos filhos como coluna (um embaixo do outro)
  flex-direction: column;
  
  // Define a posição inicial como "initial"
  position: initial;
  
  // A partir daqui, estamos definindo regras de estilo para diferentes tamanhos de tela usando media queries
  @media (max-width: 414px) {
    // Quando a largura máxima da tela é 414px ou menor,
    // Define a largura como 100%
    width: 100%;
    
    // Define o estilo overflow como hidden (elementos que ultrapassam o tamanho do container são escondidos)
    overflow: hidden;
    
    /*
    // Comentários descomentados abaixo não são aplicados
    // Define a direção dos elementos filhos como coluna (um embaixo do outro)
    flex-direction: column;
    
    // Define a cor de fundo como vermelho
    background-color: red;
    */
  }
`
export const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    h1 {
        margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 900;
  font-size: 55px;
  align-items: center;
  color: #FFFFFF;
  text-shadow: 3px 0px 1px rgba(10,10,10,50);
}

`
export const Body = styled.div`
        p {
        color: #FFFFFF;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: -35px;
        margin-bottom: 130px;
    }
`
export const Top = styled.div`
    height: 490px;
    background-color: ${primaryColor};
`
export const Bottom = styled.div`
    height: 422px;
    background-color: ${secondaryColor};
    padding-left: 180px;
    padding-top: 260px;
    height: 30%;
    img {
        margin-top: 35px;
        display: inline;
        margin-right: -25px;
        width: 100px;
        height: 170px;
        display: row;
        text-align: center;
        justify-content: center;
        padding: 1px;
        &:hover{
        transform: scale(1.05);
        opacity: 20;
        transition: 1s;
    }
    opacity: 0;
    animation: fadeIn 3s ease-in forwards;
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
}
`
export const Menu = styled.div`
    background-color: #1B5E20;
    width: 31%;
    height: 10%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    margin-left: 550px;
    margin-top: -80px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    @media (max-width: 1500px) {
            height: auto;
            margin-left: 400px;
            padding-right: 90px;
            padding-left: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    @media (max-width: 414px) {
            display: none;
        }

    a, button {
    color: #FFFFFF;
    
    font-weight: bold;
    text-decoration: none;
    margin: 0 20px;

&:hover{
    color: #891A14;
    transition: 0.25s;
}
}
@media (max-width: 414px) {
    width: 100%;
    margin-right: 0;
    justify-content: center;
}
`
export const Logo = styled.div`
    width: 10%;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-top: 20px;
    margin-left: 15px;

    img {
        width: 100px;
        height: 100px;
        &:hover{
        transform: scale(1.05);
        opacity: 20;
        transition: 1s;
    }
    }

    @media (max-width: 414px){
        #logo {
            width: 100%;
            justify-content: center;
            margin-left: 75px;
            height: 100%;
        }
    }
`
export const Art = styled.div`
    width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    /* background-color: red; */
    margin-top: -20px;
    width: 900px;
    height: auto;
    display: block;
    /* margin: auto; */
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
    z-index: 1;
    /* &:hover {
      transform: scale(1.1);
      opacity: 20;
      transition: 1s;
    } */
  }




    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a, button {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

    &:hover{
        transition: opacity .3s;
    }

    span {
        background: #FFF;
        color: #891A14;
        padding: 3px 7px;
        border-radius: 50%50%;
        position: relative;
        top: -20px;
        right: 10px;
    }
    
    }
    @media (max-width: 414px) {
    width: 100%;
    justify-content: center;
    }
`
export const TextBottom = styled.div`
    opacity: 0;
    animation: fadeIn 3s ease-in forwards;
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    p {
        width: 50%;
        color: #000000;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: -130px;
        margin-left: -15px;
    }
    span {
        color:#000000;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        text-align: center;
        justify-content: center;
        margin-left: -840px;
        margin-top: -18px;
    }
`
export const Comparator = styled.div`
    margin-top: -200px;
    width: 50%;
    justify-content: flex-end;
    margin-left: 650px;
    opacity: 0;
    animation: fadeIn 3s ease-in forwards;
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`
export const TextBottomRight = styled.div`
    p {
        color: #000000;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        margin-right: 30px;
        text-align: center;
        justify-content: flex-end;
    }
`
export const Indicators = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
`
export const Indicators1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 60px;
    p {
        color: #000000;
        width: 38%;
        font-size: 50px;
        margin-top: -10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-align: center;
        justify-content: center;
        text-shadow: -4px -4px 0px #ffffff;
    }
    span {
        color:#000000;
        font-size: 12px;
        margin-top: -50px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        text-align: center;
        justify-content: center;
    }
`
export const Indicators2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 60px;
    p {
        color: #000000;
        width: 38%;
        font-size: 50px;
        margin-top: -10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-align: center;
        justify-content: center;
        text-shadow: -4px -4px 0px #ffffff;
    }
    span {
        color:#000000;
        margin-top: -50px;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        text-align: center;
        justify-content: center;
    }
`
export const Indicators3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 60px;
    p {
        
        color: #000000;
        width: 38%;
        font-size: 50px;
        margin-top: -10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-align: center;
        justify-content: center;
        text-shadow: -4px -4px 0px #ffffff;
    }
    span {
        color:#000000;
        margin-top: -50px;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        text-align: center;
        justify-content: center;
    }
`
export const Indicators4 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 60px;
    p {
        
        color: #000000;
        width: 38%;
        font-size: 50px;
        margin-top: -10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-align: center;
        justify-content: center;
        text-shadow: -4px -4px 0px #ffffff;
    }
    span {
        color:#000000;
        font-size: 12px;
        margin-top: -50px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        text-align: center;
        justify-content: center;
    }
`