import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";

const certifications = [
    {
      id: 1,
      title: "Java Web Development",
      organization: "Mind Lufter",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737666567/Java_Web_Devlopment_cwfgcu.jpg", // Example image path
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737666567/Java_Web_Devlopment_cwfgcu.jpg", // Example link
    },
    {
      id: 2,
      title: "Hibernate",
      organization: "Mind Lufter",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737665026/Hibernate_JPA_gnvhxk.jpg",
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737665026/Hibernate_JPA_gnvhxk.jpg",
    },
    
    {
      id: 3,
      title: "IBM Designe Thinking",
      organization: "IBM",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737710352/Lucky_Manikpuri_IBM_Certificate___SkillsBuild_page-0001_kewqnj.jpg",
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737710352/Lucky_Manikpuri_IBM_Certificate___SkillsBuild_page-0001_kewqnj.jpg",
    },
    {
      id: 4,
      title: "Web Designe and Development",
      organization: "Skill India",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737710372/Web_development_by_Skill_India_Certificate_page-0001_rfmr7j.jpg",
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737710372/Web_development_by_Skill_India_Certificate_page-0001_rfmr7j.jpg",
    },
    {
      id: 5,
      title: "Data Structure and Algorithum",
      organization: "Udemy",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737715850/Data_Structure_Java_zobyfs.jpg",
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737715850/Data_Structure_Java_zobyfs.jpg",
    },
    {
      id: 6,
      title: "Java Deep Learning Introduction",
      organization: "Udemy",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737715865/DeepLearning_Java_sv0r17.jpg",
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737715865/DeepLearning_Java_sv0r17.jpg",
    },
    {
      id: 7,
      title: "Spring Boot",
      organization: "Seed IT Solution",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737827582/SpringBoot_rm8vqn.jpg",
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737827582/SpringBoot_rm8vqn.jpg",
    },
    {
      id: 8,
      title: "Java Full Stack",
      organization: "Seed IT Solution",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737827582/Java_Full_Stack_tbt3fr.jpg",
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737827582/Java_Full_Stack_tbt3fr.jpg",
    },
    {
      id: 9,
      title: "Artificial Inteligence and Machine Learning",
      organization: "Ardent Technology",
      image: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826900/Image_1899_enx9uf.jpg",
      link: "https://res.cloudinary.com/drdgniolx/image/upload/v1737826900/Image_1899_enx9uf.jpg",
    },
    // Add more certifications as needed
  ];

export default function CertificationPage() {
    const [selectedCert, setSelectedCert] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-8 rounded-lg">
    <div className="container mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Certifications
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
  </div>
  )
}
