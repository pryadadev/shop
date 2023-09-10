import React from "react";
import "./BottomMenu.css";
import {ReactComponent as IconHomepage} from "svg/homepage.svg";
import {ReactComponent as IconCatalog} from "svg/bars-3.svg";
import {ReactComponent as IconCart} from "svg/cart.svg";
import {ReactComponent as IconLike} from "svg/like.svg";
import {ReactComponent as IconUser} from "svg/user.svg";
import {Link} from "react-router-dom";

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <Link to="/" className="bottom-menu-item-link">
        <IconHomepage className="bottom-menu-item"/>
      </Link>
      <Link to="/catalog" className="bottom-menu-item-link">
        <IconCatalog className="bottom-menu-item"/>
      </Link>
      <IconCart className="bottom-menu-item"/>
      <IconLike className="bottom-menu-item"/>
      <IconUser className="bottom-menu-item"/>
    </div>
  );
};

export default BottomMenu;