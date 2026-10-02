"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Vạch mảnh trên đỉnh trang, dài dần theo độ cuộn
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent-600"
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
