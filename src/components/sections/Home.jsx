import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Magnetic } from "@/components/ui/magnetic";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">
            Hi, I'm Tudor
          </h1>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 leading-tight">
            I build{" "}
            <Typewriter
              text={[
                "full-stack web apps",
                "fast, responsive layouts",
                "maintainable code",
                "modern APIs & UIs",
              ]}
              speed={75}
              loop={true}
              className="text-3xl md:text-5xl font-bold text-neutral-900"
            />
          </h1>
          <p className="text-center text-gray-800 text-md my-8 max-w-xl mx-auto">
            I'm a web developer specializing in JavaScript-based applications
            with a focus on creating responsive, interactive user experiences.
            My expertise lies in developing full-stack web applications using
            modern JavaScript frameworks and libraries.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-10">
            <Magnetic>
              <a
                href="#projects"
                className="bg-black text-white py-3 px-6 rounded-xl font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg text-nowrap border border-black"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="text-black py-3 px-6 rounded-xl font-semibold border border-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-nowrap "
              >
                Contact Me
              </a>
            </Magnetic>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
