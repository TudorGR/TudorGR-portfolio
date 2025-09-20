import { RevealOnScroll } from "../RevealOnScroll";
import { Component } from "../animated-card";
import AvatarGroup from "../avatar-group";
import meta from "../../assets/meta.jpg";
import fcc from "../../assets/fcc.png";
import fii from "../../assets/fii.png";
import { useState } from "react";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "React.js",
    "HTML/CSS",
    "Typescript",
    "Tailwindcss",
    "Responsive design",
    "UI/UX principles",
  ];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "MySQL", "Python"];

  const [showMore, setShowMore] = useState(false);

  const fullText =
    "My journey in web development began during my university studies, where I discovered my passion for creating digital solutions. What started as curiosity quickly evolved into a professional pursuit as I delved deeper into JavaScript and its ecosystem. My graduation project (completed in 2025) allowed me to apply theoretical knowledge to real-world challenges, solidifying my commitment to this field.";

  const truncatedText =
    "My journey in web development began during my university studies, where I discovered my passion for creating digital solutions.";

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-blue-200 text-center bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-neutral-900/50 rounded-[19px] p-8 border-white/10 border  hover:scale-[1.01] active:scale-90 transition-all">
            <h2></h2>
            <p className=" text-gray-400 text-md mb-6">
              I'm a passionate web developer specializing in creating dynamic,
              interactive applications using modern JavaScript technologies.
              With a strong foundation in full-stack development, I bring ideas
              to life through clean code and intuitive user experiences.
            </p>
            <p className="text-gray-400 text-md mb-6">
              {/* Show full text on medium screens and up */}
              <span className="hidden md:inline">{fullText}</span>

              {/* Show truncated text with see more button on small screens */}
              <span className="md:hidden">
                {showMore ? fullText : truncatedText}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-blue-400 cursor-pointer hover:text-blue-300 ml-1 underline transition-colors"
                >
                  {showMore ? "see less" : "see more"}
                </button>
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[19px] p-6  hover:scale-[1.01] active:scale-90 transition-all relative overflow-hidden bg-neutral-900/50 border border-white/10">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='2' stroke='%23ffffff' fill='none'%3E%3Cline x1='0' y1='0' x2='400' y2='400'%3E%3C/line%3E%3Cline x1='400' y1='0' x2='800' y2='400'%3E%3C/line%3E%3Cline x1='800' y1='0' x2='1200' y2='400'%3E%3C/line%3E%3Cline x1='0' y1='400' x2='400' y2='800'%3E%3C/line%3E%3Cline x1='400' y1='400' x2='800' y2='800'%3E%3C/line%3E%3Cline x1='800' y1='400' x2='1200' y2='800'%3E%3C/line%3E%3Cline x1='0' y1='800' x2='400' y2='1200'%3E%3C/line%3E%3Cline x1='400' y1='800' x2='800' y2='1200'%3E%3C/line%3E%3Cline x1='800' y1='800' x2='1200' y2='1200'%3E%3C/line%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "50px 50px",
                    backgroundRepeat: "repeat",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl text-blue-200 font-bold mb-4 ">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-[19px] p-6 hover:-translate-y-1 transition-all relative overflow-hidden bg-neutral-900/50 border border-white/10">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='2' stroke='%23ffffff' fill='none'%3E%3Cline x1='0' y1='0' x2='400' y2='400'%3E%3C/line%3E%3Cline x1='400' y1='0' x2='800' y2='400'%3E%3C/line%3E%3Cline x1='800' y1='0' x2='1200' y2='400'%3E%3C/line%3E%3Cline x1='0' y1='400' x2='400' y2='800'%3E%3C/line%3E%3Cline x1='400' y1='400' x2='800' y2='800'%3E%3C/line%3E%3Cline x1='800' y1='400' x2='1200' y2='800'%3E%3C/line%3E%3Cline x1='0' y1='800' x2='400' y2='1200'%3E%3C/line%3E%3Cline x1='400' y1='800' x2='800' y2='1200'%3E%3C/line%3E%3Cline x1='800' y1='800' x2='1200' y2='1200'%3E%3C/line%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "50px 50px",
                    backgroundRepeat: "repeat",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-blue-200">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-neutral-900/50 p-6 rounded-[19px] border-white/10 border  hover:scale-[1.01] active:scale-90 transition-all">
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold text-blue-200 mb-4">
                  Education
                </h3>
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
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className=" text-gray-400 text-md">
                  <strong>B.S. in Computer Science</strong> - University
                  "Alexandru Ioan Cuza" of Iasi, Faculty of Computer Science
                  (2022-2025)
                </li>
                <li className=" text-gray-400 text-md">
                  <strong>Relevant Coursework:</strong> Web Technologies,
                  Practice – Introduction to Programming, Advanced Programming,
                  Software Engineering, DBMS Practice & Databases, Computer
                  Networks, Information Security,{" "}
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 p-6 rounded-[19px] border-white/10 border hover:scale-[1.01] active:scale-90 transition-all">
              <div className="flex justify-between">
                <h3 className="text-xl text-blue-200 font-bold mb-4">
                  Licenses & certifications
                </h3>
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
                    {
                      id: 3,
                      name: "freeCodeCamp",
                      designation: "Responsive Web Design",
                      image: fcc,
                    },
                  ]}
                  size="md"
                />
              </div>
              <ul className="list-disc list-inside text-md space-y-2">
                <li>
                  <span className="text-gray-400 font-semibold">
                    Meta Front-End Developer Specialization
                  </span>
                  <p className="ml-6 text-gray-500">Meta</p>
                </li>
                <li>
                  <span className="text-gray-400 font-semibold">
                    JavaScript Algorithms and Data Structures
                  </span>
                  <p className="ml-6 text-gray-500">freeCodeCamp</p>
                </li>
                <li>
                  <span className="text-gray-400 font-semibold">
                    Responsive Web Design
                  </span>
                  <p className="ml-6 text-gray-500">freeCodeCamp</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
