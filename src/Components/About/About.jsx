import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about} alt="" className='about-img'/>
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className='about-right'>
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Leading the Future of Education</h2>
                <p>Lureduction is dedicated to pioneering the future of education through innovative teaching methods and cutting-edge research. Our curriculum is designed to not only impart knowledge but also to foster critical thinking, creativity, and problem-solving skills. We continually update our programs to ensure they are aligned with the latest industry trends and technological advancements, preparing our students to meet the challenges of tomorrow.</p>
                <p>We are committed to creating an inclusive and supportive learning environment where students can thrive. Our diverse faculty and student body bring a wealth of perspectives and experiences, enriching the educational experience for everyone. We believe in the power of collaboration and encourage interdisciplinary studies, allowing students to explore new ideas and approaches across different fields of study.</p>
                <p>At Lureduction, we invest heavily in state-of-the-art facilities and resources to support our students' academic and personal growth. From advanced laboratories and research centers to comprehensive libraries and modern classrooms, we provide the tools and opportunities for our students to excel. Our graduates leave us not just with a degree, but with the confidence and skills to lead and innovate in their chosen careers.</p>
            </div>
        </div>
    )
}

export default About
