import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import Card from 'react-bootstrap/Card'
import Squares from '.././experiences/square.js'
import Canad from '.././experiences/canada.js'
import Pins from '.././experiences/pinterest.js'
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
import AboutCard from "../cards/About card";

// import LightMode from './LightMode'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: "black"
        }}
    />
);

function ExperienceCardHome() {
    const classes = styles();

    return (

        <div className="App">

                <Card
                    className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>Experience</b></Card.Title>

                        <Squares />

                        <div className={`${classes.grid}`}>
                            <img src={Canada} className={classes.Normal}/>
                            <Typography>
                                <Canad />
                            </Typography>
                        </div>
                        <ColoredLine />

                        <div className={`${classes.grid}`}>
                            <img src={Pinterest} className={classes.Normal}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <Pins />
                            </Typography>
                        </div>
                        <ColoredLine />

                        <div className={`${classes.grid}`}>
                            <img src={BVP} className={classes.Normal}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>

                            </Typography>
                        </div>
                        <ColoredLine />

                        <div className={`${classes.grid}`}>
                            <img src={Twitter} className={classes.Normal}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>
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
                            </Typography>
                        </div>

                    </Card.Body>
                </Card>

                <div className={classes.largeSpace}>
                </div>

        </div>
    );
}

export default ExperienceCardHome;