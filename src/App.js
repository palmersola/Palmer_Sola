import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./compnents/Layout";
import About from "./compnents/About";
import Project from "./compnents/Project";
import Contact from "./compnents/Contact";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
{
  /* <Navigation />
    <Project />
  <Footer /> */
}
