import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const softwareList = [
  "Med-log-book", 
  "PG-Admissions", 
  "Focus-A1", 
  "Focus-Nutra", 
  "Focus-Laila", 
  "Suvarna", 
  "Parent portal", 
  "Student Information System",
  "Microsoft Office",
  "Adobe Photoshop",
  "Visual Studio Code",
  "Slack",
  "Zoom",
  "Google Chrome",
  "AutoCAD",
  "MATLAB"
];

export default function SoftwareRequestPage() {
  // track requested software (optional)
  const [requested, setRequested] = useState([]);

  const handleRequest = (software) => {
    if (!requested.includes(software)) {
      setRequested([...requested, software]);
      alert(`Request submitted for ${software}`);
    }
  };

  return (
    <>
      <NavBar />
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl font-bold text-[#223f7f]">Available Software</h1>
        <small className="mb-6 mt-2">
          If the software is not available in the list below, click here to&nbsp;
          <Link to="/new-request" className="text-[#223f7f] font-bold">
            raise a new request
          </Link>.
        </small>

      <ul className="divide-y divide-gray-200">
        {softwareList.map((software) => (
          <li
            key={software}
            className="flex justify-between items-center py-3"
          >
            <span className="text-lg">{software}</span>
            <button
              onClick={() => handleRequest(software)}
              disabled={requested.includes(software)}
              className={`px-4 py-2 rounded text-white ${
                requested.includes(software)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#223f7f] hover:border-[#223f7f]"
              }`}
            >
              {requested.includes(software) ? "Requested" : "Request"}
            </button>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
