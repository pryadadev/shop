import React, {useEffect} from "react";
import {ReactComponent as Bars3Icon} from "svg/bars-3.svg";
import {ReactComponent as XMarkIcon} from "svg/x-mark.svg";
import {ReactComponent as MagnifyingGlassIcon} from "svg/magnify-glass.svg";
import {ReactComponent as LogoIcon} from "svg/logo.svg";
import "./Header.css";
import SideMenu from "components/SideMenu/SideMenu";
import BottomMenu from "components/BottomMenu/BottomMenu";
import {Link, useLocation} from "react-router-dom";
import data from "data/pages.json";


const Header = () => {

  const location = useLocation();

  const pageElementClassName = data.pages.filter((item) => item.path === location.pathname)[0]?.pageClassName ||
    data.pages.filter((item) => item.path === "*")[0]?.pageClassName;
  // В строке выше неожиданно не работало пока не поставил после filter()[0], потому что единственный
  // найденный элемент обернут в массив (length === 1)

  const menuClickHandler = () => {
    let isScrollLock = false;
    let timerId = null;

    if (!document.querySelector("#menu-open").classList.contains("hidden")) {
      document.documentElement.style.overflow = "hidden";
      isScrollLock = true;
      timerId = setTimeout(() => {
        document.querySelector("." + pageElementClassName)?.classList.add("hidden");
        document.querySelector(".footer")?.classList.add("hidden");
        document.documentElement.style.overflow = "visible";
        isScrollLock = false;
      }, 300);
    } else {
      document.querySelector("." + pageElementClassName)?.classList.remove("hidden");
      document.querySelector(".footer")?.classList.remove("hidden");
      document.documentElement.style.overflow = "visible";
    }
    document.querySelector("#menu-open")?.classList.toggle("hidden");
    document.querySelector("#menu-close")?.classList.toggle("hidden");
    document.querySelector("#side-menu")?.classList.toggle("side-menu-open");
  }

  useEffect(() => {
    if (document.querySelector("#menu-open").classList.contains("hidden")) {
      document.querySelector("." + pageElementClassName)?.classList.remove("hidden");
      document.querySelector(".footer")?.classList.remove("hidden");
      document.documentElement.style.overflow = "visible";
    }
  }, [location, pageElementClassName]);

  const searchClickHandler = () => {
    console.log("Search click");
    const searchInputBox = document.querySelector("#adf12");
    searchInputBox.classList.toggle("search-input-box-closed");
    searchInputBox.classList.toggle("search-input-box-open");
    const searchInput = document.querySelector("#hd74");
    if (searchInput.classList.contains("search-input-open")) {
      searchInput.blur();
      searchInput.value = "";
    } else if (searchInput.classList.contains("search-input-closed")) {
      searchInput.focus();
    }
    searchInput.classList.toggle("search-input-closed");
    searchInput.classList.toggle("search-input-open");

    const btnSearchMag = document.querySelector("#kd34");
    const btnSearchX = document.querySelector("#jd46");
    btnSearchMag.classList.toggle("hidden");
    btnSearchX.classList.toggle("hidden");
  }


  return (
    <header className={"Header"}>

      <div className={"menu-button"} onClick={menuClickHandler}>
        <Bars3Icon id={"menu-open"} className={"menu-button-icon icon"}/>
        <XMarkIcon id={"menu-close"} className={"menu-button-icon icon hidden"}/>
      </div>

      <Link to="/" className="logo-name-container">
        <LogoIcon className={"logo"} fill={"var(--main-color)"}/>
        <div className={"site-name"}>
          Byte<span className={"wave-word"}>Wave</span>
        </div>
      </Link>

      <div className="search-section">
        <MagnifyingGlassIcon
          id="kd34"
          className="search-button-icon icon"
          onClick={searchClickHandler}
        />
        <XMarkIcon
          id="jd46"
          className="search-button-icon icon hidden"
          onClick={searchClickHandler}
        />

        <div
          id="adf12"
          className="search-input-box search-input-box-closed"
        >
          <input
            id="hd74"
            className="search-input search-input-closed"
            spellCheck={false}
            placeholder={"Поиск по сайту"}
          />
        </div>
      </div>

      <SideMenu/>
      <BottomMenu/>
    </header>
  );
};

export default Header;
