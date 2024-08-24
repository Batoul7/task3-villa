import React, { useState } from 'react'
import Title from '../Title/Title'
import './properties.css'
import Card from './../Card/Card'
import { CardData } from '../../data/CardData'
import FilterButtons from '../FilterButtons/FilterButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Properties = () => {
  const [current, setCurrent] = useState(0);
  const [card,setCard] = useState(CardData);
  const menuItems = [...new Set(CardData.map((val)=> (val.desc)))];

  function activeLink(index) {
    if(current === index) {
        setCurrent(0)
    }else {
        setCurrent(index);
    }
  }
  const filterItems = (desc,index) => {
    const newItems = CardData.filter((newval) => (newval.desc === desc));
    setCard(newItems);
    activeLink(index)
  }

  return (
    <div id='properties' className='properties container main-padding'>
        <div className="text" style={{color:"black"}}> 
            <Title title={"Properties"} h2={"We Provide The Beast Property You Like"}/>
        </div>
        <FilterButtons 
              items={menuItems} 
              func={filterItems}
              setItems={setCard}
              current={current}/>
        <div className="property-content"> 
            <Card data={card} />
        </div>
        <div className="properties-bullets">
              <span className='active'>1</span>
              <span>2</span>
              <span>3</span>
              <span>
                <FontAwesomeIcon icon={faChevronRight}/>
                <FontAwesomeIcon icon={faChevronRight}/>
              </span>
            </div>
        </div>
  )
}

export default Properties
