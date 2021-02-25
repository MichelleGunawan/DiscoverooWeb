import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

import HomeNav from '../NavBars/HomeNav';
import 'font-awesome/css/font-awesome.css';
import styles from './styles.css'; //contains css for header

const SignUpContainer = styled.div`
   width:60%;
   margin:3em auto;
   height:calc(100vh - 321px);
`

const Input = styled.input`
   margin:1em 0; 
`

export default class Signup extends Component {
   
   state = {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      phone : '',
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.submit();
   }
   
   render() {

   const {
      firstName,
      lastName,
      email,
      password,
      phone,
   } = this.state;

      return (
         <div>
            <HomeNav/> 
            <div class="section section-signup page-header  background">
              <div class="container">
                  <div class="row">
                     <div class="col-lg-4 col-md-6 mx-auto signinform">
                         <div class="card card-login">
                            <form class="form" onSubmit={this.handleSubmit}>
                                <div class="card-header card-header-primary text-center">
                                <h4 class="card-title">Sign Up!</h4>
                                <div class="social-line">
                                    <a href="javascript:;" class="btn btn-just-icon btn-link">
                                    <i className="fa fa-facebook"></i>
                                    {/* <i class="material-icons-outlined">facebook</i> */}
                                    </a>
                                    <a href="javascript:;" class="btn btn-just-icon btn-link">
                                    <i class="fa fa-google"></i>
                                    </a>
                                </div>
                                </div>
                                <p class="description text-center" style={{marginBottom: '0px', color:'#adadad'}}>Or Be Classical</p>
                                <div class="card-body">
                                
                                <span class="bmd-form-group">
                                 <div class="input-group" style={{margin:'0px'}}>
                                    <div class="input-group-prepend">
                                       <span class="input-group-text">
                                          <i class="material-icons">face</i>
                                       </span>
                                    </div>
                                    <input 
                                    class="form-control" 
                                    id="firstName" 
                                    name="firstName"
                                    type="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={this.change} autocomplete="off" style={{cursor: 'pointer'}}/>
                                 </div>
                                 </span>

                                 <span class="bmd-form-group">
                                 <div class="input-group" style={{marginTop: '10px'}}>
                                    <div class="input-group-prepend" >
                                       <span class="input-group-text">
                                          <i class="material-icons">face</i>
                                       </span>
                                    </div>
                                    <input 
                                    class="form-control" 
                                    id="lastName" 
                                    name="lastName"
                                    type="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={this.change} autocomplete="off" style={{cursor: 'pointer'}}/>
                                 </div>
                                 </span>

                                    <span class="bmd-form-group"><div class="input-group" style={{marginTop: '10px'}}>
                                    <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="material-icons">mail</i>
                                    </span>
                                    </div>
                                    <input 
                                    class="form-control" 
                                    id="email" 
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={this.change} autocomplete="off" style={{cursor: 'pointer'}}/>
                                </div></span>

                                <span class="bmd-form-group"><div class="input-group" style={{marginTop: '10px'}}>
                                    <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="material-icons">lock_outline</i>
                                    </span>
                                    </div>
                                    <input 
                                    class="form-control" 
                                    id="password" 
                                    name="password"
                                    type="passwod"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.change} autocomplete="off" style={{cursor: 'pointer'}}/>
                                </div></span>
                                </div>
                                <div class="description text-center" style={{color:'#adadad'}}>Already have an account? <Link to="/Signin">Sign In!</Link></div>
                                <div class="footer text-center">
                                <a href="javascript:;" class="btn btn-primary btn-link btn-wd btn-lg">Sign Up</a>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>  
         </div>
      )
   }

   change = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      this.setState(() => {
        return {
          [name]: value
        };
      });
    }

   /**
   * method to handle creation of user using createUser
   * - SUCCESS : Redirects to the '/authenticated' path
   * - ERROR : returns a JSON error object.
   */
  submit = () => {
   const { context } = this.props;

   // Get data from state
   const {
      firstName,
      lastName,
      email,
      password,
      phone,
   } = this.state

   // New user payload
   const user = {
      firstName,
      lastName,
      email,
      password,
      phone,
   }

   context.data.createUser(user)
      .then( errors => {
         if (errors.length) {
            this.setState({ errors })
         } else { 
         context.actions.signIn(email, password)
            .then( () => {
               this.props.history.push('/')
            })
         }
      })
      .catch( err => { 
         console.log(err)
         this.props.history.push('/error')
      })
 }
}

