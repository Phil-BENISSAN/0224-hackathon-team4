import React from "react";
import "../components/Footer.css";
import logo from "../assets/images/logoInclusifind.svg";
import insta from "../assets/images/insta.svg";
import tiktok from "../assets/images/tiktok.svg";
import facebook from "../assets/images/facebook.svg";

export const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="" />
      <div className="container-footer-logos">
        <img src={insta} alt="" className="svg-logo" />
        <img src={tiktok} alt="" className="svg-logo" />
        <img src={facebook} alt="" className="svg-logo" />
      </div>
      <p>Mention légales</p>
    </footer>
  );
};
