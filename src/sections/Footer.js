import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const ListItem = styled.ul`
  li{
    text-transform: capitalize;
    color: #10131A;
    font-weight: bold;
    line-height: 2.5; 
  }

  
  `;

const Footer = () => {
  return (
    <footer className="grid grid-flow-row lg:grid-cols-4 items-center container mx-auto py-24 w-11/12">
      <div>
        <div className="flex items-center mb-4">
          <img src={logo} alt="logo" />
          <p style={{ color: "#6C9AD0" }} className="capitalize italic font-bold text-2xl ml-2">Crystal palace</p>
        </div>
        <p className="capitalize text-sm">the state or quality of being elegant; beauty as resulting from choice qualities and the complete absence of what deforms or impresses unpleasantly</p>
      </div>
      {/* <div className="grid grid-cols-2"> */}
      <ListItem className="my-4 lg:my-auto lg:mx-auto">
        <li>about us</li>
        <li>Services</li>
        <li>our varieties</li>
        <li>contact</li>
      </ListItem>
      <ListItem className="my-4 lg:my-auto lg:mx-auto">
        <li>blog</li>
        <li>fax</li>
        <li>legal</li>
        <li>terms</li>
      </ListItem>
      {/* </div> */}
      <div>
        <div className="grid grid-flow-col gap-5 mb-5">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p>+234 903 506 1234, +234 903 506 1234</p>
        <p>5A, Rockfield estate,  lekki, lagos state.</p>
      </div>
    </footer >
  )
}

export default Footer
