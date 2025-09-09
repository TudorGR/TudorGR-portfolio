import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const createObserver = () => {
      // Adjust threshold and rootMargin based on viewport width and height
      const isSmallScreen = window.innerWidth < 394;
      const isShortScreen = window.innerHeight < 600;

      // More aggressive settings for very small screens
      const threshold = isSmallScreen ? 0.05 : isShortScreen ? 0.1 : 0.2;
      const rootMargin = isSmallScreen
        ? "0px 0px -10px 0px"
        : isShortScreen
        ? "0px 0px -20px 0px"
        : "0px 0px -50px 0px";

      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current?.classList.add("visible");
          }
        },
        { threshold, rootMargin }
      );
    };

    const initObserver = () => {
      // Disconnect existing observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Create new observer
      observerRef.current = createObserver();

      // Start observing if element exists
      if (ref.current) {
        observerRef.current.observe(ref.current);
      }
    };

    // Initialize observer
    initObserver();

    // Handle viewport changes
    const handleResize = () => {
      initObserver();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array - this effect should only run once

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
