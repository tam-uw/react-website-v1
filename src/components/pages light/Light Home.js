import React, { useState } from 'react';
import '../Navbar.css';
import Navbar from '../LightNavbar';
import Header from '../cards light/Header';
import ExperienceCardHome from '../cards light/Experience card short';
import EducationCard from '../cards light/Education card';
import AboutCard from '../cards light/About card';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import styles from '.././styles.js';

// import LightMode from './LightMode'

function Home() {
    const classes = styles();
    
    return (

        <div className="App">
        <Navbar />

            <div className={classes.wrapper}>

                <Header />
                <AboutCard />
                <ExperienceCardHome />
                <Card 
                >
                <div 
                className={classes.smallSpace}>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Link to='/experience'>
                        Show all experiences → 
                    </Link>
                </div>

                <div 
                className={classes.smallSpace}>
                </div>
                </Card>
                <EducationCard />

            </div>

        </div>
    );
}

export default Home;