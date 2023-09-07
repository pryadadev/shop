import React from 'react';
import './PcBuild.css';
import {ReactComponent as GamepadIcon} from "svg/gamepad.svg";
import {ReactComponent as HomeIcon} from "svg/home.svg";
import {ReactComponent as OfficeIcon} from "svg/office.svg";
import {ReactComponent as CubeIcon} from "svg/cube.svg";

const PcBuild = () => {
  return (
    <section className='pc-build'>
      <div className='pc-build-own'>
        <h2 className='pc-build-own-header montserrat'>Собрать компьютер</h2>
        <div className="pc-build-own-button montserrat">
          Создать свою сборку
        </div>
      </div>
      <div className='pc-build-by-users'>
        <h3 className='pc-build-by-users-header montserrat'>Пользовательские сборки</h3>
        <ul className='pc-build-by-users-category'>
          <li className='pc-build-by-users-category-item'>
            <GamepadIcon className='pc-build-by-users-category-item-icon'/>
            Игровые
          </li>
          <li className='pc-build-by-users-category-item'>
            <HomeIcon className='pc-build-by-users-category-item-icon'/>
            Для дома
          </li>
          <li className='pc-build-by-users-category-item'>
            <OfficeIcon className='pc-build-by-users-category-item-icon'/>
            Для офиса
          </li>
          <li className='pc-build-by-users-category-item'>
            <CubeIcon className='pc-build-by-users-category-item-icon'/>
            Для дизайна
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PcBuild;