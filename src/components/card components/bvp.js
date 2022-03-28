import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles.js';
import BVPIcon from "../pictures/BVP-round.png";

function Bessemer() {
    const classes = styles();

    return (
            <div className={`${classes.grid}`}>

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