import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserNavbar() {
  const navigate = useNavigate();

  // Navigate to the settings page
  const settingsClicked = () => {
    navigate("/settings");
  };

  // Navigate to the user dashboard
  const dashboardClicked = () => {
    navigate("/userdashboard");
  };

  // Navigate to the login page (logout functionality)
  const logoutClicked = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar usernav-navbar">
        <div className="container-fluid">
          <a
            href="#"
            onClick={dashboardClicked}
            className="navbar-brand usernav-brand"
          >
            Voting Dashboard
          </a>
          <div className="d-flex align-items-center">
            <span className="usernav-username me-3">John Doe</span>
            <a
              href="#"
              onClick={settingsClicked}
              className="usernav-icon-link me-3"
            >
              <i className="fas fa-cog usernav-icon"></i>
            </a>
            <a href="#" onClick={logoutClicked} className="usernav-icon-link">
              <i className="fas fa-sign-out-alt usernav-icon"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
