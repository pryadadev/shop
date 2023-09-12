import React from "react";
import "./CategoryProducts.css";
import notebook from "data/notebook.json";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import {catalog} from "data/catalog";
import Select from "react-select";
import {ReactComponent as IconOptions} from "svg/options.svg";

const CategoryProducts = ({productType}) => {
  const options = [
    {value: "popular", label: "Сначала популярные"},
    {value: "lowPrice", label: "Сначала недорогие"},
    {value: "highPrice", label: "Сначала дорогие"}
  ]; // Опции для выпадающего списка с фильтром категорий

  const productCountForExample = 121;

  return (
    <div className="category-products">
      <Breadcrumbs/>
      <h1 className="page-header-container montserrat">
        <span className="page-header">
          {catalog.find(() => productType).catalogPublicName}
        </span>
        <span className="product-count">
          {productCountForExample + " товар"}
        </span>
      </h1>
      <div className="control-container">
        <Select
          id="select-filter"
          options={options}
          isSearchable={false}
          className="catalog-select"
          defaultValue={options.find((item) => item.value === "popular")}
        />
        <div className="filter-container">
          <IconOptions className="filter-icon"/>
          <span className="filter-label">Фильтры</span>
        </div>
      </div>
      <div className="product-list">
        {notebook.notebook.map((item, index) => {

          return (
            <div className="product-item" key={index}>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;