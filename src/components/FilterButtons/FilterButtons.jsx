import React from 'react'
import './FilterButtons.css'
import { CardData } from '../../data/CardData'

export default function FilterButtons({items, func,setItems, current}) {

  return (
    <div className='filter-buttons'>
        <button className='filter-button'
                onClick={() => setItems(CardData)}>
                Show All
        </button>
      {items.map((val,index) => 
          ( 
          <button key={index} 
                  className={current === index ? 'filter-button active' : 'filter-button'}
                  onClick={() => func(val,index)}>
              {val}
          </button>)) 
      }
    </div>
  )
}
