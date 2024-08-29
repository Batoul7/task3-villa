import React, { useState } from 'react';
import './navbar.css'
import Schedule from '../Schedule/Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarsStaggered, faCalendar, faClose } from '@fortawesome/free-solid-svg-icons';
import './../Header/Header'
import { links } from '../../data/NavLink';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [active, setActive] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    function activeLink(index) {
        if (active === index) {
            setActive(0);
        } else {
            setActive(index);
        }
    }

  return (
    <>
    <nav >
    <div className="container flex">
        <div className="logo">
            <h1>VILLA</h1>
        </div>
        <ul className="links">
            {links.map((link, index) => (
                <li key={index} >
                    <Link to={link.path} 
                            className={active === index ? 'link active' : 'link'}
                            onClick={() => activeLink(index)}  >
                        {link.text}
                    </Link>
                </li>
            ))}    
        </ul>
        <div className='schedule-btn'>
            <div className='icon'>
                <FontAwesomeIcon icon={faCalendar} />
            </div>
            <a>Schedule a visit</a>
        </div>
        <FontAwesomeIcon icon={faBarsStaggered} className='bars' onClick={() => setIsSidebarOpen(true)}/>
        </div>
        </nav>
            <div className={`sidebar ${isSidebarOpen ? ' open' : ''}`}>
                <ul className='sidebar-links'>
                    <FontAwesomeIcon icon={faClose} className='close' onClick={() => setIsSidebarOpen(false)} />
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path} 
                                    className={active === index ? 'link active' : 'link'}
                                    onClick={() => activeLink(index)} >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="btn" 
                style={{margin:"0 auto",
                    position:"absolute", 
                    left:"50%",
                    transform:"translateX(-50%)"
                    }}>
                    <Schedule/>
                </div>
            </div>
        </>
  )
}

export default NavBar;
