import { RevealOnScroll } from "../RevealOnScroll";
import { Component } from "../animated-card";
import AvatarGroup from "../avatar-group";
import meta from "../../assets/meta.jpg";
import fcc from "../../assets/fcc.png";
import fii from "../../assets/fii.png";

export const About = () => {
  const frontendSkills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Vite",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
    "Responsive Design",
    "Accessibility",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "REST APIs",
    "JWT",
    "Socket.io",
    "MongoDB",
    "MySQL",
    "SQLite",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl mb-8 hover:bg-white/10 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  My Journey
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Front-End Developer focused on building modern, responsive,
                  and accessible web applications. I enjoy crafting reusable
                  components, micro-interactions, and type-safe code that
                  scales.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I recently completed my B.S. in Computer Science (2025) at
                  Alexandru Ioan Cuza University of Iași, where I strengthened
                  my foundation in web technologies and software engineering.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-black/50 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">
                    Core Values
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Clean, maintainable code
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      User-centered design
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Continuous learning
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Team collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-400">
                  Frontend
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-300 py-2 px-3 rounded-lg text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-400">
                  Backend
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-300 py-2 px-3 rounded-lg text-sm border border-purple-500/20 hover:bg-purple-500/20 hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Education
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                </div>
                <AvatarGroup
                  items={[
                    {
                      id: 1,
                      name: "Fii",
                      designation: "University Of Computer Science Iasi",
                      image: fii,
                    },
                  ]}
                  size="md"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">
                    B.S. in Computer Science
                  </h4>
                  <p className="text-gray-400">
                    University "Alexandru Ioan Cuza" of Iasi
                  </p>
                  <p className="text-gray-500 text-sm">
                    Faculty of Computer Science (2022-2025)
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    <strong>Relevant Coursework:</strong> Web Technologies,
                    Software Engineering, Computer Networks, Algorithms Design
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Certifications
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-600 rounded-full"></div>
                </div>
                <AvatarGroup
                  items={[
                    {
                      id: 1,
                      name: "Meta",
                      designation: "Front-End Developer Specialization",
                      image: meta,
                    },
                    {
                      id: 2,
                      name: "freeCodeCamp",
                      designation: "JavaScript & Web Design",
                      image: fcc,
                    },
                  ]}
                  size="md"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">
                    Meta Front-End Developer Specialization
                  </h4>
                  <p className="text-gray-400">Coursera (2024)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    JavaScript Algorithms and Data Structures
                  </h4>
                  <p className="text-gray-400">freeCodeCamp</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Responsive Web Design
                  </h4>
                  <p className="text-gray-400">freeCodeCamp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
