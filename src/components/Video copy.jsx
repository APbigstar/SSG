import React, { lazy, Suspense } from "react";
const ScrollyVideo = lazy(() => import('scrolly-video/dist/ScrollyVideo.cjs.jsx'));
import Box from "@mui/material/Box";

import PropTypes from 'prop-types';
import Loading from "./Loading";

// eslint-disable-next-line no-unused-vars
const Video = ({ video }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Box>
        <ScrollyVideo
          src={video}
          cover={true}
          full={true}
        />
      </Box>
    </Suspense>
  );
}

export default Video;

Video.propTypes = {
  video: PropTypes.any.isRequired, // isMenuOpen should be a boolean and is required
};