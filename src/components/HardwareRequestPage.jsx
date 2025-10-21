import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

// Sample Software List
const softwareList = [
  "Microsoft Office",
  "Adobe Photoshop",
  "Visual Studio Code",
  "Slack",
  "Zoom",
  "Google Chrome",
  "AutoCAD",
  "MATLAB"
];

// Sample Hardware List
const hardwareList = [
  "Bio-metric device",
  "CCTV",
  "Phones",
  "Desktop",
  "Projector",
  "Portable projector",
  "Laptop",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Headphones",
  "Webcam",
  "Docking Station",
  "External Hard Drive"
];

export default function HardwareRequestPage() {
  // Track requested software and hardware
  const [requestedSoftware, setRequestedSoftware] = useState([]);
  const [requestedHardware, setRequestedHardware] = useState([]);

  // Handle software request
  const handleSoftwareRequest = (software) => {
    if (!requestedSoftware.includes(software)) {
      setRequestedSoftware([...requestedSoftware, software]);
      alert(`Software request submitted for ${software}`);
    }
  };

  // Handle hardware request
  const handleHardwareRequest = (hardware) => {
    if (!requestedHardware.includes(hardware)) {
      setRequestedHardware([...requestedHardware, hardware]);
      alert(`Hardware request submitted for ${hardware}`);
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
        

       
        <h1 className="text-3xl font-bold text-[#223f7f]">Available Hardware</h1>
        <small className="mb-6 mt-2">
          If the hardware is not available in the list below, click here to&nbsp;
          <Link to="/new-request" className="text-[#223f7f] font-bold">
            raise a new request
          </Link>.
        </small>

        <ul className="divide-y divide-gray-200">
          {hardwareList.map((hardware) => (
            <li
              key={hardware}
              className="flex justify-between items-center py-3"
            >
              <span className="text-lg">{hardware}</span>
              <button
                onClick={() => handleHardwareRequest(hardware)}
                disabled={requestedHardware.includes(hardware)}
                className={`px-4 py-2 rounded text-white ${
                  requestedHardware.includes(hardware)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#223f7f] hover:border-[#223f7f]"
                }`}
              >
                {requestedHardware.includes(hardware) ? "Requested" : "Request"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
