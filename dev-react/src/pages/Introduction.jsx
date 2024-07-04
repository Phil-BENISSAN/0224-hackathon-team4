import { Link } from "react-router-dom";
import "../assets/styles/Introduction.css";
import Slider from "../components/Slider";

function Introduction() {
  return (
    <main className="introMain">
      <h1 className="introH1">
        Avec <span>InclusiFind</span>
        <br /> Trouve des commerces <span>inclusifs</span> et{" "}
        <span className="introSpan">accessibles</span> en un instant
      </h1>
      <h2 className="introH2">Comment ça marche ?</h2>
      <div className="flex justify-center items-center">
        <Slider />
      </div>

      <Link to="/home" className="start-link mb-20 mt-4">
        Commencer
      </Link>
    </main>
  );
}

export default Introduction;
