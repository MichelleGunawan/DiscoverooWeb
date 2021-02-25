import React, { Component } from 'react';

import HomeNav from '../NavBars/HomeNav';
import jane from '../../Images/jane.jpg';

import styles from './styles.css' //contains css for header



export default class Discover extends Component {
    state = {
        search : '',
     }

    componentDidMount() {
        document.querySelector('body').setAttribute('class', "landing")
    }

    componentWillUnmount() {
        document.querySelector('body').removeAttribute('class')
    }
    render() {

     const 
     {search} = this.state;
     
        return (
            <div>
                <HomeNav/> 
                <div class="searchsection">
                   <div class="input-group" style={{width: '40%'}}>
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="material-icons">search</i>
                        </span>
                        </div>
                        <input 
                        class="form-control" 
                        id="search" 
                        name="search"
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={this.change} autocomplete="off" style={{cursor: 'pointer'}}/>
                    </div> 
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                

                <div class="card-group" className="center" style={{marginLeft: '20%', marginTop: '5%'}}>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '10%'}}>
                        {/* <img src={jane} class="card-img-top" alt="profile" style={{borderRadius: '100%'}}/> */}
                            <img src={jane} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
                            <h5 class="card-title info">Name</h5>
                            <h6 class="card-title info">Tutor</h6>
                            <ul class="a">
                            <li class="card-text">M, W, F, On-Call</li>
                            <li class="card-text">In Person. Online</li>
                            <li class="card-text">distance</li>
                            </ul>
                            <p class="center" style={{marginBottom: '0px', paddingLeft: '70%'}}>4.5 <i class="material-icons-outlined">star_outline</i></p>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-body" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '10%'}}>
                        {/* <img src={jane} class="card-img-top" alt="profile" style={{borderRadius: '100%'}}/> */}
                            <img src={jane} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
                            <h5 class="card-title info">Name</h5>
                            <h6 class="card-title info">Tutor</h6>
                            <ul class="a">
                            <li class="card-text">M, W, F, On-Call</li>
                            <li class="card-text">In Person. Online</li>
                            <li class="card-text">distance</li>
                            </ul>
                            <p class="center" style={{marginBottom: '0px', paddingLeft: '70%'}}>4.5 <i class="material-icons-outlined">star_outline</i></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div class="card">
                        <div class="card-body" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '10%'}}>
                        {/* <img src={jane} class="card-img-top" alt="profile" style={{borderRadius: '100%'}}/> */}
                            <img src={jane} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
                            <h5 class="card-title info">Name</h5>
                            <h6 class="card-title info">Tutor</h6>
                            <ul class="a">
                            <li class="card-text">M, W, F, On-Call</li>
                            <li class="card-text">In Person. Online</li>
                            <li class="card-text">distance</li>
                            </ul>
                            <p class="center" style={{marginBottom: '0px', paddingLeft: '70%'}}>4.5 <i class="material-icons-outlined">star_outline</i></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-body" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '10%'}}>
                        {/* <img src={jane} class="card-img-top" alt="profile" style={{borderRadius: '100%'}}/> */}
                            <img src={jane} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
                            <h5 class="card-title info">Name</h5>
                            <h6 class="card-title info">Tutor</h6>
                            <ul class="a">
                            <li class="card-text">M, W, F, On-Call</li>
                            <li class="card-text">In Person. Online</li>
                            <li class="card-text">distance</li>
                            </ul>
                            <p class="center" style={{marginBottom: '0px', paddingLeft: '70%'}}>4.5 <i class="material-icons-outlined">star_outline</i></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>           
            </div>
        )
    }
}


                        