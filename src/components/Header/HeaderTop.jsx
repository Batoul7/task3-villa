import React from 'react'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope, faMap,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css'

const HeaderTop = () => {
  return (
    <div className='header-top '>
        <div className='container flex'>
            <div className='info flex'>
                    <div className='one flex'>
                        <FontAwesomeIcon icon={faEnvelope} color='#f35525'/>
                        <p>info@company.com</p>
                    </div>
                    <div className='two flex'>
                        <FontAwesomeIcon icon={faMap}  color='#f35525'/>
                        <p>info@company.com</p>
                    </div>
                </div>
                <div className="social flex">
                    <div className="icon">
                        <a href='https://facebook.com'><FontAwesomeIcon icon={faFacebook}/></a>
                    </div>
                    <div className="icon">
                        <a href='https://x.com'><FontAwesomeIcon icon={faTwitter}/></a>
                    </div>
                    <div className="icon">
                        <a href='https://linkedin.com'><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="icon">
                        <a href='https://instagram.com'><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HeaderTop
