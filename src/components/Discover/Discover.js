import React, { Component } from 'react';

import FilterForm from './FilterForm'
import SortForm from './SortForm'

import HomeNav from '../NavBars/HomeNav';
import jane from '../../Images/jane.jpg';
import jane2 from '../../Images/jane2.jpg';
import jane3 from '../../Images/jane3.jpg';
import john from '../../Images/john.jpg';
import john2 from '../../Images/john2.jpg';
import john3 from '../../Images/john3.jpg';

import filterup from '../../Images/filterup.png'
import filterdown from '../../Images/filterdown.png'
import sortdown from '../../Images/sortdown.png'
import sortup from '../../Images/sortup.png'

import TextField from '@material-ui/core/TextField';

import styles from './styles.css' //contains css for header

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {                        
            filterShow:false, 
            filterimage:filterdown,
            sortShow:false,
            sortimage:sortdown, 
            search: '',
            value: 'testval'
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
      };

    componentDidMount() {
        document.querySelector('body').setAttribute('class', "landing")
    }

    componentWillUnmount() {
        document.querySelector('body').removeAttribute('class')
    }

    handlefilterClick=()=>{
        if(this.state.filterimage === filterup)
            this.setState({filterimage:filterdown, filterShow:false})
        else
            this.setState({filterimage:filterup, filterShow: true})
     }

     handlesortClick=()=>{
        if(this.state.sortimage === sortup)
            this.setState({sortimage:sortdown, sortShow:false})
        else
            this.setState({sortimage:sortup, sortShow:true})
     }


    render() {

     const 
     {search, classes} = this.state;
     
        return (
            <div>
                <HomeNav/> 
                <div class="searchsection">
                   <div class="input-group" style={{width: '40%'}}>
                        <i class="material-icons" style={{float:'left'}}>search</i>
                        <TextField
                        id="standard-full-width"
                        style={{width:'90%', float:'left'}}
                        placeholder="Search"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </div> 


                    <div class="row">
                        <div class="col-sm-5">
                        <img src={this.state.filterimage} style={{width:"7.5vh"}} onClick={this.handlefilterClick}/>
                        </div>

                        <div class="col-sm-5">
                        <img src={this.state.sortimage} style={{width:"7.5vh"}} onClick={this.handlesortClick}/>
                        
                        </div>
                    </div>
                </div>
                

                <div>
                    {this.state.sortShow && <SortForm/>}
                </div>  


                <div>
                    {this.state.filterShow && <FilterForm/>}
                </div>
                

                <div class="card-group" className="center" style={{marginLeft: '20%', marginTop: '3%'}}>
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
                            <img src={john} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
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
                            <img src={john2} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
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
                            <img src={jane2} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
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
                            <img src={jane3} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
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
                            <img src={john3} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
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


                        