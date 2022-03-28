import React from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import Experienceshort from '../cards/Experience card';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '.././styles.js';
// import LightMode from './LightMode'


function Experience() {
    const classes = styles();
    return (

        <div>
        <style>{'body { background-color: black; }'}</style>

        <Navbar />
            <div className={classes.wrapper}>

            <Experienceshort />
            </div>
        </div>
    );
}

export default Experience;