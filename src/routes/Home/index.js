import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
// import Video from '../../components/Video';
// import Budget from "../../components/Budget";
// import Footer from '../../components/Footer';

function Home() {
  return (
    <S.Container>
        <Header/>
        <Carousel/>
        {/* <Footer/> */}
    </S.Container>
  );
}

export default Home;