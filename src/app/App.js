import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Service from '../pages/Service';
import Discover from '../pages/Discover';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </Router>
  );
};

export default App;
