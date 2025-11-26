import { RevealOnScroll } from "../RevealOnScroll";
import pershingLogo from "../../../public/pershingglobalsolutions.jpg";
import openSourceLogo from "../../../public/opensource.png";
import businessWebLogo from "../../../public/businesswebsolutions.jpg";

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Pershing Global Solutions",
      duration: "Nov 2025 – Present",
      logo: pershingLogo,
      description: [
        "Developed scalable web applications using React, TypeScript, and Node.js within an agile international team.",
        "Designed and implemented RESTful APIs to integrate backend services with modern frontend interfaces.",
        "Managed PostgreSQL databases ensuring data integrity and optimizing queries for performance.",
        "Contributed to automation tools and custom plugins for SaaS products, increasing team efficiency.",
      ],
    },
    {
      title: "Open Source Contributor",
      company: "Global / Remote",
      duration: "Oct 2025 – Nov 2025",
      logo: openSourceLogo,
      description: [
        "Meson Build System: Fixed critical RTTI logic bugs for the Intel C++ compiler in this industry-standard build tool used by GNOME and Systemd.",
        "Meshery (CNCF): Contributed to the Cloud Native Computing Foundation’s service mesh management platform, improving documentation consistency for global adopters.",
        "Falcon (Python): Updated dev containers to support Python 3.13, optimizing the environment for this high-performance API framework.",
        "Bootstrap-Vue-Next: Implemented new event handling props (mousewheel suppression) for form inputs, enhancing UI accessibility for the Vue ecosystem.",
        "Weblate: Developed administrative features to disable contact forms, improving configuration control for this continuous localization platform.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Business Web Solutions",
      duration: "Oct 2025 – Nov 2025",
      logo: businessWebLogo,
      description: [
        "Completed intensive training on React, Python, and Django architecture through real-world scenarios.",
        "Developed a Social Media Platform featuring infinite scroll and async data fetching.",
        "Implemented secure authentication and mastered DOM manipulation for interactive UI components.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 bg-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-blue-700/10 text-center bg-clip-text text-neutral-900">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-neutral-200 hover:scale-[1.01] active:scale-90 transition-all shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-700 text-md">
                      <span className="font-semibold">{exp.company}</span> -{" "}
                      {exp.duration}
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-800 text-md">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
