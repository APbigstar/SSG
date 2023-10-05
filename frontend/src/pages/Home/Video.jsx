import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import HomeVideo from "../../assets/video/home_video.mp4";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  video: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    "@media (max-width: 430px)": {
      objectFit: "cover",
    },
  },
  hideContent: {
    height: "0px!important"
  }
});

const Video = ( { isMenuOpen }) => {

  const classes = useStyles();
  const vidRef = useRef(null);
  const setHeightRef = useRef(null);

  useEffect(() => {
    const playbackConst = 500;
    const setHeight = setHeightRef.current;

    const vid = vidRef.current;
    function handleLoadedMetadata() {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    }

    vid.addEventListener("loadedmetadata", handleLoadedMetadata);

    function scrollPlay() {
      const frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);

    return () => {
      window.cancelAnimationFrame(scrollPlay);
    };
  }, []);

  return (
    <>
      <Box style={{ position: "fixed", width: "100%", height: "100%", overflowX: "hidden" }}>
        <video ref={vidRef} className={classes.video} autoPlay loop>
          <source src={HomeVideo} type="video/mp4" />
        </video>
      </Box>
      <div ref={setHeightRef}  className={`${ isMenuOpen ? classes.hideContent : ""}`}></div>
    </>
  );
};

Video.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
export default Video;