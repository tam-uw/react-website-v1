import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card'
import Short from './short experience.js'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles.js';

function ExperienceCardHome() {
    const classes = styles();

    return (

        <div className="App">

                <Card.Body>
                    <Card.Title><b>Experience</b></Card.Title>

                    <Short />

                </Card.Body>
        </div>
    );
}

export default ExperienceCardHome;