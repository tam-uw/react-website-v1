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

                    <div className={`${classes.grid} ${classes.smallSpace}`}>
                        <div>
                            <img src={Block} className={classes.Normal}/>
                        </div>
                        <Typography >
                            <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                            &nbsp;&nbsp;<a href="https://www.block.xyz">Block</a><br></br><br></br>
                        </Typography>
                    </div>
                    <div className={`${classes.grid} `}>
                        {/*<img src={transparent} className={classes.Normal}/>*/}
                        <img src={Square} className={classes.Normal}/>
                        <Typography variant="h7" >
                            &nbsp;&nbsp;<a href="https://www.squareup.com">Square</a> • Full-time
                            <div style={{"color": "grey"}}>
                                &nbsp;&nbsp;Mar 2022 - Present • 1 mo
                            </div>
                            <div>
                                &nbsp;&nbsp;• Payment Platform team
                                <br></br>
                                &nbsp;&nbsp;• Building software that sellers use to sign up for Square and start taking payments.
                            </div>
                        </Typography>
                    </div>
                    <ColoredLine />

            <div className={classes.largeSpace}>
            </div>

        </div>
    );
}

export default Squares;