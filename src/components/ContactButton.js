import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import '../Navbar.css';
import {Typography} from '@material-ui/core';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal'
// import LightMode from './LightMode'
import styles from './styles.js';

function ContactButton() {
    const classes = styles();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

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

        </div>

        );
    }

export default ContactButton;