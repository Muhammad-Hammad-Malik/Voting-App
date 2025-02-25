import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    wallet: "",
    network: "",
    fund: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const {
      firstName,
      surname,
      wallet,
      network,
      fund,
      email,
      password,
      confirmPassword,
      address,
    } = formData;

    if (
      !firstName ||
      !surname ||
      !wallet ||
      !network ||
      !fund ||
      !email ||
      !password ||
      !confirmPassword ||
      !address
    ) {
      toast.error("All fields are required!", { autoClose: 1000 });
      return false;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long!", {
        autoClose: 1000,
      });
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { autoClose: 1000 });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Sign up successful!");
      setTimeout(() => navigate("/login"), 2000); // Navigate after showing success toast
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card signup-card">
          <div className="card-header text-center signup-title">Sign Up</div>
          <div className="card-body signup-scroll">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="signup-name"
                  className="form-label signup-label"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control signup-input"
                  id="signup-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-surname"
                  className="form-label signup-label"
                >
                  Surname
                </label>
                <input
                  type="text"
                  className="form-control signup-input"
                  id="signup-surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Enter your surname"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-wallet"
                  className="form-label signup-label"
                >
                  Coin12 Address
                </label>
                <input
                  type="text"
                  className="form-control signup-input"
                  id="signup-wallet"
                  name="wallet"
                  value={formData.wallet}
                  onChange={handleChange}
                  placeholder="Enter wallet address"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-network"
                  className="form-label signup-label"
                >
                  Network
                </label>
                <input
                  type="text"
                  className="form-control signup-input"
                  id="signup-network"
                  name="network"
                  value={formData.network}
                  onChange={handleChange}
                  placeholder="Enter network details"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-fund"
                  className="form-label signup-label"
                >
                  Fund Name
                </label>
                <input
                  type="text"
                  className="form-control signup-input"
                  id="signup-fund"
                  name="fund"
                  value={formData.fund}
                  onChange={handleChange}
                  placeholder="Enter hedge fund name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-email"
                  className="form-label signup-label"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control signup-input"
                  id="signup-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-password"
                  className="form-label signup-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control signup-input"
                  id="signup-password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a secure password"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-confirm-password"
                  className="form-label signup-label"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control signup-input"
                  id="signup-confirm-password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-address"
                  className="form-label signup-label"
                >
                  Residential Address
                </label>
                <textarea
                  className="form-control signup-input"
                  id="signup-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter your address"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="card-footer text-center signup-card-footer">
            <button onClick={handleSubmit} className="btn signup-btn w-100 ">
              Sign Up
            </button>
            <p className="signup-footer-text">
              Already have an account?{" "}
              <a
                href="#"
                className="signup-link"
                onClick={() => navigate("/login")}
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
