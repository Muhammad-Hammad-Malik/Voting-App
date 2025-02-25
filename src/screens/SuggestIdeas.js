import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserNavbar from "../components/UserNavbar";

export default function SuggestIdeas() {
  const [ideaName, setIdeaName] = useState("");
  const [description, setDescription] = useState("");
  const [impacts, setImpacts] = useState("");

  const handleSubmit = () => {
    if (!ideaName || !description || !impacts) {
      toast.error("All fields are required!", {
        position: "top-center",
        autoClose: 2000, // 2 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Idea submitted successfully!", {
        position: "top-center",
        autoClose: 2000, // 2 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      console.log("Idea Submitted:", {
        name: ideaName,
        description,
        impacts,
      });

      // Reset the form fields
      setIdeaName("");
      setDescription("");
      setImpacts("");
    }
  };

  return (
    <>
      <UserNavbar></UserNavbar>
      <div className="container mt-5">
        <div className="card suggestidea-card">
          <div className="card-header text-center suggestidea-header">
            <h3 className="suggestidea-title">Suggest an Idea</h3>
          </div>
          <div className="card-body">
            {/* Name */}
            <div className="mb-3">
              <label
                htmlFor="idea-name"
                className="form-label suggestidea-label"
              >
                Idea Name
              </label>
              <input
                type="text"
                className="form-control suggestidea-input"
                id="idea-name"
                placeholder="Enter the idea name"
                value={ideaName}
                onChange={(e) => setIdeaName(e.target.value)}
                required
              />
            </div>
            {/* Description */}
            <div className="mb-3">
              <label
                htmlFor="idea-description"
                className="form-label suggestidea-label"
              >
                Description
              </label>
              <textarea
                className="form-control suggestidea-textarea"
                id="idea-description"
                rows="4"
                placeholder="Describe your idea and its purpose"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            {/* Impacts */}
            <div className="mb-3">
              <label
                htmlFor="idea-impacts"
                className="form-label suggestidea-label"
              >
                Impacts
              </label>
              <textarea
                className="form-control suggestidea-textarea"
                id="idea-impacts"
                rows="3"
                placeholder="Outline the expected impacts of your idea"
                value={impacts}
                onChange={(e) => setImpacts(e.target.value)}
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="d-grid mt-4">
              <button
                className="btn suggestidea-btn-submit"
                onClick={handleSubmit}
              >
                Submit Idea
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}
