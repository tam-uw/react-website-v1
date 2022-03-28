import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import SquareIcon from '.././pictures/Square-modified.png'
import BlockGif from '.././pictures/block.gif'
import transparent from '.././pictures/transparent.png'
import Block from '.././pictures/block.png'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles.js';

function Squares() {
    const classes = styles();

    return (
        <div className="App">

            <div className={`${classes.grid}`}>
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
                <img src={SquareIcon} className={classes.Normal}/>
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
        </div>
    );
}

export default Squares;