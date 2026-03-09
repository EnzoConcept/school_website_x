import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import StudentLife from './pages/StudentLife';
import Events from './pages/Events';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import Portal from './pages/Portal';
import Gallery from './pages/Gallery';
import AdmissionForm from './pages/AdmissionForm';
import ResultChecker from './pages/ResultChecker';
import News from './pages/News';
import StaffDashboard from './pages/StaffDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="admissions/apply" element={<AdmissionForm />} />
          <Route path="academics" element={<Academics />} />
          <Route path="student-life" element={<StudentLife />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Events />} />
          <Route path="staff" element={<Staff />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portal" element={<Portal />} />
          <Route path="portal/results" element={<ResultChecker />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
