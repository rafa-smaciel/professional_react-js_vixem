import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import logo from '../../assets/logovixemimg.svg';
import art from '../../assets/art.svg';
import factorywhite from '../../assets/factorywhite.svg';
import factoryblack from '../../assets/factoryblack.svg';
// import whatsapp from '../../assets/whatsapp.png';

function Header() {
  return (
    <S.Container>
      <S.Top>
        <S.Logo>
          <a href="/">
          <img src={logo} alt="Vixem" id="logo"/>
          </a>
        </S.Logo>
        <S.Menu>
          <Link to="/">Home</Link>
          <Link to="/">Problema</Link>
          <Link to="/">Vixem</Link>
          <Link to="/">Time</Link>
          <Link to="/">Contato</Link>
        </S.Menu>
        <S.Header>
          <h1>
            VIXEM
          </h1>
        </S.Header>
        <S.Body>
          <p>
            Conheça a solução de 
            <br/>
            controle de qualidade
            <br/>
            em tempo real
          </p>
        </S.Body>
        <S.Art>
          <img src={art} alt='My SVG' />
        </S.Art>
      </S.Top>
      <S.Bottom>
        <img src={factoryblack} alt='FactoryBlack' />
        <img src={factoryblack} alt='FactoryBlack' />
        <img src={factoryblack} alt='FactoryBlack' />
        <img src={factoryblack} alt='FactoryBlack' />
        <img src={factorywhite} alt='FactoryWhite' />
      </S.Bottom>
      <S.TextBottom>
        <p>As industrias estão
          <br/>
          preocupadas com a qualidade
        </p>
        <span>
          Isso vem repercutindo
          <br/>
          em redução da lucratividade
        </span>
      </S.TextBottom>
      <S.Comparator>
        <S.TextBottomRight>
              <p>
                No entanto, o impacto não é somente no ambito do lucro.
                <br/>
                Danos a IMAGEM podem ser irreparaveis. Empresas sem um controle de qualidade eficiente têm:
              </p>
            </S.TextBottomRight>
        <S.Indicators>
          <S.Indicators1>
            <p>7x</p>
            <span>mais chance de<br/>perder o cliente</span>
          </S.Indicators1>
          <S.Indicators2>
            <p>6x</p>
            <span>mais chance de<br/>causar um recall</span>
          </S.Indicators2>
          <S.Indicators3>
            <p>16%</p>
            <span>de colaboradores menos<br/>satisfeitos com o trabalho</span>
          </S.Indicators3>
          <S.Indicators4>
            <p>2x</p>
            <span>mais chance de sair<br/>da empresa</span>
          </S.Indicators4>
        </S.Indicators>
      </S.Comparator>
      {/* <S.RightSide>
        <a href="https://wa.me/+551151998949" target="_blank" rel="noreferrer" >
           <img src={whatsapp} alt="whatapp" />
        </a>
      </S.RightSide> */}
    </S.Container>
  );
}

export default Header;