import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../../Images/social-icons/fb.png";
import icon2 from "../../../Images/social-icons/insta.png";
import icon3 from "../../../Images/social-icons/twitter.png";
import icon4 from "../../../Images/social-icons/youtube.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer text-white py-8 ">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-semibold">Logo</h2>
        </div>
        <div className="grid md:grid-cols-4 mt-8 border-b border-gray-700 pb-7">
          <div>
            <h2 className="text-md font-semibold border-b-2 inline-block border-blue-300 pr-3 pb-1">
              Contact
            </h2>
            <div className="mt-4 space-y-2 ">
              <h3 className="text-sm">
                <span className="font-medium">Address</span> : 685 Lane Drive
                St. California, 33020
              </h3>

              <h3 className="text-sm">
                <a href="tel:01989999999">
                  <span className="font-medium">Phone</span> : 01989999999
                </a>
              </h3>

              <h3 className="text-sm">
                <a href="mailto:abc@example.com">
                  <span className="font-medium">Email</span> : Abc@gmai.com
                </a>
              </h3>
            </div>
          </div>
          <div>
            <h2 className="text-md font-semibold border-b-2 inline-block border-blue-300 pr-3 pb-1">
              Services
            </h2>
            <div className="mt-4 space-y-2 ">
              <h3 className="text-sm font-medium">Lymphedema</h3>
              <h3 className="text-sm font-medium">Muscular Dystrophy</h3>
              <h3 className="text-sm font-medium">Back and Neck Pain</h3>
              <h3 className="text-sm font-medium">Osteoporosis</h3>
              <h3 className="text-sm font-medium">more...</h3>
            </div>
          </div>
          <div>
            <h2 className="text-md font-semibold border-b-2 inline-block border-blue-300 pr-3 pb-1">
              Pages
            </h2>
            <div className="mt-4 space-y-2">
              <Link to="/home" className="text-sm font-medium block">
                Home
              </Link>
              <Link to="/services" className="text-sm font-medium block">
                Services
              </Link>
              <Link to="/about-us" className="text-sm font-medium block">
                About us
              </Link>
              <Link to="/contact-us" className="text-sm font-medium block">
                Contact us
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-md font-semibold border-b-2 inline-block border-blue-300 pr-3 pb-1">
              Follow us -
            </h2>
            <div className="mt-4  flex justify-between items-center lg:w-4/5 ">
              <a href="https://www.facebook.com/">
                <img className="w-10" src={icon1} alt="" />
              </a>
              <a href="https://www.facebook.com/">
                <img className="w-10" src={icon2} alt="" />
              </a>
              <a href="https://www.facebook.com/">
                <img className="w-10" src={icon3} alt="" />
              </a>
              <a href="https://www.facebook.com/">
                <img className="w-10" src={icon4} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center by">
          <h4>
            &copy; Copyright {year} All Rights Reserved Physical Therapy Clinic
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
