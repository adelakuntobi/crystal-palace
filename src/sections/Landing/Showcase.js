import React from 'react'
import DefaultButton from '../../components/button'
import Rectangle1 from '../../images/Rectangle1.svg'
import Rectangle2 from '../../images/Rectangle2.png'
import Rectangle3 from '../../images/Rectangle3.svg'
import { Color } from './Header'
import { OtherButton } from './Header'

const Showcase = () => {
  // data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000"
// data-aos="fade-right" data-aos-delay="250" data-aos-duration="1000"
// data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"
  return (
    <section className="overflow-x-hidden flex flex-col lg:flex-row items-center container mx-auto py-32 w-11/12">
      <div data-aos="fade-down" className="relative w-full lg:w-1/2">
        <img data-aos="fade-down" className="mx-auto" src={Rectangle1} alt="beauty" />
        <img data-aos-delay="1000" data-aos="fade-right" className="absolute bottom-0 left-0" src={Rectangle2} alt="beauty" />
        <img data-aos-delay="1300" data-aos="fade-left" className="absolute bottom-0 right-0" src={Rectangle3} alt="beauty" />
      </div>
      <section className="w-1/2 pl-16">
        <Color className="text-lg font-bold">Our varieties</Color>
        <h2 data-aos="fade-up" className="text-5xl font-bold my-3"><span data-aos-delay="1200">Earrings, Necklaces, </span><span data-aos="fade-up" data-aos-delay="1700">Bracelets, you name it.</span></h2>
        <p className="text-sm leading-tight py-3">A charming choice, this diamond infinity pendant
        makes a sweet statement of forever. Crafted in sterling silver,
        this entrancing look showcases a petite diamond - artfully
        set to enhance size and sparkle - nestled at the curlicued
        base of a double infinity symbol shape.A charming choice,
        this diamond infinity pendant makes a sweet statement of forever.
        Crafted in sterling silver, this entrancing look showcases a petite diamond -
        artfully set to enhance size and sparkle - nestled at the curlicued base of a double
        infinity symbol shape.A charming choice, this diamond infinity pendant makes a
          </p>
        <div className="grid grid-flow-col gap-5 items-center justify-start">
          <DefaultButton className="mt-12">purchase now</DefaultButton>
          <OtherButton style={{ color: "#6C9AD0" }} className="mt-12">show varieties</OtherButton>
        </div>
      </section>
    </section>
  )
}

export default Showcase
