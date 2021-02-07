import React from 'react'
import Slider from 'infinite-react-carousel';
import SlideDiv from './sliding';

const Scroller = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    duration: 500,
    shift: 90,
    wheel: true,
    className:'bg-white absolute bottom-10 right-0 w-11/12 lg:w-7/12 hidden lg:block',
    arrows: false,
  };
  return (
      <Slider {...settings} style={{bottom: "-120px"}}>
        <SlideDiv />
        <SlideDiv />
        <SlideDiv />
        <SlideDiv />
        <SlideDiv />
      </Slider>
  )
}

export default Scroller
