import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import Navbar from '../Navbar';
import closeMobileMenu from '../Navbar';
import { strapButton, Container, InputGroup } from 'reactstrap';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import './App.css';
import Grid from '../Grid'
import Card from 'react-bootstrap/Card'
import profile_pic from './pictures/profile_pic.jpeg'
import Square from './pictures/Square-modified.png'
import Pinterest from './pictures/Pinterest-circle.png'
import Twitter from './pictures/Twitter-round.png'
import BVP from './pictures/BVP-round.png'
import Waterloo from './pictures/Waterloo-round.png'
import WaterlooSmall from './pictures/Waterloo-round.png'
import Canada from './pictures/Canada-round.png'
import Ontario from './pictures/ontario-round.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal'
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

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.5,
            width: 800
        }}
    />
);

const styles = makeStyles({
    profile_pic: {
      width: "152px",
      height: "152px"
    },
    Normal: {
        width: "48px",
        height: "48px"
    },
    Small: {
        width: "32px",
        height: "32px"
    },
    picture: {
        paddingTop: "1.15rem",
        width: "5%"
    },
    smallSpace:{
        marginTop: "1rem",
    },
    grid:{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        flexWrap: "nowrap",
    }
})

function Experienceshort() {
    const classes = styles();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="App">

            <style>{'body { background-color: black; }'}</style>

            <div className={classes.wrapper}>
               
                <Card
                    bg={'dark'} text={'white'} className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>Experience</b></Card.Title>

                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            <img src={Square} className={classes.Normal}/>
                            {/*<Grid icon={<SiSquare style={{fill: "#0", height:"55", width:"55"}}/>}/>*/}
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;<a href="https://www.squareup.com">Square</a> • Full-time
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Mar 2022 - Present • 1 mo
                                </div>
                                <div>
                                • Payment Platform team
                                <br></br>
                                • Building software that sellers use to sign up for Square and start taking payments.
                                </div>
                            </Typography>
                        </div>
                        <ColoredLine color="white" />

                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            <img src={Square} className={classes.Normal}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;<a href="https://www.block.xyz">Block</a> • Full-time
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Mar 2022 - Present • 1 mo
                                </div>
                                <div>
                                • Payment Platform team
                                <br></br>
                                • Building software that sellers use to sign up for Square and start taking payments.
                                </div>
                            </Typography>
                        </div>
                        <ColoredLine color="white" />

                        <div className={`${classes.grid}`}>
                            <img src={Canada} className={classes.Normal}/>
                            <Typography variant="h8" className={classes.extraSmallSpace}>
                            <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;<a href="https://www.canada.ca/en/environment-climate-change.html">Environment Canada</a> • Internship
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Jul 2020 - Jun 2021 • 1 yr
                                </div>
                            </Typography>
                        </div>
                        <ColoredLine color="white" />

                        <div className={`${classes.grid}`}>
                            <img src={Pinterest} className={classes.Normal}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;<a href="https://www.pinterest.com">Pinterest</a> • Internship
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Jan 2022 - Mar 2022 • 3 mos<br></br>
                                </div>
                                <br></br>
                                • Shopping Product team<br></br>
                                • Building product features to enrich the e-commerce experience for users and advertising partners on Pinterest<br></br>
                                • <a href="https://help.pinterest.com/en/business/article/shopping-on-pinterest">Shopping on Pinterest</a>
                            </Typography>
                        </div>
                        <ColoredLine color="white" />

                        <div className={`${classes.grid}`}>
                            <img src={BVP} className={classes.Normal}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Fellow</b><br></br>
                                &nbsp;&nbsp;<a href="https://www.bvp.com">Bessemer Venture Partners</a> • Internship
                                <div style={{"color": "grey"}}>
                                &nbsp;&nbsp;2022 • 1 yr<br></br>
                                </div>
                            </Typography>
                        </div>
                        <ColoredLine color="white" />

                        <div className={`${classes.grid}`}>
                            <img src={Twitter} className={classes.Normal}/>
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;<a href="https://www.twitter.com">Twitter</a> • Internship
                                <br></br> 
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Summer 2021 • 4 mos<br></br>
                                    &nbsp;&nbsp;Cambridge, MA
                                </div>
                                <br></br>
                                • Twitter Spaces team<br></br>
                                • Helped shape the social audio experience on Twitter and built a speaker improvements feature<br></br>
                                • <a href="https://twitter.com/TwitterSpaces/status/1494416673893494789">One of the projects I implemented on Android</a>
                            </Typography>
                        </div>
                        <ColoredLine color="white" />

                        <li >
                        <Link
                            to='/experience'
                            onClick={closeMobileMenu}
                        >
                            Show all experiences →
                        </Link>
                        </li>
                    </Card.Body>
                </Card>

                <div className={classes.largeSpace}>
                </div>
            </div>

        </div>
    );
}

export default Experienceshort;