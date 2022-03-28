import React from 'react';
import '../Navbar.css';
import '../App.css';
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import Square from '../card components/square.js'
import Canada from '../card components/canada.js'
import Pinterest from '../card components/pinterest.js'
import BVP from '../card components/bvp.js'
import Twitter from '../card components/twitter.js'
import Ontario18 from '../card components/ontario18.js'
import Ontario19 from '../card components/ontario19.js'
import styles from '../styles.js';

const ColoredLine = ({ }) => (
    <hr/>
);

function ExperienceCard() {
    const classes = styles();

    return (

        <div className="App">

                <Card
                    bg={'dark'} text={'white'} className={classes.smallSpace}>
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
                        <ColoredLine />

                        <Ontario19 />
                        <ColoredLine />

                        <Ontario18 />
                    </Card.Body>
                </Card>

                <div className={classes.bigSpace}>
                </div>

        </div>
    );
}

export default ExperienceCard;