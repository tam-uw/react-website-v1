import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import './App.css';
import Navbar from '../Navbar';
import Grid from '../Grid'
import Card from 'react-bootstrap/Card'
import profile_pic from './pictures/profile_pic.jpeg'
import Square from './pictures/Square-round.png'
import SquareSmall from './pictures/Square-round.png'
import Pinterest from './pictures/pinterest-round.png'
import Twitter from './pictures/Twitter-round.png'
import BVP from './pictures/BVP-round.png'
import Waterloo from './pictures/Waterloo-round.png'
import WaterlooSmall from './pictures/Waterloo-round.png'
import Canada from './pictures/Canada-round.png'
import Ontario from './pictures/ontario-round.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
    wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "left"
    },
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

function Home() {
    const classes = styles();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="App">
        <Navbar />


            <style>{'body { background-color: black; }'}</style>

            <div className={classes.wrapper}>
                <Card bg={'dark'} text={'white'} className={classes.mediumSpace}>
                    <Card.Body>
                        <img src={profile_pic} className={classes.profile_pic}/>

                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            <Card.Title>
                                <div>
                                <h1 class="text-heading-xlarge inline t-24 v-align-middle break-words">Tameem Hassan
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </h1>
                                </div>
                                <div class="text-body-medium break-words">
                                Software Engineer at Block
                                </div>       
                                <span class="text-body-small inline t-black--light break-words">
                                Seattle, Washington, United States
                                </span>                         
                                <>
                                    <Button variant="link" onClick={handleShow}>
                                        <b>Contact info</b>
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Tameem Hassan</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>

                                            <Typography variant="h6">
                                                <b><strong>Contact info</strong></b><br></br>
                                                <br></br>
                                            </Typography>
                                            <b>LinkedIn Profile</b>
                                            <br></br>
                                            <a href="https://www.linkedin.com/in/tam-h/">linkedin.com/in/tam-h</a><br></br>

                                            <br></br>
                                            <b>Email</b>
                                            <br></br>
                                            <a href="mailto:tameemhass@gmail.com">tameemhass@gmail.com</a><br></br>
                                        </Modal.Body>
                                    </Modal>
                                </>

                            </Card.Title>
                            <Grid image src={profile_pic}/>
                            <Typography className={classes.noSpace}>
                            <div>
                                <img src={SquareSmall} className={classes.Small}/>
                                {/* <b>Block, Inc.</b> */}
                                &nbsp;&nbsp;
                                <a href="https://squareup.com/">Block, Inc.</a>
                                </div> 
                                <br></br>
                                <div>
                                <img src={WaterlooSmall} className={classes.Small}/>
                                  &nbsp;&nbsp;
                                  <a href="https://uwaterloo.ca/">University of Waterloo</a>
                                </div> 
                            </Typography>
                        </div>
                    </Card.Body>
                </Card>

                <Card
                    bg={'dark'} text={'white'}  className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>About</b></Card.Title>
                        <Card.Text>
                            I work in tech and have over 2 years of technical experience as
                            a software engineer spanning 1 full-time role and 4 co-ops/internships.
                            Interested in fintech, crypto, product management, distributed systems, and all things internet-related.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card
                    bg={'dark'} text={'white'} className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>Experience</b></Card.Title>

                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            <img src={Square} className={classes.Normal}/>
                            {/*<Grid icon={<SiSquare style={{fill: "#0", height:"55", width:"55"}}/>}/>*/}
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;Square<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Mar 2022 - Present • 1 mo
                                </div>
                            </Typography>
                        </div>
                        <ColoredLine color="black" />

                        <div className={`${classes.grid}`}>
                            <img src={Canada} className={classes.Normal}/>
                            {/*<Grid icon={<FaCanadianMapleLeaf style={{fill: "#E60023", height:"55", width:"55"}}/>}/>*/}
                            <Typography variant="h8" className={classes.extraSmallSpace}>
                                &nbsp;&nbsp;Environment Canada<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Jul 2020 - Jun 2021 • 1 yr
                                </div>
                            </Typography>
                        </div>
                        <ColoredLine color="black" />

                        <div className={`${classes.grid}`}>
                            <img src={Pinterest} className={classes.Normal}/>
                            {/*<Grid icon={<SiPinterest style={{fill: "#E60023", height:"55", width:"55"}}/>}/>*/}
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;Pinterest - Internship<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Winter 2022 • 3 mos<br></br>
                                </div>
                                <br></br>
                                • Worked on the Shopping Product team in Pinterest's Core Engineering Org.<br></br>
                                • Building product features to enrich the e-commerce experience for users and advertising partners on Pinterest
                            </Typography>
                        </div>
                        <ColoredLine color="black" />

                        <div className={`${classes.grid}`}>
                            <img src={BVP} className={classes.Normal}/>
                            {/*<Grid icon={<SiPinterest style={{fill: "#E60023", height:"55", width:"55"}}/>}/>*/}
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;BVP - Internship<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Winter 2022 • 3 mos<br></br>
                                </div>
                                <br></br>
                                • Worked on the Shopping Product team in Pinterest's Core Engineering Org.<br></br>
                                • Building product features to enrich the e-commerce experience for users and advertising partners on Pinterest
                            </Typography>
                        </div>
                        <ColoredLine color="white" />

                        <div className={`${classes.grid}`}>
                            <img src={Twitter} className={classes.Normal}/>
                            {/*<Grid icon={<FaTwitterSquare style={{fill: "#1DA1F2", height:"55", width:"55"}}/>}/>*/}
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;Twitter - Internship<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Summer 2021 • 4 mos<br></br>
                                    &nbsp;&nbsp;Cambridge, MA
                                </div>
                                <br></br>
                                • Worked on the Twitter Spaces team in Twitter's Consumer Engineering Org.<br></br>
                                • Helped shape the social audio experience on Twitter and built a speaker improvements feature.
                            </Typography>
                        </div>
                        <ColoredLine color="white" />

                    </Card.Body>
                </Card>

                <Card
                    bg={'dark'} text={'white'} className={classes.smallSpace}>
                    <Card.Body>
                        <Card.Title><b>Education</b></Card.Title>
                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            {/*<Grid icon={<FaUniversity style={{fill: "#0", height:"55", width:"55"}}/>}/>*/}
                            <img src={Waterloo} className={classes.Normal}/>
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

export default Home;