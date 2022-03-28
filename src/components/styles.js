import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = makeStyles({

    wrapper: {
        width: "50%",
        margin: "auto",
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
    bigSpace:{
    marginTop: "5rem",
    },
    grid:{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        flexWrap: "nowrap",
    }
})
export default styles;