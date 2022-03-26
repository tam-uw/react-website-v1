import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import '../Navbar.css';
import { strapButton, Container, InputGroup } from 'reactstrap';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import './App.css';
import Grid from '../Grid'
import Card from 'react-bootstrap/Card'
import profile_pic from './pictures/profile_pic.jpeg'
import Square from './pictures/Square-modified.png'
import Waterloo from './pictures/Waterloo-round.png'
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

function Header() {
    const classes = styles();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);

    return (
            
            <div><Card bg={'dark'} text={'white'} className={classes.mediumSpace}>
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
                            <img src={Square} className={classes.Small}/>
                            {/* <b>Block, Inc.</b> */}
                            &nbsp;&nbsp;
                            <a href="https://squareup.com/">Block, Inc.</a>
                            </div> 
                            <br></br>
                            <div>
                            <img src={Waterloo} className={classes.Small}/>
                            &nbsp;&nbsp;
                            <a href="https://uwaterloo.ca/">University of Waterloo</a>
                            </div> 
                        </Typography>
                    </div>
                </Card.Body>
                </Card>

            </div>

                );
                }

export default Header;