import React from 'react';
import { VideoScroll } from 'react-video-scroll';
import PropTypes from 'prop-types';
import HomeVideo from '../../assets/video/home_video_browser.mp4';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line react/prop-types

const useStyle = makeStyles({
  hideContent: {
    height: "0px!important"
  }
})
// eslint-disable-next-line react/prop-types
function Video(props) {
  const {isMenuOpen} = props
  const classes = useStyle();
  const setHeight = React.useRef();
  
  // eslint-disable-next-line no-unused-vars
  const setStyles = (wrapperEl, videoEl, playbackRate) => {
    console.log(wrapperEl);
    setHeight.current.style.height = (playbackRate * videoEl.duration + 100) +"px"
  }
  

  return (
    <>
      <div style={{ position: "fixed", top: "0",}}>
        <VideoScroll
          // eslint-disable-next-line react/prop-types
          onLoad={(props) => setStyles(props.wrapperEl, props.videoEl, props.playbackRate)}
          playbackRate={1000}
          id="one"
        >
          <video
            id="v0"
            tabIndex="0"
            preload="preload"
            style={{ width: '100vw', height: "100vh", objectFit: 'fill' }}
            playsInline
          >
            <source type="video/mp4" src={HomeVideo} />
          </video>
        </VideoScroll>

      </div>
      <div ref={setHeight} className={`${isMenuOpen ? classes.hideContent : ""}`}></div>

    </>

  );
}
export default Video;
Video.propTypes = {
  isMenuOpen:PropTypes.bool
}