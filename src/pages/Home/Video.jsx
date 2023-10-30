import React, { } from "react";
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';

import HomeVideoBrowser from "../../assets/video/home_video_browser.mp4";
import FinancialVideo from "../../assets/video/Financial Services.mp4";
import ProjectVideo from "../../assets/video/Project Management.mp4";

const Video = () => {
  const videos = [
    HomeVideoBrowser,
    FinancialVideo,
    ProjectVideo
  ];

  const [currentVideoIndex, ] = React.useState(0);
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
    <div className="scrolly-container" style={{ height: '300vh' }}>
      <ScrollyVideo  src={videos[currentVideoIndex]} />
    </div>
  );
}

export default Video;