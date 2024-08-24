import React from 'react';
import Title from '../Title/Title';
import './video.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import VideoBox from './VideoBox';


const Video = () => {
    const data = [
        {
            number:34,
            text: "Buildings Finished Now",
        },
        {
            number:12,
            text: "Years Experience",
        },
        {
            number:24,
            text: "Awwards Won 2023",
        },
    ];
  return (
    <>
    <div className='video'> 
        <img src="/public/images/video-bg.jpg" alt="" className='video-img'/>
        <div className="text">
            <Title title={"Video View"} h2={"Get Closer View & Different Feeling"} />
        </div>
    </div>
        <div className='video-content'>
            <div className="image">
                <img src='/public/images/video-frame.jpg' alt=''/>
                <div className="play">
                    <FontAwesomeIcon icon={faPlay}/>
                </div>
            </div>     
            <div className='data container flex main-padding'>
                <VideoBox data={data}/>
            </div> 
    </div>
    </>
  )
}

export default Video;
