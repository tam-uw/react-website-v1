import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import PinterestIcon from '.././pictures/Pinterest-circle.png'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles.js';

function Pinterest() {
    const classes = styles();

    return (

        <div className={`${classes.grid}`}>

        <img src={PinterestIcon} className={classes.Normal}/>
        <Typography>
        <b>&nbsp;&nbsp;Software Engineer</b><br></br>
        &nbsp;&nbsp;<a href="https://www.pinterest.com">Pinterest</a> • Internship
        <div style={{"color": "grey"}}>
            &nbsp;&nbsp;Jan 2022 - Mar 2022 • 3 mos<br></br>
        </div>
        <br></br>
        • Shopping Product team<br></br>
        • Building product features to enrich the e-commerce experience for users and advertising partners on Pinterest<br></br>
        • <a href="https://help.pinterest.com/en/business/article/shopping-on-pinterest">Shopping on Pinterest</a>
        </Typography>

        </div>
    );
}

export default Pinterest;