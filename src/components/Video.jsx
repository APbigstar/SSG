import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  video: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
});

const Video = (props) => {
  const classes = useStyles();
  const vidRef = useRef(null);
  const setHeightRef = useRef(null);

  useEffect(() => {
    const playbackConst = 300;
    const setHeight = setHeightRef.current;

    const vid = vidRef.current;
    function handleLoadedMetadata() {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    }

    vid.addEventListener("canplay", handleLoadedMetadata);

    function scrollPlay() {
      const frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);

    return () => {
      window.cancelAnimationFrame(scrollPlay);
      vid.removeEventListener("canplay", handleLoadedMetadata);
    };
  }, []);

  return (
    <>
      <Box style={{ position: "fixed", width: "100%", height: "100%" }}>
        <video ref={vidRef} className={classes.video} autoPlay loop>
          <source src={props.video} type="video/webm" />
        </video>
      </Box>
      <div ref={setHeightRef}></div>
    </>
  );
};

export default Video;

Video.propTypes = {
  video: PropTypes.any.isRequired, // isMenuOpen should be a boolean and is required
};
