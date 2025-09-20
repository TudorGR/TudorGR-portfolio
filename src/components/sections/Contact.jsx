import { RevealOnScroll } from "../RevealOnScroll";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import CV from "../../assets/CV_GRADINARU_TUDOR.pdf";

export const Contact = () => {
  return (
    <RevealOnScroll>
      <section
        id="contact"
        className="min-h-screen w-full flex items-center justify-center py-20"
      >
        <div className="px-4 w-full sm:w-150">
          <h2 className="text-3xl font-bold mb-8 bg-blue-200 text-center bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="social-buttons">
            <a
              href="https://github.com/TudorGR"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex-1 github py-3 px-6 rounded font-medium border border-blue-200 text-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex items-center justify-center gap-2"
            >
              <Github size={20} />
              <span className="text">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/tudor-gradinaru"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin  flex-1 py-3 px-6 rounded font-medium border border-blue-200 text-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              <span className="text">LinkedIn</span>
            </a>
          </div>
          <div className="social-buttons">
            <a
              href="mailto:graditudor@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex-1 github py-3 px-6 rounded font-medium border border-blue-200 text-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              <span className="text">Email</span>
            </a>

            <a
              href={CV}
              download
              rel="noopener noreferrer"
              className="linkedin  flex-1 py-3 px-6 rounded font-medium  bg-blue-200 text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2"
            >
              <Download size={20} />
              <span className="text">Download Resume</span>
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
