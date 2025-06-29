import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function LinesPatternCard({
  children,
  className,
  patternClassName,
  gradientClassName,
}) {
  return (
    <motion.div
      className={cn(
        "border w-full rounded-md overflow-hidden relative",
        "bg-neutral-900/50",
        "border-white/10",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-20",
          "bg-lines-pattern",
          patternClassName
        )}
      />
      <div className={cn("relative z-10", gradientClassName)}>{children}</div>
    </motion.div>
  );
}

export function LinesPatternCardBody({ className, ...props }) {
  return <div className={cn("text-left p-4 md:p-6", className)} {...props} />;
}
