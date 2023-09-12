import React from "react";
import "./Breadcrumbs.css";
import {Link, useLocation} from "react-router-dom";
import titleMap from "data/titleMap.json";

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbSeparator = (index) => {
    if (index === 0) {
      return "";
    } else {
      return (
        <span className="breadcrumb-item-separator">
          &gt;
        </span>
      );
    }
  };
  const pathnames = location.pathname.split("/").filter(Boolean); // filter(Boolean) убирает все falsy-значения
  const renderBreadcrumbs = () => {
    return (
      <ul className="breadcrumb">
        {/*  Пустая строка в начале добавляется для отображения домашней страницы  */}
        {["", ...pathnames].map((item, index) => {
          const displayName = titleMap.titleMap["/" + item];
          return (
            <li key={index} className="breadcrumb-item">
              {breadcrumbSeparator(index)}
              {/*  Последний элемент не является ссылкой  */}
              {index === pathnames.length ? (
                <span className="breadcrumb-item-current">
                  {displayName}
                </span>
              ) : (
                <Link to={`/${item}`} className="breadcrumb-item-link">
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {renderBreadcrumbs()}
    </>
  );
};

export default Breadcrumbs;