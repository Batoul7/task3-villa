import React from 'react';
import './hero.css';
import { slideData } from '../../data/SlideData';
import Carousel from '../Carousel/Carousel';

const Hero = ({page, h}) => {
 
  return (
    <>
    {page ? (
        <div id='home' className='hero'>
          <Carousel data={slideData} />
          <div className="hero-title">
              <p className="address">Toronto, <span>Canada</span></p>
              <h1>Hurry! Get the best villa for you</h1>
          </div>
        </div>
        ) : ( 
        <div className='hero-page'>
          <img src="/public/images/page-heading-bg.jpg" alt="" />
          <div className="hero-title flex" 
                style={{flexDirection:"column",
                        textTransform:"uppercase",
                        textAlign:"center"}}>
              <p className="address">home / {h}</p>
              <h1>{h}</h1>
          </div>
        </div>
    )}
     </>
  );
}
export default Hero
