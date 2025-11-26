import { RevealOnScroll } from "../RevealOnScroll";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import CV from "../../assets/TUDOR_GRADINARU_CV.pdf";
import { Magnetic } from "../ui/magnetic";

export const Contact = () => {
  return (
    <RevealOnScroll>
      <section
        id="contact"
        className="min-h-screen w-full flex items-center justify-center py-20 bg-white"
      >
        <div className="px-4 w-full sm:w-150">
          <h2 className="text-3xl font-bold mb-8 bg-black/10 text-center bg-clip-text text-neutral-900">
            Get In Touch
          </h2>

          <div className="social-buttons">
            <Magnetic>
              <a
                href="https://github.com/TudorGR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl font-semibold border border-black bg-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-black flex items-center justify-center gap-2"
              >
                <Github size={20} />
                <span className="text">GitHub</span>
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="https://www.linkedin.com/in/tudor-gradinaru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl font-semibold border border-black bg-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-black flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                <span className="text">LinkedIn</span>
              </a>
            </Magnetic>
          </div>
          <div className="social-buttons">
            <Magnetic>
              <a
                href="mailto:graditudor@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl font-semibold border border-black bg-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-black flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                <span className="text">Email</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={CV}
                download
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl font-semibold border border-black bg-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-black flex items-center justify-center gap-2"
              >
                <Download size={20} />
                <span className="text">Download Resume</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
