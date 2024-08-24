import React from 'react'
import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import { ContactData } from '../data/ContactData'
import Form from './../components/Form/Form'

function ContactPage() {
  return (
    <div>
      <Hero page={false} h={"Contact Us"}/>
      <div className='content container main-padding' 
         >
          <div className="desc" 
                style={{display:"flex",
                        gap:"50px", 
                        flexDirection:"column",
                        }}>
            <Title title={"Contact Us"} h2={"Get In Touch With Our Agents"}  />
            <p style={{lineHeight:"1.7"}}>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc</p>
            <ContactInfo data={ContactData}/>
          </div>
          <Form/>
          <div className="iframe" 
              style={{
                gridColumn:"span 2",
                height:"400px",}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.044484467344!2d-80.10441745413671!3d25.93914628600728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1723839562469!5m2!1sar!2s"
                style={{ borderRadius:"6px",width:"100%",height:"100%",flexBasis:"100%",allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}} >
            </iframe>
          </div>
      </div>
    
    </div>
  )
}

export default ContactPage
