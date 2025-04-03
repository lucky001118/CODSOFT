import React from 'react'

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce">
          Lucky Manikpur
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Computer Science Engineering Student | Aspiring Developer
        </p>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto p-8 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold mb-6 hover:text-teal-400 transition">
          About Me
        </h2>
        <p className="text-gray-400 leading-relaxed">
          I am a dedicated student of CSE at CSIT College under CSVTU University
          with an aggregate of 80%. I enjoy exploring new technologies and have
          worked on several projects integrating AI, ML, and modern web
          development frameworks.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-10">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-6 text-center hover:text-teal-400 transition">
            My Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-2">SCM 1.0</h3>
              <p className="text-gray-400">
                A Smart Contact Manager built with Spring Boot, Hibernate, and
                Tailwind CSS. Includes multiple login options, JWT tokens, and
                verification features.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-2">Movie Recommendation System</h3>
              <p className="text-gray-400">
                An AI and ML-based project integrated with Spring Boot
                microservices and React.js to recommend movies.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-2">ART-GALLERY</h3>
              <p className="text-gray-400">
                An e-commerce platform for selling and purchasing art, built
                using Spring Boot microservices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center hover:text-teal-400 transition">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="bg-teal-600 px-4 py-2 rounded-full shadow-md hover:bg-teal-400 transition">
            Java
          </span>
          <span className="bg-teal-600 px-4 py-2 rounded-full shadow-md hover:bg-teal-400 transition">
            React.js
          </span>
          <span className="bg-teal-600 px-4 py-2 rounded-full shadow-md hover:bg-teal-400 transition">
            Spring Boot
          </span>
          <span className="bg-teal-600 px-4 py-2 rounded-full shadow-md hover:bg-teal-400 transition">
            Python
          </span>
          <span className="bg-teal-600 px-4 py-2 rounded-full shadow-md hover:bg-teal-400 transition">
            MySQL
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Lucky Manikpur. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
