import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserNavbar from "../components/UserNavbar";

export default function Settings() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    coin12Address: "",
    networkDetails: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (field, value) => (e) => {
    e.preventDefault();

    if (!value || value.trim() === "") {
      toast.error(`The ${field} field cannot be empty.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
      return;
    }

    if (field === "password" && value.length < 8) {
      toast.error("Password must be at least 8 characters long.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
      return;
    }

    toast.success(`${field} updated successfully!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
    });

    alert(`${field} updated to: ${value}`);
    setInputs({ ...inputs, [field]: "" });
  };

  return (
    <>
      <UserNavbar></UserNavbar>
      <div className="container mt-5">
        <div className="card settings-card">
          <div className="card-header settings-header">
            <h3 className="settings-header-title">Account Settings</h3>
          </div>
          <div className="card-body">
            <div className="row">
              {/* First Name Change */}
              <div className="col-md-6 settings-option">
                <h5 className="settings-option-title">Change First Name</h5>
                <form onSubmit={handleSubmit("firstName", inputs.firstName)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control settings-input"
                      placeholder="Enter new first name"
                      value={inputs.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn settings-btn">
                    Save
                  </button>
                </form>
              </div>

              {/* Last Name Change */}
              <div className="col-md-6 settings-option">
                <h5 className="settings-option-title">Change Last Name</h5>
                <form onSubmit={handleSubmit("lastName", inputs.lastName)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control settings-input"
                      placeholder="Enter new last name"
                      value={inputs.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn settings-btn">
                    Save
                  </button>
                </form>
              </div>

              {/* Email Change */}
              <div className="col-md-6 settings-option">
                <h5 className="settings-option-title">Change Email</h5>
                <form onSubmit={handleSubmit("email", inputs.email)}>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control settings-input"
                      placeholder="Enter new email"
                      value={inputs.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn settings-btn">
                    Save
                  </button>
                </form>
              </div>

              {/* Password Change */}
              <div className="col-md-6 settings-option">
                <h5 className="settings-option-title">Change Password</h5>
                <form onSubmit={handleSubmit("password", inputs.password)}>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control settings-input"
                      placeholder="Enter new password"
                      value={inputs.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn settings-btn">
                    Save
                  </button>
                </form>
              </div>

              {/* Address Change */}
              <div className="col-md-6 settings-option">
                <h5 className="settings-option-title">Change Address</h5>
                <form onSubmit={handleSubmit("address", inputs.address)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="address"
                      className="form-control settings-input"
                      placeholder="Enter new address"
                      value={inputs.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn settings-btn">
                    Save
                  </button>
                </form>
              </div>

              {/* Coin12 Address Change */}
              <div className="col-md-6 settings-option">
                <h5 className="settings-option-title">Change Coin12 Address</h5>
                <form
                  onSubmit={handleSubmit("coin12Address", inputs.coin12Address)}
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      name="coin12Address"
                      className="form-control settings-input"
                      placeholder="Enter new Coin12 address"
                      value={inputs.coin12Address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn settings-btn">
                    Save
                  </button>
                </form>
              </div>

              {/* Network Details Change */}
              <div className="col-md-6 settings-option">
                <h5 className="settings-option-title">
                  Change Network Details
                </h5>
                <form
                  onSubmit={handleSubmit(
                    "networkDetails",
                    inputs.networkDetails
                  )}
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      name="networkDetails"
                      className="form-control settings-input"
                      placeholder="Enter new network details"
                      value={inputs.networkDetails}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn settings-btn">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
