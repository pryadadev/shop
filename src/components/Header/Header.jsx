import React from 'react';
import {ReactComponent as Bars3Icon} from "svg/bars-3.svg";
import {ReactComponent as XMarkIcon} from "svg/x-mark.svg";
import {ReactComponent as MagnifyingGlassIcon} from "svg/magnify-glass.svg";
import {ReactComponent as LogoIcon} from "svg/logo.svg";
import "./Header.css";

const Header = () => {

    const menuClickHandler = () => {
        document.querySelector("#menu-open")?.classList.toggle("hidden");
        document.querySelector("#menu-close")?.classList.toggle("hidden");
        document.querySelector("#left-menu")?.classList.toggle("left-menu-open");
    }

    const logoClickHandler = () => {
        console.log("Logo click");
    }

    const searchClickHandler = () => {
        console.log("Search click");
    }

    return (
        <header className={"Header"}>

            {/* Menu "hamburger" button */}
            <div className={"menu-button"} onClick={menuClickHandler}>
                <Bars3Icon id={"menu-open"} className={"menu-button-icon icon"}/>
                <XMarkIcon id={"menu-close"} className={"menu-button-icon icon hidden"}/>
            </div>

            {/* Site logo + name TODO: предполагается в итоге сделать <a> ссылающимся на главную страницу сайта */}
            <div className={"logo-name-container"} onClick={logoClickHandler}>
                <LogoIcon className={"logo"} fill={"var(--main-color)"}/>
                <div className={"site-name"}>
                    Byte<span className={"wave-word"}>Wave</span>
                </div>
            </div>

            {/* Search button TODO: надо сделать потом search input снаружи и прикрутить туда анимацию */}
            <div className={"search-button"} onClick={searchClickHandler}>
                <MagnifyingGlassIcon className={"search-button-icon icon"}/>
                <input className={"hidden"}/> {/* search input */}
                <div className={"hidden"}></div>
                {/* cross icon to clear input */}
                <div className={"hidden"}></div>
                {/* cancel button to blur focus from input and back to page */}
                {/* but not to clear value of input */}
            </div>

            {/* Left menu */}
            <div id={"left-menu"} className={"left-menu"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, assumenda cumque cupiditate delectus dolor, dolore eligendi eos hic ipsa ipsam libero molestiae nobis, obcaecati quaerat quos unde! Inventore, officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio, maiores. Autem commodi debitis deleniti necessitatibus placeat recusandae reprehenderit! Cumque dolore dolores dolorum minus nostrum perferendis rerum similique vero, voluptatibus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur facilis iste iusto optio quia quo, sit veniam. Aperiam aut autem impedit incidunt nostrum odit officiis quaerat ratione ut voluptate!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus commodi consectetur consequatur eaque expedita fuga impedit ipsam labore magnam nisi odit officia perspiciatis, quidem sed sequi totam ullam voluptas?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores atque culpa dolorum ea laborum maiores nemo, numquam omnis porro quam quibusdam reprehenderit sunt veritatis voluptate? Aliquam culpa quam saepe.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis commodi consequatur deleniti dicta dolorum illo iusto laudantium magnam minima porro, rem, repellendus sequi sint suscipit veritatis, voluptatem! Alias, eum.
            </div>
        </header>
    );
};

export default Header;
