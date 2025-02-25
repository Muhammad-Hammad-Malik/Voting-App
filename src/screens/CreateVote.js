import React, { useState } from "react";
import AdminNav from "../components/AdminNav";

export default function CreateVote() {
  // State for the form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show an alert with the form data
    alert(
      `Proposal Title: ${title}\nDescription: ${description}\nExpected Outcomes: ${outcomes}\nDeadline: ${deadlineDate} ${deadlineTime}`
    );
  };

  return (
    <>
      <AdminNav></AdminNav>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card ideaform-card">
          <div className="p-4">
            <h3 className="ideaform-title text-center">Propose an Idea</h3>
            <p className="ideaform-subtitle text-center">
              Share your ideas and make a difference.
            </p>
            <form className="ideaform-form" onSubmit={handleSubmit}>
              {/* Title */}
              <div className="mb-3">
                <label
                  htmlFor="ideaform-title"
                  className="form-label ideaform-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control ideaform-input"
                  id="ideaform-title"
                  placeholder="Enter a brief, descriptive title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* Description */}
              <div className="mb-3">
                <label
                  htmlFor="ideaform-description"
                  className="form-label ideaform-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control ideaform-input"
                  id="ideaform-description"
                  rows="4"
                  placeholder="Provide detailed information about your idea and its benefits"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              {/* Expected Outcomes */}
              <div className="mb-3">
                <label
                  htmlFor="ideaform-outcomes"
                  className="form-label ideaform-label"
                >
                  Expected Outcomes
                </label>
                <textarea
                  className="form-control ideaform-input"
                  id="ideaform-outcomes"
                  rows="3"
                  placeholder="Outline the potential impacts or improvements"
                  required
                  value={outcomes}
                  onChange={(e) => setOutcomes(e.target.value)}
                ></textarea>
              </div>
              {/* Deadline */}
              <div className="mb-3">
                <label
                  htmlFor="ideaform-deadline"
                  className="form-label ideaform-label"
                >
                  Deadline for Voting
                </label>
                <div className="d-flex gap-2">
                  <input
                    type="date"
                    className="form-control ideaform-input"
                    id="ideaform-deadline-date"
                    required
                    value={deadlineDate}
                    onChange={(e) => setDeadlineDate(e.target.value)}
                  />
                  <input
                    type="time"
                    className="form-control ideaform-input"
                    id="ideaform-deadline-time"
                    required
                    value={deadlineTime}
                    onChange={(e) => setDeadlineTime(e.target.value)}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <button type="submit" className="btn ideaform-btn w-100">
                Submit Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
