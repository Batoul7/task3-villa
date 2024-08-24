import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Carousel.css';
import { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Carousel({ data }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToSlide = (index) => {
      setCurrentImageIndex(index);
    };
  
    const goToNextSlide = () => {
      setCurrentImageIndex((currentImageIndex + 1) % data.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentImageIndex((currentImageIndex - 1 + data.length) % data.length);
    };
  
    return (
      <>
        <div className="carousel">
        <FontAwesomeIcon icon={faChevronLeft} className='arrow left' onClick={goToPrevSlide} />
          {data.map((item, index) => (
            <img
              key={index}
              src={item.img}
              style={{ display: index === currentImageIndex ? 'block' : 'none' }}
            />
          ))} 
        <FontAwesomeIcon icon={faChevronRight} className='arrow right' onClick={goToNextSlide} />
        <div className="bullets">
          {data.map((_, index) => (
            <span key={index} className={index === currentImageIndex ? 'active' : ''} onClick={() => goToSlide(index)}></span>
          ))}
        </div>
      </div>
      </>
    );
}
