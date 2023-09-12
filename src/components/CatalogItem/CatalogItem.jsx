import React from "react";
import "./CatalogItem.css";
import {ReactComponent as ArrowRight} from "svg/arrow-right.svg";
import {Link} from "react-router-dom";

const CatalogItem = ({catalogCodeName, catalogPublicName, size}) => {
    const imageWebp = require(`img/${catalogCodeName}.webp`);
    const imageJpg = require(`img/${catalogCodeName}.jpg`);

    return (
        <Link
          to={`/catalog/${catalogCodeName}`}
          className={"catalog-item" + (size === "big" ? " catalog-item-big" : "")}
        >
            <picture className="catalog-img">
                <source srcSet={imageWebp} type="image/webp"/>
                <source srcSet={imageJpg}/>
                <img
                    src={imageJpg}
                    alt={catalogPublicName}
                    loading="lazy"
                    className="catalog-img"
                />
            </picture>
            <div className="catalog-label">
                <span className="label-text">{catalogPublicName}</span>
                <span className="arrow-right-container">
                    <ArrowRight className="arrow-right"/>
                </span>
            </div>
        </Link>
    );
};

export default CatalogItem;