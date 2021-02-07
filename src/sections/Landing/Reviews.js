import React from 'react'
import Review from '../../components/review'
import tobi from '../../images/review1.jpg'
import cuppy from '../../images/review2.jpg'
import faydee from '../../images/review3.jpg'
import { Color } from './Header'
import Slider from 'infinite-react-carousel';

const settings = {
  autoplay: true,
  autoplaySpeed: 100000000,
  dots: true,
  duration: 500,
  shift: 20,
  gutter: 20,
  centerPadding: 10,
  wheel: true,
  slidesToShow: 2,
  rows: 2,
  className: "w-full lg:w-10/12",
  centerMode: true,
  arrows: false,
};

const Reviews = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center container mx-auto py-16 w-11/12">
      <section className="w-full lg:w-6/12 pr-0 lg:pr-8">
        <Color className="text-lg font-bold">reviews</Color>
        <h2 data-aos="fade-up" data-aos-delay="1200" className="text-4xl lg:text-5xl font-bold my-3">Join us, we’ve made<br/><span data-aos="fade-up" data-aos-delay="1800">a lot look elegant</span></h2>
        <p className="text-sm leading-tight py-3">the state or quality of
          being elegant; beauty as resulting from choice qualities and
          the complete absence of what deforms or impresses unpleasantly
        </p>
      </section>
      {/* <section className="grid gap-5 grid-flow-col grid-rows-2 items-center justify-start"> */}
      <Slider {...settings}>
        <Review name="Adelakun Tobi" picture={tobi}/>
        <Review name="Akinwale Fadiat" picture={faydee}/>
        <Review name="DJ Cuppy" picture={cuppy}/>
        <Review name="Adelakun Tobi" picture={tobi}/>
        <Review name="Akinwale Fadiat" picture={faydee}/>
        <Review name="DJ Cuppy" picture={cuppy}/>
        <Review name="Adelakun Tobi" picture={tobi}/>
        <Review name="Akinwale Fadiat" picture={faydee}/>
        <Review name="DJ Cuppy" picture={cuppy}/>
        <Review name="Adelakun Tobi" picture={tobi}/>
        <Review name="Akinwale Fadiat" picture={faydee}/>
        <Review name="DJ Cuppy" picture={cuppy}/>
      </Slider>
    </section>
  )
}

export default Reviews
