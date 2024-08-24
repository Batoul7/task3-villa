import React from 'react'
import './Form.css'

export default function Form() {
  return (
       <div className="form">
          <form action="">
              <label>Full Name</label>
              <input className="input" type="text" placeholder='Your Name...' />
              <label>Email Adderss</label>
              <input className="input" type="email"  placeholder='Your E-mail...' />
              <label>Subject</label>
              <input className="input" type="text"  placeholder='Subject...' />
              <label>Message</label>
              <textarea className="input" type="text"  placeholder='Your Message'></textarea> 
              <button>Send Message</button> 
          </form>
        </div>
  )
}
