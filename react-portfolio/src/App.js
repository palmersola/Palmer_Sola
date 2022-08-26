import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./compnents/Layout";
import About from "./compnents/About";
import Project from "./compnents/Project";
import Contact from "./compnents/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
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
