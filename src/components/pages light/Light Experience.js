import React from 'react';
import '../Navbar.css';
import Navbar from '../LightNavbar';
import Experience from '../cards/Experience card';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '.././styles.js';
import Card from "react-bootstrap/Card";
import EducationCard from "../cards/Education card";
// import LightMode from './LightMode'


function About() {
    const classes = styles();
    return (

        <div>

        <Navbar />
            <style>{'body { background-color: lightgrey; }'}</style>

            <div className={classes.wrapper}>

                <div
                    className={classes.smallSpace}>
                </div>
                <Card>
                    <Experience />
                </Card>
            </div>
        </div>
    );
}

export default About;