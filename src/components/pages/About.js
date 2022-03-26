import React, { useState } from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import Header from '../cards/Header';
import Experienceshort from '../cards/Experience card';
import EducationCard from '../cards/Education card';
import AboutCard from '../cards/About card';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';
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