import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../constants/theme";

const WeightCalculator = () => {
  const [selectBtn, setSelectBtn] = useState("Male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const nav = useNavigate();

  const calculateBMI = (e) => {
    e.preventDefault();

    // Convert height from cm to meters
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    // BMI formula: weight (kg) / (height (m) ^ 2)
    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);

    setBmiResult(bmi);

    // Determine BMI category
    if (bmi < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiCategory("Healthy");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obese");
    }
  };

  return (
    <>
      <div className="page-content ">
        <section
          className="content-inner overflow-hidden"
        >
          <div className="container">
            <div className="row justify-content-between align-items-center m-b20">
              <div className="col-lg-6">
                <div className="section-head">
                  <h2 className="title">Body Mass Index</h2>
                  <p>
                    Calculate your BMI to understand your weight status and get
                    personalized health recommendations.
                  </p>
                </div>
                <form
                  className="dzForm calculator-form p-r10"
                  onSubmit={calculateBMI}
                >
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="form-label text-primary">
                        Height (cm)
                      </label>
                      <div className="input-group input-line">
                        <input
                          name="dzHeight"
                          id="height"
                          className="form-control"
                          placeholder="Height / Cm"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          type="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label text-primary">
                        Weight (kg)
                      </label>
                      <div className="input-group input-line">
                        <input
                          name="weight"
                          id="weight"
                          className="form-control"
                          placeholder="Your Weight"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          type="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label text-primary">Age</label>
                      <div className="input-group input-line">
                        <input
                          name="Age"
                          id="age"
                          className="form-control"
                          placeholder="Age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          type="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label text-primary">Gender</label>
                      <div className="mb-4 mb-sm-0">
                        <Dropdown className="select-dropdown style-1">
                          <Dropdown.Toggle
                            as="div"
                            className="select-dropdown-toggle"
                          >
                            {selectBtn}{" "}
                            <i className="fa-sharp fa-solid fa-caret-down"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="mt-2">
                            <Dropdown.Item onClick={() => setSelectBtn("Male")}>
                              Male
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => setSelectBtn("Female")}
                            >
                              Female
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => setSelectBtn("Other")}
                            >
                              Other
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        name="submit"
                        type="submit"
                        className="btn btn-secondary btn-skew m-b30"
                      >
                        <span>Calculate BMI</span>
                      </button>
                    </div>
                    {bmiResult && (
                      <div className="col-sm-12">
                        <div className="bmi-result p-4 bg-light rounded">
                          <h4 className="text-primary">Your Results</h4>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <p className="mb-1">
                                Your BMI: <strong>{bmiResult}</strong>
                              </p>
                              <p className="mb-1">
                                Category: <strong>{bmiCategory}</strong>
                              </p>
                            </div>
                            <div>
                              <span
                                className={`badge ${
                                  bmiCategory === "Underweight"
                                    ? "bg-warning"
                                    : bmiCategory === "Healthy"
                                    ? "bg-success"
                                    : bmiCategory === "Overweight"
                                    ? "bg-warning"
                                    : "bg-danger"
                                } text-white p-2`}
                              >
                                {bmiCategory}
                              </span>
                            </div>
                          </div>
                          <p className="mt-3 mb-0">
                            {bmiCategory === "Underweight"
                              ? "Let's develop a customized nutrition and strength program to help you gain healthy weight. Book a consultation today!"
                              : bmiCategory === "Healthy"
                              ? "Great job maintaining your health! I can help you optimize your fitness routine and take your results to the next level."
                              : bmiCategory === "Overweight"
                              ? "I specialize in creating personalized plans to help clients reach their ideal weight. Let's work together to achieve your goals!"
                              : "As your personal trainer, I'll create a safe, effective weight management program tailored to your needs. Get started with a free assessment."}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="col-lg-6 m-md-t40">
                <div className="calculate-table">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>BMI</th>
                        <th>Weight Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className={
                          bmiCategory === "Underweight" ? "table-active" : ""
                        }
                      >
                        <td>Below 18.5</td>
                        <td>Underweight</td>
                      </tr>
                      <tr
                        className={
                          bmiCategory === "Healthy" ? "table-active" : ""
                        }
                      >
                        <td>18.5 - 24.9</td>
                        <td>Healthy</td>
                      </tr>
                      <tr
                        className={
                          bmiCategory === "Overweight" ? "table-active" : ""
                        }
                      >
                        <td>25.0 - 29.9</td>
                        <td>Overweight</td>
                      </tr>
                      <tr
                        className={
                          bmiCategory === "Obese" ? "table-active" : ""
                        }
                      >
                        <td>30.0 - and Above</td>
                        <td>Obese</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="weight-info">
                    <span>
                      <b>BMR</b> Metabolic Rate / <b>BMI</b> Body Mass Index{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WeightCalculator;
