import React, { useState } from "react";
import AdminNav from "../components/AdminNav";

export default function AdminVotingDetails() {
  // Dummy data for voting details
  const dummyVotingData = {
    name: "Proposal to Reduce Carbon Emissions",
    deadline: "2024-12-31",
    description:
      "This vote seeks to implement policies aimed at reducing carbon emissions by 30% within the next decade. The proposal includes strategies for sustainable energy, reduced industrial emissions, and public awareness campaigns.",
    currentResults: {
      yesVotes: 120,
      noVotes: 45,
    },
    feedback: [
      {
        user: "Jane Doe",
        comment:
          "This is a great initiative! We need more awareness and action.",
      },
      {
        user: "John Smith",
        comment:
          "I support this, but I think the timeline should be more realistic.",
      },
      {
        user: "Emily White",
        comment: "We need to consider the economic impact too.",
      },
      {
        user: "Michael Brown",
        comment: "Excellent proposal, let's make it happen!",
      },
      {
        user: "Sarah Wilson",
        comment: "What about rural areas? We need solutions for everyone.",
      },
    ],
  };

  // Set the state with the dummy voting data
  const [votingDetails, setVotingDetails] = useState(dummyVotingData);

  return (
    <>
      <AdminNav />
      <div className="container mt-5">
        {/* Main Card */}
        <div className="card admin-details-card">
          <div className="card-header admin-details-header">
            <h3 className="admin-details-title">Voting Details</h3>
          </div>
          <div className="card-body">
            {/* Voting Details */}
            <div className="mb-4">
              <h5 className="admin-details-subtitle">Name:</h5>
              <p className="admin-details-text">{votingDetails.name}</p>
            </div>
            <div className="mb-4">
              <h5 className="admin-details-subtitle">Deadline:</h5>
              <p className="admin-details-text">{votingDetails.deadline}</p>
            </div>
            <div className="mb-4">
              <h5 className="admin-details-subtitle">Description:</h5>
              <p className="admin-details-text">{votingDetails.description}</p>
            </div>

            {/* Current Results */}
            <div className="mb-4">
              <h5 className="admin-details-subtitle">Current Results:</h5>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="admin-results-label">Yes:</span>
                  <span className="admin-results-value">
                    {votingDetails.currentResults.yesVotes} votes
                  </span>
                </div>
                <div>
                  <span className="admin-results-label">No:</span>
                  <span className="admin-results-value">
                    {votingDetails.currentResults.noVotes} votes
                  </span>
                </div>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="mb-4">
              <h5 className="admin-details-subtitle">User Feedback:</h5>
              <div className="admin-feedback-container">
                <ul className="list-group admin-feedback-list">
                  {votingDetails.feedback.map((feedback, index) => (
                    <li className="list-group-item" key={index}>
                      <strong>{feedback.user}:</strong> {feedback.comment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
