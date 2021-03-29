import React, { Component } from 'react';


import HomeNav from '../NavBars/HomeNav';
import StartButton from '../Buttons/StartButton';


import network from '../../Images/Home Icons/network.png';
import calendar from '../../Images/Home Icons/calendar.png';
import confirm from '../../Images/Home Icons/confirm.png';


import home1 from '../../Images/Home/Home1.jpg'
import home2 from '../../Images/Home/Home2.png'
import home3 from '../../Images/Home/Home3.png'
import home4 from '../../Images/Home/Home4.png'
import styles from './styles.css' //contains css for header


export default class Home extends Component {

    componentDidMount() {
        document.querySelector('body').setAttribute('class', "landing")
    }

    componentWillUnmount() {
        document.querySelector('body').removeAttribute('class')
    }
    render() {
        return (
            <div>
                <HomeNav />
                <div className="home-background absolute-center">
                    <div>
                    <h3>QUICK. EASY. EFFICIENT.</h3>
                    <p>Need an extra pair of hands? Find what you're looking for right here</p>
                    <StartButton/>
                    </div>                    
                </div>
                <div className="home-raised">
                    <div style={{marginBottom: '5%'}}>
                        <img src={network} style={{width:'25%', margin: '8%', display:'inline-block'}}/>
                        <div style={{width: '45%', display:'inline-block', color: "#555", padding: '5%'}}>
                            <h3>Header1</h3>
                            <p>testing1</p>
                        </div>
                        
                    </div>

                    <div style={{marginBottom: '5%'}}>
                        <div style={{width: '45%', display:'inline-block', color: "#555",padding: '8%'}}>
                            <h3>Header1</h3>
                            <p>testing1</p>
                        </div>
                        <img src={calendar} style={{width:'25%', margin: '5%', display:'inline-block'}}/>                        
                    </div>
                    
                    
                    <div style={{marginBottom: '5%'}}>
                        <img src={confirm} style={{width:'25%', margin: '8%', display:'inline-block'}}/>
                        <div style={{width: '45%', display:'inline-block', color: "#555", padding: '5%'}}>
                            <h3>Header1</h3>
                            <p>testing1</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    }