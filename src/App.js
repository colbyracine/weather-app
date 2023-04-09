import React from "react";
import WeatherApp from "./WeatherApp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/sign-in" element={<Login />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/weather" element={<WeatherApp />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
