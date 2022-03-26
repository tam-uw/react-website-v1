import './App.css';
import LightNavbar from '../LightNavbar';
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import styles from '.././styles.js';
// import LightMode from './LightMode'


function About() {
    const classes = styles();

    return (

        <div className="App">
        <LightNavbar />

                <Card
                    className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>About</b></Card.Title>
                        <Card.Text>
                            I work in tech and have over 2 years of technical experience as
                            a software engineer spanning 1 full-time role and 4 co-ops/internships.
                            Interested in fintech, crypto, product management, distributed systems, and all things internet-related.
                        </Card.Text>
                    </Card.Body>
                </Card>


                <div className={classes.largeSpace}>
                </div>

        </div>
    );
}

export default About;