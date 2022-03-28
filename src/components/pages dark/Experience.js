import React from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import ExperienceCard from '../cards/Experience card';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '.././styles.js';
import Card from "react-bootstrap/Card";

function Experience() {
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
                    <ExperienceCard />
                </Card>
            </div>
        </div>
    );
}

export default Experience;