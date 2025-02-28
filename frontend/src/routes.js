// Import React & Routing Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "/pages/Home.js";  // Home Page
import DoctorPage from "./pages/DoctorPage";  // Doctor Portal
import NursePage from "./pages/NursePage";  // Nurse Portal
import PatientPage from "./pages/PatientPage";  // Patient Portal
import Login from "./components/Login";  // Login Page
import NotFound from "./pages/NotFound";  // 404 Page

// Define Application Routes
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Default Landing Page */}
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/nurse" element={<NursePage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />  {/* 404 Page */}
      </Routes>
    </Router>
  );
};

// Export Routes
export default AppRoutes;
