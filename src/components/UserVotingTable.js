import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserVotingTable() {
  // Dummy data for votes
  const dummyVotes = [
    { name: "Vote A", date: "2024-12-20" },
    { name: "Vote B", date: "2024-12-25" },
    { name: "Vote C", date: "2024-12-30" },
    { name: "Vote D", date: "2025-01-05" },
    { name: "Vote E", date: "2025-01-05" }, // Same date as Vote D
  ];

  const [votes, setVotes] = useState(dummyVotes);
  const navigate = useNavigate();

  // Handle the "View Details" button click
  const handleViewDetails = (voteName) => {
    // Navigate to the details page with the vote name as a URL parameter
    navigate(`/uservotingdetails`);
  };

  return (
    <>
      <div className="col-lg-6">
        <div className="card twocards-card h-100">
          <div className="card-header twocards-header">
            <h4 className="twocards-title">Active Votes</h4>
          </div>
          <div className="card-body twocards-table-container">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {votes.map((vote, index) => (
                  <tr key={index}>
                    <td>{vote.name}</td>
                    <td>{vote.date}</td>
                    <td>
                      <button
                        className="btn btn-sm twocards-btn"
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
