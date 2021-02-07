import React from 'react'
import styled from 'styled-components'
import necklace from '../../src/images/login3.jpg'
import logo from '../images/logo.png'
import DefaultButton from '../components/button';
import { Link } from 'react-router-dom';

export const InputTag = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder,
  value: props.value,
  onChange: props.handleChange
}))`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #edf2f7;
  border-width: 1px;
  color: black;
  
  &:focus{
    outline: none;
    background-color: white;
    box-shadow: 0 0 6px 4px #6c9ad085;
    border: 1px solid #6c9ad0cc;

  }
  &::placeholder{
    color: rgba(75, 85, 99 , 1)
  }
`;

export const Logo = styled.div`
top: 2rem;
left: ${props => props.left || "2rem"};
`;




const Login = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center">
      <div className="w-11/12 md:w-5/12 lg:w-4/12 relative hidden lg:block">
        <Logo className="absolute">
          <Link to="/" className="flex justify-between items-center">
            <img src={logo} alt="logo" className="w-8" />
            <p className="capitalize italic font-bold text-lg ml-2 text-white">Crystal palace</p>
          </Link>
        </Logo>
        <img src={necklace} alt="necklace" className="hidden md:block h-screen object-cover" />
      </div>
      <div className="mx-auto w-11/12 md:w-6/12 lg:w-4/12 container">
        <Link to="/" className="my-12 flex justify-center items-center lg:hidden">
          <img src={logo} alt="logo" className="w-8" />
          <p className="capitalize font-bold text-2xl ml-2">Crystal palace</p>
        </Link>
        <p className="absolute top-0 right-0 mt-8 mr-8 font-bold hidden lg:block">Not a member? <Link to="/signup" className="text-blue-700">Sign up now</Link></p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Sign in to your Account</h1>
        <form>
          <div className="flex flex-col mb-5">

            <label className="text-lg font-semibold mb-2">Username or Email Address</label>
            <InputTag required type="email" placeholder="example@email.com" />
            {/* <input /> */}
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-lg font-semibold mb-2 flex justify-between items-center">Password <Link to="/forgot-password" className="text-blue-700">Forgot Password?</Link></label>
            <InputTag required type="password" />
          </div>
          <DefaultButton className="text-lg" width="250px" padding=".75rem">Sign In</DefaultButton>
          <p className="block lg:hidden pt-4 font-bold">Not a member? <Link to="/signup" className="text-blue-700">Create Account</Link></p>
        </form>
      </div>
    </section>
  )
}
export default Login
