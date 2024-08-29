import { useState } from 'react';
import { accordionData } from '../../data/AccordionData';
import './Accordion.css';

export default function Accordion() {

  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    if (open === index) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className='accordion'>
      {accordionData.map((item, index) => (
        <div key={index} className={`accordion-item ${open === index ? 'open' : ''}`}>
          <div className='accordion-ques' onClick={() => toggle(index)}>
            <h3 style={{ color: open === index ? '#f35525' : 'black' }}>
              {item.question}
            </h3>
          </div>
          {open === index && (
            <div className='accordion-answer'>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
