import React from 'react'

const VideoBox = ({data}) => {
  return (
    <> 
    {data.map((item,index) => (
            <div key={index} className='video-box'>
                <span >{item.number}</span>
                <p>{item.text}</p>
            </div>
      
   )) }
  </>
  )
}

export default VideoBox;
