import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

import HomeNav from '../NavBars/HomeNav';
import 'font-awesome/css/font-awesome.css';
import styles from './styles.css' //contains css for header

const SignInContainer = styled.div`
   width:60%;
   margin:3em auto;
   height:calc(100vh - 321px);
`

const Input = styled.input`
   margin:1em 0; 
`

const ErrorContainer = styled.div`
  background-color: red;
  color: white;
  padding: 0.5em;
  margin: 1em 0;
  border-radius: 0.5em;
`

export default class signin extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  handleSubmit = (event) => {
     event.preventDefault();
     this.submit();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    return (
      <div>
            <HomeNav/> 
            <div class="section section-signup page-header  background">
              <div class="container">
                  <div class="row">
                     <div class="col-lg-4 col-md-6 mx-auto signinform" >
                         <div class="card card-login">
                            <form class="form" onSubmit={this.handleSubmit}>
                                <div class="card-header card-header-primary text-center">
                                <h4 class="card-title">Sign In</h4>
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
                                    <div class="input-group" style={{marginTop: '5px'}}>
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
                                <div class="description text-center" style={{color:'#adadad'}}>Don't have an account? <Link to="/Signup">Sign Up!</Link></div>
                                <div class="footer text-center">
                                <a href="javascript:;" class="btn btn-primary btn-link btn-wd btn-lg">Sign In</a>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>  
         </div>
    );
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
   * method to handle submit button for authenticating user.
   * - SUCCESS: redirects to a previously visited private Route
   * - ERROR: returns a JSON object key 'errors'
   */
  submit = () => {
    const { context } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { email, password } = this.state;
    context.data.signIn(email, password)
      .then( signin => {
        console.log(signin)
        if (signin.success === false) {
          this.setState(() => {
            return {
              error: signin.message
            }
          })
        }
        else {
          this.props.history.push(from)
        }
      })
      .catch(err => {
        console.log(err)
        this.props.history.push('/error')
      })
  }
}

function ErrorsDisplay(props) {
  let errorDisplay = null;
  console.log(props.error)
  if (props.error !== '') {
    errorDisplay = (
      <ErrorContainer>
        {props.error}
      </ErrorContainer>
    )
  }

  return errorDisplay
}

