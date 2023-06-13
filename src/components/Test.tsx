import { motion } from "framer-motion";

export function Test({ className }: { className?: string }) {
  return (
    <svg
      width="592"
      height="57"
      viewBox="0 0 592 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0.999512 0.660187L591 0.660187"
        stroke="black"
        stroke-linecap="round"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 12,
        }}
        x1="56.5"
        y1="56.5"
        x2="535.5"
        y2="56.5"
        stroke="black"
        stroke-linecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 0 }}
        exit={{ pathLength: 1 }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 12,
        }}
        d="M56.2021 56.4093L0.895229 1.10238"
        stroke="black"
        stroke-linecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        exit={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 12,
        }}
        d="M536 56.3069L591.307 0.999965"
        stroke="black"
        stroke-linecap="round"
      />
    </svg>
  );
}
