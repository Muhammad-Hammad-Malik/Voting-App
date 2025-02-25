import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminVoting() {
  const [votes] = useState([
    { name: "Vote A", date: "2024-12-20" },
    { name: "Vote B", date: "2024-12-25" },
    { name: "Vote C", date: "2024-12-30" },
    { name: "Vote D", date: "2025-01-05" },
  ]);

  const navigate = useNavigate();

  // Handle the button click to navigate to the voting details page
  const handleViewDetails = (voteName) => {
    // Navigate to the details page for the specific vote
    navigate(`/adminvotingdetails`);
  };

  return (
    <>
      <div className="col-lg-6">
        <div className="card admin-card h-100">
          <div className="card-header admin-header">
            <h4 className="admin-title">Active Votes</h4>
          </div>
          <div className="card-body admin-table-container">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th className="custom-blue">Name</th>
                  <th className="custom-blue">Date</th>
                  <th className="custom-blue">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Dynamically populate the table rows */}
                {votes.map((vote, index) => (
                  <tr key={index}>
                    <td>{vote.name}</td>
                    <td>{vote.date}</td>
                    <td>
                      <button
                        className="btn btn-sm admin-btn"
                        onClick={() => handleViewDetails(vote.name)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
