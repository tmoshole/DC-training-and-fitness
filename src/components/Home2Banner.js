import React from "react";
import { IMAGES } from "../constants/theme";
import { Link } from "react-router-dom";

const Home2Banner = ({ open }) => {
  return (
    <>
      <div
        className="banner-inner"
        style={{ backgroundImage: `url(${IMAGES.SliderBg2})` }}
      >
        <h2 className="data-text">
          <span>F</span>
          <span>I</span>
          <span>T</span>
          <span>N</span>
          <span>E</span>
          <span>S</span>
          <span>S</span>
        </h2>
        <div className="container">
          <div className="banner-content">
            <h1 className="title">
              <span className="left anm wow fadeInUp">KEEP</span>
              <span className="right anm wow fadeInUp">TRAINING</span>
            </h1>
            <div className="row wow fadeInUp" data-wow-delay="0.4s">
              <div className="col-4">
                <div className="bottom-content">
                  <p>
                    From Personal Passion to Professional Purpose — Since 2014,
                    I've transformed my life through fitness, turning challenges
                    into strength and passion into a career. Now, I help others
                    achieve lasting results through tailored training,
                    nutrition, and unwavering support. Your journey starts here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-media media1 anm wow fadeInUp">
            <img src={IMAGES.Slide2Hero} alt="" />
          </div>
        </div>
        <img src={IMAGES.Slide2Starts} alt="" className="move-1" />
      </div>
    </>
  );
};

export default Home2Banner;
