import React from 'react'
import styled from 'styled-components'
import necklace from '../../src/images/login5.jpg'
import logo from '../images/logo.png'
import DefaultButton from '../components/button';
import { Link } from 'react-router-dom';

export const InputTag = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder,
}))`

&:focus{
  outline: none;
  box-shadow: 0 0 6px 4px #6c9ad085;
  border: 1px solid #6c9ad0cc;
}
`;

export const Logo = styled.div`
top: 2rem;
left: ${props => props.left || "2rem"};
`;




const Forgotpassword = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-center">
      <img src={necklace} alt="necklace" className="hidden lg:block object-cover w-5/12" />
      <div className="m-auto py-5 w-7/12 lg:w-4/12 container">
        <Logo left="3rem" className="absolute flex justify-between items-center w-6/12">
          <Link to="/" className="flex justify-between items-center">
            <img src={logo} alt="logo" className="w-8" />
            <p className="capitalize italic font-bold text-lg ml-2">Crystal palace</p>
          </Link>
          <p className="font-bold">Already a member? <Link to="/login" className="text-blue-700">Sign in now</Link></p>
        </Logo>
        <h1 className="text-4xl font-bold mb-4">Forgot Password</h1>
        <form>
          <div className="flex flex-col mb-5">
            <label className="text-lg font-semibold mb-2">Username or Email Address</label>
            <InputTag type="email" placeholder="example@email.com" className="p-2 rounded bg-gray-200 focus:bg-white text-black placeholder-gray-600 font-semibold border" />
            {/* <input /> */}
          </div>
          <DefaultButton className="text-lg" width="250px" padding=".75rem">Recover Password</DefaultButton>
        </form>
      </div>
    </section>
  )
}
export default Forgotpassword
