import { useState } from "react";
import "./App.css";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { HeroHeader, HeroSection } from "./components/hero-section-1";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Noise } from "@/components/ui/noise";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`min-h-screen relative transition-opacity duration-700 bg-black text-gray-200 dark`}
      >
        {/* Noise background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <Noise
            patternSize={100}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={20}
            className="w-full h-full"
          />
        </div>

        {/* Content with relative positioning to stay above noise */}
        <div className="relative z-10">
          <HeroHeader />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
