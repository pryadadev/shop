import React from 'react';
import './Categories.css';
import CatalogItem from "components/CatalogItem/CatalogItem";


const Categories = () => {

    const catalog = [
        {catalogNameEn: 'laptop', catalogNameRu: 'Ноутбуки'},
        {catalogNameEn: 'desktop', catalogNameRu: 'Компьютеры'},
        {catalogNameEn: 'monitor', catalogNameRu: 'Мониторы'},
        {catalogNameEn: 'cpu', catalogNameRu: 'Процессоры'},
        {catalogNameEn: 'motherboard', catalogNameRu: 'Материнские платы'},
        {catalogNameEn: 'videocard', catalogNameRu: 'Видеокарты'},
        {catalogNameEn: 'ssd', catalogNameRu: 'Твердотельные накопители'},
        {catalogNameEn: 'ram', catalogNameRu: 'Оперативная память'},
        {catalogNameEn: 'cpu-cooling', catalogNameRu: 'Кулеры для процессора'},
        {catalogNameEn: 'psu', catalogNameRu: 'Блоки питания'},
        {catalogNameEn: 'case', catalogNameRu: 'Корпуса'},
        {catalogNameEn: 'fans', catalogNameRu: 'Кулеры для корпуса'}
    ];


    return (
        <section className={'Categories'}>
            <h2 className='categories-header montserrat'>Популярные категории</h2>
            {catalog.map((item) => {
                return (<CatalogItem catalogNameEn={item.catalogNameEn} catalogNameRu={item.catalogNameRu}/>);
            })}
        </section>
    );
};

export default Categories;