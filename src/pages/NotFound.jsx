import React from 'react';
import './NotFound.css';

const NotFound = () => {
  const imageWebp = require('img/broken-robot.webp');
  // const imageJpg = require(`img/broken-robot.jpg`);

  return (
    <div className="not-found montserrat">
      <div className="not-found-text">
        Ошибка 404
      </div>
      <picture className="not-found-icon">
        <source srcSet={imageWebp} type='image/webp'/>
        <img
          src={imageWebp}
          alt="icon 404"
          loading='lazy'
          className="not-found-icon"
        />
      </picture>
      <div className="not-found-text">
        Страница не найдена
      </div>
    </div>
  );
};

export default NotFound;