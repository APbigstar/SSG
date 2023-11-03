import React from 'react';
import preloader from '../assets/images/loading2.gif';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    preloader: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate( -50%, -50%)"
    }
})
function Loading() {

    const classes = useStyles();

    return (
        <div className={classes.preloader}>
            <img src={preloader} alt='loading' />
        </div>
    );
}

export default Loading;