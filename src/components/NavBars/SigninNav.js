import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import SigninButton from "../Buttons/SigninButton"

import styles from './styles.css' //contains css for header

class SigninNav extends Component {

   render() {
      return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">DISCOVEROO</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Discover</Nav.Link>
            <Nav.Link href="/Discover">Features</Nav.Link>
            <Nav.Link href="/SignUp">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <SigninButton/>
            </Form>
        </Navbar>
      )
   }
}

export default SigninNav;