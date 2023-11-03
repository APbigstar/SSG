import React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from '@mui/material/Collapse';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Brand from "../assets/images/main_logo.png";
import Logo from "../assets/images/earth.png";

const useStyles = makeStyles({
  mainBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    left: "0",
    right: "0",
    top: "55px",
    zIndex: 10,
    padding: "0 100px",
    "@media (max-width: 430px)": {
      padding: "0 25px",
    },

  },
  menuBar: {
    width: "50px",
    height: "5px",
    borderRadius: "5px",
    backgroundColor: "#F39200",
    "@media (max-width: 430px)": {
      width: "27px",
    },
    transition: "all 0.2s ease-in-out"
  },

  secondMenuBar: {
    marginTop: "10px",
    marginLeft: "-20px",
    "@media (max-width: 430px)": {
      marginTop: "8px",
      marginLeft: "-10px",
    }
  },
  brand: {
    display: "flex",
    position: "relative",
    justifyContent: "space-evenly",
    alignItems: "center",
    transition: "all 0.1s 0.2s ease-in-out",
    "@media (max-width: 430px)": {
      marginTop: "8px",
      marginLeft: "-10px",
      padding: "0 16px",
    }
  },

  brandLine: {
    width: "250px",
    height: "1px",
    backgroundColor: "grey",
    "@media (max-width: 430px)": {
      width: "60px",
    },
  },
  brandImg: {
    "@media (max-width: 430px)": {
      width: "63%",
    },
  },

  firstMenuBarAction: {
    position: "relative",
    left: "-19px",
    transform: "rotate(45deg)",
    "@media (max-width: 430px)": {
      left: "-3px",
    },


  },
  secondMenuBarAction: {
    transform: "rotate(-45deg)",
    position: "relative",
    top: '-15px',
    "@media (max-width: 430px)": {
      top: '-12px',
      left: "8px"
    },
  },

  navBarHideAction: {
    left: "-35%",
    opacity: 0.8,
    transition: "all 0.1s 0.1s ease-in-out",
    filter: "blur(10px)",
    zIndex: "-1"
  },
  navBarShowAction: {
    left: "0%",
    opacity: 1,
    transition: "all 0.1s 0.05s ease-in-out",
    zIndex: "0"
  },
  hiddenLogo: {
    opacity: "0",
    transition: "all 0.1s 0.05s ease-in-out",
  },
  logo: {
    "@media (max-width: 430px)": {
      width: "36px !important"
    },
  }

})

// eslint-disable-next-line react/prop-types
const Header = ({ isMenuOpen, setIsMenuOpen, loading }) => {
  console.log(loading);
  const classes = useStyles();
  const [isShow, setIsShow] = React.useState(false)
  const langList = ["AN", "FR", "TR", "EN"];


  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <>
      {
        loading ? (
          <div></div>
        ) : (

          <Box className={classes.mainBox}>
            <Box
              className={classes.menuBtn}
              onClick={showMenu}
            >
              <div className={`${classes.menuBar} ${isMenuOpen ? classes.firstMenuBarAction : ""}`}></div>
              <div className={`${classes.menuBar} ${classes.secondMenuBar} ${isMenuOpen ? classes.secondMenuBarAction : ""}`}></div>
            </Box>

            <Box className={`${classes.brand} ${isMenuOpen ? classes.navBarHideAction : classes.navBarShowAction} `} >
              <img src={Brand} className={classes.brandImg} />
            </Box>

            <Box className={`${isMenuOpen ? classes.hiddenLogo : " "}`}>
              <img
                className={classes.logo}
                src={Logo}
                style={{ position: "relative" }}
                onMouseEnter={() => setIsShow(true)}
                onMouseLeave={() => setIsShow(false)}

              />
              <Collapse
                in={isShow}
                sx={{ position: "absolute" }}
                onMouseEnter={() => setIsShow(true)}
                onMouseLeave={() => setIsShow(false)}
              >
                <List>
                  {langList.map((item) => (
                    <ListItem key={item}>
                      <ListItemText
                        primaryTypographyProps={{
                          className: classes.listItemText,
                        }}
                        sx={{ color: "#F39200", fontWeight: "800" }}
                        primary={item}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          </Box>
        )
      }

    </>
  )
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired, // isMenuOpen should be a boolean and is required
  setIsMenuOpen: PropTypes.func.isRequired, // setIsMenuOpen should be a function and is required
};
export default Header