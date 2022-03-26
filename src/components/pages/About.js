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
// import LightMode from './LightMode'

const styles = makeStyles({
    wrapper: {
        width: "50%",
        margin: "auto",
    },
})

function About() {
    const classes = styles();
    return (

        <div>
        <style>{'body { background-color: black; }'}</style>

        <Navbar />
            <div className={classes.wrapper}>
                <AboutCard />
            </div>
        </div>
    );
}

export default About;