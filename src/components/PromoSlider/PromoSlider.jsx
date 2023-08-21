    import React from 'react';
    import "./PromoSlider.css";

    const PromoSlider = () => {
        return (
            <section className={"promo-slider"}>
                <div className={"container"}>
                    <div id={"slide-1"} className={"slide"}>1</div>
                    <div id={"slide-2"} className={"slide"}>2</div>
                    <div id={"slide-3"} className={"slide"}>3</div>
                    <div id={"slide-4"} className={"slide"}>4</div>
                    <div id={"slide-5"} className={"slide"}>5</div>
                    <div id={"slide-6"} className={"slide"}>6</div>
                    <div id={"slide-7"} className={"slide"}>7</div>
                    <div id={"slide-8"} className={"slide"}>8</div>
                </div>
                <nav className={"nav"}>
                    <a href="#slide-1">1</a>
                    <a href="#slide-2">2</a>
                    <a href="#slide-3">3</a>
                    <a href="#slide-4">4</a>
                    <a href="#slide-5">5</a>
                    <a href="#slide-6">6</a>
                    <a href="#slide-7">7</a>
                    <a href="#slide-8">8</a>
                </nav>
            </section>
        );
    };

    export default PromoSlider;
