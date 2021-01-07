import React from 'react'
import belowHeader from '../images/belowHeader.png'

const SlideDiv = () => {
  return (
    <div className="flex">
      <img src={belowHeader} alt="jewerly" />
      <div className="p-8">
        <h3 className="font-bold text-xl">Diamond Curlicue Infinity</h3>
        <p>A charming choice, this diamond infinity pendant makes a sweet
        statement of forever. Crafted in sterling silver, this entrancing
        look showcases a petite diamond - artfully set to enhance size and
        sparkle - nestled at the curlicued base of a double infinity
symbol shape.</p>
      </div>
    </div>
  )
}

export default SlideDiv
