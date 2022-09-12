import myDood from "./images/mydood.gif.gif";
import pokemon from "./images/Pokeslap_Gif.gif";
import mars from "./images/WelcomeToMars.png";
import pate from "./images/pate-screenshot.png";
import note from "./images/notetaker.png";
import weather from "./images/Weather-Dashboard-Img.png";
function Project() {
  return (
    <article id="projects-me">
      <a href="https://my-dood.herokuapp.com/" class="project" target="_blank">
        <img src={myDood} alt="placeholder" />
        <h3>MyDood</h3>
      </a>

      <a href="https://poke-slap.herokuapp.com" class="project" target="_blank">
        <img src={pokemon} alt="Pokemon Slap gif" />
        <h3>Pokemon Slap</h3>
      </a>

      <a
        href="https://palmersola.github.io/Project-1-Repo/"
        class="project"
        target="_blank"
      >
        <img src={mars} alt="Welcome to Mars picture" />
        <h3>Welcome to Mars!</h3>
      </a>

      <a
        href="https://jatepalmer.herokuapp.com/"
        class="project"
        target="_blank"
      >
        <img src={pate} alt="PATE Image" />
        <h3>Palmer's Awesome Text Editor</h3>
      </a>

      <a
        href="https://note-taker-app-palmer.herokuapp.com/"
        class="project"
        target="_blank"
      >
        <img src={note} alt="Note Taker App photo" />
        <h3>Note Taker App</h3>
      </a>

      <a
        href="https://palmersola.github.io/Weather-App/"
        class="project"
        target="_blank"
      >
        <img src={weather} alt="Weather App Photo" />
        <h3>Weather App</h3>
      </a>
    </article>
  );
}

export default Project;
