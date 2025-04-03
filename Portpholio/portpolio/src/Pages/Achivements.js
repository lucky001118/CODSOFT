import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";
// import { Link } from "react-router-dom";

// Achivements 
const achievements = [
  {
    title: "Academic Excellence",
    description: [
      "82% Aggregate in CSE at CSIT College, under CSVTU University.",
      "93% Aggregate in 12th Grade from Government Higher Secondary School Anjora Durg.",
    ],
    icon: "🎓",
  },
  {
    title: "Curriculars",
    description: [
      "Secure Second Position in Dumb Charades at CSIT.",
      "Secure First Position in Seven Stone at CSIT.",
      
    ],
    icon: "🚀",
  },
  {
    title: "Expertise",
    description: [
      "Proficient in React.js, Spring Boot, Microservices, Python ML, and more.",
      "Experience integrating APIs like Google API, GitHub API, and Twilio.",
    ],
    icon: "🔧",
  },
  {
    title: "Open Source",
    description: [
      "Created repositories for Java, Spring boot Framework, and microservices codes.",
    ],
    icon: "📂",
  },
  {
    title: "Competitions",
    description: [
      "Showcased problem-solving and programming expertise in academic clubs.",
      "Secured Second position on Project base Hackathon 'Code Art' at CSTI durg."
    ],
    icon: "🏆",
  },
  {
    title: "Organizer",
    description: [
      "Organize a hackathon 'Byte Battle' at CSIT.",
      "Organize a coding compitation 'Code Crunch' in laqchya at CSIT"
    ],
    icon: "📌",
  },
];

//   Certificates
const certifications = [
  {
    id: 1,
    title: "2nd Position at Code Art",
    organization: "Project base hackathon",
    image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826918/Image_1901_zbjtbm.jpg",
    link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826918/Image_1901_zbjtbm.jpg",
  },
  {
    id: 2,
    title: "Flipcart grid",
    organization: "Flip cart",
    image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737667039/Flipcart_Grid_5.0_certificate_htuued.jpg",
    link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737667039/Flipcart_Grid_5.0_certificate_htuued.jpg",
  },
  {
    id: 3,
    title: "Orgnizing the Hackathon",
    organization: "Byte Battle",
    image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826909/Image_1903_yjhizb.jpg",
    link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826909/Image_1903_yjhizb.jpg",
  },
  {
    id: 4,
    title: "Participate in web desining hackathon",
    organization: "Code Art",
    image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826917/Image_1902_mlr3ih.jpg",
    link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826917/Image_1902_mlr3ih.jpg",
  },
  {
    id: 5,
    title: "Participate in a hackathon",
    organization: "Web Development",
    image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826912/Image_1900_gtw0tc.jpg",
    link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826912/Image_1900_gtw0tc.jpg",
  },
  {
    id: 6,
    title: "2nd position in Dumb Charades",
    organization: "Game at Laqchya, CSIT",
    image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826910/Image_661_punmq4.jpg",
    link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826910/Image_661_punmq4.jpg",
  },
  {
    id: 7,
    title: "Participate in Bottel Jet",
    organization: "Bottle Roket game in laqchya, CSIT",
    image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826919/Image_1904_rsowtk.jpg",
    link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826919/Image_1904_rsowtk.jpg",
  },
  // Add more certifications as needed
];


export default function Achivements() {
  const [selectedCert, setSelectedCert] = useState(null);
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-12">

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Achievements 🎯
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl">{achievement.icon}</span>
                <h3 className="ml-2 text-xl font-semibold text-gray-800">
                  {achievement.title}
                </h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                {achievement.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-500">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Certificates related to the activities */}
      <div className="min-h-screen backdrop:blur-xl bg-gray-950/20 text-white py-16 px-8 rounded-lg mt-8">
            <div className="container mx-auto">
              {/* Title */}
              <h1 className="text-4xl font-bold text-center mb-12">
                Certificates related to Activities
              </h1>
        
              {/* Certification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    {/* Certificate Image */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-64 w-full object-cover"
                    />
        
                    {/* Hover Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100"
                    >
                      <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
                      <p className="text-sm">{cert.organization}</p>
                      <p
                        className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700"
                      >
                        View Certificate
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
        
            {/* Modal for Selected Certificate */}
            {selectedCert && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-11/12 md:w-2/3 lg:w-1/2">
                  <div className="relative">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto"
                    />
                    <button
                      className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1"
                      onClick={() => setSelectedCert(null)}
                    >
                      Close
                    </button>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{selectedCert.title}</h2>
                    <p className="text-sm text-gray-300 mb-4">
                      Provided by: {selectedCert.organization}
                    </p>
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      View on Platform
                    </a>
                  </div>
                </div>
        
                
              </div>
            )}
        
          </div>
      {/* end of the activities */}

    {/* second button */}
    <motion.div
      className="flex items-center justify-center mt-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.a
        href="/"
        className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
        whileHover={{
          scale: 1.1,
          rotate: -5,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        Back
      </motion.a>
    </motion.div>  
      {/*end of the button*/}

    </div>
    )
}
