import React, { useState } from "react";
import NavBar from "./NavBar";

const topics = [
  "WiFi",
  "LAN",
  "Hardware",
  "Software",
  "Network Connectivity",
  "Security",
  "Audio/Video",
  "Academic Labs",
  "Event Support",
];

const RequestForm = () => {
  const [formData, setFormData] = useState({
    topic: "",
    subject: "",
    room: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submit logic, e.g., send data to server
    console.log("Request submitted:", formData);
    alert("Request submitted!");
  };

  return (
    <>
      <NavBar />
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
        <h2 className="text-2xl font-bold mb-6 text-[#223f7f]">New Support Request</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Topic Select */}
        <div>
          <label htmlFor="topic" className="block font-semibold mb-1">Select Topic <span className="text-red-800">*</span></label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="" disabled>Select a topic <span className="text-red-800">*</span></option>
            {topics.map((topic, idx) => (
              <option key={idx} value={topic}>{topic}</option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block font-semibold mb-1">Subject <span className="text-red-800">*</span></label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Enter subject"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Room/Lab No */}
        <div>
          <label htmlFor="room" className="block font-semibold mb-1">Room / Lab No (Optional)</label>
          <input
            type="text"
            id="room"
            name="room"
            value={formData.room}
            onChange={handleChange}
            placeholder="Enter room or lab number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Description with CKEditor */}
        <div>
          <label className="block font-semibold mb-1">Description <span className="text-red-800">*</span></label>
          <textarea
            type="text"
            id="room"
            name="room"
            value={formData.room}
            onChange={handleChange}
            placeholder="Write your description here..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-[#223f7f] text-white px-6 py-3 rounded hover:border-[#223f7f] transition"
          >
            Submit Request
          </button>
        </div>

      </form>
      </div>
      </>
  );
};

export default RequestForm;
