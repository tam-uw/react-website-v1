import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import './App.css';
import LightNavbar from '../LightNavbar';
import Card from 'react-bootstrap/Card'
import Square from './pictures/Square-round.png'
import Pinterest from './pictures/pinterest-round.png'
import Twitter from './pictures/Twitter-round.png'
import BVP from './pictures/BVP-round.png'
import Canada from './pictures/Canada-round.png'
import Ontario from './pictures/ontario-round.png'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
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
    Ontario: {
        width: "80px",
        height: "80px"
    },
    BVP: {
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

function Experience() {
    const classes = styles();

    return (

        <div className="App">

            <LightNavbar />

            <div className={classes.wrapper}>

            <Card style={{ width: '58rem' }} className={classes.mediumSpace}>

                    <Card.Body>
                        <Card.Title><b>Experience</b></Card.Title>

                        <div className={`${classes.grid} ${classes.smallSpace}`}>
                            <img src={Square} className={classes.Square}/>
                            {/*<Grid icon={<SiSquare style={{fill: "#0", height:"55", width:"55"}}/>}/>*/}
                            <Typography variant="h7" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                                &nbsp;&nbsp;Square<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;Mar 2022 - Present • 1 mo
                                </div>
                            </Typography>
                        </div>
                        <ColoredLine/>

                        <div className={`${classes.grid}`}>
                            <img src={Canada} className={classes.Canada}/>
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
                            <img src={Pinterest} className={classes.Pinterest}/>
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
                            <img src={BVP} className={classes.BVP}/>
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
                        <ColoredLine />

                        <div className={`${classes.grid}`}>
                            <img src={Twitter} className={classes.Twitter}/>
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
                        <ColoredLine />

                        <div className={`${classes.grid}`}>
                            <img src={Ontario} className={classes.Ontario}/>
                            <Typography variant="h8" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Application Programmer</b><br></br>
                                &nbsp;&nbsp;Government of Ontario<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;May 2019 - Aug 2019 • 4 mos
                                </div>
                            </Typography>
                        </div>
                        <ColoredLine />

                        <div className={`${classes.grid}`}>
                            <img src={Ontario} className={classes.Ontario}/>
                            <Typography variant="h8" className={classes.extraSmallSpace}>
                                <b>&nbsp;&nbsp;Application Programmer</b><br></br>
                                &nbsp;&nbsp;Government of Ontario<br></br>
                                <div style={{"color": "grey"}}>
                                    &nbsp;&nbsp;May 2018 - Aug 2018 • 4 mos
                                </div>
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

export default Experience;