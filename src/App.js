/**
 * Project Name: shop
 * Description: real-like online store of digital products
 *
 * Author: Mikhail Pryada
 * Email: pryadadev@gmail.com
 * Date: 7th September 2023
 */

import React from 'react';
import './App.css';
import Header from "components/Header/Header";
import PromoCarousel from "components/PromoCarousel/PromoCarousel";
import Categories from "components/Categories/Categories";
import PcBuild from "components/PcBuild/PcBuild";
import ProductCarousel from 'components/ProductCarousel/ProductCarousel';
import Footer from 'components/Footer/Footer';

function App() {

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
    <div className="App">
      <Header/>
      <PromoCarousel/>
      <main className='main-main'>
        <Categories/>
        <PcBuild/>
        <ProductCarousel header={'Самые продаваемые'} productCards={productCards}/>
        <ProductCarousel header={'Лучшие новинки'} productCards={productCards}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
