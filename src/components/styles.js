import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = makeStyles({

    wrapper: {
        width: "50%",
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

export default styles;