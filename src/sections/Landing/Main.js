import React from 'react'
import DefaultButton from '../../components/button'
import beauty from '../../images/beautyMain.png'
import { Color } from './Header'

const Main = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center container mx-auto py-20 w-11/12">
      <img data-aos="zoom-in" className="w-full md:w-9/12 mx-auto lg:w-1/2 lg:mr-16" src={beauty} alt="beauty" />
      <section>
        <Color className="text-lg font-bold mt-4 lg:mt-0">about us</Color>
        <h2 className="text-4xl lg:text-5xl font-bold my-3"data-aos="fade-up">Beauty sense given <br/><span data-aos="fade-up" data-aos-delay="1500">over the years</span></h2>
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
          <DefaultButton className="mt-12">purchase now</DefaultButton>
      </section>
    </main>
  )
}

export default Main
