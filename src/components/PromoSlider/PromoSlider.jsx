import React, {Fragment, useEffect, useState} from 'react';
import "./PromoSlider.css";

const PromoSlider = () => {

    const isTouchDevice = ('ontouchstart' in window);

    let currentSlide = 0;
    const countSlides = 8;
    const arr = Array.from({length: countSlides}, (_, index) => index);
    // window.innerWidth - переменная для определения ширины экрана


    useEffect(() => {
        console.log(`currentSlideEl (hardcode): ${document.querySelector(`#slide-1`)}`);
        console.log(`currentSlideEl (hardcode with using var currentSlide): ${document.querySelector(`#slide-${currentSlide + 1}`)}`);
        document.querySelector('.container').addEventListener('scroll', () => {
            document.getElementById('showScroll').innerHTML = `${document.querySelector(`#slide-${currentSlide + 1}`).getBoundingClientRect().x}`;
        });
        document.querySelector('.container').scrollLeft = window.innerWidth;
    }, []);

    const slideRender = () => {
        // prev + current + next
        const indexPrev = (currentSlide - 1 + countSlides) % countSlides;
        const indexNext = (currentSlide + 1) % countSlides;

        return (
            <>
                <div key={indexPrev} id={`slide-${indexPrev + 1}`} className='slide'>{indexPrev + 1}</div>
                <div key={currentSlide} id={`slide-${currentSlide + 1}`} className='slide'>{currentSlide + 1}</div>
                <div key={indexNext} id={`slide-${indexNext + 1}`} className='slide'>{indexNext + 1}</div>
            </>
        );
    }

    return (
        <>
            <section className={"promo-slider"}>
                <div className={"container"}>
                    {slideRender()}
                </div>
            </section>
            <div id={"showScroll"} style={{width: '200px', height: '200px', backgroundColor: 'blue', color: 'white'}}></div>
        </>
    );
};

export default PromoSlider;
