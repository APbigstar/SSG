import React, { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import PropTypes from 'prop-types';
// const Header = lazy(() => import('../../components/Header'));
// const Menu = lazy(() => import('./Menu'));
const Video = lazy(() => import('../../components/Video'));
// const Content = lazy(() => import('./Content'));
import HomeVideo from '../../assets/video/home_video_browser.mp4';

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

const Home = ({ isMenuOpen }) => {
  const classes = useStyles();


  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Box className={classes.container}>
          <Box className={classes.section}>
            <Video isMenuOpen={isMenuOpen} video={HomeVideo} />
            {/* <Content isMenuOpen={isMenuOpen} /> */}
          </Box>
        </Box>
      </Suspense>
    </>
  );
};

export default Home;

Home.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired, // isMenuOpen should be a boolean and is required
}