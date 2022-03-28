import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import OntarioIcon from '.././pictures/ontario-round.png'
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

function Ontario() {
    const classes = styles();

    return (
        <div className={`${classes.grid}`}>
            <img src={OntarioIcon} className={classes.Normal}/>
            <Typography variant="h7" className={classes.extraSmallSpace}>
                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                &nbsp;&nbsp;<a href="https://www.ontario.ca/page/government">Ontario</a> • Internship
                <br></br>
                <div style={{"color": "grey"}}>
                    &nbsp;&nbsp;May 2019 - Aug 2019 • 4 mos<br></br>
                </div>
            </Typography>
        </div>
    );
}

export default Ontario;