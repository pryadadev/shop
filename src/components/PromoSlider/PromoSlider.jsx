import React, {Fragment, useEffect, useState} from 'react';
import "./PromoSlider.css";

const PromoSlider = () => {

    const isTouchDevice = ('ontouchstart' in window);

    const [currentSlide, setCurrentSlide] = useState(0);
    const countSlides = 8;
    const arr = Array.from({length: countSlides}, (_, index) => index);

    useEffect(() => {

    }, []);
    const slideRender = () => {
        // prev + current + next
        const indexPrev = (currentSlide - 1 + countSlides) % countSlides;
        const indexNext = (currentSlide + 1) % countSlides;
        return (
            <>
                <div key={indexPrev} id={'slide-' + (indexPrev + 1)} className='slide'>{indexPrev + 1}</div>
                <div key={currentSlide} id={'slide-' + (currentSlide + 1)} className='slide'>{currentSlide + 1}</div>
                <div key={indexNext} id={'slide-' + (indexNext + 1)} className='slide'>{indexNext + 1}</div>
            </>
        );
    }

    return (
        <section className={"promo-slider"}>
            <div className={"container"}>
                {slideRender()}
            </div>
        </section>
    );
};

export default PromoSlider;
