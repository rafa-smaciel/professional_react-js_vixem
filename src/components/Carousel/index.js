/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Helmet } from "react-helmet";
import * as S from './styles';
import image1 from '../../assets/mvisia.png'
import image2 from '../../assets/2.svg'
import image3 from '../../assets/3.svg'
import image4 from '../../assets/4.svg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0); // gerenciando o estado atual do slide
  const paragraphs = [
    <S.Validation1>
        <p>hello world</p>
        <img src= {image1} className="image1" alt="image1" width="40%" height="40%"/>, 
    </S.Validation1>,
    <S.Validation2>
      <img src= {image2} className="image1" alt="image1" width="40%" height="40%"/>, 
      <p>hello world2</p>
    </S.Validation2>,
    <S.Validation3>
      <p>hello world3</p>
      <img src= {image3} className="image1" alt="image1" width="40%" height="40%"/>, 
    </S.Validation3>,
    <S.Validation4>
      <img src= {image4} className="image1" alt="image1" width="40%" height="40%"/>, 
      <p>hello world4</p>
    </S.Validation4>
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: currentSlide => setCurrentSlide(currentSlide),
    prevArrow: <S.Container prevArrow />,
    nextArrow: <S.Container nextArrow />,
    // autoplay: true,
    // autoplaySpeed: 5000, // velocidade de 5 segundos entre cada transição
    cssEase: 'linear', // adicionando a propriedade "cssEase" para remover a animação padrão
    fade: true, // adicionando a propriedade "fade" para habilitar a transição "fadeIn"
  };
  return (
    <S.Container>
            <Helmet>
                <title>5 Boas Práticas para Projetos</title>
                <meta name="description" content="Engenharia Atual" />
                <meta name="keywords" content="engenharia, engenharia atual, como ganhar dinheiro com a engenharia, engenharia século 21, engenharia moderna, sucesso na engenharia, consultoria em engenharia"/>
                <meta name="author" content="Vega Robotics" />
            </Helmet>
            <h1>As empresas endetenderam o problema e começaram a buscar soluções. <br/>
            Inclusive ações de empresas com bons resultados:</h1>
      <Slider {...settings}>
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph}</p>
          </div>
        ))}
      </Slider>
    </S.Container>
  );
};
export default Carousel;
