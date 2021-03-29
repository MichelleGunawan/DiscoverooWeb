import React, { Component } from 'react';

import styles from './styles.css'

function AppointmentCard(props) {
    var eventname = props.eventname;
    var eventday = props.eventday
  
    return (
        <div style={{display: 'inherit'}}>
            <div style={{margin: '0 5% 0 0', color: "#999"}}>
                <h2 class="display-4"><span class="badge badge-secondary">23</span></h2>
                <h3 style={{paddingLeft:'20%'}}>OCT</h3>
            </div>
            <div>
                <h4 class="text-uppercase" style={{color: "#555"}}><strong>{eventname}</strong></h4>
                <ul class="list-inline" style={{color: "#555"}}>
                    <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> {eventday} </li>
                    <li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM - 2:00 PM</li>
                    <li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i> Cafe</li>
                </ul>
                {/* <p style={{margin:'0px', color:"#999"}}>Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
            </div>
        </div>
    )
  }
  
  export default AppointmentCard;