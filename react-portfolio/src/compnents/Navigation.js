import { Outlet, Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <Link to="/">about.me</Link>
      <Link to="/project">projects.me</Link>
      <a href="#contact-me">contact.me</a>
      <a href="https://github.com/palmersola" target="_blank">
        resume.me
      </a>
    </nav>
  );
}

export default Navigation;
