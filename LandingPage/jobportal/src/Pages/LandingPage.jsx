import React from "react";
import disciss from "../assets/disciss.jpg";
import work from "../assets/work.jpg";
import paperwork from "../assets/paperwork.jpg";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative text-white text-center p-20 bg-cover bg-center" style={{ backgroundImage: `url(${work})` }}>
        <h1 className="text-4xl font-bold">Creative Digital Agency</h1>
        <p className="mt-4">Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </section>

      {/* Services */}
      <section className="grid grid-cols-3 gap-4 p-10 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="text-center">
          <h3 className="text-lg font-bold">Launch Business</h3>
          <p>Lorem ipsum has been the industry standard dummy text.</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">Online Support Team</h3>
          <p>Lorem ipsum has been the industry standard dummy text.</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">Time Management</h3>
          <p>Lorem ipsum has been the industry standard dummy text.</p>
        </div>
      </section>

      {/* About Us */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          15 years, we passionate about achieving better results for our clients.
          Lorem ipsum has been the industry standard dummy text since the 1500s.
        </p>
      </section>

      {/* Our Services */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-center text-2xl font-bold">Our Services</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <img src={work} alt="User Experience" className="w-full h-48 object-cover" />
            <h3 className="text-lg font-bold mt-2">User Experience</h3>
          </div>
          <div className="text-center">
            <img src={paperwork} alt="Creative Design" className="w-full h-48 object-cover" />
            <h3 className="text-lg font-bold mt-2">Creative Design</h3>
          </div>
          <div className="text-center">
            <img src={disciss} alt="Retina Ready" className="w-full h-48 object-cover" />
            <h3 className="text-lg font-bold mt-2">Retina Ready</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
