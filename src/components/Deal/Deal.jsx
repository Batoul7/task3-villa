import React, { useState } from 'react'
import Title from '../Title/Title'
import './deal.css'
import Schedule from '../Schedule/Schedule'
import { FilterData } from '../../data/FilterData'

const Deal = () => {

    const [current, setCurrent] = useState(0);
    
    const data = [
    {
        name:"Appartment"
    },
    {
        name:"VillaHouse"
    },
    {
        name:"Penthouse"
    },
]
  function activeLink(index) {
    if(current === index) {
        setCurrent(0)
    }else {
        setCurrent(index);
    }
}
  return (
    <div className="best-deal main-padding">
        <div className='container '>
            <Title title={"Best Deal"} h2={"Find Your Best Deal Right Now!"}/>
                <div  className="deal-button">
                    {data.map((item, index) => (
                        <a key={index}
                        className={current === index ? 'active' : ''}
                        onClick={() => activeLink(index)} >{item.name}</a>
                    ))}
                </div>
         
            {FilterData.map((data, index) => {
                if (current === index) {
                    return (
                        <div key={index} className='deal'>
                            <div className='deal-one'>
                            {data.one.map((item, index) => (
                                <div key={index}>
                                    <p>{item.title}</p>
                                    <span>{item.info}</span>
                                </div>
                            ))}
                            </div>
                            <img className='deal-img' src={data.img} alt="img-deal" />
                            {data.two.map((item, index) => (
                                <div key={index} className='deal-two'>
                                    <h4>{item.h4}</h4>
                                    <p>{item.desc1}</p>
                                    <span>{item.desc2}</span>
                                    <Schedule display={"block"}/>
                                </div>   
                            ))}
                        </div>
                        )
                } 
            })}
        </div>
    </div>
  )
}

export default Deal
