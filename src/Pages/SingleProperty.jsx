import React from 'react'
import Hero from '../components/Hero/Hero'
import PropertyDetails from '../components/PropertyDetails/PropertyDetails'
import Deal from '../components/Deal/Deal'

export default function SingleProperty() {
  return (
    <div>
      <Hero page={false} h={"single property"}/>
      <PropertyDetails/>
      <Deal/>
    </div>
  )
}
