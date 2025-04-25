import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Typewriter from "./components/Typewriter";

function App() {
  const words = [
    "responsive",
    "beautiful",
    "interactive",
    "modern",
    "scalable",
    "fast",
    "user-friendly",
  ];

  const projects = [
    {
      title: "Password Manager",
      description:
        "Secure password management solution with local storage support.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Responsive"],
      image: "/passmanager.png",
      url: "https://pass-op-ashy.vercel.app/",
    },
    {
      title: "Weather App",
      description: "Real-time weather data using  API.",
      tech: ["JavaScript", "API Integration", "CSS", "Responsive"],
      image: "/weather.png",
      url: "https://weather-website-topaz-ten.vercel.app/",
    },
    {
      title: "Todo List",
      description:
        "Productivity application with task prioritization and local storage persistence.",
      tech: ["React", "Tailwind CSS"],
      image: "/todolist.png",
    },
    {
      title: "E-commerce Landing Page",
      description:
        "High-conversion landing page with responsive design and animated CTAs.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "/landingpage.png",
    },
    {
      title: "Media Player",
      description:
        "Custom media player with playlist functionality and responsive controls.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "mediaplayer.png",
    },
    {
      title: "Portfolio Website",
      description:
        "This responsive portfolio showcasing my skills and projects.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: null,
    },
  ];

  return (
    <div className="bg-gray-950 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 pt-20"
      >
        <div className="md:w-1/2 text-center md:text-left mb-16 md:mb-0">
          <h1 className="text-lg mb-2 text-blue-400 font-mono">
            Hi, my name is
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mohammed Ahad.
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            <Typewriter words={words} typingSpeed={100} erasingSpeed={50} />
          </h3>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-400">
            I'm a frontend developer specializing in building exceptional
            digital experiences. Currently focused on creating accessible,
            human-centered products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => {
                // Create a temporary anchor element
                const link = document.createElement("a");
                link.href = "/Mohammed_Abdul_Ahad_Resume.docx"; // Make sure this matches your file name in public folder
                link.download = "Mohammed_Ahad_CV.docx"; // This will be the suggested filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-6 py-3 rounded-md font-medium bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-950 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30"
            >
              Download CV
            </button>
            {/* <button className="px-6 py-3 rounded-md font-medium bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-950 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300">
              Contact Me
            </button> */}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 blur-xl animate-pulse"></div>
            <div className="relative rounded-full overflow-hidden border-2 border-blue-400/30 w-full h-full flex items-center justify-center">
              {/* Replace with your photo or a developer illustration */}
              <div className="text-4xl">
                <img width="300px" src="/newdevillustration.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-blue-400">02.</span> Featured Projects
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Here are some of my selected works. Each project presented unique
            challenges and learning opportunities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  project.url && window.open(project.url, "_blank")
                }
              >
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-700 text-blue-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-blue-400">03.</span> Get In Touch
            </h2>
            <p className="text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll do my best to get back to
              you!
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-gray-700 mx-2 sm:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-blue-400 mt-1 text-lg sm:text-xl">📧</div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Email</h4>
                  <a
                    href="mailto:abdulahad.mohammedd@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                  >
                    abdulahad.mohammedd@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-blue-400 mt-1 text-lg sm:text-xl">📱</div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                  <a
                    href="tel:+919963700552"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    +91 9963700552
                  </a>
                </div>
              </div>

              {/* LinkedIn - Full width on mobile, spans both columns on larger screens */}
              <div className="flex items-start gap-3 sm:gap-4 sm:col-span-2">
                <div className="text-blue-400 mt-1 text-lg sm:text-xl">🔗</div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/mohd-ahad-530a44361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    linkedin.com/in/mohd-ahad-530a44361
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>Designed & Built by Mohammed Ahad</p>
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
