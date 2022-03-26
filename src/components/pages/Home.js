import React, { useState } from 'react';
import '../Navbar.css';
import Navbar from '../Navbar';
import Header from '../cards/Header';
import Experienceshort from '../cards/Experience card';
import EducationCard from '../cards/Education card';
import AboutCard from '../cards/About card';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import LightMode from './LightMode'

//changes to imports

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

                <Header />
                <AboutCard />
                <Experienceshort />
                <EducationCard />

                <div className={classes.largeSpace}>
                </div>
            </div>

        </div>
    );
}

export default Home;