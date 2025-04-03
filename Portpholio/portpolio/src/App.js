// import Demo from "./Pages/Demo";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import Bio from "./Pages/Bio";
import Skills from "./Pages/Skills";
import WorkExperience from "./Pages/WorkExperience";
import Education from "./Pages/Education";
import ContactForm from "./Pages/ContactForm";
import Footer from "./Pages/Footer";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import CertificationPage from "./Pages/CertificationPage";
import OtherActivity from "./Pages/OtherActivity";
import Achivements from "./Pages/Achivements";

function App() {
  return (
    <div className=" relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex-col items-center p-4 space-y-8 container mx-auto">
       
        {/* <Demo /> */}
        <BrowserRouter>
        <Hero />
        <Navbar />
        <Routes>
          <Route  path="/certificates" element ={<CertificationPage />} />
        </Routes>
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
        <OtherActivity>
        </OtherActivity>
        <Routes>
          <Route  path="/Activity" element ={<Achivements />} />
        </Routes>
        <ContactForm />
        <Footer />
        {/* <CertificationPage /> */}

        </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
