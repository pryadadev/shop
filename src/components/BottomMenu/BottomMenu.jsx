import React from 'react';
import './BottomMenu.css';
import {ReactComponent as IconHomepage} from 'svg/homepage.svg';
import {ReactComponent as IconMenu} from 'svg/bars-3.svg';
import {ReactComponent as IconCart} from 'svg/cart.svg';
import {ReactComponent as IconLike} from 'svg/like.svg';
import {ReactComponent as IconUser} from 'svg/user.svg';

const BottomMenu = () => {
  return (
    <div className='bottom-menu'>
      <IconHomepage className='bottom-menu-item'/>
      <IconMenu className='bottom-menu-item'/>
      <IconCart className='bottom-menu-item'/>
      <IconLike className='bottom-menu-item'/>
      <IconUser className='bottom-menu-item'/>
    </div>
  );
};

export default BottomMenu;