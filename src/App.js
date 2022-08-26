import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import About from "./compnents/About";
import Project from "./compnents/Project";
import Contact from "./compnents/Contact";
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
{
  /* <Navigation />
    <Project />
  <Footer /> */
}
