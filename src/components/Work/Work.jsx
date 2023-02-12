import React from 'react'
import ImageSlider from '../Caro/ImageSlider'
import { SliderData } from '../Caro/SliderData'
import './Work.css'

const Work = () => {
    return (
        <div className='work' id='work'>
            <h1 className='test'>My Work</h1>
            <ImageSlider slides={SliderData} />
        </div>
    )
}

export default Work