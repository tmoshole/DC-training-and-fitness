import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";

const serviceList = [
  { title: "Qualified Trainer" },
  { title: "Body Building" },
  { title: "Nutrition" },
  { title: "Cardio And More" },
  { title: "Weight Loss" },
  { title: "Muscle Gain" },
];
const AboutServices = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="dz-media p-r20">
            <div className="image-box wow fadeInUp">
              <img src={IMAGES.aboutPic5} alt="" />
              <div className="tag">
                <h2>11</h2>
                <h5>year experience</h5>
              </div>
            </div>
            <img src={IMAGES.aboutPic6} alt="" className="wow fadeInUp" />
          </div>
        </div>
        <AboutServicesDetails />
      </div>
    </>
  );
};

export default AboutServices;

export const AboutServicesDetails = () => {
  return (
    <>
      <div className="col-lg-6 about-content m-lg-t40 wow fadeInUp">
        <div className="section-head style-1">
          <h5 className="sub-title">Wake Up – It’s Your Time to Shine!</h5>
          <h2 className="title mb-0">
            Take The <span> Action </span>
          </h2>
          <p className="description m-b10">
            Start your training with Certified Professional Trainer
          </p>
        </div>
        <p>
          Ready to crush your fitness goals? With years of experience,
          high-energy coaching, and results-driven programs, I’ll push you
          beyond your limits and help you unlock your full potential. Let’s turn
          your goals into gains—starting today!
        </p>
        <ul className="pr-list list-italic m-t30 m-b35">
          {serviceList.map((item, ind) => (
            <li key={ind}>
              <i className="flaticon-check-mark"></i>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
