import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery_1.png'
import gallery_2 from '../../assets/gallery_2.png'
import gallery_3 from '../../assets/gallery_3.png'
import gallery_5 from '../../assets/gallery_5.png'
import white_arrow from '../../assets/white_arrow.png'

const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_5} alt="" />
            </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
        </div>
    )
}

export default Campus
