import React from 'react';
import './ProductCardItem.css';
import {ReactComponent as LikeIcon} from "svg/like.svg";
import {ReactComponent as ChartIcon} from "svg/chart.svg";
import {ReactComponent as CartIcon} from "svg/cart.svg";

const ProductCardItem = ({name, imgName, price}) => {
  const imageWebp = require(`img/${imgName}.webp`);
  const imageJpg = require(`img/${imgName}.jpg`);

  return (
    <div className='product-card'>
      <div className='product-card-block'>
        <div className="product-card-promotion">
          Рассрочка 0-0-6
        </div>

        <div className='product-card-img'>
          <picture>
            <source srcSet={imageWebp} type='image/webp'/>
            <source srcSet={imageJpg}/>
            <img
              src={imageJpg}
              alt={name}
              loading='lazy'
              className='product-card-img-img'
            />
          </picture>
        </div>
      </div>

      <div className='product-card-name'>
        {name}
      </div>

      <div className='product-card-block'>
        <div className="product-card-price-without-sale">
          {(150000).toLocaleString()}
        </div>
        <div className='product-card-price'>
          {price.toLocaleString()}
          <span className='product-card-price-currency'>
            ₽
          </span>
        </div>
      </div>

      <div className='product-card-action-button'>
        <div className='product-card-action-button-wrapper'>
          {/*  Нужно подумать насчёт кнопки "избранное" и кнопки "лайк"  */}
          <div className='product-card-action-button-favorite'>
            <LikeIcon className='product-card-action-button-favorite-icon'/>
          </div>
          {/*  Сравнение можно тоже подумать над иконкой  */}
          <div className='product-card-action-button-compare'>
            <ChartIcon className='product-card-action-button-compare-icon'/>
          </div>
        </div>
        <div className='product-card-action-button-cart'>
          <CartIcon className='product-card-action-button-cart-icon'/>
        </div>
      </div>
    </div>
  );
};

export default ProductCardItem;