import React from 'react'
import Header from '../Home/Headers/Header'
import Headers from './Headers'
import header from '../.../../Image & Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'
import FooterOfClasses from './FooterOfClasses'
import Classes from './Classes'
import '../Home/Home.css'

const OurClasses = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(${header})`,
        }}
        class="background"
      >
        <Header />
        <Headers />
      </div>
      <div>
        <Classes />

        <FooterOfClasses />
      </div>
    </div>
  )
}

export default OurClasses
