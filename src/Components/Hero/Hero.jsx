import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Learn to code by watching others</h1>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
