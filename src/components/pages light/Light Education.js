import React from 'react';
import '../LightNavbar.css';
import Navbar from '../LightNavbar';
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
            <style>{'body { background-color: lightgrey; }'}</style>

            <div className={classes.wrapper}>
                <div
                    className={classes.smallSpace}>
                </div>
                <Card>
                    <EducationCard />
                </Card>
            </div>

</div>
    );
}

export default Education;