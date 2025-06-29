import { Component } from "../animated-card";
import { RevealOnScroll } from "../RevealOnScroll";
import tawktalk from "../../assets/tawktalk.jpg";
import fitnessfabrics from "../../assets/fitnessfabrics.jpg";
import web from "../../assets/web.jpg";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex-items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-blue-200 text-center bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Component
              description="Developed TawkTalk, a full-stack real-time chat application using modern web technologies. This project demonstrates my proficiency in both frontend and backend development, with a focus on real-time communication features."
              title="Real-time Chat Application"
              skills={[
                "React",
                "TailwindCSS",
                "Zustand",
                "Node.js",
                "Express",
                "MongoDB",
              ]}
              github="https://github.com/TudorGR/TawkTalk"
              deploy="https://tawktalk.onrender.com/"
            >
              <img src={tawktalk} alt="" />
            </Component>
            <Component
              description="Developed a comprehensive eCommerce platform specializing in fitness apparel and accessories using the MERN stack (MongoDB, Express.js, React.js, Node.js). This full-stack application features both customer-facing functionality and a complete admin management system."
              title="Full-Stack eCommerce Platform"
              skills={[
                "React",
                "TailwindCSS",
                "Vite",
                "Node.js",
                "Express",
                "MongoDB",
                "Cloudinary",
                "Vercel",
              ]}
              github="https://github.com/TudorGR/fitness-fabrics"
              deploy="https://fitness-fabrics.vercel.app/"
            >
              <img src={fitnessfabrics} alt="" />
            </Component>
            <Component
              description="Developed a comprehensive web-based educational platform designed to help high school students learn programming through interactive problem-solving. The platform facilitates collaboration between teachers and students."
              title="Web Technologies Educational Programming Platform"
              skills={["HTML", "CSS", "JavaScript", "Node.js", "SQLite3"]}
              github="https://github.com/TudorGR/Proiect-Tehnologii-Web"
              live="false"
            >
              <img src={web} alt="" />
            </Component>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
