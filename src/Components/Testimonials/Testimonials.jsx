import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import user_3 from '../../assets/user_3.png'
import user_5 from '../../assets/user_5.png'

const Testimonials = () => {

        const slider = useRef();
        let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -=  25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx +=  25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className='user-info'>
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Axel Alexander 1</h3>
                                <span>Collage, Tangerang</span>
                            </div>
                        </div>
                        <p>Lureduc helped me confidently choose a degree, opening doors to numerous opportunities. Their support equipped me with essential knowledge and skills for a successful career. Thanks to Lureduc, I made an informed decision that aligns with my aspirations and sets me on a fulfilling path</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className='user-info'>
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Maxwell Kriss 2</h3>
                                <span>Collage, SBY</span>
                            </div>
                        </div>
                        <p>Lureduc helped me confidently choose a degree, opening doors to numerous opportunities. Their support equipped me with essential knowledge and skills for a successful career. Thanks to Lureduc, I made an informed decision that aligns with my aspirations and sets me on a fulfilling path.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className='user-info'>
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Xaviera 3</h3>
                                <span>Collage, Korea Selatan</span>
                            </div>
                        </div>
                        <p>Lureduc helped me confidently choose a degree, opening doors to numerous opportunities. Their support equipped me with essential knowledge and skills for a successful career. Thanks to Lureduc, I made an informed decision that aligns with my aspirations and sets me on a fulfilling path</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className='user-info'>
                            <img src={user_5} alt="" />
                            <div>
                                <h3>Shani Indira 4</h3>
                                <span>Celebrity, DIY</span>
                            </div>
                        </div>
                        <p>Lureduc helped me confidently choose a degree, opening doors to numerous opportunities. Their support equipped me with essential knowledge and skills for a successful career. Thanks to Lureduc, I made an informed decision that aligns with my aspirations and sets me on a fulfilling path.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
