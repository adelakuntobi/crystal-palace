import React from 'react'

const DefinitelyDiv = (props) => {
  const {delay} = props
  return (
    <div className="bg-white rounded px-8 py-5" data-aos="zoom-out-right" data-aos-delay={delay} data-aos-duration="2000">
      <h3 className="capitalize text-2xl font-bold mb-3">elegancy</h3>
      <p className="capitalize font-light text-sm">the state or quality of being elegant; beauty as resulting from choice qualities and the complete absence of what deforms or impresses unpleasantly</p>
    </div>
  )
}

export default DefinitelyDiv
