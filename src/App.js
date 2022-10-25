import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./SearchEngine";

import maicon from "./maicon.png";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Bruges" />
      </div>
      <footer>
        This project is{" "}
        <a
          href="https://github.com/GitMaiHub/final-project"
          title="Go to GitHub"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          open-sourced
        </a>{" "}
        and{" "}
        <a
          href="https://app.netlify.com/sites/unique-praline-6e0127/overview"
          title="View on Netlify"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          hosted
        </a>{" "}
        and was coded by{" "}
        <a
          href="https://frolicking-dieffenbachia-8704e5.netlify.app"
          title="Mai's portfolio"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          Mai Carlton
        </a>
        <img src={maicon} alt="maicon" width="35px" />
      </footer>
    </div>
  );
}


