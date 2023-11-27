import React from "react";
import "./Footer.scss";
import FacebookLogo from "../../Assets/Icons/Icon-facebook.svg";
import TwitterLogo from "../../Assets/Icons/Icon-twitter.svg";
import InstagramLogo from "../../Assets/Icons/Icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer__social-icons">
          <a href="https://www.facebook.com" className="footer__social-icon">
            <img src={FacebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" className="footer__social-icon">
            <img src={TwitterLogo} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" className="footer__social-icon">
            <img src={InstagramLogo} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
