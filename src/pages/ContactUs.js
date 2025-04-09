import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  const validateForm = (formData) => {
    const errors = {
      firstName: !formData.get("dzFirstName"),
      lastName: !formData.get("dzLastName"),
      email:
        !formData.get("dzEmail") ||
        !/^\S+@\S+\.\S+$/.test(formData.get("dzEmail")),
      phone: !formData.get("dzPhoneNumber"),
      message:
        !formData.get("dzMessage") || formData.get("dzMessage").length < 10,
    };

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    if (!validateForm(formData)) {
      setIsLoading(false);
      return;
    }

    // Create template parameters with all required fields
    const templateParams = {
      dzFirstName: formData.get("dzFirstName"),
      dzLastName: formData.get("dzLastName"),
      dzEmail: formData.get("dzEmail"),
      dzPhoneNumber: formData.get("dzPhoneNumber"),
      dzMessage: formData.get("dzMessage"),
      year: new Date().getFullYear(),
    };

    emailjs
      .send(
        "service_ocm3ngw",
        "template_s8d8v5e",
        templateParams,
        "CGhdDRbtMZ3Y4sBlC"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            timer: 3000,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Failed to send message. Please try again later.",
            icon: "error",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="page-content">
      <section className="content-inner-2 z-index-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-5 m-sm-b30 m-xl-b0">
              <div className="contact-box">
                <h3 className="contact-title">Contact Information</h3>
                <p className="contact-text">
                  Fill up the form and my Team will get back to you within 24
                  hours.
                </p>
                <div className="widget widget_getintuch">
                  <ul>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <p>
                        <a
                          href="https://maps.app.goo.gl/FXEhJmgeU6rgDFRA7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link address-link"
                          style={{ textDecoration: "underline" }}
                        >
                          2 Centre Road, Morningside, Sandton, Johannesburg,
                          South Africa
                        </a>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <p>
                        <a
                          href="mailto:info@dctrainingandfitness.co.za"
                          className="contact-link email-link"
                          style={{ textDecoration: "underline" }}
                        >
                          info@dctrainingandfitness.co.za
                        </a>
                      </p>
                    </li>
                    <li>
                      <i className="fa-brands fa-whatsapp"></i>
                      <p>
                        <a
                          href="https://wa.me/27845666271"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="whatsapp-link"
                          style={{ textDecoration: "underline" }}
                        >
                          +27 84 566 6271
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Social Media Icons - Now with white color */}
                <div
                  className="contact-social-icons"
                  style={{ marginTop: "1px" }}
                >
                  <div className="dz-social-icon style-1">
                    <ul
                      style={{
                        display: "flex",
                        gap: "15px",
                        padding: 0,
                        listStyle: "none",
                        marginBottom: "20px",
                      }}
                    >
                      <li>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/darlington.masuku.54/about"
                          rel="noreferrer"
                          style={{ color: "white", fontSize: "18px", borderRadius: "50px" }}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.tiktok.com/@dcmasuku1"
                          rel="noreferrer"
                          style={{ color: "white", fontSize: "18px", borderRadius: "50px" }}
                        >
                          <i className="fab fa-tiktok"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/darlingcares/"
                          rel="noreferrer"
                          style={{ color: "white", fontSize: "18px", borderRadius: "50px" }}
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/darlington-masuku-432ab035a"
                          rel="noreferrer"
                          style={{ color: "white", fontSize: "18px", borderRadius: "50px" }}
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <svg
                  width="250"
                  height="70"
                  viewBox="0 0 250 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 38L250 0L210 70L0 38Z"
                    fill="url(#paint0_linear_306_1296)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_306_1296"
                      x1="118.877"
                      y1="35.552"
                      x2="250.365"
                      y2="35.552"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="1" stopColor="var(--primary)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="col-md-6 col-xl-7">
              <form
                className="dz-form dzForm style-1"
                ref={form}
                onSubmit={sendEmail}
                noValidate
              >
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                />
                <div className="dzFormMsg"></div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-group input-line">
                      <input
                        name="dzFirstName"
                        required
                        type="text"
                        className={`form-control ${
                          formErrors.firstName ? "is-invalid" : ""
                        }`}
                        placeholder="First Name"
                      />
                      {formErrors.firstName && (
                        <div className="invalid-feedback">
                          First name is required
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group input-line">
                      <input
                        name="dzLastName"
                        required
                        type="text"
                        className={`form-control ${
                          formErrors.lastName ? "is-invalid" : ""
                        }`}
                        placeholder="Last Name"
                      />
                      {formErrors.lastName && (
                        <div className="invalid-feedback">
                          Last name is required
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="input-group input-line">
                      <input
                        name="dzEmail"
                        required
                        type="email"
                        className={`form-control ${
                          formErrors.email ? "is-invalid" : ""
                        }`}
                        placeholder="Your Email Address"
                      />
                      {formErrors.email && (
                        <div className="invalid-feedback">
                          {!form.current?.dzEmail?.value
                            ? "Email is required"
                            : "Please enter a valid email"}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="input-group input-line">
                      <input
                        name="dzPhoneNumber"
                        required
                        type="tel"
                        className={`form-control ${
                          formErrors.phone ? "is-invalid" : ""
                        }`}
                        placeholder="Phone"
                      />
                      {formErrors.phone && (
                        <div className="invalid-feedback">
                          Phone number is required
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group input-line m-b30">
                      <textarea
                        name="dzMessage"
                        rows="5"
                        required
                        className={`form-control ${
                          formErrors.message ? "is-invalid" : ""
                        }`}
                        placeholder="Message (minimum 10 characters)..."
                      ></textarea>
                      {formErrors.message && (
                        <div className="invalid-feedback">
                          {!form.current?.dzMessage?.value
                            ? "Message is required"
                            : "Message must be at least 10 characters"}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn btn-primary btn-lg btn-skew"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
