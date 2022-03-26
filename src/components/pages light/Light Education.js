import React from 'react';
import './App.css';
import LightNavbar from '../LightNavbar';
import {Typography} from '@material-ui/core';
import Card from 'react-bootstrap/Card'
import Waterloo from '.././pictures/Waterloo-round.png'
import "bootstrap/dist/css/bootstrap.min.css";
// import LightMode from './LightMode'
import styles from '.././styles.js';

function Education() {
    const classes = styles();

    return (

        <div className="App">
            <LightNavbar />

                <Card
                    className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>Education</b></Card.Title>
                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            <img src={Waterloo} className={classes.Waterloo}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;University of Waterloo</b><br></br>
                                &nbsp;&nbsp;Bachelor of Science<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Present
                                </div>
                                &nbsp;&nbsp;Grade: 83.67% (3.77/4.00)<br></br>
                                <br></br>
                                &nbsp;&nbsp;Honours:<br></br>
                                &nbsp;&nbsp;Term Distinction - Fall 2021
                                <br></br>
                                &nbsp;&nbsp;Awards:<br></br>
                                &nbsp;&nbsp;Generation Google Scholarship<br></br>
                                &nbsp;&nbsp;https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship/
                            </Typography>
                        </div>
                    </Card.Body>
                </Card>

                <div className={classes.largeSpace}>
                </div>
            </div>

    );
}

export default Education;