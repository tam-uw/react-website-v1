import React from 'react';
import '../Navbar.css';
import Navbar from '../LightNavbar';
import Header from '../cards/Header';
import ExperienceCardHome from '../cards/Experience card short';
import EducationCard from '../cards/Education card';
import AboutCard from '../cards/About card';
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
            <style>{'body { background-color: lightgrey; }'}</style>

            <div className={classes.wrapper}>

                <div
                    className={classes.smallSpace}>
                </div>
                <Card>
                    <Header />
                </Card>

                <div
                    className={classes.smallSpace}>
                </div>
                <Card>
                    <AboutCard />
                </Card>

                <div
                    className={classes.smallSpace}>
                </div>
                <Card>
                    <ExperienceCardHome />
                </Card>

                <Card>
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

                <div
                    className={classes.smallSpace}>
                </div>
                <Card>
                    <EducationCard />
                </Card>

            </div>

        </div>
    );
}

export default Home;