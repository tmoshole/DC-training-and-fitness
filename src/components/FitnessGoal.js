import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { IMAGES } from "../constants/theme";

const FitnessGoal = ({ isOpenModal }) => {
  return (
    <>
      <div className="col-lg-6 about-content m-b30">
        <div className="section-head m-0">
          <span className="sub-title">ABOUT ME</span>
          <h2 className="title">
            I Help To Achieve <span>Fitness</span> Goals
          </h2>
          <p className="m-0">
            What started as my personal transformation has become my mission to
            help others achieve real, lasting results.
          </p>
        </div>
        <div className="" data-wow-delay="0.8s">
          <Tab.Container defaultActiveKey={"Mission"}>
            <Nav as="ul" className="nav nav-tabs style-1 m-b20 m-t30">
              <Nav.Item as="li" className="nav-item">
                <Nav.Link className="nav-link" eventKey={"Mission"}>
                  <span>My Mission</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link className="nav-link" eventKey={"Vision"}>
                  <span>My Vision</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content
              className="tab-content m-sm-b30 m-b40 p-r30"
              id="myTabContent"
            >
              <Tab.Pane eventKey={"Mission"}>
                <div className="content">
                  <p>
                    To empower individuals through personalized training and
                    nutrition, using proven methods and a passion for progress
                    to help clients achieve lasting transformations—both
                    physically and mentally.
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={"Vision"}>
                <div className="content">
                  <p>
                    To inspire a global community where fitness is more than a
                    goal—it's a lifestyle. Through education, innovation, and
                    unwavering support, I aim to be a trusted guide in every
                    client’s journey to strength, confidence, and lifelong
                    well-being.
                  </p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
      <div className="col-lg-6 m-b30">
        <div className="dz-media">
          <div className="image-box">
            <div className="video-bx1 h-auto w-auto overflow-visible">
              <img src={IMAGES.boxpic1} alt="" />
            </div>
            <div className="info-box">
              <span>
                <i className="flaticon-play text-primary"></i> Qualified Trainer
              </span>
            </div>
          </div>
          <div className="image-box">
            <img src={IMAGES.boxpic2} alt="" />
            <div className="info-box">
              <span>
                <i className="flaticon-athletics text-primary"></i> Proffesional
                Trainer
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitnessGoal;
