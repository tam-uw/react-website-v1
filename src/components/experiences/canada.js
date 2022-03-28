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
import CanadaIcon from "../pictures/Canada-round.png";

// import LightMode from './LightMode'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: "black"
        }}
    />
);

function Squares() {
    const classes = styles();

    return (

        <div className="App">

            <img src={CanadaIcon} className={classes.Normal}/>
            <Typography>
            <b>&nbsp;&nbsp;Software Engineer</b><br></br>
            &nbsp;&nbsp;<a href="https://www.canada.ca/en/environment-climate-change.html">Environment Canada</a> • Internship
            <div style={{"color": "grey"}}>
                &nbsp;&nbsp;Jul 2020 - Jun 2021 • 1 yr
            </div>
            </Typography>

        </div>
    );
}

export default Squares;