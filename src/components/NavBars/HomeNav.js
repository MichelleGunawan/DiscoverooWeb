import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import SigninButton from "../Buttons/SigninButton"

import styles from './styles.css' //contains css for header
import Logo from '../../Images/logo.png';

class HomeNav extends Component {

   render() {
      return (
        <Navbar bg="light" variant="light">
            <img src={Logo} className="navlogo" href="#home"/>
            {/* <Navbar.Brand href="#home">DISCOVEROO</Navbar.Brand> */}
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Discover">Features</Nav.Link>
            <Nav.Link href="/Profile">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <SigninButton/>
            </Form>
        </Navbar>
      )
   }
}

export default HomeNav;