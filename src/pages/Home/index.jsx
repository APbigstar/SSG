import React, { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
const Layout = lazy(() => import('../../components/Layout'));
import Loading from '../../components/Loading';
import ConDesk from '../../assets/images/desk_con.png'
import DisDesk from '../../assets/images/desk_dis.png'
import PayDesk from '../../assets/images/desk_pay.png'
import ProDesk from '../../assets/images/desk_pro.png'
import ConMobile from '../../assets/images/mobile_con.png'
import DisMobile from '../../assets/images/mobile_dis.png'
import PayMobile from '../../assets/images/mobile_pay.png'
import ProMobile from '../../assets/images/mobile_pro.png'

import Consultation from "../../pages/Consultatioin";
import Payment from "../../pages/Payment";
import Distribution from "../../pages/Distribution";
import Project from "../../pages/Project";

const useStyles = makeStyles({

  container: {
    width: "100%",
    height: "100%",
  },
  features: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    position: "fixed",
    bottom: "-60px",
  },
  page_img: {
    transition: 'transform 0.3s',
    '&:hover': {
    },
  },
  selected: {
    transform: 'translateY(-30px)',
  },
});

const Pages = {
  "consultation": <Consultation />,
  "payment": <Payment />,
  "distribution": <Distribution />,
  "project": <Project />,
}

const Home = () => {
  const [isLoad, setIsLoad] = React.useState(true);
  const [pageType, setPageType] = React.useState("consultation");
  const [selectedImage, setSelectedImage] = React.useState("consultation");
  const classes = useStyles();

  const consultant = window.innerWidth <= 425 ? ConMobile : ConDesk;
  const distribution = window.innerWidth <= 425 ? DisMobile : DisDesk;
  const project = window.innerWidth <= 425 ? ProMobile : ProDesk;
  const payment = window.innerWidth <= 425 ? PayMobile : PayDesk;

  const handleOnclick = (newPageType) => {
    setSelectedImage(newPageType);
    setPageType(newPageType);
  }

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
          <Box sx={{ paddingTop: "122px" }}>
            {Pages[pageType]}
          </Box>
          <Box className={classes.features}>
            <img className={`${classes.page_img} ${selectedImage === "consultation" && classes.selected}`} src={consultant} onClick={() => handleOnclick("consultation")} />
            <img className={`${classes.page_img} ${selectedImage === "payment" && classes.selected}`} src={payment} onClick={() => handleOnclick("payment")} />
            <img className={`${classes.page_img} ${selectedImage === "distribution" && classes.selected}`} src={distribution} onClick={() => handleOnclick("distribution")} />
            <img className={`${classes.page_img} ${selectedImage === "project" && classes.selected}`} src={project} onClick={() => handleOnclick("project")} />
          </Box>
        </Box>
      </Suspense>
    </>
  );
};

export default Home;
