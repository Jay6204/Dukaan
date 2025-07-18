import React from "react";
import "../Footer/Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            voluptatum fugiat officiis, odio ab aperiam quae nobis.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              NIT Jamshedpur, Jharkhand, Ranchi, pin - 824110;
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone:- 0191 234 546</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: jpstore@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms &Conditions</div>
          <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            JPSTORE 2023 CReated by JP DEV. PREMIUM E-COMMERCE SOLUTIONS.
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;