import React from 'react'
import './PropertyDetails.css'
import Box from '../Box/Box'
import { BoxData } from '../../data/BoxData'
import Accordion from '../Accordion/Accordion'
import Property from './../../assets/images/property-01.jpg'

export default function PropertyDetails() {
 const data = [
    {
        image: Property,
        desc:"Appartment",
        title:"24 New Street Miami, OR 24560",
    }
 ]
  return (
    <>
    <div className='property-details container main-padding'>
     {data.map((item,index)=>(
        <div key={index} className='mini-card'>
            <div className="info-card">
                <div className="image">
                <img src={item.image} alt="" />
                </div>
                <div className='desc'>{item.desc}</div>
                <h3>{item.title}</h3>
            </div>
            <div className="details">
                <p> 
                    Get <b>the best villa</b> website template in HTML
                    CSS and Bootstrap for your business. TempleteMo provides you the 
                    <span className="c-blue"> best free CSS template</span> in the world. Please
                    tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoredich tumbir yr 
                    succulents single-origin coffee schitz enamel pin you propably haven’t heard of them ugh hella.
                </p>
                <p>
                    When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc. Master cardigan hoodie pop-up.
                </p>
            </div>
            <Accordion/>
        </div>))}
        <div style={{boxShadow:"0px 0px 10px 5px #ccc",padding:"10px", height:"450px", overflow:"hidden"}}>
            <Box info={BoxData}/>
        </div>
    </div>
    </>
  )
}
