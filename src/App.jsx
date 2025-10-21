import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import SupportDashboard from './components/SupportDashboard'
import SoftwareRequestPage from './components/SoftwareRequestPage';
import RequestForm from './components/RequestForm';
import HardwareRequestPage from './components/HardwareRequestPage';

function App() {

  return (
      <Routes>
        <Route path="/" element={<SupportDashboard />} />
        <Route path="/software-list" element={<SoftwareRequestPage />} />      
        <Route path="/hardware-list" element={<HardwareRequestPage />} />        
        <Route path="/new-request" element={<RequestForm />} />
      </Routes>
  )
}

export default App
