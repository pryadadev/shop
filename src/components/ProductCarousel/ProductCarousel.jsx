import React from 'react';
import ProductCardItem from 'components/ProductCardItem/ProductCardItem';
import './ProductCarousel.css';

const ProductCarousel = ({header, productCards}) => {
  return (
    <section className='sales-leaders'>
      <h1 className='section-header montserrat'>
        {header}
      </h1>
      <div className='products-carousel'>
        <div className='carousel-wrapper'>
          {productCards.map((item, index) => {
            return <ProductCardItem
              key={index}
              name={item.name}
              imgName={item.imgName}
              price={item.price}
            />
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;