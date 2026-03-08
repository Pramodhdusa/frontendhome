import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import './index.css';
import Temp1 from "./Temp1.js";
import Temp2 from "./Temp2.js";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/temp1"
          element={
            <ProtectedRoute>
              <Temp1 />
            </ProtectedRoute>
          }
        />
        <Route path="/temp2" element={<Temp2 />}/>
      </Routes>
    </Router>
  );
}

export default App;