import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import multiRect from "../../assets/images/multiRect.png";
import singleRect from "../../assets/images/rect.png";
import homeIcon from "../../assets/images/home.png";
import serviceIcon from "../../assets/images/service.png";
import discoverIcon from "../../assets/images/discover.png";
import contactIcon from "../../assets/images/contact.png";

const useStyles = makeStyles({

    dropView: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        backgroundColor: "black",
        opacity: "0",
        transition: "all 0.1s ease-in-out",
    },
    mainBox: {
        width: "100%",
        height: "100%",
        padding: "50px 50px",
        "@media (max-width: 430px)": {
            padding: "45px 15px",
        },
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(55,59,60)",
        padding: "15px 0px"
    },
    listItemText: {
        display: "inline-block",
        fontSize: "64px !important",
        textAlign: "center",
        color: "#F39200",
        // fontFamily: "MicroSquare !important",
        fontWeight: "bold",
        "@media (max-width: 430px)": {
            fontSize: "40px !important",
        },
        cursor: "pointer"
    },
    buttonStyle: {
        fontFamily: "Poppins-Medium",
        background:
            "linear-gradient(90deg, " +
            "#81fe88 1.26%, " +
            "#84fd85 26.90%, " +
            "#8ffd7d 49.97%, " +
            "#a1fc6f 72.05%, " +
            "#bbfa5c 93.40%, " +
            "#c5fa55 100.00%)",
        fontSize: "24px !important",
        // width: "197px",
        // height: "58px",
        padding: "8px 30px !important",
        boxShadow: "none !important",
        fontWeight: "normal",
        color: "#141518",
        borderRadius: "50px !important",
        marginBottom: "60px !important",
        "@media (max-width: 430px)": {
            fontSize: "20px !important",
            marginBottom: "0 !important",
            padding: "2px 20px !important",

        },
        transition: "all 0.3s ease-in-out",

    },
    multiRect: {
        width: "17%",
        position: "absolute",
        top: "50%",
        right: "50%",
        filter: "blur(10px)",
        transform: "translate(-140%, 30%)"

    },
    singleRect: {
        position: " absolute",
        top: "50%",
        left: '50%',
        width: "17%",
        filter: "blur(10px)",
        transform: "translate(135%, -145%)"
    },
    showContent: {
        opacity: "1",
    },
    navBarTrans: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute!important",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        paddingBottom: "20px"
    },
    menuGroup: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "85px",
        marginBottom: "20px"
    },
    mIcon: {
        width: "60px",
        height: "45%",
        opacity: "0",
        transition: "all 0.1s ease-in-out",
        position: "relative",
        left: "10%",
        "@media (max-width: 430px)": {
            width: "40px",
            height: "auto",
            marginRight: "10px"
        }

    },
    showIcon: {
        opacity: "1",
        left: "-5%",

    },
    btnEffect: {
        width: "207px",
        height: "68px",
        color: "red!important"
    }

})

const Menu = ({ isMenuOpen }) => {

    const classes = useStyles();
    const [shouldShow, setShouldShow] = React.useState({
        'Home': false,
        'Service': false,
        'Discover Us': false,
        'Contact': false,
        'JOIN US': false,
    })

    const handleIcon = (e) => {
        setShouldShow({
            ...shouldShow,
            [`${e.target.innerText}`]: !shouldShow[`${e.target.innerText}`]
        })
        // console.dir(shouldShow[`${e.target.innerText}`]);

    }



    return (
        <>
            <Box className={`${classes.dropView}  ${isMenuOpen ? classes.showContent : ""}`}>
                <Box className={`${classes.mainBox}`}>
                    <Box className={classes.content}>
                        <Box className={classes.navBarTrans}>
                            <Box sx={{ marginLeft: "-34px"}}>
                                <Box className={classes.menuGroup}>
                                    <img className={`${classes.mIcon} ${shouldShow['Home'] ? classes.showIcon : ""}`} src={homeIcon} />
                                    <div
                                        className={`${classes.listItemText} `}
                                        onMouseEnter={handleIcon}
                                        onMouseLeave={handleIcon}
                                    >
                                        Home
                                    </div>
                                </Box>
                                <Box className={classes.menuGroup}>
                                    <img className={`${classes.mIcon} ${shouldShow['Service'] ? classes.showIcon : ""}`} src={serviceIcon} />
                                    <div
                                        className={`${classes.listItemText} `}
                                        onMouseEnter={handleIcon}
                                        onMouseLeave={handleIcon}
                                    >
                                        Service
                                    </div>
                                </Box>
                                <Box className={classes.menuGroup}>
                                    <img className={`${classes.mIcon}  ${shouldShow['Discover Us'] ? classes.showIcon : ""}`} src={discoverIcon} />
                                    <div
                                        className={`${classes.listItemText} `}
                                        onMouseEnter={handleIcon}
                                        onMouseLeave={handleIcon}
                                    >
                                        Discover Us
                                    </div>
                                </Box>
                                <Box className={classes.menuGroup}>
                                    <img className={`${classes.mIcon}   ${shouldShow['Contact'] ? classes.showIcon : ""}`} src={contactIcon} />
                                    <div
                                        className={`${classes.listItemText} `}
                                        onMouseEnter={handleIcon}
                                        onMouseLeave={handleIcon}
                                    >
                                        Contact
                                    </div>
                                </Box>
                            </Box>
                            <Box>
                                <Button
                                    variant="contained"
                                    className={`${classes.buttonStyle} ${shouldShow['JOIN US'] ? classes.btnEffect : ""}`}
                                    onMouseEnter={handleIcon}
                                    onMouseLeave={handleIcon}
                                >
                                    Join Us
                                </Button>
                            </Box>
                        </Box>

                        <img src={multiRect} className={classes.multiRect} alt="img" />
                        <img src={singleRect} className={classes.singleRect} alt="img" />

                    </Box>
                </Box>
            </Box>
        </>
    )
}

Menu.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired, // isMenuOpen should be a boolean and is required
};
export default Menu