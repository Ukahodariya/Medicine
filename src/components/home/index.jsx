import React from 'react'
import Herobanner from './herobanner'
import Serviceslider from './serviceslider'
import Slider from './slider/indeex'

export default function Home() {
  return (
    <div>
      <Herobanner/>
      <Slider/>
      <Serviceslider/>
    </div>
  )
}
