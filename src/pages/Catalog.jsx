import React, {useEffect, useRef, useState} from "react";
import "./Catalog.css";
import CatalogItem from "components/CatalogItem/CatalogItem";
import {useLocation} from "react-router-dom";
import PcBuild from "components/PcBuild/PcBuild";
import Select from "react-select";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";

const Catalog = () => {
  const catalog = [
    {catalogCodeName: "laptop", catalogPublicName: "Ноутбуки", group: "computer"},
    {catalogCodeName: "desktop", catalogPublicName: "Компьютеры", group: "computer"},
    {catalogCodeName: "monitor", catalogPublicName: "Мониторы", group: "peripheral"},
    {catalogCodeName: "cpu", catalogPublicName: "Процессоры", group: "component"},
    {catalogCodeName: "motherboard", catalogPublicName: "Материнские платы", group: "component"},
    {catalogCodeName: "videocard", catalogPublicName: "Видеокарты", group: "component"},
    {catalogCodeName: "ssd", catalogPublicName: "Твердотельные накопители", group: "component"},
    {catalogCodeName: "ram", catalogPublicName: "Оперативная память", group: "component"},
    {catalogCodeName: "cpu-cooling", catalogPublicName: "Кулеры для процессора", group: "component"},
    {catalogCodeName: "psu", catalogPublicName: "Блоки питания", group: "component"},
    {catalogCodeName: "case", catalogPublicName: "Корпуса", group: "component"},
    {catalogCodeName: "fans", catalogPublicName: "Кулеры для корпуса", group: "component"}
  ]; // Данные для категорий
  const options = [
    {value: "all", label: "Все"},
    {value: "computer", label: "Ноутбуки и компьютеры"},
    {value: "peripheral", label: "Компьютерная периферия"},
    {value: "component", label: "Компьютерные комплектующие"}
  ]; // Опции для выпадающего списка с фильтром категорий

  const location = useLocation();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search));
  const filterRef = useRef(null);
  const selectedOptionRef = useRef(null);
  const [sortedCatalog, setSortedCatalog] = useState(catalog);
  const [selectedOptionState, setSelectedOptionState] = useState(selectedOptionRef.current);

  // Выполняется при первой загрузке + обновлении URL-параметров
  useEffect(() => {
    filterRef.current = searchParams.get("filter");
    selectedOptionRef.current = options.find((option) => option.value === filterRef.current);
    setSelectedOptionState(selectedOptionRef.current);
    if (filterRef.current === null || filterRef.current === "" || filterRef.current === "all") {
      setSortedCatalog(catalog);
    } else {
      setSortedCatalog(catalog.filter((item) => item.group === filterRef.current));
    }
  }, [searchParams]);

  const handleSelectChange = ({value}) => {
    // создаем новый объект URLSearchParams с обновленным параметром filter
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("filter", value);
    // обновляем состояние с новым объектом
    setSearchParams(newSearchParams);
    // создаем новый URL-адрес с обновленными параметрами
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + newSearchParams.toString();
    // заменяем текущий URL-адрес новым без перезагрузки страницы
    // eslint-disable-next-line no-restricted-globals
    history.replaceState({}, "", newUrl);
  };

  return (
    <div className="catalog">
      <Breadcrumbs/>
      <h1 className="page-header montserrat">Каталог товаров</h1>
      <Select
        id="select-filter"
        options={options}
        placeholder="Фильтр категорий"
        isSearchable={false}
        className="catalog-select"
        onChange={handleSelectChange}
        value={selectedOptionState}
      />
      <div className="catalog-grid">
        {sortedCatalog.map((item, index) => (
          <CatalogItem
            key={index}
            catalogCodeName={item.catalogCodeName}
            catalogPublicName={item.catalogPublicName}
            size="big"
          />
        ))}
      </div>
      <PcBuild/>
    </div>
  );
};

export default Catalog;
