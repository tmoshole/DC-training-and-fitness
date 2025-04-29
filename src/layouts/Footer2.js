import React from "react";
import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../constants/theme";
import Accordion from "react-bootstrap/Accordion";

const Footer2 = () => {
  let update = new Date();
  return (
    <>
      <footer className="site-footer style-1 footer-action bg-dark">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-12">
                <div className="widget widget_about">
                  <div className="footer-logo  logo-white">
                    <Link to={"/"}>
                      <img
                        className="select_logo_white"
                        src={IMAGES.logoWhite}
                        alt=""
                      />
                    </Link>
                  </div>
                  <p>Serenity through strength—earn your calm.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 wow fadeInUp">
                <div className="widget recent-posts-entry">
                  <h4 className="footer-title">Resources</h4>
                  <Accordion
                    flush
                    className="resource-accordion"
                    defaultActiveKey={null}
                  >
                    {/* 1 */}
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        What’s Your Fitness Philosophy?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Your fitness philosophy is the WHY behind every
                          workout: what keeps you motivated, how you balance
                          strength, endurance and rest, and how you define
                          “success” on your own terms. Developing a clear
                          philosophy helps you stay consistent and enjoy the
                          journey.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* 2 */}
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        10 Tips for Successful Weight Loss
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="resource-list">
                          <li>
                            <span className="tip-heading">
                              Set Realistic Goals:
                            </span>{" "}
                            Aim for slow, steady weight loss (0.5–1 kg per week)
                            to build sustainable habits.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Track What You Eat:
                            </span>{" "}
                            Use a food diary or app to monitor calorie intake
                            and identify patterns.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Eat More Whole Foods:
                            </span>{" "}
                            Prioritize fruits, vegetables, lean proteins, and
                            whole grains over processed foods.
                          </li>
                          <li>
                            <span className="tip-heading">Stay Hydrated:</span>{" "}
                            Drinking water before meals can reduce hunger and
                            help with portion control.
                          </li>
                          <li>
                            <span className="tip-heading">Move Regularly:</span>{" "}
                            Combine cardio (jogging or cycling) with strength
                            training to burn fat and build muscle.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Limit Added Sugars and Refined Carbs:
                            </span>{" "}
                            Cut back on sugary drinks, sweets, and white bread
                            or pasta.
                          </li>
                          <li>
                            <span className="tip-heading">Sleep Well:</span> Aim
                            for 7–9 hours per night; poor sleep can increase
                            hunger hormones and cravings.
                          </li>
                          <li>
                            <span className="tip-heading">Manage Stress:</span>{" "}
                            High stress can lead to emotional eating; try
                            mindfulness, yoga, or deep breathing.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Be Consistent, Not Perfect:
                            </span>{" "}
                            Long-term progress matters more than occasional
                            setbacks.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Celebrate Non-Scale Victories:
                            </span>{" "}
                            Track improvements in energy, mood, strength, and
                            health markers.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        10 Simple Tips to Make Your Diet Healthier
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="resource-list">
                          <li>
                            <span className="tip-heading">
                              Eat more whole foods:
                            </span>{" "}
                            Choose unprocessed or minimally processed foods like
                            fruits, vegetables, whole grains, nuts, and seeds.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Drink more water:
                            </span>{" "}
                            Replace sugary drinks with water to reduce calorie
                            intake and stay hydrated.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Watch portion sizes:
                            </span>{" "}
                            Use smaller plates or measure servings to avoid
                            overeating.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Include lean protein:
                            </span>{" "}
                            Add sources like fish, poultry, beans, and tofu to
                            help maintain muscle and keep you feeling full.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Limit added sugars:
                            </span>{" "}
                            Check labels and reduce foods and drinks high in
                            added sugars.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Choose healthy fats:
                            </span>{" "}
                            Swap saturated fats with unsaturated ones like those
                            found in olive oil, avocados, and nuts.
                          </li>
                          <li>
                            <span className="tip-heading">Eat more fiber:</span>{" "}
                            Boost intake with fruits, vegetables, legumes, and
                            whole grains to support digestion.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Plan your meals:
                            </span>{" "}
                            Preparing meals ahead helps avoid last-minute
                            unhealthy choices.
                          </li>
                          <li>
                            <span className="tip-heading">
                              Cut down on salt:
                            </span>{" "}
                            Use herbs, spices, and lemon instead of salt to
                            season food.
                          </li>
                          <li>
                            <span className="tip-heading">Eat mindfully:</span>{" "}
                            Slow down and focus on your food to improve
                            digestion and prevent overeating.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                {/* Scoped styles (you can also put these in your global CSS) */}
                <style jsx>{`
                  .resource-accordion .accordion-item {
                    background-color: transparent !important;
                    border: none;
                  }
                  /* Header (toggle) */
                  .resource-accordion .accordion-button {
                    background-color: transparent !important;
                    border: none;
                    box-shadow: none;
                    color: #fff;
                    padding: 0.75rem 0.3rem;
                  }
                  /* Flip the caret to white */
                  .resource-accordion .accordion-button::after {
                    filter: invert(1);
                  }
                  /* Body */
                  .resource-accordion .accordion-body {
                    background-color: transparent !important;
                    border-top: none;
                    color: #ccc;
                    padding: 0.35rem 1rem;
                    font-size: 0.8rem;
                  }
                  .resource-list {
                    padding: 0;
                    color: #ccc;
                    list-style-type: disc;
                    list-style-position: inside;
                  }
                  .resource-list li {
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                    color: #ccc;
                  }
                  .tip-heading {
                    color: #aaa; /* darker gray for the heading text */
                    font-weight: 600;
                  }
                `}</style>
              </div>
              <div className="col-xl-3 col-md-4 wow fadeInUp">
                <div className="widget widget_locations">
                  <h4 className="footer-title">Location</h4>
                  <div className="clearfix">
                    <h6>Johannesburg</h6>
                    <p>Sandton, Gauteng, 2196</p>
                    {SVGICON.map}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 wow fadeInUp">
                <div className="widget widget_working">
                  <h4 className="footer-title">Working Hours</h4>
                  <ul>
                    <li>
                      <span className="days">Monday – Friday:</span>
                      <span className="time">05:00 – 20:00</span>
                    </li>
                    <li>
                      <span className="days">Saturday - Sunday</span>
                      <span className="time">05:00 – 20:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom Part --> */}
        <div className="container">
          <div className="footer-bottom">
            <div className="text-center">
              <span className="copyright-text">
                Copyright © {update.getFullYear()}{" "}
                <Link
                  to="https://my-porfolio-tshepo-mosholes-projects.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Tmosh
                </Link>
                . All rights reserved.
              </span>
            </div>
          </div>
        </div>
        <img
          className="svg-shape-1 rotate-360"
          src={IMAGES.footercircle}
          alt=""
        />
        <img
          className="svg-shape-2 rotate-360"
          src={IMAGES.footercircle}
          alt=""
        />
      </footer>
    </>
  );
};

export default Footer2;
