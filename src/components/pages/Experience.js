import React from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import ExperienceCard from '../cards/Experience card';
import ExperienceShort from '../cards/Experience card short';
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
                <ExperienceCard />
            </div>
        </div>
    );
}

export default Experience;