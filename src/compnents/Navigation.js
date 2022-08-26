import { Link } from "react-router-dom";
import resume from "./images/Resume.docx";

function Navigation() {
  return (
    <nav>
      <Link to="/">about.me</Link>
      <Link to="/project">projects.me</Link>
      <a href="/contact">contact.me</a>
      <a href={resume} download>
        resume.me
      </a>
    </nav>
  );
}

export default Navigation;
