import { Component } from "../animated-card";
import { RevealOnScroll } from "../RevealOnScroll";
import tawktalk from "../../assets/tawktalk.jpg";
import fitnessfabrics from "../../assets/fitnessfabrics.jpg";
import web from "../../assets/web.jpg";
import extension from "../../assets/extension.png";
import calendariq from "../../assets/calendariq.png";
import cartify from "../../assets/cartify.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex-items-center justify-center py-20 bg-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-blue-700/10 text-center bg-clip-text text-neutral-900">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Component
              description={`Developed an intelligent calendar application as my bachelor's thesis at Universitatea „Alexandru Ioan Cuza" din Iași (UAIC). The project combines traditional calendar functionality with cutting-edge AI capabilities to revolutionize personal scheduling and event management.`}
              title="CalendarIQ - AI-Powered Calendar"
              skills={[
                "React",
                "TailwindCSS",
                "AI",
                "NLP",
                "Node.js",
                "Express",
                "MySQL",
              ]}
              github="https://github.com/TudorGR/licenta-project"
              live="false"
            >
              <img src={calendariq} alt="" />
            </Component>
            <Component
              description="A modern, responsive e-commerce platform showcasing professional React development patterns, smooth animations, and optimized user experience. Built to demonstrate frontend engineering skills with performance optimizations, accessibility features, and clean architecture."
              title="Cartify - Modern E-commerce Platform"
              skills={[
                "React",
                "TypeScript",
                "Vite",
                "TailwindCSS",
                "Framer Motion",
                "React Router",
              ]}
              github="https://github.com/TudorGR/Cartify"
              deploy="https://cartify-neon.vercel.app/"
            >
              <img src={cartify} alt="Cartify E-commerce Platform" />
            </Component>
            <Component
              description="Developed TawkTalk, a full-stack real-time chat application using modern web technologies. This project demonstrates my proficiency in both frontend and backend development, with a focus on real-time communication features."
              title="TawkTalk - Real-time Chat Application"
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
              <img src={tawktalk} alt="TawkTalk" />
            </Component>

            <Component
              description="Developed a comprehensive web-based educational platform designed to help high school students learn programming through interactive problem-solving. The platform facilitates collaboration between teachers and students."
              title="Educational Programming Platform"
              skills={["HTML", "CSS", "JavaScript", "Node.js", "SQLite3"]}
              github="https://github.com/TudorGR/Proiect-Tehnologii-Web"
              live="false"
            >
              <img src={web} alt="Educational Platform" />
            </Component>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
