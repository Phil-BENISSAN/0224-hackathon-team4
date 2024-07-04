import { Link } from "react-router-dom";
import "../assets/styles/Introduction.css";

function Introduction() {
  return (
    <main className="introMain">
      <h1 className="introH1">
        Avec <span>InclusiFind</span>
        <br /> Trouve des commerces <span>inclusifs</span> et{" "}
        <span className="introSpan">accessibles</span> en un instant
      </h1>
      <h2 className="introH2">Comment ça marche ?</h2>
      {/* slider ici */}
      <Link to="/home" className="start-link">
        Commencer
      </Link>
    </main>
  );
}

export default Introduction;
