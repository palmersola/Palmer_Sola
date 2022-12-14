import { NavLink } from "react-router-dom";
import resume from "./images/Resume.pdf";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">about.me</NavLink>
      <NavLink to="/project">projects.me</NavLink>
      <NavLink to="/contact">contact.me</NavLink>
      <a href={resume} download>
        resume.me
      </a>
    </nav>
  );
}

export default Navigation;
