import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    wrapper: {
       display: "flex",
       flexDirection: "column",
       alignItems: "left",
       padding: "0 1rem",
    },
    item: {
       paddingTop: "0.5rem",
       paddingLeft: "0rem"
    }
})

function Grid(props) {
    const {icon} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
        </div>
    )
}

export default Grid