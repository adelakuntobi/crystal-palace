import React from 'react'
import Review from '../components/review'
import tobi from '../images/review1.jpg'
import cuppy from '../images/review2.jpg'
import faydee from '../images/review3.jpg'
import { Color } from './Header'

const Reviews = () => {
  return (
    <section className="flex items-center container mx-auto py-16 w-11/12">
      <section className="w-6/12 pr-8">
        <Color className="text-lg font-bold">reviews</Color>
        <h2 className="text-5xl font-bold my-3">Join us, we’ve made a lot look elegant</h2>
        <p className="text-sm leading-tight py-3">the state or quality of
          being elegant; beauty as resulting from choice qualities and
          the complete absence of what deforms or impresses unpleasantly
        </p>
      </section>
      <section className="grid gap-5 grid-flow-col grid-rows-2 items-center justify-start">
        <Review name="Adelakun Tobi" picture={tobi}/>
        <Review name="Akinwale Fadiat" picture={faydee}/>
        <Review name="DJ Cuppy" picture={cuppy}/>
      </section>
    </section>
  )
}

export default Reviews
