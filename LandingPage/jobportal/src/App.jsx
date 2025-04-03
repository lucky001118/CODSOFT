import React from "react";
import Navbar from "./Pages/Navbar";
import  Home  from "./Pages/Home";
import JobPortalFooter from "./Pages/JobPortalFooter";
import ContactUs from "./Pages/ContactUs";
import JobCard from "./Pages/JobCard";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <LandingPage></LandingPage>
      <ContactUs />
      <JobPortalFooter />
    </div>
  )
}

export default App
