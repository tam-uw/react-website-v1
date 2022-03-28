import React from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import EducationCard from '../cards/Education card';
// import LightMode from './LightMode'
import styles from '.././styles.js';
import Card from "react-bootstrap/Card";


function Education() {
    const classes = styles();
    return (

        <div>

            <Navbar />
            <div className={classes.wrapper}>

            <Card>
                <EducationCard />
            </Card>
            </div>

</div>
    );
}

export default Education;