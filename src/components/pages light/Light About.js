import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';
import LightNavbar from '../LightNavbar';
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { useState } from 'react';
// import LightMode from './LightMode'

//changes to imports

createMuiTheme({
    palette: {
        primary: {
            main:"#0",
        },
    },
    typography: {
        fontFamily: [
            'Roboto'
        ],
        h4: {
            fontWeight: 600,
            fontSize: 28,
            lineHeight: '2rem',
        },
        h5: {
            fontWeight: 100,
            lineHeight: '2rem',
        },
    },
});

const styles = makeStyles({
    wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "left"
    },
    profile_pic: {
        width: "15%",
        marginTop: "2rem"
    },
    Square: {
        width: "80px",
        height: "80px"
    },
    Pinterest: {
        width: "80px",
        height: "80px"
    },
    Twitter: {
        width: "80px",
        height: "80px"
    },
    Canada: {
        width: "80px",
        height: "80px"
    },
    BVP: {
        width: "80px",
        height: "80px"
    },
    Waterloo: {
        width: "80px",
        height: "80px"
    },
    picture: {
        paddingTop: "1.15rem",
        width: "5%"
    },
    largeSpace: {
        marginTop: "3rem"
    },
    mediumSpace:{
        marginTop: "2rem",
    },
    smallSpace:{
        marginTop: "1rem",
    },
    extraSmallSpace:{
        marginTop: "0.5rem",
    },
    grid:{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        flexWrap: "nowrap",
    }
})

function About() {
    const classes = styles();

    return (

        <div className="App">
        <LightNavbar />

            <div className={classes.wrapper}>

                <Card
                    border-width='10px' style={{ width: '58rem' }} className={classes.smallSpace}>
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

        </div>
    );
}

export default About;