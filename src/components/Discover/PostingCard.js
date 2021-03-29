import React, { Component } from 'react';
import { useHistory } from "react-router";
import profilepic from '../../Images/jane.jpg';

import styles from './styles.css';

function PostingCard(props) {
    var postingname = props.postingname;
    var postingjob = props.postingjob;
    var postingday = props.postingday;
    var postingdist = props.postingdist;


    let history = useHistory()

    function handleClick() {
        history.push("/Profile")
    }
  
    return (
        <div>
            <div class="card" onClick={handleClick}>
            <div class="card-body" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '10%'}}>
            {/* <img src={jane} class="card-img-top" alt="profile" style={{borderRadius: '100%'}}/> */}
                <img src={profilepic} alt="Thumbnail Image" class="img-raised rounded-circle img-fluid"/> 
                <h5 class="info">{postingname}</h5>
                <h6 class="info">{postingjob}</h6>
                <ul class="a">
                <li class="card-text">{postingday}</li>
                {/* <li class="card-text">In Person. Online</li> */}
                <li class="card-text">{postingdist}</li>
                </ul>
                <p class="center" style={{marginBottom: '0px', paddingLeft: '70%'}}>4.5 <i class="material-icons-outlined">star_outline</i></p>
            </div>
            </div>
        </div>
    )
  }
  
  export default PostingCard;