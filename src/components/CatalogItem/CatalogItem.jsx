import React from 'react';
import './CatalogItem.css';
import {ReactComponent as ArrowRight} from 'svg/arrow-right.svg';

const CatalogItem = ({catalogNameEn, catalogNameRu}) => {
    const imageWebp = require(`img/${catalogNameEn}.webp`);
    const imageJpg = require(`img/${catalogNameEn}.jpg`);

    return (
        <div className='CatalogItem'>
            <picture className='catalog-img'>
                <source srcSet={imageWebp} type='image/webp'/>
                <source srcSet={imageJpg}/>
                <img
                    src={imageJpg}
                    alt={catalogNameRu}
                    loading='lazy'
                    className='catalog-img'
                />
            </picture>
            <div className='catalog-label'>
                <span className='label-text'>{catalogNameRu}</span>
                <span className='arrow-right-container'>
                    <ArrowRight className='arrow-right'/>
                </span>
            </div>
        </div>
    );
};

export default CatalogItem;