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
        <style>{'body { background-color: black; }'}</style>

        <Navbar />
            <div className={classes.wrapper}>
                <div
                    className={classes.smallSpace}>
                </div>
                <Card
                    bg={'dark'} text={'white'}>
                    <EducationCard />
                </Card>
                <div
                    className={classes.bigSpace}>
                </div>
            </div>

        </div>
    );
}

export default Education;