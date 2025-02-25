import React from "react";
import Swal from "sweetalert2";
import UserNavbar from "../components/UserNavbar";

export default function UserVoteDetails() {
  const handleProvideFeedback = async () => {
    const { value: feedback } = await Swal.fire({
      title: "Provide Feedback",
      input: "textarea",
      inputLabel: "Your Comment",
      inputPlaceholder: "Type your comment here...",
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
    });

    if (feedback) {
      Swal.fire({
        icon: "success",
        title: "Feedback Submitted",
        text: `Your feedback: "${feedback}"`,
      });
      console.log("Feedback submitted:", feedback);
      // Add logic to handle feedback submission (e.g., API call)
    } else if (feedback === "") {
      Swal.fire({
        icon: "error",
        title: "No Feedback Entered",
        text: "You cannot submit empty feedback.",
      });
    }
  };

  const handleAccept = () => {
    Swal.fire({
      title: "Confirm Acceptance",
      text: "Are you sure you want to accept?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Vote accepted.");
        // Add logic for vote acceptance
      } else {
        console.log("Accept action canceled.");
      }
    });
  };

  const handleReject = () => {
    Swal.fire({
      title: "Confirm Rejection",
      text: "Are you sure you want to reject?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Vote rejected.");
        // Add logic for vote rejection
      } else {
        console.log("Reject action canceled.");
      }
    });
  };

  return (
    <>
      <UserNavbar />
      <div className="container mt-5">
        <div className="card votedetails-card">
          <div className="card-header votedetails-header">
            <h3 className="votedetails-title">Vote Details</h3>
          </div>
          <div className="card-body">
            <div className="votedetails-info">
              <h4 className="votedetails-info-title">
                Vote Name: "Voting for New Policy"
              </h4>

              <p className="votedetails-info-text">
                <strong>Deadline:</strong> December 31, 2024, 11:59 PM
              </p>

              <p className="votedetails-info-text">
                <strong>Description:</strong> This vote concerns the
                implementation of a new voting policy that will enhance
                transparency in the voting process. The policy aims to increase
                trust among voters by improving the security of the system and
                enhancing accessibility.
              </p>
            </div>

            <div className="votedetails-feedback">
              <h5 className="votedetails-feedback-title">
                Provide Your Feedback:
              </h5>
              <button
                className="btn votedetails-btn-feedback"
                onClick={handleProvideFeedback}
              >
                Provide Feedback
              </button>
              <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn votedetails-btn-accept"
                  onClick={handleAccept}
                >
                  Accept
                </button>
                <button
                  className="btn votedetails-btn-reject"
                  onClick={handleReject}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
