import React from "react";
import "./App.css";
import Welcome from "./welcomePage/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
