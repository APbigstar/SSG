import React, { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import {Routes, Route, Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
const Layout = lazy(() => import('../../components/Layout'));
import Service from '../Service';
import Loading from '../../components/Loading';
import Consultation from '../../assets/images/consultation.png'
import Distribution from '../../assets/images/distribution.png'
import Payment from '../../assets/images/payment.png'
import Project from '../../assets/images/project.png'

const useStyles = makeStyles({

  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg,#181c1f 1.26%, #1a1f1f 37.98%,#232a22 70.96%,#303b27 100% )"
  },
  features: {
    width: "100%",
    position: "fixed",
    bottom: "-60px",
    display: "flex",
    justifyContent: "space-evenly"
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
      <Suspense fallback={<Loading />}>
        <Box className={classes.container}>
          <Box>
            <Layout />
          </Box>
          <Box>
            <Routes>
              <Route path="/consultation" element={<Service/>}/>
              <Route path="/consultation" element={<Service/>}/>
              <Route path="/consultation" element={<Service/>}/>
              <Route path="/consultation" element={<Service/>}/>
            </Routes>
          </Box>
          <Box className={classes.features}>
            <div>
              <Link to='/consultation'>
                <img src={Consultation} />
              </Link>
            </div>
            <div>
              <Link to='/payment'>
                <img src={Payment} />

              </Link>
            </div>
            <div>
              <Link to='/distribution'>
                <img src={Distribution} />

              </Link>
            </div>
            <div>
              <Link to='/project'>
                <img src={Project} />
              </Link>
            </div>
          </Box>
        </Box>
      </Suspense>
    </>
  );
};

export default Home;
