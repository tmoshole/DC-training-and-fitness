import React from "react";
import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../constants/theme";

const iconBox = [
  { image: IMAGES.aboutlogo1, title: "Gym & Exercise" },
  { image: IMAGES.aboutlogo2, title: "Health & Fitness" },
  { image: IMAGES.aboutlogo3, title: "Health Motivation" },
  { image: IMAGES.aboutlogo4, title: "Right Nutrition" },
];

const PerfectTrainers = () => {
  return (
    <>
      <div className="col-lg-6 m-b30">
        <div className="dz-media ">
          <img
            src={IMAGES.aboutgirl}
            alt=""
            className="wow fadeInUp"
            data-wow-delay="0.6s"
          />
          {SVGICON.multilines}
          <ul>
            <li>
              <span>FITNESS</span>
            </li>
            <li>
              <span>HEALTH</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 m-b30 about-content">
        <div className="section-head">
          <span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
            Get Your Perfect Workout
          </span>
          <h2 className="title wow fadeInUp" data-wow-delay="0.4s">
            Perfect <span>Trainer</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.6s">
            {" "}
            Ready to crush your fitness goals? With years of experience,
            high-energy coaching, and results-driven programs, I’ll push you
            beyond your limits and help you unlock your full potential. Let’s
            turn your goals into gains—starting today!
          </p>
        </div>
        <div className="row m-t40 m-sm-b20 m-b30">
          {iconBox.map((item, ind) => (
            <div className="col-sm-6 m-sm-b20 m-b30" key={ind}>
              <div className="icon-bx-wraper style-2">
                <div className="icon-bx">
                  <span className="icon-cell">
                    <img src={item.image} alt="" />
                  </span>
                </div>
                <div className="icon-content">
                  <h5 className="dz-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default PerfectTrainers;
