import React from "react";
import "./App.css";
import Welcome from "./components/welcomePage/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import MainPage from "./components/main/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
