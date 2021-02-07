import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../images/logo.png'

const Nav = styled.nav`
  background: linear-gradient(152.97deg, rgba(108, 154, 208, 0.5) 0%, rgba(108, 154, 208, 0) 100%);
  backdrop-filter: blur(42px);
  color: white;
`;

const NavList = styled.ul`
  align-items: center;
  li{
    &:hover{
      color: #6C9AD0;
      cursor: pointer;
    }
  }
`;

const SignUp = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 0;
    background: #6C9AD0;
    border-radius: 5px;
    color: white;
    text-transform: capitalize;
    width: 100px;
`;

const MobileNav = styled.div`
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 109;
  transition: move .2s ease-in-out;
  div{
    width: 50%;
    background-color: #f2f2f2;
    position: fixed;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all .2s ease-in-out;
  }
`;

const Hamburger = styled.div`
  width: 35px;
  cursor: pointer;
  div,
  &::before,
  &:after {
    background-color: #000;
    background-color: #fff;
    content: '';
    display: block !important;
    height: 2px;
    margin: 7px 0;
    transition: all .2s ease-in-out;
    z-index: 30;
  }
  &::before {
    width: 20px;
  }
  &::after {
    width: 20px;
    transform: translateX(15px);
  }
  &:hover {
    div{
      width: 25px;
      transform: translateX(10px);
    }
    &:after {
      width: 30px;
      transform: translateX(5px);
    }
    &::before {
      width: 35px;
    }
  }
  `;




const Navbar = () => {

  const [navState, setNavState] = useState(false)

  const toggleNav = () => {
    console.log("Toggle working")
    if (navState === false) {
      setNavState(
        Opennav => Opennav = true
      )
    }
    else {
      setNavState(
        Opennav => Opennav = false
      )
    }
  }

  return (
    <Nav className="py-5 px-3 lg:px-8 absolute top-0 w-full">
      <section className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" />
          <p className="capitalize italic font-bold text-2xl ml-2 text-white">Crystal palace</p>
        </div>
        <NavList className="gap-10 grid-flow-col hidden lg:grid">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Our Varieties</li>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <NavLink to="/signup">
            <SignUp>Sign Up</SignUp>
          </NavLink>
        </NavList>
        <Hamburger onClick={toggleNav} className="block lg:hidden overflow-hidden">
          <div></div>
        </Hamburger>
        {/* Mobile Nav Div */}
        <MobileNav className={navState ? "block lg:hidden" : "hidden"}>
          <div>
            <h1>Tobikfbsjvfjsbfjs</h1>
            <h1>Tobikfbsjvfjsbfjs</h1>
            <h1>Tobikfbsjvfjsbfjs</h1>
            <h1>Tobikfbsjvfjsbfjs</h1>
            <h1>Tobikfbsjvfjsbfjs</h1>
            <h1>Tobikfbsjvfjsbfjs</h1>
          </div>
        </MobileNav>
      </section>
    </Nav>
  )
}

export default Navbar
