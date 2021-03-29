import React, { Component } from 'react';

import AppointmentCard from './AppointmentCard'

export default class Appointments extends Component {
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

    render() {
     
        return (
            <div>                
            <div class="container" style={{padding:'10px'}}>
                <h2>UPCOMING EVENTS</h2>
                <div class="row row-striped">
                    <AppointmentCard eventname="Ice Cream Social" eventday="Monday"/>
                </div>
                <div class="row row-striped">
                    <AppointmentCard eventname="Tutoring"/>
                </div>
                <hr style={{margin: '20px 0'}}/>
                <h2>PAST EVENTS</h2>
                <div class="row row-striped">
                    <AppointmentCard eventname="Ice Cream Social" eventday="Monday"/>
                </div>
                <div class="row row-striped">
                <AppointmentCard eventname="Tutoring"/>
                </div>
            </div>
            </div>
        )
    }
}