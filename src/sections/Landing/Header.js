import React from 'react'
import styled from 'styled-components'
import DefaultButton from '../../components/button';
import headerBg from '../../images/headerBg.svg';
import Scroller from '../../components/below'
import Navbar from '../Navbar'

const HeaderSection = styled.header`
  background-image: url(${headerBg});
  height: 1025.42px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 7rem;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Color = styled.span`
  color: #6C9AD0;
  text-transform: capitalize;
`;

export const OtherButton = styled(DefaultButton)`
  background: linear-gradient(152.97deg, rgba(108, 154, 208, 0.5) 0%, rgba(108, 154, 208, 0) 100%);
  backdrop-filter: blur(42px);
`;

const Header = () => {
  return (
    <HeaderSection>
      <Navbar />
      <section className="flex flex-col justify-center items-center text-white">
        <p className="italic text-sm md:text-xl text-white">Add ineresting details to your fashion style</p>
        <h1 className="text-5xl md:text-6xl font-bold w-9/12 text-center text-white">
          <Color>real beauty</Color> is hidden in the
          <Color> magic of crystal</Color>
        </h1>
        <div className="grid gap-6 grid-flow-row md:grid-flow-col mt-16">
          <DefaultButton>purchase now</DefaultButton>
          <OtherButton>show varieties</OtherButton>
        </div>
      </section>
      <Scroller/>
    </HeaderSection>
  )
}

export default Header
