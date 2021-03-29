import React, { Component } from 'react';
import { useHistory } from "react-router"

import Navbar from 'react-bootstrap/Navbar';
import {Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import LogoutButton from "../Buttons/LogoutButton";
import Logo from './Logo.js';
import { Drawer } from '@material-ui/core';
import Calendar from '../Profile/Calendar';
import PostButton from '../Buttons/PostButton';

import Messages from '../Messages/Messages';
import Appointments from '../Appointments/Appointments';

import styles from './styles.css' //contains css for header

function SignedinNav(){

  const [state, setState] = React.useState({
    post: false,
    messages: false,
    appointment: false,
    menu: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
      return (
        <Navbar bg="light" variant="light">
            <Logo status="in"/>
            <Nav className="ml-auto">
            {/* <Nav.Link href="/Messages">Messages</Nav.Link>
            <Nav.Link href="/Profile">Appointments</Nav.Link> */}
            
            </Nav>
            <Form inline>
              <i class="material-icons signedinnav-items" style={{color:"#999", margin: '0 5px'}} onClick={toggleDrawer('post', true)}>add</i>
              <Drawer anchor={'right'} open={state['post']} onClose={toggleDrawer('post', false)}>
              <div style={{width:'100vh'}}>
                <div style={{width:'100%', height:'100%'}}>
                <div style={{justifyContent:'center', display:'flex', width:'100%',  padding: '40px 40px 0px 40px'}}>
                  <input 
                    // class="form-control" 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="Posting Title"
                    autocomplete="off" style={{cursor: 'pointer', width:'100%', height:'45px', borderWidth: '0 0 0.5px', borderColor:"#999"}}/>             
                </div>

                <div style={{justifyContent:'center', display:'flex', width:'100%',  padding: '40px 40px 0px 40px'}}>
                  <input 
                    // class="form-control" 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="Rate"
                    autocomplete="off" style={{cursor: 'pointer', width:'100%', height:'45px', borderWidth: '0 0 0.5px 0', borderColor:"#999"}}/>             
                </div>

                <div style={{justifyContent:'center', display:'flex', width:'100%', padding: '40px 40px 0 40px'}}>
                  <input 
                    // class="form-control" 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="Description"
                    autocomplete="off" style={{cursor: 'pointer', height: '250px', width:'100%', borderWidth: '0.5px', borderColor:"#999", borderRadius: "25px"}}/>             
                </div>
                <div style={{justifyContent:'center', display:'flex', margin:'50px 0'}}>
                  <Calendar class="calendar-profile"/>
                </div>
                <div style={{justifyContent:'center', display:'flex', margin:'30px 0'}}>
                  <PostButton/>
                </div>
                </div>
              </div>              
              </Drawer>

              {/* <a href="/Profile" style={{color:"#999"}}></a> */}
              <i class="material-icons signedinnav-items" style={{color:"#999", margin: '0 5px'}} onClick={toggleDrawer('messages', true)}  >chat_bubble_outline</i>
              <Drawer style = {{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}} anchor={'right'} open={state['messages']} onClose={toggleDrawer('messages', false)}>
                <div style={{width:'90vh'}}>
                      <Messages/>                
                </div>
              </Drawer>

              {/* <a href="/Appointments"><i class="material-icons signedinnav-items " style={{color:"#999"}} onClick={toggleDrawer('appointment', true)}>event</i></a> */}
              <i class="material-icons signedinnav-items " style={{color:"#999", margin: '0 5px'}} onClick={toggleDrawer('appointment', true)}>event</i>
              <Drawer anchor={'right'} open={state['appointment']} onClose={toggleDrawer('appointment', false)}>
                <div style={{width:'60vh'}}>
                  
                  <Appointments/>
                  
                </div>
              </Drawer>              
              
              <i class="material-icons signedinnav-items" style={{color:"#999", margin: '0 5px'}} onClick={toggleDrawer('menu', true)}>menu</i>
              <Drawer anchor={'right'} open={state['menu']} onClose={toggleDrawer('menu', false)}>
                <div style={{width:'30vh', padding: '5px'}}>
                  
                  <a href="/Profile"><div className="drawer-conents">SETTINGS</div></a>
                  <hr className="drawer-conents" style={{padding: '5px', width: '80%'}}/>
                  <div className="drawer-conents">
                    <LogoutButton/>
                  </div>
                  
                </div>
              </Drawer>

                
            </Form>
        </Navbar>
      )
}

export default SignedinNav;