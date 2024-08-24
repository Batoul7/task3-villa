import React from 'react'
import './contact.css'
import Title from '../Title/Title'
import ContactInfo from '../ContactInfo/ContactInfo'
import { ContactData } from '../../data/ContactData'
import Form from '../Form/Form'

const Contact = () => {
    
  return (
    <>
    <section id='contact' className='contact'>
        <img src="/public/images/contact-bg.jpg" alt="" className='contact-img'/>
        <div className="text">
            <Title title={"Contact Us"} h2={"Get In Touch With Our Agents"}  />
        </div>
    </section>
        <div className="contact-content container">
            <div className="contact-info">
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.044484467344!2d-80.10441745413671!3d25.93914628600728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1723839562469!5m2!1sar!2s"
                        style={{ allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}} >
                    </iframe>
                </div>
                <ContactInfo data={ContactData}/>
            </div>
            <Form/>
        </div>
    </>
  )
}

export default Contact
