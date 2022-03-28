import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card'
import Square from '../card components/square.js'
import Canada from '../card components/canada.js'
import Pinterest from '../card components/pinterest.js'
import BVP from '../card components/bvp.js'
import Twitter from '../card components/twitter.js'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles.js';

const ColoredLine = () => (
    <hr/>
);

function ExperienceCardHome() {
    const classes = styles();

    return (

        <div className="App">

                <Card.Body>
                    <Card.Title><b>Experience</b></Card.Title>
                    <Square />
                    <ColoredLine />

                    <Canada />
                    <ColoredLine />

                    <Pinterest />
                    <ColoredLine />

                    <BVP />
                    <ColoredLine />

                    <Twitter />

                </Card.Body>
        </div>
    );
}

export default ExperienceCardHome;