import React from "react";
import { motion } from "framer-motion";
import JobPortalComponent from "./JobPortalComponent";

const Home = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden relative">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-white text-lg font-semibold uppercase tracking-widest drop-shadow-lg"
      >
        4536+ Exciting Opportunities Await!
      </motion.h2>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
        className="text-white text-5xl md:text-7xl font-extrabold mt-2 drop-shadow-2xl"
      >
        Welcome to Your Dream Job
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.4 }}
        className="text-white text-lg mt-4 max-w-2xl font-medium drop-shadow-md"
      >
        We are thrilled to have you here! Explore top-notch job listings, career-boosting opportunities, and a future that aligns with your passion. Your journey to success starts now!
      </motion.p>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-xl hover:bg-yellow-500 transition duration-300 text-lg"
      >
        Upload Your Resume
      </motion.button>

      {/* Floating Animations */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-10 w-16 h-16 bg-white/20 rounded-full blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"
      />
    </div>
    <JobPortalComponent />
    </>
  );
};

export default Home;