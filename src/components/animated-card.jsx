"use client";
import { ArrowUpRightIcon } from "lucide-react";
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
        <div className="flex flex-row flex-wrap gap-1">
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                fill="currentColor"
              />
            </svg>
            <span className="text">View Code</span>
          </a>
          {live == "true" ? (
            <a className="button live-demo" href={deploy}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="text">Live Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
