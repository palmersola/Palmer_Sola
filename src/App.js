import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./compnents/About";
import Project from "./compnents/Project";
import Contact from "./compnents/Contact";
import Header from './compnents/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  /* <Navigation />
    <Project />
  <Footer /> */
}
