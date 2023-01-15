import React from 'react';
import '../Navbar.css';
import '../App.css';
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import Ontario18 from '../card components/ontario18.js'
import Ontario19 from '../card components/ontario19.js'
import styles from '../styles.js';
import Short from './short experience.js'

const ColoredLine = ({ }) => (
    <hr/>
);

function ExperienceCard() {

    return (
                    <Card.Body>
                        <Card.Title><b>Experience</b></Card.Title>

                        <Short />
                        <ColoredLine />

                        {/*<Ontario19 />*/}
                        {/*<ColoredLine />*/}

                        {/*<Ontario18 />*/}
                    </Card.Body>
 );
}

export default ExperienceCard;