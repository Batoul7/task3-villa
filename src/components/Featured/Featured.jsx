import React from 'react';
import Feature from './../../assets/images/featured.jpg';
import FeatureIcon from './../../assets/images/featured-icon.png';
import './Featured.css'
import Box from '../Box/Box';
import Title from '../Title/Title';
import Accordion from '../Accordion/Accordion';
import { BoxData } from '../../data/BoxData';


const Featured = () => {
   
  return (
    <div className='container main-padding'>
        <Title title={"Featured"} h2={"Best Appartment & Sea View"}/>
        <div className="featured-content">
            <div className="one">
                <div className="featured-img">
                    <img src={Feature} alt=''/>
                </div>
                <div className="featured-icon">
                    <img src={FeatureIcon} alt='' />
                </div>
            </div>
            <Accordion/>
            <div style={{boxShadow:"0px 0px 10px 5px #ccc",padding:"10px", height:"450px", overflow:"hidden"}}>
                <Box info={BoxData}/>
            </div>
        </div>
    </div>
  )
}

export default Featured;
