import "../components/Footer.css";
import logo from "../assets/images/logoInclusifind.svg";

import tiktok from "../assets/images/tiktok.svg";
import facebook from "../assets/images/facebook.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="logo"/>
      <div className="container-footer-logos">
        <img src="" alt="" className="svg-logo" />
        <img src={tiktok} alt="" className="svg-logo" />
        <img src={facebook} alt="" className="svg-logo" />
      </div>
      <p>Mention légales</p>
    </footer>
  );
};
