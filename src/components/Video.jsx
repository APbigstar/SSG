import React, { lazy ,Suspense} from "react";
const ScrollyVideo = lazy(() => import('scrolly-video/dist/ScrollyVideo.cjs.jsx'));
import PropTypes from 'prop-types';

const Video = ({video}) => {
  // const videoRef = React.useRef(null);

  // const handleVideoLoad = () => {
  //   // The video has finished loading
  //   console.log("Video has finished loading");
  // };
  // const videos = [
  //   HomeVideoBrowser,
  //   FinancialVideo,
  //   ProjectVideo
  // ];

  // const [currentVideoIndex, ] = React.useState(0);
  // useEffect(() => {

    // window.onwheel = e => {
    //   if (e.deltaY >= 0) {
    //     if(window.pageYOffset == 1926) {
    //       if( currentVideoIndex < videos.length - 1 ) {
    //         setCurrentVideoIndex( currentVideoIndex + 1);
    //         window.scrollTo(0,0);
    //       }
    //     }
    //     // scrollUp();
    //   } else {
    //     if(window.pageYOffset == 0) {
    //       if( currentVideoIndex > 0 ) {
    //         setCurrentVideoIndex( currentVideoIndex - 1);
    //         window.scrollTo(0, window.pageYOffset);
    //       }
    //     }
    //     // scrollDown();
    //   }
    // }

    // Make sure the DOM is loaded before interacting with it
  // }, [currentVideoIndex, videos]);

  return (
    <Suspense>
    <div className="scrolly-container" style={{ height: '300vh' }}>
      <ScrollyVideo src={video} cover={true} full={true}/>
    </div>
    </Suspense>
  );
}

export default Video;

Video.propTypes = {
  video: PropTypes.any.isRequired, // isMenuOpen should be a boolean and is required
};