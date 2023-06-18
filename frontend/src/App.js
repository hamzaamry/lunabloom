import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./Components/HomePage/Navbar";
import Signin from "./Components/Signing/Signin";
import SignUp from "./Components/Signing/SignUp";
import Form from "./Components/Form/Form";
import Results from './Pages/Results'

import { useState } from "react";

const App = () => {

  const [targetAudience, setTargetAudience] = useState("");
  const [platformSelections, setPlatformSelections] = useState("");
  const [contentType, setContentType] = useState("");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/JoinNow" element={<Signin />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/From" element={<Form />} />
          <Route path="/Results" 
            element={<Results
              targetAudience={targetAudience}
              platformSelections={platformSelections}
              contentType={contentType}
             />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
