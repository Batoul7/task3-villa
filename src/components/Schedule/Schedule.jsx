import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Schedule.css'

const Schedule = () => {
  
  return (
    <div className='schedule'>
      <div className='icon'>
        <FontAwesomeIcon icon={faCalendar} />
      </div>
      <a>Schedule a visit</a>
    </div>
  )
}

export default Schedule;
