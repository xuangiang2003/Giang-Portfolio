"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LANGUAGES } from "@/data/site";

function Header({ lang, nav, shortName, cvUrl, ui }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  // Menu xổ xuống trên điện thoại
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Giữ nguyên mục đang xem (#about...) khi đổi ngôn ngữ
  function changeLanguage(event) {
    const target = LANGUAGES.find(({ code }) => code === event.target.value);
    if (target) window.location.href = target.path + window.location.hash;
  }

  // Đóng menu rồi mới cuộn: nếu để trình duyệt tự nhảy theo link #id thì lệnh cuộn mượt
  // bị huỷ khi menu đang thu lại.
  function goTo(event, id) {
    event.preventDefault();
    setOpen(false);
    window.history.pushState(null, "", `#${id}`);
    setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        open
          ? "border-slate-200 bg-white"
          : scrolled
            ? "border-slate-200 bg-white/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" onClick={() => setOpen(false)} className="shrink-0 font-serif text-lg font-semibold text-ink">
          {shortName}
        </a>

        {/* Menu ngang: chỉ hiện từ màn hình md trở lên */}
        <nav className="hidden gap-1 text-sm md:flex">
          {nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative whitespace-nowrap rounded-full px-3 py-1.5 transition-colors ${
                active === id ? "text-accent-800" : "text-slate-600 hover:text-ink"
              }`}
            >
              {/* Nền của mục đang xem trượt từ link này sang link kia */}
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-accent-100"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{label}</span>
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
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={ui.menu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-ink transition-colors hover:border-accent-500 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              {nav.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(event) => goTo(event, id)}
                  className={`rounded-lg px-3 py-3 text-base transition-colors ${
                    active === id ? "bg-accent-50 font-medium text-accent-800" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </a>
              ))}
              {cvUrl && (
                <a
                  href={cvUrl}
                  download
                  className="mt-2 rounded-lg bg-accent-700 px-3 py-3 text-center font-semibold text-white"
                >
                  {ui.downloadCv}
                </a>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
