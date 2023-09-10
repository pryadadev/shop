import React from 'react';
import './Categories.css';
import CatalogItem from "components/CatalogItem/CatalogItem";


const Categories = () => {

  const catalog = [
    {catalogCodeName: "laptop", catalogPublicName: "Ноутбуки"},
    {catalogCodeName: "desktop", catalogPublicName: "Компьютеры"},
    {catalogCodeName: "monitor", catalogPublicName: "Мониторы"},
    {catalogCodeName: "cpu", catalogPublicName: "Процессоры"},
    {catalogCodeName: "motherboard", catalogPublicName: "Материнские платы"},
    {catalogCodeName: "videocard", catalogPublicName: "Видеокарты"},
    {catalogCodeName: "ssd", catalogPublicName: "Твердотельные накопители"},
    {catalogCodeName: "ram", catalogPublicName: "Оперативная память"},
    {catalogCodeName: "cpu-cooling", catalogPublicName: "Кулеры для процессора"},
    {catalogCodeName: "psu", catalogPublicName: "Блоки питания"},
    {catalogCodeName: "case", catalogPublicName: "Корпуса"},
    {catalogCodeName: "fans", catalogPublicName: "Кулеры для корпуса"}
  ];


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