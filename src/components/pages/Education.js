import React from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import EducationCard from '../cards/Education card';
// import LightMode from './LightMode'
import styles from '.././styles.js';


function Education() {
    const classes = styles();
    return (

        <div>
        <style>{'body { background-color: black; }'}</style>

        <Navbar />
                <EducationCard />
        </div>
    );
}

export default Education;