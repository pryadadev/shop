import React from 'react';
import './Categories.css';
import CatalogItem from "components/CatalogItem/CatalogItem";
import {catalog} from "data/catalog";


const Categories = () => {



  return (
    <section className={'Categories'}>
      <h2 className='categories-header montserrat'>Популярные категории</h2>
      {catalog.map((item, index) =>
        <CatalogItem
          key={index}
          catalogCodeName={item.catalogCodeName}
          catalogPublicName={item.catalogPublicName}
        />
      )}
    </section>
  );
};

export default Categories;