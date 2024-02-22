'use client'
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ReactPlayer from 'react-player';
import CarouselPage1 from '../carouselHome/CarouselPage1';
import CarouselPage2 from '../carouselHome/CarouselPage2';
import '@splidejs/react-splide/css';

const CarouselSplideJs = () => {
    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <CarouselPage1/>
            </SplideSlide>
            <SplideSlide>
                <CarouselPage2/>
            </SplideSlide>
        </Splide>
    
    )
}

export default CarouselSplideJs