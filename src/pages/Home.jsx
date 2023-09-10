import React from 'react';
import './Home.css';
import PromoCarousel from "components/PromoCarousel/PromoCarousel";
import Categories from "components/Categories/Categories";
import PcBuild from "components/PcBuild/PcBuild";
import ProductCarousel from 'components/ProductCarousel/ProductCarousel';

const Home = () => {

  const productCards = [
    {
      name: 'Смартфон Apple IPhone 14 Pro Max 512Gb, фиолетовый',
      imgName: 'iphone14promaxviolet',
      price: 119990
    },
    {
      name: 'Смартфон Apple IPhone 14 Pro Max 512Gb, фиолетовый',
      imgName: 'iphone14promaxviolet',
      price: 119990
    },
    {
      name: 'Смартфон Apple IPhone 14 Pro Max 512Gb, фиолетовый',
      imgName: 'iphone14promaxviolet',
      price: 119990
    },
    {
      name: 'Смартфон Apple IPhone 14 Pro Max 512Gb, фиолетовый',
      imgName: 'iphone14promaxviolet',
      price: 119990
    },
    {
      name: 'Смартфон Apple IPhone 14 Pro Max 512Gb, фиолетовый',
      imgName: 'iphone14promaxviolet',
      price: 119990
    }
  ];

  return (
    <div className='home'>
      <PromoCarousel/>
      <main className='main-main'>
        <Categories/>
        <PcBuild/>
        <ProductCarousel header={'Самые продаваемые'} productCards={productCards}/>
        <ProductCarousel header={'Лучшие новинки'} productCards={productCards}/>
      </main>
    </div>
  );
};

export default Home;