import React, { Component } from 'react';


import styles from './styles.css' //contains css for header
import HomeNav from '../NavBars/HomeNav'

import background from '../../Images/Artboard1.png';
import jane from '../../Images/jane.jpg';
import jane2 from '../../Images/jane2.jpg';
import jane3 from '../../Images/jane3.jpg';
import john from '../../Images/john.jpg';
import john2 from '../../Images/john2.jpg';
import john3 from '../../Images/john3.jpg';
import { CalendarViewDayRounded } from '@material-ui/icons';


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            des: "nav-link active",
            cal: "nav-link",
            rev: "nav-link"
        };
    }

    componentDidMount() {
        document.querySelector('body').setAttribute('class', "landing")
    }

    componentWillUnmount() {
        document.querySelector('body').removeAttribute('class')
    }

    handleSubmitDes=()=>
    {
        this.setState({
            des: "nav-link active",
            cal: "nav-link",
            rev: "nav-link"
        });
        console.out("des");
    }
    handleSubmitCal=()=>
    {
        this.setState({
            des: "nav-link",
            cal: "nav-link active",
            rev: "nav-link"
        });
        console.out("cal");
    }
    handleSubmitRev=()=>
    {
        this.setState({
            des: "nav-lin",
            cal: "nav-link",
            rev: "nav-linkk active"
        });
        console.out("rev");
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
                        <div class="col-md-6 ml-auto mr-auto">
                            <div class="profile">
                            <div class="avatar">
                                <img src={jane} alt="Circle Image" class="img-raised rounded-circle img-fluid"/>
                            </div>
                            <div class="name">
                                <h3 class="title">Christian Louboutin</h3>
                                <h6>Designer</h6>
                                <a href="#pablo" class="btn-profile btn-profile-just-icon btn-profile-link btn-profile-dribbble"><i class="fa fa-dribbble"></i></a>
                                <a href="#pablo" class="btn-profile btn-profile-just-icon btn-profile-link btn-profile-twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#pablo" class="btn-profile btn-profile-just-icon btn-profile-link btn-profile-pinterest"><i class="fa fa-pinterest"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="description text-center">
                        <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                        </div>
                        <div class="row">
                        <div class="col-md-6 ml-auto mr-auto">
                            <div class="profile-tabs">
                            <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                <li class="nav-item">
                                <a class={this.state.des} href="#studio" role="tab" data-toggle="tab" onClick={this.handleClickDes}>
                                    <i class="material-icons">camera</i> Studio
                                </a>
                                </li>
                                <li class="nav-item">
                                <a class={this.state.cal} href="#works" role="tab" data-toggle="tab" onClick={this.handleClickCal}>
                                    <i class="material-icons">palette</i> Work
                                </a>
                                </li>
                                <li class="nav-item">
                                <a class={this.state.rev} href="#favorite" role="tab" data-toggle="tab" onClick={this.handleClickRev}>
                                    <i class="material-icons">favorite</i> Favorite
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div class="tab-content tab-space">
                        <div class="tab-pane active text-center gallery" id="studio">
                            <div class="row">
                            <div class="col-md-3 ml-auto">
                                <img src={jane} class="rounded"/>
                                <img src={jane2} class="rounded"/>
                            </div>
                            <div class="col-md-3 mr-auto">
                                <img src={john} class="rounded"/>
                                <img src={john2} class="rounded"/>
                            </div>
                            </div>
                        </div>
                        <div class="tab-pane text-center gallery" id="works">
                            <div class="row">
                            <div class="col-md-3 ml-auto">
                                <img src={jane} class="rounded"/>
                                <img src={jane2} class="rounded"/>
                                <img src={jane3} class="rounded"/>
                            </div>
                            <div class="col-md-3 mr-auto">
                                <img src={jane} class="rounded"/>
                                <img src={jane2} class="rounded"/>
                            </div>
                            </div>
                        </div>
                        <div class="tab-pane text-center gallery" id="favorite">
                            <div class="row">
                            <div class="col-md-3 ml-auto">
                                <img src="../assets/img/examples/mariya-georgieva.jpg" class="rounded"/>
                                <img src="../assets/img/examples/studio-3.jpg" class="rounded"/>
                            </div>
                            <div class="col-md-3 mr-auto">
                                <img src="../assets/img/examples/clem-onojeghuo.jpg" class="rounded"/>
                                <img src="../assets/img/examples/olu-eletu.jpg" class="rounded"/>
                                <img src="../assets/img/examples/studio-1.jpg" class="rounded"/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

