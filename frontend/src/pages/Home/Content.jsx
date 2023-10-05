import React from 'react'
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import "../../assets/fonts/fonts.css";

const useStyles = makeStyles({
    mainBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate( -106%, -65%)"
    },
    p: {
        fontFamily: "Poppines-bold",
        width: "90%",
        fontSize: "65px",
        color: "white",
        textAlign: "center",
        marginTop: "20%",
        "@media (max-width: 430px)": {
          display: "none",
        },
      },
      span: {
        fontFamily: "Poppines-medium",
        color: "#F39200",
      },
      scroll_down: {
        position: "fixed",
        top: "103%",
        left:"0px",
        color: "white",
        fontSize: "20px",
        fontWeight: "blod",
        transform: "rotate(-90deg)",
        "@media (max-width: 430px)": {
            display: "none",
        },    
      },
      hiddenContent: {
          opacity: "0",
          transition: "all 0.2s ease-in-out"
      }
})
const Content = ( { isMenuOpen }) => {

    const classes = useStyles();

    return(
        <Box className={`${classes.mainBox} ${ isMenuOpen ? classes.hiddenContent : "" }`}>
            <p className={classes.p}>
                Welcome to our <span className={classes.span}>trustworth</span>{" "}
                <br /> regional trading agency!
            </p>
            <p className={classes.scroll_down}>
                SCROLL DOWN
            </p>
        </Box>
    )
}

Content.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired, // isMenuOpen should be a boolean and is required
};

export default Content;