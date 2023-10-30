import React, { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
const Header = lazy(() => import('../../components/Header'));
const Menu = lazy(() => import('./Menu'));
const Video = lazy(() => import('./Video'));
const Content = lazy(() => import('./Content'));

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
    opacity: "1",
    display: "block"
  }

});

const Home = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Box className={classes.container}>

          <Header
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <Box className={classes.section}>
            <Video isMenuOpen={isMenuOpen} />
            <Content isMenuOpen={isMenuOpen} />
          </Box>

          <Menu isMenuOpen={isMenuOpen} />
        </Box>
      </Suspense>
    </>
  );
};

export default Home;
