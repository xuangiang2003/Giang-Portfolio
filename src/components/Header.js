"use client";

import { useEffect, useState } from "react";
import { NAV, PROFILE } from "@/data/profile";

const LINKS = NAV.filter(({ id }) => id !== "top");

function Header() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Section nào đang cắt ngang giữa màn hình thì sáng link đó
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? "border-slate-200 bg-white/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="shrink-0 font-serif text-lg font-semibold text-ink">
          {PROFILE.shortName}
        </a>
        <nav className="no-scrollbar flex min-w-0 gap-1 overflow-x-auto text-sm">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 transition-colors ${
                active === id ? "bg-accent-50 font-medium text-accent-800" : "text-slate-600 hover:text-ink"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        {PROFILE.cvUrl && (
          <a
            href={PROFILE.cvUrl}
            download
            className="hidden shrink-0 rounded-full bg-accent-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-800 md:block"
          >
            Tải CV
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
