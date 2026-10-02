import { NAV, PROFILE } from "@/data/profile";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-serif text-lg font-semibold text-ink">{PROFILE.name}</p>
            <p className="text-sm text-slate-600">
              {PROFILE.role} · {PROFILE.school}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            {NAV.filter(({ id }) => id !== "top").map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-accent-700">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-relaxed text-slate-500">
          Đây là trang hồ sơ cá nhân, không cung cấp tư vấn y khoa. © {new Date().getFullYear()} {PROFILE.name}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
