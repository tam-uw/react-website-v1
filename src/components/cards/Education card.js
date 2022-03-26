import React from 'react';
import '../App.css';
import {Typography} from '@material-ui/core';
import Card from 'react-bootstrap/Card'
import Waterloo from '.././pictures/Waterloo-round.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
// import LightMode from './LightMode'
import styles from '.././styles.js';


function EducationCard() {
    const classes = styles();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="App">

                <Card bg={'dark'} text={'white'} className={classes.smallSpace}>
                  
                    <Card.Body>
                        <Card.Title><b>Education</b></Card.Title>
                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            {/*<Grid icon={<FaUniversity style={{fill: "#0", height:"55", width:"55"}}/>}/>*/}
                            <img src={Waterloo} className={classes.Normal}/>
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
                                &nbsp;&nbsp;<a href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship/">Generation Google Scholarship</a>
                            </Typography>
                        </div>
                    </Card.Body>
                </Card>

                <div className={classes.smallSpace}>
                </div>

        </div>
    );
}

export default EducationCard;