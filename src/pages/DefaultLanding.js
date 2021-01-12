import React from 'react'
import Definetely from '../sections/Landing/Definetely'
import Header from '../sections/Landing/Header'
import Main from '../sections/Landing/Main'
import Reviews from '../sections/Landing/Reviews'
import Showcase from '../sections/Landing/Showcase'
import Subscribe from '../sections/Landing/Subscribe'
import Sponsor from '../sections/Landing/Sponsor'
import Footer from '../sections/Footer'


const DefaultLanding = () => {
  return (
    <section>
      <Header />
      <Main />
      <Definetely />
      <Showcase />
      <Reviews />
      <Sponsor />
      <Subscribe />
      <Footer />
    </section>
  )
}

export default DefaultLanding
