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
import Ontario from "../pictures/ontario-round.png";

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
        <div className={`${classes.grid}`}>
            <img src={Ontario} className={classes.Normal}/>
            <Typography variant="h7" className={classes.extraSmallSpace}>
                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                &nbsp;&nbsp;<a href="https://www.ontario.ca/page/government">Ontario</a> • Internship
                <br></br>
                <div style={{"color": "grey"}}>
                    &nbsp;&nbsp;Summer 2021 • 4 mos<br></br>
                </div>
            </Typography>
        </div>
    );
}

export default Squares;