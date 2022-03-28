import React from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import EducationCard from '../cards light/Education card';
// import LightMode from './LightMode'
import styles from '.././styles.js';


function Education() {
    const classes = styles();
    return (

        <div>

            <Navbar />
            <div className={classes.wrapper}>

            <EducationCard />
            </div>

</div>
    );
}

export default Education;