import React from "react";
import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../constants/theme";

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
                  <h6 className="m-b15">My Socials</h6>
                  <div className="dz-social-icon style-1">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.facebook.com/darlington.masuku.54/about"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.tiktok.com/@dcmasuku1"
                          rel="noreferrer"
                        >
                          <i className="fab fa-tiktok"></i>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.instagram.com/darlingcares/"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.whatsapp.com/"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 wow fadeInUp">
                <div className="widget recent-posts-entry">
                  <h4 className="footer-title">Blog Posts</h4>
                  <div className="widget-post-bx">
                    <div className="widget-post clearfix">
                      <div className="dz-info">
                        <h6 className="title">
                          <Link
                            to={
                              "https://www.acefitness.org/resources/pros/expert-articles/7347/what-s-your-fitness-philosophy/?srsltid=AfmBOoqJyn_mrHxDVtU7FzM1NdTDeZSaGm6bGWjwO71mslz37fOrlc6D"
                            }
                            target="_blank"
                          >
                            What’s Your Fitness Philosophy?
                          </Link>
                        </h6>
                        <span className="post-date"> JULY 30, 2019</span>
                      </div>
                    </div>
                    <div className="post-separator"></div>
                    <div className="widget-post clearfix">
                      <div className="dz-info">
                        <h6 className="title">
                          <Link
                            to={
                              "https://www.medicalnewstoday.com/articles/303409"
                            }
                            target="_blank"
                          >
                            10 tips for successful weight loss
                          </Link>
                        </h6>
                        <span className="post-date"> OCT 09, 2024</span>
                      </div>
                    </div>
                    <div className="post-separator"></div>
                    <div className="widget-post clearfix">
                      <div className="dz-info">
                        <h6 className="title">
                          <Link
                            to={
                              "https://www.healthline.com/nutrition/healthy-eating-tips"
                            }
                            target="_blank"
                          >
                            25 Simple Tips to Make Your Diet Healthier
                          </Link>
                        </h6>
                        <span className="post-date"> JAN 03, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
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
