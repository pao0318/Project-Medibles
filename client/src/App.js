import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/patient/Home";
import About from "./components/doctor/About";
import AboutPatient from "./components/patient/AboutPatient";
import Discussion from "./components/patient/Discussion";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import { Login } from "./components/Login";
import { Signup } from "./components/doctor/Signup";
import { useState } from "react";
import SignupHome from "./components/SignupHome";
import { SignupPatient } from "./components/patient/SignupPatient";
import DirectMessaging from "./components/DirectMessaging";
import ViewProfile from "./components/patient/ViewProfile";
import NotificationDoctor from "./components/doctor/NotificationDoctor";
import Books from "./components/patient/Books";
import { Notfound } from "./components/Notfound";
import Homedoctor from "./components/doctor/Homedoctor";
import ViewProfilePatient from "./components/doctor/ViewProfilePatient";
import Medicine from "./components/patient/Medicine";
import { ShopMedicine } from "./components/patient/ShopMedicine";
import { HomePage } from "./components/HomePage";
import { Excercise } from "./components/patient/Excercise";
import { Report } from "./components/patient/Report";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <div>
            <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/homedoctor" element={<Homedoctor showAlert={showAlert} />} />
            <Route exact path="/about" element={<About showAlert={showAlert}/>} />
            <Route exact path="/aboutpatient" element={<AboutPatient showAlert={showAlert} />} />
            <Route exact path="/chat" element={<DirectMessaging />} />
            <Route exact path="/discussion" element={<Discussion />} />
            <Route exact path="/excercise" element={<Excercise showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signuphome" element={<SignupHome showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route exact path="/signuppatient" element={<SignupPatient showAlert={showAlert} />} />
            <Route exact path="/viewProfile/:id" element={<ViewProfile showAlert={showAlert} />} />
            <Route exact path="/viewProfilePatient/:id" element={<ViewProfilePatient showAlert={showAlert} />} />
            <Route exact path="/notify" element={<NotificationDoctor showAlert={showAlert} />} />
            <Route exact path="/books" element={<Books showAlert={showAlert} />} />
            <Route exact path="/shopmedicine" element={<ShopMedicine showAlert={showAlert} />} />
            <Route exact path="/medicine" element={<Medicine showAlert={showAlert} />} />
            <Route exact path="/homepage" element={<HomePage />} />
            <Route exact path="/report" element={<Report showAlert={showAlert} />} />
            <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
