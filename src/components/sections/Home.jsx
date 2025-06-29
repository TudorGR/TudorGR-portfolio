import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Magnetic } from "@/components/ui/magnetic";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold  bg-blue-200 bg-clip-text text-transparent leading-right">
            Hi, I'm Tudor
          </h1>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-blue-200 bg-clip-text text-transparent leading-right">
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
              className="text-3xl md:text-5xl font-bold"
            />
          </h1>
          <p className="text-justify text-gray-400 text-md my-8 max-w-xl mx-auto">
            I'm a web developer specializing in JavaScript-based applications
            with a focus on creating responsive, interactive user experiences.
            My expertise lies in developing full-stack web applications using
            modern JavaScript frameworks and libraries.
          </p>
          <div className="flex justify-center space-x-4">
            <Magnetic>
              <a
                href="#projects"
                className="bg-blue-200 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="border border-blue-200 text-blue-200 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
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
