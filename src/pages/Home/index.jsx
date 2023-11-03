import React, { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Loading from '../../components/Loading';
const Video = lazy(() => import('../../components/Video'));
const Layout = lazy(() => import('../../components/Layout')) ;
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

const Home = () => {
  const [isLoad, setIsLoad] = React.useState(true);
  const classes = useStyles();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoad(!isLoad);
    }, 6000);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Box className={classes.container}>
          <Box className={classes.section}>
            <Layout />
            <Video video={HomeVideo} />
          </Box>
        </Box>
      </Suspense>
    </>
  );
};

export default Home;
