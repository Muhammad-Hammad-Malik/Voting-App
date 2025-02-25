import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import img from "../assets/login.png";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy login credentials
  const correctEmail = "admin@gmail.com";
  const correctPassword = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate credentials
    if (email === correctEmail && password === correctPassword) {
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });

      // Redirect to Admin Dashboard
      setTimeout(() => navigate("/admindashboard"), 2000);
    } else {
      toast.error("Incorrect email or password. Please try again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card admin-login-card d-flex flex-row">
          {/* Left Section */}
          <div className="admin-login-left d-flex flex-column align-items-center justify-content-center">
            <img
              src={img}
              alt="Admin Dashboard"
              className="admin-login-image"
            />
            <h2 className="admin-login-title">Admin Dashboard</h2>
            <p className="admin-login-text">Manage securely with ease.</p>
          </div>

          {/* Right Section */}
          <div className="admin-login-right p-4">
            <h3 className="admin-login-form-title text-center">Admin Login</h3>
            <p className="admin-login-form-subtitle text-center">
              Enter your credentials to access the dashboard.
            </p>
            <form className="admin-login-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="admin-login-email"
                  className="form-label admin-login-label"
                >
                  Email or ID
                </label>
                <input
                  type="text"
                  className="form-control admin-login-input"
                  id="admin-login-email"
                  placeholder="Enter your email or ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="admin-login-password"
                  className="form-label admin-login-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control admin-login-input"
                  id="admin-login-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn admin-login-btn w-100">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
