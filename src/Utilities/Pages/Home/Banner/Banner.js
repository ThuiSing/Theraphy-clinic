import React from "react";
import "./banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../Images/banner/banner (1).png";
import img2 from "../../../Images/banner/banner (2).png";
import img3 from "../../../Images/banner/banner (3).png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner ">
      <div className="absolute banner-text w-full h-full flex justify-center items-center">
        <div className="text-center">
          <h2 className=" text-2xl md:text-5xl text-primary font-bold uppercase">
            Welcome to our Therapy Clinic
          </h2>
          <h4 className="texl-xl md:text-3xl text-secondary font-semibold my-4">
            We Give Solution To Your Pain
          </h4>
          <Link to="/contact-us">
            <button className="bg-btn text-white px-2 py-1 md:px-3 md:py-2 rounded">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <Carousel
        autoPlay
        showIndicators={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={img2} alt="banner-img" />
        </div>
        <div>
          <img src={img1} alt="banner-img" />
        </div>
        <div>
          <img src={img3} alt="banner-img" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
