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
      const sections = ['home', 'about', 'services', 'testimonials', 'calculator', 'contact'];
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
                <img src={IMAGES.logo} alt="DC Training Logo" />
              </Link>
            </div>

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
                <li className={activeSection === 'home' ? 'active' : ''}>
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
                <li className={activeSection === 'about' ? 'active' : ''}>
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
                <li className={activeSection === 'services' ? 'active' : ''}>
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
                <li className={activeSection === 'testimonials' ? 'active' : ''}>
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
                <li className={activeSection === 'calculator' ? 'active' : ''}>
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
                <li className={activeSection === 'contact' ? 'active' : ''}>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;