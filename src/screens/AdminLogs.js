import React, { useState } from "react";
import AdminNav from "../components/AdminNav";

export default function AdminLogs() {
  // Dummy array with log data
  const dummyLogs = [
    { timestamp: "2024-12-15 10:00 AM", activity: "Login", user: "John Doe" },
    {
      timestamp: "2024-12-14 02:30 PM",
      activity: "Submitted Proposal",
      user: "Jane Smith",
    },
    { timestamp: "2024-12-13 11:45 AM", activity: "Voted", user: "Mark Lee" },
    {
      timestamp: "2024-12-12 09:15 AM",
      activity: "Password Change",
      user: "John Doe",
    },
  ];

  // Set the state with the dummy logs
  const [logs, setLogs] = useState(dummyLogs);

  return (
    <>
      <AdminNav />
      <div className="container mt-5">
        {/* Logs Section */}
        <div className="logs-card card shadow-sm">
          <div className="card-header logs-card-header">
            <h5 className="logs-title">Activity Logs</h5>
          </div>
          <div className="card-body logs-card-body">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="logs-table-header">
                  <tr>
                    <th className="custom-blue" scope="col">
                      Timestamp
                    </th>
                    <th className="custom-blue" scope="col">
                      Activity
                    </th>
                    <th className="custom-blue" scope="col">
                      User
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through logs and display each log */}
                  {logs.map((log, index) => (
                    <tr key={index}>
                      <td>{log.timestamp}</td>
                      <td>{log.activity}</td>
                      <td>{log.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
