import React, { useEffect, useRef, } from "react";
import Box from "@mui/material/Box";
import HomeVideo from "../../assets/video/home_video.mp4";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import  debounce  from "lodash/debounce";

const useStyles = makeStyles({
  video: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    "@media (max-width: 430px)": {
      objectFit: "cover",
    },
  },
  videoContainer: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
  },

  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    fontSize: "24px",
  },

  hideContent: {
    height: "0px!important"
  }
});

const Video = ({ isMenuOpen }) => {

  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const vidRef = useRef(null);
  const setHeightRef = useRef(null);

  

  const handleLoadData = (err) => {
    console.log(err);
    setIsLoading(false);
  }

  const scrollUp =  
    debounce(() => {
      window.scrollTo(0, window.pageYOffset + (document.body.scrollHeight / 12) * 3.5);
    }, 0)

  const scrollDown =
    debounce(() => {
      window.scrollTo(0, window.pageYOffset - (document.body.scrollHeight / 12) * 2);
    }, 0)

  useEffect(() => {
    const playbackConst = 1000;
    const setHeight = setHeightRef.current;

    const vid = vidRef.current;

    function resetVideo() {
      setHeight.style.height = 0;
      vid.currentTime = 0;
    }


    function handleLoadedMetadata() {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    }

    vid.addEventListener("loadedmetadata", handleLoadedMetadata);
    window.addEventListener('beforeunload', resetVideo);

    function scrollPlay() {
      const frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      window.onwheel = e => {
        if (e.deltaY >= 0) {
          scrollUp();  
        } else {
          scrollDown();
        }
      }
      window.requestAnimationFrame(debounce(scrollPlay, 200));
    }


    window.requestAnimationFrame(scrollPlay);

    return () => {
      window.cancelAnimationFrame(scrollPlay);
      setTimeout(() => {
        window.removeEventListener('beforeunload', resetVideo);
      }, 1000)
    };
  }, []);

  return (
    <>

      <Box className={classes.videoContainer}>
        {
          isLoading && (
            <div className={classes.loadingOverlay}>
              <span>Loading...</span>
            </div>
          )
        }
        <video ref={vidRef} className={classes.video} onLoadedData={handleLoadData} playsInline>
          <source src={HomeVideo} type="video/mp4" />
        </video>
      </Box>
      <div ref={setHeightRef} className={`${isMenuOpen ? classes.hideContent : ""}`} ></div>
    </>
  );
};

Video.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
export default Video;