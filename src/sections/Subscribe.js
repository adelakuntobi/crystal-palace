import React from 'react'
import styled from 'styled-components'
import DefaultButton from '../components/button';
import Rectangle2 from '../images/Frame41.svg'
const Section = styled.section`
  background-image: url(${Rectangle2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Subscribe = () => {
  return (
    <Section className="py-20 px-3">
      <h1 className="text-white text-5xl font-bold pb-12">Subscribe to our newsletter today!</h1>
      <DefaultButton>purchase now</DefaultButton>
    </Section>
  )
}

export default Subscribe
