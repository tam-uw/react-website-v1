import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import Card from 'react-bootstrap/Card'
import Squares from '.././experiences/square.js'
import Canad from '.././experiences/canada.js'
import Pins from '.././experiences/pinterest.js'
import BVP from '.././experiences/bvp.js'
import Twitter from '.././experiences/twitter.js'
import Square from '.././pictures/Square-modified.png'
import Pinterest from '.././pictures/Pinterest-circle.png'
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
                        <ColoredLine />

                        <Canad />
                        <ColoredLine />

                        <Pins />
                        <ColoredLine />

                        <BVP />
                        <ColoredLine />

                        <Twitter />

                    </Card.Body>
                </Card>

        </div>
    );
}

export default ExperienceCardHome;