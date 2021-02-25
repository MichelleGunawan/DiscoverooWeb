import React, { Component } from 'react';


import HomeNav from '../NavBars/HomeNav'
import img from '../../Images/Artboard1.png'
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
                
                <img src={img} className="landingimg"/>            
            </div>
        )
    }
    }