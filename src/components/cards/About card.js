import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
// import LightMode from './LightMode'

const styles = makeStyles({
    smallSpace:{
        marginTop: "1rem",
    }
})

function AboutCard() {
    const classes = styles();

    return (

        <div className="App">

            <style>{'body { background-color: black; }'}</style>

            <div className={classes.wrapper}>

                <Card
                    bg={'dark'} text={'white'} className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>About</b></Card.Title>
                        <Card.Text>
                            I work in tech and have over 2 years of technical experience as
                            a software engineer spanning 1 full-time role and 4 co-ops/internships.
                            Interested in fintech, crypto, product management, distributed systems, and all things internet-related.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>

        </div>
    );
}

export default AboutCard;