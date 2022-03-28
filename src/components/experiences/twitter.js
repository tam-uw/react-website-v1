import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import Card from 'react-bootstrap/Card'
import Square from '.././pictures/Square-modified.png'
import Pinterest from '.././pictures/Pinterest-circle.png'
import Twitter from '.././pictures/Twitter-round.png'
import BVP from '.././pictures/BVP-round.png'
import Canada from '.././pictures/Canada-round.png'
import BlockGif from '.././pictures/block.gif'
import transparent from '.././pictures/transparent.png'
import Block from '.././pictures/block.png'
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

        <div className="App">

            <b>&nbsp;&nbsp;Software Engineer</b><br></br>
            &nbsp;&nbsp;<a href="https://www.twitter.com">Twitter</a> • Internship
            <br></br>
            <div style={{"color": "grey"}}>
                &nbsp;&nbsp;Summer 2021 • 4 mos<br></br>
                &nbsp;&nbsp;Cambridge, MA
            </div>
            <br></br>
            • Twitter Spaces team<br></br>
            • Helped shape the social audio experience on Twitter and built a speaker improvements feature<br></br>
            • <a href="https://twitter.com/TwitterSpaces/status/1494416673893494789">One of the projects I implemented on Android</a>

        </div>
    );
}

export default Twitter;