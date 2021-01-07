import React from 'react'
import { Color } from './Header';
import styled from 'styled-components'
import DefinitelyDiv from '../components/definitelyDiv';
import necklace from '../../src/images/main.png'
import DefaultButton from '../components/button';


const Intro = styled(Color)`
  font-weight: 700;
  font-size: 18px;
`;

const Container = styled.section`
  background: rgba(108, 154, 208, 0.05);
  overflow-x: hidden;
`;

const Definetely = () => {
  return (
    <Container>
      <div className="container mx-auto py-20 w-11/12">
        <div className="flex relative">
          <div>
          <Intro>Services</Intro>
          <h2>Definitely topnotch</h2>
          <p className="mr-3">the state or quality of being elegant; beauty as resulting from choice qualities and the complete absence of what deforms or impresses unpleasantly</p>
            <section className="grid grid-flow-col gap-3 items-center absolute z-10 w-8/12 mt-16">
              <DefinitelyDiv />
              <DefinitelyDiv delay="1000" />
              <DefinitelyDiv delay="1300" />
            </section>
          </div>
          <img data-aos="fade-down-left" src={necklace} alt="necklace" className="w-6/12" />
        </div>
        <DefaultButton className="text-white mx-auto my-16">Purchase Now</DefaultButton>
      </div>
    </Container>
  )
}

export default Definetely
