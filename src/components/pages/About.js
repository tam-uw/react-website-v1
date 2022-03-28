import React from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import AboutCard from '../cards/About card';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '.././styles.js';
// import LightMode from './LightMode'

function About() {
    const classes = styles();
    return (

        <div>

        <Navbar />
        <AboutCard />
        </div>
    );
}

export default About;