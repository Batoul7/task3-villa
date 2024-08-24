import React from 'react'
import Hero from '../components/Hero/Hero'
import Featured from '../components/Featured/Featured'
import Video from '../components/VideoView/Video'
import Deal from '../components/Deal/Deal'
import Properties from '../components/Properties/Properties'
import Contact from '../components/Contact/Contact'


const HomePage = () => {
  return (
    <>
    <Hero page={true}/>
    <Featured/>
    <Video/>
    <Deal/>
    <Properties/>
    <Contact/>
    </>
  )
}

export default HomePage
