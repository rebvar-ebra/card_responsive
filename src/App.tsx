import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Dashboard, CardDetails } from "./pages/index";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
