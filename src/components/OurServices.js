import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";

const serviceCards = [
  { 
    icon: "flaticon-exercise", 
    title: "One-on-One Session",
    description: "Get personalized attention with customized workouts tailored to your specific goals and fitness level."
  },
  { 
    icon: "flaticon-gym-1", 
    title: "Gym Sessions",
    description: "Access our fully-equipped facility with professional guidance for optimal workout performance."
  },
];

const serviceCards2 = [
  { 
    icon: "flaticon-home", 
    title: "House Calls",
    description: "Premium in-home training sessions for those who prefer private workouts in their own space."
  },
  { 
    icon: "flaticon-gym", 
    title: "Group Classes",
    description: "Motivating group workouts that combine fun, camaraderie and effective training techniques."
  },
  { 
    icon: "flaticon-play", 
    title: "Online Coaching",
    description: "Virtual training programs with live sessions and customized plans you can do anywhere."
  },
];

const OurServices = () => {
  return (
    <>
      <div className="col-xl-4 left-grid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="0.2s">
            <div className="section-head style-1">
              <h5 className="sub-title">Services I Offer</h5>
              <h2 className="title">
                Personal <span> Training </span>
              </h2>
              <p className="p-r50">
                I offer comprehensive fitness solutions to help you achieve your goals, 
                whether you prefer in-person or virtual training experiences.
              </p>
            </div>
          </div>
          {serviceCards.map((item, ind) => (
            <div className="col-xl-12 col-md-6 wow fadeInUp" key={ind}>
              <div className="icon-bx-wraper style-4 bg-white m-b30">
                <div className="icon-bx icon-bg-white m-b20 align-items-center">
                  <div className="icon-cell text-primary rounded-circle m-r10">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="dz-title m-b10">{item.title}</h4>
                </div>
                <div className="icon-content">
                  <p className="m-b15">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="col-xl-4 col-lg-6 col-md-6 m-b30 order-md-1 order-2">
        <div className="trainer wow fadeInUp" data-wow-delay="0.8s">
          <img
            src={IMAGES.aboutPic}
            alt="Professional Trainer"
            className="anm"
            data-speed-x="-2"
            data-speed-scale="-2"
          />
        </div>
      </div>
      
      <div className="col-xl-4 col-lg-6 col-md-6 right-grid order-md-2 order-1">
        <div className="row">
          {serviceCards2.map((item, index) => (
            <div className="col-xl-12 col-lg-12 wow fadeInUp" key={index}>
              <div className="icon-bx-wraper style-4 bg-white m-b30">
                <div className="icon-bx icon-bg-white m-b20 align-items-center">
                  <div className="icon-cell text-primary rounded-circle m-r10">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="dz-title m-b10">{item.title}</h4>
                </div>
                <div className="icon-content">
                  <p className="m-b15">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;