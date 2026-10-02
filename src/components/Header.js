"use client";

import { useEffect, useState } from "react";
import { LANGUAGES } from "@/data/site";

function Header({ lang, nav, shortName, cvUrl, ui }) {
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
    ["top", ...nav.map(({ id }) => id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [nav]);

  // Giữ nguyên mục đang xem (#about...) khi đổi ngôn ngữ
  function changeLanguage(event) {
    const target = LANGUAGES.find(({ code }) => code === event.target.value);
    if (target) window.location.href = target.path + window.location.hash;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? "border-slate-200 bg-white/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="shrink-0 font-serif text-lg font-semibold text-ink">
          {shortName}
        </a>
        <nav className="no-scrollbar flex min-w-0 gap-1 overflow-x-auto text-sm">
          {nav.map(({ id, label }) => (
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
        <div className="flex shrink-0 items-center gap-2">
          <select
            aria-label={ui.language}
            value={lang}
            onChange={changeLanguage}
            className="cursor-pointer rounded-full border border-slate-300 bg-white py-1.5 pl-3 pr-2 text-sm text-ink transition-colors hover:border-accent-500 focus:border-accent-600 focus:outline-none"
          >
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          {cvUrl && (
            <a
              href={cvUrl}
              download
              className="hidden rounded-full bg-accent-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-800 md:block"
            >
              {ui.downloadCv}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
