import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    emailjs
      .sendForm(
        "service_gfykn6i",
        "template_iy1pb0b",
        e.target,
        "HccoOtZS6GHw-N-m6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // swal("Good job!", "form successfuly submmited", "success");
    Swal.fire({
      title: "Good job!",
      text: "form successfuly submmited",
      icon: "success",
    });
  };
  return (
    <>
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
                  <div className="widget widget_getintuch ">
                    <ul>
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>
                          2 centre Road morningside, Sandton, Johannesburg,
                          South Africa
                        </p>
                      </li>
                      <li>
                        <i className="fa-solid fa-phone"></i>
                        <p>+27 84 566 6271</p>
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope"></i>
                        <p>info@dctrainingandfitness.co.za</p>
                      </li>
                    </ul>
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
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group input-line">
                        <input
                          name="dzLastName"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-group input-line">
                        <input
                          name="dzEmail"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-group input-line">
                        <input
                          name="dzPhoneNumber"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group input-line m-b30">
                        <textarea
                          name="dzMessage"
                          rows="5"
                          required
                          className="form-control"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-primary btn-lg btn-skew"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
