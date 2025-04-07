import React, { useEffect, useState } from "react";
import Home2Banner from "../components/Home2Banner";
import FitnessGoal from "../components/FitnessGoal";
import Counter from "../components/Counter";
import { IMAGES } from "../constants/theme";
import OurServices from "../components/OurServices";
import Testimonial from "../components/Testimonial";
import { useLocation } from "react-router-dom";
import ContactUs from "./ContactUs";
import WeightCalculator from "./WeightCalculator";
import LatestSlider from "../elements/LatestSlider";
import PerfectTrainers from "../components/PerfectTrainers";

const Home2 = () => {
  const body = document.querySelector("body");
  body.setAttribute("data-theme-color", "color_1");
  const [open, setOpen] = useState(true);
  const location = useLocation().pathname;

  useEffect(() => {
    localStorage.setItem("theme", "color_1");
    localStorage.setItem("themeInd", 1);
  }, [location]);
  return (
    <>
      <div className="page-content bg-white">
        <section id="home">
          <div className="main-bnr-three">
            <Home2Banner />
          </div>
        </section>

        <section className="section">
          <Counter />
        </section>
        <section className="content-inner about-wrapper1 about-bx1">
          <div className="container">
            <div className="row align-items-center">
              <PerfectTrainers />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="content-inner"
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row about-bx2 align-items-center">
              <FitnessGoal />
            </div>
          </div>
        </section>
        <section
          id="services"
          className="content-inner-2 service-wrapper1"
          style={{
            backgroundImage: `url(${IMAGES.BgImage8})`,
            backgroundSize: ` 100%`,
            backgroundRepeat: " no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-end">
              <OurServices />
            </div>
          </div>
        </section>
        <section
          id="gallery"
          className="content-inner-1 overflow-hidden"
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <LatestSlider />
        </section>
        <section
          id="testimonials"
          className="content-inner-1 overflow-hidden testimonial-wrapper1"
          data-text="FEEDBACK"
          style={{
            backgroundImage: `url(${IMAGES.BgImage13})`,
            backgroundPosition: " center",
            backgroundRepeat: " no-repeat",
          }}
        >
          <div className="container">
            <div className="section-head style-1 text-center">
              <h5 className="sub-title wow fadeInUp">TESTIMONIALS</h5>
              <h2 className="title wow fadeInUp">
                What <span> Client </span> Say’s
              </h2>
            </div>
            <Testimonial />
          </div>
        </section>
        <section
          id="calculator"
          className="content-inner-4 service-wrapper1"
          style={{
            backgroundImage: `url(${IMAGES.BgImage8})`,
            backgroundSize: ` 100%`,
            backgroundRepeat: " no-repeat",
            marginBottom: "0px",
            paddingBottom: "0px",
          }}
        >
          <div className="container">
            <WeightCalculator />
          </div>
        </section>
        <section id="contact" className="content-inner-4 service-wrapper1">
          <div className="container">
            <ContactUs />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home2;
