import "../components/Footer.css";
import logo from "../assets/images/logotest.png";
import insta from "../assets/images/instagram.svg"
import tiktok from "../assets/images/tiktok.svg";
import facebook from "../assets/images/facebook.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="w-36"/>
      <div className="container-footer-logos">
        <img src={insta} alt="" className="svg-logo" />
        <img src={tiktok} alt="" className="svg-logo" />
        <img src={facebook} alt="" className="svg-logo" />
      </div>
    </footer>
  );
};
