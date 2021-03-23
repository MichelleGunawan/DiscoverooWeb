import React, { Component } from 'react';


import styles from './styles.css' //contains css for header
import HomeNav from '../NavBars/HomeNav'
import MessageButton from '../Buttons/MessageButton'
import BookButton from '../Buttons/BookButton'

import Calendar from './Calendar';

import Five from '../../Images/5star.png';

import jane from '../../Images/jane.jpg';
import jane2 from '../../Images/jane2.jpg';
import jane3 from '../../Images/jane3.jpg';
import john from '../../Images/john.jpg';
import john2 from '../../Images/john2.jpg';
import john3 from '../../Images/john3.jpg';
import logo from '../../Images/logo.png';
import circle from '../../Images/circle.png'



export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        document.querySelector('body').setAttribute('class', "landing")
    }

    componentWillUnmount() {
        document.querySelector('body').removeAttribute('class')
    }

    desClick=()=>
    {
        console.log('here')
        
        var des = document.getElementById('description');
        var desbutton = document.getElementById('desButton');  
        var cal = document.getElementById('calendar');
        var calbutton = document.getElementById('calButton');
        var rev = document.getElementById('reviews');
        var revbutton = document.getElementById('revButton');

        des.className="tab-pane active text-center gallery"
        desbutton.className='nav-link active'
        cal.className="tab-pane text-center gallery"
        calbutton.className='nav-link'
        rev.className="tab-pane text-center gallery"
        revbutton.className='nav-link'
    }
    calClick=()=>
    {
        console.log("cal");
        var des = document.getElementById('description');
        var desbutton = document.getElementById('desButton');
        var cal = document.getElementById('calendar');
        var calbutton = document.getElementById('calButton');
        var rev = document.getElementById('reviews');
        var revbutton = document.getElementById('revButton');

        des.className="tab-pane text-center gallery"
        desbutton.className='nav-link'
        cal.className="tab-pane active text-center gallery"
        calbutton.className='nav-link active'
        rev.className="tab-pane text-center gallery"
        revbutton.className='nav-link'
    }
    
    revClick=()=>
    {
        console.log("rev");
        var des = document.getElementById('description');
        var desbutton = document.getElementById('desButton');
        var cal = document.getElementById('calendar');
        var calbutton = document.getElementById('calButton');
        var rev = document.getElementById('reviews');
        var revbutton = document.getElementById('revButton');

        des.className="tab-pane text-center gallery"
        desbutton.className='nav-link'
        cal.className="tab-pane text-center gallery"
        calbutton.className='nav-link'
        rev.className="tab-pane active text-center gallery"
        revbutton.className='nav-link active'
    }


    render() {
        const 
        {des, cal, rev} = this.state;

        return (
            <div>
                <HomeNav/> 
                <div class="page-header header-filter profile-background" data-parallax="true"></div>
                <div class="main main-raised">
                    <div class="profile-content">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-6 mr-auto-profile ml-auto-profile">
                            <div class="profile">
                            <div class="avatar">
                                <img src={jane} alt="Circle Image" class="img-raised rounded-circle img-fluid"/>
                            </div>
                            <div class="name">
                                <h3 class="title">Christian Louboutin</h3>
                                <h5>Designer</h5>
                                <p>Rate: $20/hr</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div class="row">
                        <div class="col-md-6 mr-auto-profile ml-auto-profile">
                            <div class="profile-tabs">
                            <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                
                                <li class="nav-item">
                                <a id = "desButton" class="nav-link active" href="#about" role="tab" data-toggle="tab" onClick={this.desClick}>
                                    <i class="material-icons">person</i> About
                                </a>
                                </li>


                                <li class="nav-item">
                                <a id = "calButton" class="nav-link" href="#availability" role="tab" data-toggle="tab" onClick={this.calClick}>
                                    <i class="material-icons">calendar_today</i> Availability
                                </a>
                                </li>


                                <li class="nav-item">
                                <a id = "revButton" class="nav-link" href="#reviews" role="tab" data-toggle="tab" onClick={this.revClick}>
                                    <i class="material-icons">star_rate</i> Reviews
                                </a>
                                </li>

                            </ul>
                            </div>
                        </div>
                        </div>
                        <div class="tab-content tab-space">

                        <div id="description" class="tab-pane active text-center gallery">
                            <div class="description text-center">
                            {/* <h5><b>About</b></h5> */}
                            <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                            <br></br>
                            
                            <MessageButton/> 
                            
                            <BookButton/>
                            </div>                                               
                        </div>

                        <div id="calendar" class="tab-pane text-center gallery" >
                            <div class="outer">
                                <Calendar class="calendar-profile"/>
                            </div>
                            <br></br>

                            <MessageButton/> 

                            <br></br>
                            
                            <BookButton/>

                            <div class="row">
                            <div class="col-md-3 ml-auto-profile">
                                <img src={jane} class="rounded"/>
                                <img src={jane2} class="rounded"/>
                            </div>
                            <div class="col-md-3 mr-auto-profile">
                                <img src={john} class="rounded"/>
                                <img src={john2} class="rounded"/>
                            </div>
                            </div>
                        </div>

                        <div id="reviews" class="tab-pane text-center gallery" >
                            <hr/>
                            <div class="review">
                                <div><img src={Five} class="paragraph"/><b>REVIEW</b></div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </div>
                            <hr/>
                            <br/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <footer class="footer footer-default">
                <div class="container">
                <nav class="float-left">
                    <ul>
                    <li>
                        <a href="https://www.creative-tim.com/">
                        Creative Tim
                        </a>
                    </li>
                    <li>
                        <a href="https://www.creative-tim.com/presentation">
                        About Us
                        </a>
                    </li>
                    <li>
                        <a href="https://www.creative-tim.com/blog">
                        Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://www.creative-tim.com/license">
                        Licenses
                        </a>
                    </li>
                    </ul>
                </nav>
                <div class="copyright float-right">
                    ©2021, made with <i class="material-icons">favorite</i> by <a href=""><img className="footer-logo" src={circle}/></a>
                </div>
                </div>
            </footer>
            </div>
        )
    }
}

