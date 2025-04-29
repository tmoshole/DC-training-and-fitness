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
          {/* — Container for the two boxpic1 images — */}
          <div
            className="image-box-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px", // Adds spacing between images
              justifyContent: "center", // Centers items when they wrap
            }}
          >
            {/* First boxpic1 image with overlay */}
            <div
              style={{
                position: "relative",
                flex: "1 1 calc(50% - 10px)", // Takes half width minus gap on large screens
                minWidth: "250px", // Minimum width before wrapping
              }}
            >
              <img
                src={IMAGES.boxpic1}
                alt=""
                style={{ display: "block", width: "100%", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  left: "33%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  whiteSpace: "nowrap",
                }}
              >
                <i className="flaticon-play text-primary"></i>{" "}
                <strong>Qualified Trainer</strong>
              </div>
            </div>

            {/* Second boxpic1 image */}
            <div
              style={{
                flex: "1 1 calc(50% - 10px)", // Takes half width minus gap on large screens
                minWidth: "250px", // Minimum width before wrapping
              }}
            >
              <img
                src={IMAGES.boxpic0}
                alt=""
                style={{ display: "block", width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* — Professional Trainer caption BELOW the images — */}
          <div
            style={{
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.9)",
                padding: "6px 12px",
                borderRadius: "4px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <i className="flaticon-athletics text-primary"></i>{" "}
              <strong>Professional Trainer</strong>
            </span>
          </div>

          {/* — Second image (no caption) — */}
          <div className="image-box" style={{ marginTop: "20px" }}>
            <img src={IMAGES.boxpic2} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FitnessGoal;
