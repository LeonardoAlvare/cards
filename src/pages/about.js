import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <div className='about-section'>
            <h1 className='about-title'>About Us</h1>
            <div className='about-card'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVc4pijwSwXgnuSzrJTXz4A23KR328UwA8DPG23-fizB30IHUnS-DsptZASTUAMdUHaFg&usqp=CAU'
                    alt='About Us'
                    className='about-image'
                />
                <div className='about-content'>
                    <h2 className='about-content-title'>Who We Are</h2>
                    <p className='about-description'>
                    MarketPlace Freelance is a web application in which users can register and publish their projects, therefore other Users (Freelancers) can also register and apply for the respective projects in order to find employment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
