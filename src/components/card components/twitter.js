import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import Card from 'react-bootstrap/Card'
import Square from '.././pictures/Square-modified.png'
import Pinterest from '.././pictures/Pinterest-circle.png'
import TwitterIcon from '.././pictures/Twitter-round.png'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles.js';

// import LightMode from './LightMode'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: "black"
        }}
    />
);

function Twitter() {
    const classes = styles();

    return (
         <div className={`${classes.grid}`}>
             <img src={TwitterIcon} className={classes.Normal}/>
             <Typography variant="h7" className={classes.extraSmallSpace}>

             <b>&nbsp;&nbsp;Software Engineer</b><br></br>
            &nbsp;&nbsp;<a href="https://www.twitter.com">Twitter</a> • Internship
            <br></br>
            <div style={{"color": "grey"}}>
                &nbsp;&nbsp;Jun 2021 - Sep 2021 • 4 mos<br></br>
                &nbsp;&nbsp;Cambridge, MA
            </div>
            <br></br>
            • Twitter Spaces team<br></br>
            • Helped shape the social audio experience on Twitter and built a speaker improvements feature<br></br>
            • <a href="https://twitter.com/TwitterSpaces/status/1494416673893494789">One of the projects I implemented on Android</a>
             </Typography>

        </div>
    );
}

export default Twitter;