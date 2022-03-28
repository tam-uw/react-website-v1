import React from 'react';
import '../Navbar.css';
import Navbar from '../LightNavbar';
import Experienceshort from '../cards light/Experience card';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '.././styles.js';
// import LightMode from './LightMode'


function About() {
    const classes = styles();
    return (

        <div>

        <Navbar />
            <div className={classes.wrapper}>

            <Experienceshort />
            </div>
            </div>
    );
}

export default About;