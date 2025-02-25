import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../assets/login.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const hardcodedCredentials = {
    email: "abc@gmail.com",
    password: "1234",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === hardcodedCredentials.email &&
      password === hardcodedCredentials.password
    ) {
      toast.success("Login successful!", { autoClose: 1000 });
      setTimeout(() => navigate("/userdashboard"), 2000); // Navigate after showing success toast
    } else {
      toast.error("Invalid email or password!", { autoClose: 1000 });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card signin-card d-flex flex-row">
          <div className="signin-left d-flex flex-column align-items-center justify-content-center">
            <img src={img} alt="Rest with Dignity" className="signin-image" />
            <h2 className="signin-title">Voting Made Easy</h2>
            <p className="signin-text">Secure and easy voting solution.</p>
          </div>

          <div className="signin-right p-4">
            <h3 className="signin-form-title text-center">User Sign-In</h3>
            <p className="signin-form-subtitle text-center">
              Enter your credentials
            </p>
            <form className="signin-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="signin-email"
                  className="form-label signin-label"
                >
                  Email or ID
                </label>
                <input
                  type="text"
                  className="form-control signin-input"
                  id="signin-email"
                  placeholder="Enter your email or ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signin-password"
                  className="form-label signin-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control signin-input"
                  id="signin-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn signin-btn w-100">
                Sign In
              </button>
            </form>
            <p className="signin-footer-text text-center mt-3">
              Don't have an account?{" "}
              <a href="#" className="signin-link" onClick={() => navigate("/")}>
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
