import React from 'react';
import './App.css';
import LightNavbar from '../LightNavbar';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Card from 'react-bootstrap/Card'
import Waterloo from './pictures/Waterloo-round.png'
import "bootstrap/dist/css/bootstrap.min.css";
// import LightMode from './LightMode'

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

function Education() {
    const classes = styles();

    return (

        <div className="App">
            <LightNavbar />

            <div className={classes.wrapper}>

                <Card
                    border-width='10px' style={{ width: '58rem' }} className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>Education</b></Card.Title>
                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            {/*<Grid icon={<FaUniversity style={{fill: "#0", height:"55", width:"55"}}/>}/>*/}
                            <img src={Waterloo} className={classes.Waterloo}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;University of Waterloo</b><br></br>
                                &nbsp;&nbsp;Bachelor of Science<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Present
                                </div>
                                &nbsp;&nbsp;Grade: 83.67% (3.77/4.00)<br></br>
                                <br></br>
                                &nbsp;&nbsp;Honours:<br></br>
                                &nbsp;&nbsp;Term Distinction - Fall 2021
                                <br></br>
                                &nbsp;&nbsp;Awards:<br></br>
                                &nbsp;&nbsp;Generation Google Scholarship<br></br>
                                &nbsp;&nbsp;https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship/
                            </Typography>
                        </div>
                    </Card.Body>
                </Card>

                <div className={classes.largeSpace}>
                </div>
            </div>

        </div>
    );
}

export default Education;