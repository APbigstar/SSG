import React, { useEffect, useRef, } from "react";
import Box from "@mui/material/Box";
import HomeVideoMobile from "../../assets/video/home_video_mobile.mp4";
import HomeVideoBrowser from "../../assets/video/home_video_browser.mp4";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

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

const Video = ({ isMenuOpen, device }) => {

  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const vidRef = useRef(null);
  const setHeightRef = useRef(null);
  let startY = 0;


  const handleLoadData = (err) => {
    console.log(err);
    setIsLoading(false);
  }

  const scrollUp =
    debounce(() => {
      window.scrollTo(0, window.pageYOffset + (document.body.scrollHeight / 12) * 3.5);
    }, 10)

  const scrollDown =
    debounce(() => {
      window.scrollTo(0, window.pageYOffset - (document.body.scrollHeight / 12) * 2);
    }, 10)

  const handleStartTouch = (event) => {
    startY = event.touches[0].clientY;
  }

  const handleEndTouch = (event) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = endY - startY;

    if (deltaY > 0) {
      window.scrollTo(0, window.pageYOffset - ((document.body.scrollHeight / 12) * 2));
    } else if (deltaY < 0) {
      window.scrollTo(0, window.pageYOffset + ((document.body.scrollHeight / 12) * 3.5));
    }
  }
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
      window.requestAnimationFrame(scrollPlay);
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

      <Box className={classes.videoContainer} >
        {
          isLoading && (
            <div className={classes.loadingOverlay}>
              <span>Loading...</span>
            </div>
          )
        }
        <video
          ref={vidRef}
          className={classes.video}
          onLoadedData={handleLoadData}
          playsInline
          onTouchStart={handleStartTouch}
          onTouchEnd={handleEndTouch}
        >
          <source src={ device ? HomeVideoMobile : HomeVideoBrowser} type="video/mp4" />
        </video>
      </Box>
      <div ref={setHeightRef} className={`${isMenuOpen ? classes.hideContent : ""}`} ></div>
    </>
  );
};

Video.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  device: PropTypes.bool.isRequired,
};
export default Video;