import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './PromoCarousel.css';

const PromoCarousel = () => {

    const options = {
        autoPlay: true,
        dynamicHeight: false,
        emulateTouch: true,
        infiniteLoop: true,
        interval: 6000,
        showArrows: false,
        showStatus: false,
        showIndicators: false,
        showThumbs: false
    }

    return (
        <Carousel className='PromoCarousel' {...options}>
            <div id='slide-1' className='slide'>
                1
            </div>
            <div id='slide-2' className='slide'>
                2
            </div>
            <div id='slide-3' className='slide'>
                3
            </div>
            <div id='slide-4' className='slide'>
                4
            </div>
            <div id='slide-5' className='slide'>
                5
            </div>
            <div id='slide-6' className='slide'>
                6
            </div>
            <div id='slide-7' className='slide'>
                7
            </div>
            <div id='slide-8' className='slide'>
                8
            </div>
        </Carousel>
    );
};

export default PromoCarousel;