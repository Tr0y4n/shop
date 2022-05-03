import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import CarouselBox from '../../components/CarouselBox/CarouselBox';

export default function MainPage() {
    const state = useSelector(state => state.authReducer)
    console.log("Финальный State == ", state)
    return(
        <div>
            <CarouselBox />
            <h1>MainPage <BsFillCartFill /> </h1>
            <h1>MainPage</h1>
            <h1>MainPage</h1>
            <h1>MainPage</h1>
            <h1>MainPage</h1>
        </div>
    )
}