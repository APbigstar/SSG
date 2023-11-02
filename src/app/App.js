import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Service from '../pages/Service';
// import Discover from '../pages/Discover';
import Layout from '../components/Layout';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}>
          <Route index element={<Home  isMenuOpen={isMenuOpen}/>} />
          {/* <Route path="/service"  element={<Service  isMenuOpen={isMenuOpen} />} /> */}
          {/* <Route path="/discover"  element={<Discover isMenuOpen={isMenuOpen} />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
