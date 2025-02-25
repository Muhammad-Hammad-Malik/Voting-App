import React, { useState } from "react";

export default function AdminViewIdeas() {
  // Define the dummy array using useState
  const [ideas] = useState([
    {
      id: 1,
      name: "Community Voting App",
      description:
        "A simple voting app for communities to streamline decision-making.",
      impacts:
        "Improves efficiency, increases participation, and ensures transparency.",
    },
    {
      id: 2,
      name: "Eco-Friendly Initiative",
      description:
        "Implement programs to promote sustainable practices in the workplace.",
      impacts: "Reduces waste, conserves resources, and boosts team morale.",
    },
    {
      id: 3,
      name: "Employee Wellness Program",
      description:
        "Introduce weekly yoga sessions and mental health workshops.",
      impacts:
        "Enhances employee well-being, reduces burnout, and increases productivity.",
    },
  ]);

  return (
    <>
      <div className="container mt-5">
        <div className="card ideas-card">
          <div className="card-header text-center ideas-header">
            <h3 className="ideas-title">Submitted Ideas</h3>
          </div>
          <div className="card-body ideas-body-scroll">
            {/* Map over the ideas array to display each idea dynamically */}
            {ideas.map((idea) => (
              <div key={idea.id} className="idea-item mb-3">
                <h5 className="idea-name">
                  Idea {idea.id}: {idea.name}
                </h5>
                <p className="idea-description">
                  <strong>Description:</strong> {idea.description}
                </p>
                <p className="idea-impacts">
                  <strong>Impacts:</strong> {idea.impacts}
                </p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
