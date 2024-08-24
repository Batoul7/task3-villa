import React from 'react'
import Properties from '../components/Properties/Properties'
import Hero from '../components/Hero/Hero'

export default function PropertiesPage() {
  return (
    <div>
      <Hero page={false} h={"properties"}/>
      <Properties/>
    </div>
  )
}
