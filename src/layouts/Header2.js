import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IMAGES } from "../constants/theme";

const Header2 = () => {
  const [headerFix, setHeaderFix] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setHeaderFix(window.scrollY > 50);

      // Detect which section is currently in view
      const sections = [
        "home",
        "about",
        "services",
        // "gallery",
        "testimonials",
        "calculator",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <style>
        {`
          /* General social media styles */
          .social-media-icons {
            display: flex;
            align-items: center;
          }
          
          .social-media-icons .dz-social-icon ul {
            display: flex;
            gap: 12px;
            margin: 0;
            padding: 0;
            list-style: none;
          }
          
          .social-media-icons a {
            color: white;
            font-size: 16px;
            transition: all 0.3s ease;
          }
          
          .social-media-icons a:hover {
            color: #ccc;
            transform: translateY(-2px);
          }
          
          /* Header container layout */
          @media (min-width: 992px) {
            .container.clearfix {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            
            .logo-header {
              flex: 0 0 auto;
            }
            
            .navigation-container {
              flex: 1;
              display: flex;
              justify-content: center;
            }
            
            .desktop-social-icons {
              flex: 0 0 auto;
              display: flex;
              margin-left: 20px;
            }
            
            .desktop-social-icons .dz-social-icon ul {
              gap: 5px;
            }

            .desktop-social-icons .dz-social-icon ul li a {
              border-radius: 50px;
              margin-left: -5px;
            }
            
            .mobile-social-icons {
              display: none;
            }
            
            .navbar-toggler {
              display: none;
            }
          }
          
          /* Mobile specific layout */
          @media (max-width: 991px) {
            .desktop-social-icons {
              display: none;
            }
            
            .mobile-social-icons {
              display: flex;
              width: 100%;
              justify-content: center;
              margin: 15px 0 0;
            }
          }
        `}
      </style>

      <header
        className="site-header mo-left header header-transparent style-2"
        style={{ zIndex: 100 }}
      >
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix">
            <div className="container clearfix">
              {/* Website Logo */}
              <div className="logo-header mostion logo-light">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  <img src={IMAGES.logoWhite} alt="DC Training Logo" />
                </Link>
              </div>
              <div className="logo-header mostion logo-dark">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  <img src={IMAGES.logoWhite} alt="DC Training Logo" />
                </Link>
              </div>

              {/* Navigation Container */}
              <div className="navigation-container">
                {/* Mobile Menu Toggle */}
                <button
                  className={`navbar-toggler navicon justify-content-end ${
                    sidebarOpen ? "open" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                {/* Main Navigation */}
                <div
                  id="navbarNavDropdown"
                  className={`header-nav navbar-collapse collapse justify-content-center ${
                    sidebarOpen ? "show" : ""
                  }`}
                >
                  <ul className="nav navbar-nav navbar navbar-left">
                    <li className={activeSection === "home" ? "active" : ""}>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={handleNavClick}
                      >
                        Home
                      </Link>
                    </li>
                    <li className={activeSection === "about" ? "active" : ""}>
                      <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={handleNavClick}
                      >
                        About
                      </Link>
                    </li>
                    <li
                      className={activeSection === "services" ? "active" : ""}
                    >
                      <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleNavClick}
                      >
                        Services
                      </Link>
                    </li>
                    {/* <li className={activeSection === "gallery" ? "active" : ""}>
                      <Link
                        to="gallery"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleNavClick}
                      >
                        Gallery
                      </Link>
                    </li> */}
                    <li
                      className={
                        activeSection === "testimonials" ? "active" : ""
                      }
                    >
                      <Link
                        to="testimonials"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleNavClick}
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li
                      className={activeSection === "calculator" ? "active" : ""}
                    >
                      <Link
                        to="calculator"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleNavClick}
                      >
                        BMI Calculator
                      </Link>
                    </li>
                    <li className={activeSection === "contact" ? "active" : ""}>
                      <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={handleNavClick}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>

                  {/* Mobile Social Icons - Only visible on mobile */}
                  <div className="mobile-social-icons social-media-icons">
                    <div className="dz-social-icon style-1">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/darlington.masuku.54/about"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.tiktok.com/@dcmasuku1"
                            rel="noreferrer"
                          >
                            <i className="fab fa-tiktok"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/darlingcares/"
                            rel="noreferrer"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/darlington-masuku-432ab035a"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Social Icons - Far right position */}
              <div className="desktop-social-icons social-media-icons">
                <div className="dz-social-icon style-1">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/darlington.masuku.54/about"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.tiktok.com/@dcmasuku1"
                        rel="noreferrer"
                      >
                        <i className="fab fa-tiktok"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/darlingcares/"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/darlington-masuku-432ab035a"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;
