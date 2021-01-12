import React from 'react'
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


const Navbar = () => {
  return (
    <Nav className="py-5 px-8 absolute top-0 w-full">
      <section className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" />
          <p className="capitalize italic font-bold text-2xl ml-2 text-white">Crystal palace</p>
        </div>
        <NavList className="grid gap-10 grid-flow-col">
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
      </section>
    </Nav>
  )
}

export default Navbar
