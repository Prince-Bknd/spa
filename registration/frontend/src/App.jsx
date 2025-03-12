import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Register from './components/Registration.jsx'; 
import UserData from './components/UserData.jsx';     

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const { pathname } = useLocation();

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end p-2">
        <Link to="/" className="btn btn-primary btn-sm">Home</Link>
      </div>
      {pathname === '/' && (
        <nav className="mb-3">
          <Link to="/register" className="btn btn-primary me-2 btn-sm">Register</Link>
          <Link to="/data" className="btn btn-success btn-sm">View Data</Link>
        </nav>
      )}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<UserData />} />
      </Routes>
    </div>
  );
}

export default App;
