import React, { useMemo, useState } from 'react';
import {
  //AcademicCapIcon,
  ComputerDesktopIcon,
  WifiIcon,
  ShoppingCartIcon,
  VideoCameraIcon,
  MegaphoneIcon,
  LockClosedIcon,
  CpuChipIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';


const instructions = [
  "Raise a Request – Click on the appropriate section to submit a technical or administrative support request.",
  "Tickets will be addressed in the queue order they are received.",
  "One service ticket for one issue.",
  "For any ticket escalations / queries, please contact IP 1234 / 3421 or email support@gmail.com for resolution"
];

const contacts = [
  { location: 'VSP', details: '0891-2840555 / 4820 (IP Phone) 8th Floor, ICT Bhavan' },
  { location: 'HYD', details: '08455-221288 / 1288 (IP Phone) Room no. 301, A-Block' },
  { location: 'BLR', details: '0891-2866551 / 2828 (IP Phone) Room no. 637, 6th Floor, Shivaji Bhavan' },
  { location: 'Hours', details: 'Open 9AM - 6PM, Monday to Friday (Excluding holidays & lunch break : 1PM – 2PM)' }
];

const iconMap = {
  "Get software": <AcademicCapIcon className="w-10 h-10 text-[#223f7f]" />,
  "Get hardware": <ShoppingCartIcon className="w-10 h-10 text-[#223f7f]" />,
  "Network connectivity": <WifiIcon className="w-10 h-10 text-[#223f7f]" />,
  "Desktop and printer services": <ComputerDesktopIcon className="w-10 h-10 text-[#223f7f]" />,
  "Security services": <LockClosedIcon className="w-10 h-10 text-[#223f7f]" />,
  "Communication services": <MegaphoneIcon className="w-10 h-10 text-[#223f7f]" />,
  "Academic computer labs": <CpuChipIcon className="w-10 h-10 text-[#223f7f]" />,
  "Audio visualization services": <VideoCameraIcon className="w-10 h-10 text-[#223f7f]" />,
  "Event support": <CalendarDaysIcon className="w-10 h-10 text-[#223f7f]" />
};


const services = [
  {
    title: "Get software",
    items: [
      "Get software for academic course",
      "Get software for office",
      "Get software for lab",
      "Get software for research"
    ]
  },
  {
    title: "Get hardware",
    items: [
      "Get computer for office",
      "Renew annual maintenance contract",
      "Get computer for research",
      "Renew subscriptions"
    ]
  },
  {
    title: "Network connectivity",
    items: [
      "Requesting new network access",
      "Connecting to WiFi or LAN",
      "Device registration",
      "Troubleshooting network issues"
    ]
  },
  {
    title: "Desktop and printer services",
    items: [
      "Hardware issues",
      "Software & OS support",
      "Login & Domain issues",
      "Printer & Peripheral support"
    ]
  },
  {
    title: "Security services",
    items: [
      "CCTV services",
      "Install new CCTV cameras at your premises",
      "Request recorded CCTV footage for security review",
      "Request access to CCTV live views for monitoring"
    ]
  },
  {
    title: "Communication services",
    items: [
      "Email, google workspace",
      "Messaging & Broadcasting",
      "Grammarly & Office 365 services",
      "Video conferencing & Collaboration tools"
    ]
  },
  {
    title: "Academic computer labs",
    items: [
      "Hardware & Peripheral issues",
      "Software & OS support",
      "Domain & Login issues",
      "Dell direct support & Ticket management"
    ]
  },
  {
    title: "Audio visualization services",
    items: [
      "Projector & Display support",
      "Audio equipment support",
      "Recording & Live streaming",
      "LED Wall & AV setup"
    ]
  },
  {
    title: "Event support",
    items: [
      "Desktops & Printers setup",
      "WiFi & LAN setup",
      "Projectors & Display setup",
      "G-Events management"
    ]
  }
];

const SupportDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const pendingCount = 5;
  const closedCount = 26;

  const filteredServices = useMemo(() => {
    if (!searchTerm.trim()) return services;

    const lowerTerm = searchTerm.toLowerCase();

    return services.filter(
      (service) =>
        service.title.toLowerCase().includes(lowerTerm) ||
        service.items.some((item) => item.toLowerCase().includes(lowerTerm))
    );
  }, [searchTerm]);

  return (
    <>
      <NavBar />
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Instructions */}
      <div className="bg-white p-6 rounded shadow border border-gray-200">
        <h2 className="text-lg font-bold mb-4 text-[#223f7f]">Instructions</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          {instructions.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-gray-800 hidden">
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-1 space-y-1">
            {contacts.map((c, i) => (
              <li key={i}>
                <strong>{c.location}:</strong> {c.details}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top bar: pending/closed tickets + search */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow flex items-center space-x-2 min-w-[140px] justify-center">
          <p className="text-2xl font-bold">{pendingCount}</p>
          <p>Pending Tickets</p>
        </div>
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded shadow flex items-center space-x-2 min-w-[140px] justify-center">
          <p className="text-2xl font-bold">{closedCount}</p>
          <p>Closed Tickets</p>
        </div>
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow border-l-4 border-[#223f7f] flex items-center space-x-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => {
              if (service.title === "Get software") {
                navigate("/software-list");
              }
              else if (service.title === "Get hardware") {
                navigate("/hardware-list");
              } else {
                navigate("/new-request");
              }
            }}
          >
            {/* Icon vertically centered */}
            <div className="shrink-0">
              {iconMap[service.title] || (
                <ComputerDesktopIcon className="w-10 h-10 text-[#223f7f]" />
              )}
            </div>

            {/* Text */}
            <div>
              <h3 className="font-semibold text-[#223f7f] mb-2">{service.title}</h3>
              <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {filteredServices.length === 0 && (
          <p className="text-center col-span-full text-gray-500 mt-6">
            No matching services found.
          </p>
        )}
      </div>
      </div>
      </>
  );
};

export default SupportDashboard;
