"use client";
import { ArrowUpRightIcon, Github, ExternalLink, Code } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const useMouse = () => {
  const [mouse, setMouse] = useState({
    elementX: null,
    elementY: null,
  });
  const parentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (parentRef.current) {
        const { left, top } = parentRef.current.getBoundingClientRect();
        setMouse({
          elementX: event.clientX - left,
          elementY: event.clientY - top,
        });
      }
    };

    const handleMouseLeave = () => {
      setMouse({
        elementX: null,
        elementY: null,
      });
    };

    const currentRef = parentRef.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return [mouse, parentRef];
};

export const Component = ({
  title,
  description,
  skills,
  withArrow = false,
  circleSize = 400,
  className,
  children,
  github,
  deploy,
  live = "true",
  extension = "false",
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="group relative transform-gpu overflow-hidden rounded-[20px] bg-black p-2 transition-transform hover:scale-[1.01] active:scale-90"
      ref={parentRef}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute right-2 top-2 z-10 size-5 translate-y-4  opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-neutral-300 " />
      )}
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100"
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
      <div className="border-white/10 border absolute inset-px rounded-[19px]  bg-neutral-900/50" />
      {children && (
        <div
          className={cn(
            "gird relative h-40 place-content-center overflow-hidden rounded-[15px]  border-neutral-950 bg-black/50",
            className
          )}
        >
          {children}
        </div>
      )}
      <div className="relative px-4 pb-2 pt-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold pb-2 text-neutral-300">{title}</h3>
        <div className="flex flex-row flex-wrap gap-2 mr-6">
          {skills.map((skill, key) => (
            <span
              key={key}
              className=" bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="my-2  text-neutral-400">{description}</p>
        <div className="flex justify-between items-end gap-3">
          <a className="button github" href={github}>
            <Github size={20} />
            <span className="text">View Code</span>
          </a>
          {live == "true" ? (
            <a className="button live-demo" href={deploy}>
              <ExternalLink size={20} />
              <span className="text">Live Demo</span>
            </a>
          ) : null}
          {extension == "true" && (
            <a
              className="button github"
              href={
                "https://marketplace.visualstudio.com/items?itemName=tudorgradinaru.shadcn-component-panel"
              }
            >
              <Code size={20} />
              <span className="text">VS Marketplace</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
