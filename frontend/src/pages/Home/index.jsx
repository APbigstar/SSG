import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Header from "../../components/Header";
import Menu from "./Menu";
import Video from "./Video";
import Content from "./Content";
const useStyles = makeStyles({

  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  section: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  dropView: {
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    opacity: "0",
    transition: "all 0.1s ease-in-out",
    backgroundColor: "black",
    display: "none"
  },
  showContent: {
    opacity:"1",
    display: "block"
  }

});

const Home = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Box className={classes.container}>
          <Header
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <Box className={classes.section}>
            <Video isMenuOpen={isMenuOpen}/>
            <Content isMenuOpen={isMenuOpen}/>
          </Box>

          <Menu isMenuOpen={isMenuOpen}/>
      </Box>
    </>
  );
};

export default Home;
