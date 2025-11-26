import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  Home as HomeIcon,
  User2,
  FolderOpen,
  Mail,
  Star,
  UserRound,
} from "lucide-react";
import { Home } from "../sections/Home";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnoAI from "../animated-shader-background";
import { Experience } from "../sections/Experience";

// Replace with <a> and <img> for Vite/React
export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "#home",
      icon: (
        <HomeIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "About",
      href: "#about",
      icon: (
        <User2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "#projects",
      icon: (
        <FolderOpen className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <Mail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        " flex flex-col md:flex-row bg-gray-100  dark:bg-neutral-800 w-full flex-1  dark:border-neutral-700 overflow-hidden",
        "h-screen" // full height for sidebar
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={() => {
                    // Only close on mobile (or always if sidebar is open)
                    if (open) setOpen(false);
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Tudor Gradinaru",
                href: "#",
                icon: (
                  <UserRound className="h-6 w-6 text-black dark:text-white flex-shrink-0" />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1 flex-col bg-white shadow-md w-full h-full min-w-0 overflow-y-auto  scroll-smooth">
        <div className="relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <AnoAI />
          </div>
          <div className="relative z-10">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Star className="h-6 w-6 text-black dark:text-white flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Portfolio
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Star className="h-6 w-6 text-black dark:text-white flex-shrink-0" />
    </a>
  );
};

// ...existing code...
