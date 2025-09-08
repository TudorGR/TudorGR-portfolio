import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Magnetic } from "@/components/ui/magnetic";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-gray-300">Available for work</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Tudor Grădinaru
            </span>
          </h1>

          {/* Dynamic subtitle */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-20 flex items-center justify-center">
            <span className="text-gray-300 mr-4">I build</span>
            <Typewriter
              text={[
                "modern React apps",
                "fast, responsive UIs",
                "accessible interfaces",
                "type-safe code",
              ]}
              speed={75}
              loop={true}
              className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Recent Computer Science graduate passionate about building modern,
            responsive web applications. Skilled in React, TypeScript, and
            Tailwind CSS with a focus on performance, accessibility, and
            exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Magnetic>
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="group border-2 border-white/20 text-white py-4 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm flex items-center gap-2"
              >
                Get In Touch
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </Magnetic>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
