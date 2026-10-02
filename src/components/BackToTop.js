"use client";

import { useEffect, useState } from "react";

function BackToTop({ label }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label={label}
      className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-lg transition-colors hover:border-accent-500 hover:text-accent-700"
    >
      ↑
    </a>
  );
}

export default BackToTop;
