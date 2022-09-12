import palmerPhoto from "./images/palmerphoto.jpg";
function About() {
  return (
    <aside className="about">
      <div>
        <h2 id="about-me">about_me</h2>
        <img src={palmerPhoto} alt="placeholder" />
      </div>
      <p>
        Welcome!
        <br />
        <br />
        My name is Palmer Sola. I am fresh out of Fullstack Web Develompnet
        Bootcamp with an emphasis on React. Feel free to checkout my projects
        linked above to see what I can do!
        <br />
        <br />
        <br />
        <ul>
          Personal Intrests:
          <br />
          <br />
          <li>Music</li>
          <li>Art</li>
          <li>Motorcycles</li>
          <li>Snowboarding</li>
          <li>Backpacking</li>
        </ul>
      </p>
    </aside>
  );
}

export default About;
