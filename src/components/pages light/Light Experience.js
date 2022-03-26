import React from 'react';
import '../Navbar.css';
import Navbar from '../LightNavbar';
import Experienceshort from '../cards light/Experience card';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '.././styles.js';
// import LightMode from './LightMode'


function About() {
    const classes = styles();
    return (

        <div>

        <Navbar />
                <Experienceshort />
            </div>
    );
}

export default About;