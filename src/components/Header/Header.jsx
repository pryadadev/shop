import React from 'react';
import {ReactComponent as Bars3Icon} from "svg/bars-3.svg";
import {ReactComponent as XMarkIcon} from "svg/x-mark.svg";
import {ReactComponent as MagnifyingGlassIcon} from "svg/magnify-glass.svg";
import {ReactComponent as LogoIcon} from "svg/logo.svg";
import "./Header.css";
import SideMenu from "components/SideMenu/SideMenu";


const Header = () => {

    const menuClickHandler = () => {
        let isScrollLock = false;
        let timerId = null;
        if (!document.querySelector("#menu-open").classList.contains('hidden')) {
            // Куда-то накинуть какой-то стиль чтобы страница не прокручивалась
            // 1. Отключить прокрутку (вероятно у main-main) в момент анимации появления меню: 300ms (вроде бы)
            // 2. Как только анимация закончилась, вделать всем элементам кроме Header и SideMenu - hidden
            // 3. Тут же без задержки вернуть возможность прокрутки

            document.documentElement.style.overflow = 'hidden';
            isScrollLock = true;
            timerId = setTimeout(() => {
                document.querySelector('.PromoCarousel').classList.add('hidden');
                document.querySelector('.main-main').classList.add('hidden');
                document.documentElement.style.overflow = 'visible';
                isScrollLock = false;
            }, 300);
        } else {
            document.querySelector('.PromoCarousel').classList.remove('hidden');
            document.querySelector('.main-main').classList.remove('hidden');
            document.documentElement.style.overflow = 'visible';
        }
        document.querySelector("#menu-open")?.classList.toggle("hidden");
        document.querySelector("#menu-close")?.classList.toggle("hidden");
        document.querySelector("#side-menu")?.classList.toggle("side-menu-open");
    }

    const logoClickHandler = () => {
        console.log("Logo click");
    }

    const searchClickHandler = () => {
        console.log("Search click");
        const searchInputBox = document.querySelector('#adf12');
        searchInputBox.classList.toggle("search-input-box-closed");
        searchInputBox.classList.toggle("search-input-box-open");
        const searchInput = document.querySelector('#hd74');
        if (searchInput.classList.contains('search-input-open')) {
            searchInput.blur();
            searchInput.value = '';
        } else if (searchInput.classList.contains('search-input-closed')) {
            searchInput.focus();
        }
        searchInput.classList.toggle("search-input-closed");
        searchInput.classList.toggle("search-input-open");

        const btnSearchMag = document.querySelector('#kd34');
        const btnSearchX = document.querySelector('#jd46');
        btnSearchMag.classList.toggle('hidden');
        btnSearchX.classList.toggle('hidden');
    }








    return (
        <header className={"Header"}>

            {/* Menu "hamburger" button */}
            <div className={"menu-button"} onClick={menuClickHandler}>
                <Bars3Icon id={"menu-open"} className={"menu-button-icon icon"}/>
                <XMarkIcon id={"menu-close"} className={"menu-button-icon icon hidden"}/>
            </div>

            {/* Site logo + name TODO: предполагается в итоге сделать <a> ссылающимся на главную страницу сайта
                TODO: НО! Это нужно делать когда будет готова система переходов между страницами */}
            <div className={"logo-name-container"} onClick={logoClickHandler}>
                <LogoIcon className={"logo"} fill={"var(--main-color)"}/>
                <div className={"site-name"}>
                    Byte<span className={"wave-word"}>Wave</span>
                </div>
            </div>

            <div className={"search-section"}>
                <MagnifyingGlassIcon id='kd34' className={"search-button-icon icon"} onClick={searchClickHandler}/>
                <XMarkIcon id='jd46' className={"search-button-icon icon hidden"} onClick={searchClickHandler}/>

                <div id='adf12' className='search-input-box search-input-box-closed'>
                    <input id='hd74' className={"search-input search-input-closed"} spellCheck={false}
                           placeholder={'Поиск по сайту'}/>

                </div>
            </div>

            {/* Side menu */}
            <SideMenu/>
        </header>
    );
};

export default Header;
