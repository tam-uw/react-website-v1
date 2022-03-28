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
import BVPIcon from "../pictures/BVP-round.png";

// import LightMode from './LightMode'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: "black"
        }}
    />
);

function Bessemer() {
    const classes = styles();

    return (

        <div className="App">

            <img src={BVPIcon} className={classes.Normal}/>
            <Typography variant="h7">
            <b>&nbsp;&nbsp;Fellow</b><br></br>
            &nbsp;&nbsp;<a href="https://www.bvp.com">Bessemer Venture Partners</a> • Internship
            <div style={{"color": "grey"}}>
                &nbsp;&nbsp;2022 • 1 yr<br></br>
            </div>
            </Typography>

        </div>
    );
}

export default Bessemer;