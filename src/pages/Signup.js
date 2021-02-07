import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import necklace from '../../src/images/login1 (2).jpg'
import DefaultButton from '../components/button';
import logo from '../images/logo.png'
import { InputTag, Logo } from './Login'
import { toast } from 'react-toastify'
import { connect } from 'react-redux';
import { register } from "../redux/actions/authActions"



const Section = styled.section`
  max-width: 1440px;
  background-image: url("${necklace}");
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
  content: "";
    position: absolute;
    left: 0; 
    right: 0;
    top: 0; 
    bottom: 0;
    background: rgba(0,0,0,.5);
  }

  @media (min-width: 1024px) { 
    background-image: none;
    &::before {
      display:none;
    }
  }
`;

const Signup = (props) => {
  const { register } = props
  // Create their initalstates
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [errorMsg, setErrorMsg] = useState("")
  // Make initial object
  const { name, email, password, confirmPassword } = data

  // Add the name to data object
  const handleChange = (name) => event => {
    setData({ ...data, [name]: event.target.value })
  }

  // On submit of the form
  const onSubmitForm = async (e) => {
    e.preventDefault();
    // Authenticate that password and confirm password are the same thing
    if (password !== confirmPassword) {
      setErrorMsg("Password and confirm password doesn't match")
      toast.error("Password do not match")
    }
    // If the fields are empty
    else if (!name || !email || !password) {
      toast.error("Please fill in the field(s)")
    }
    else {
      toast.success("Everything don set, carry go")
      console.log("Everything don set, carry go")
      register( name, email, password)
    }

  }
  return (
    <Section className="mx-auto flex flex-row-reverse items-center justify-center">
      <img src={necklace} alt="necklace" className="hidden lg:block object-cover w-5/12" />
      <div className="m-auto py-5 w-7/12 lg:w-4/12 container">
        <Logo left="3rem" className="absolute flex justify-between items-center w-6/12">
          <Link to="/" className="flex justify-between items-center">
            <img src={logo} alt="logo" className="w-8" />
            <p className="capitalize italic font-bold text-lg ml-2">Crystal palace</p>
          </Link>
          <p className="font-bold">Already a member? <Link to="/login" className="text-blue-700">Sign in now</Link></p>
        </Logo>
        <div className="mb-4 font-bold">
          <h1 className="text-4xl">Create Account</h1>
          <p className="text-red-600 text-lg ">{errorMsg}</p>
        </div>
        <form onSubmit={onSubmitForm}>
          <div className="flex flex-col mb-5">
            <label className="text-lg font-semibold mb-2">Username</label>
            <InputTag value={name} required
              handleChange={handleChange('name')}
              type="text" placeholder="Tobiloba"
              className="" />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-lg font-semibold mb-2">Email Address</label>
            <InputTag value={email} required
              handleChange={handleChange('email')}
              type="email" placeholder="example@email.com"
              className="" />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-lg font-semibold mb-2 flex justify-between items-center">Password</label>
            <InputTag value={password} required
              handleChange={handleChange('password')}
              type="password"
              className="" />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-lg font-semibold mb-2 flex justify-between items-center">Password Confirmation</label>
            <InputTag value={confirmPassword} required
              handleChange={handleChange('confirmPassword')}
              type="password"
              className="" />
          </div>
          <DefaultButton type="submit" className="text-lg" width="250px" padding=".75rem">Sign Up</DefaultButton>
        </form>
      </div>
    </Section>
  )
}
// Getting the actions and mapping them to props
const mapDispatchToProps = (dispatch) => {
  return {
    register: () => dispatch(register()),
  }
}
export default connect(null, mapDispatchToProps)(Signup)
