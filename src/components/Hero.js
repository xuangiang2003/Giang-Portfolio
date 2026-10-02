import Image from "next/image";
import { CountUp, CurtainReveal, EcgLine, Entrance, Stagger, StaggerItem } from "./ui/motion";
import { PORTRAIT } from "@/data/site";

function Portrait({ name, ui }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-accent-100 bg-gradient-to-b from-accent-50 to-accent-100 shadow-xl shadow-accent-900/10">
      {PORTRAIT ? (
        <CurtainReveal className="absolute inset-0">
          <Image
            src={PORTRAIT}
            alt={`${ui.portraitAlt} ${name}`}
            fill
            priority
            sizes="(min-width: 1024px) 384px, 80vw"
            className="object-cover"
          />
        </CurtainReveal>
      ) : (
        // Khung giữ chỗ: điền PORTRAIT trong src/data/site.js để thay bằng ảnh thật
        <div className="grid h-full place-items-center p-6 text-center text-sm text-accent-800/70">
          {ui.portraitPlaceholder}
          <br />
          {ui.portraitRatio}
        </div>
      )}
    </div>
  );
}

function Hero({ content }) {
  const { profile, stats, ui } = content;

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[640px] rounded-full bg-accent-200/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <Entrance>
          <StaggerItem>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white px-3 py-1 text-sm text-accent-800">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              {profile.graduation}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {profile.name}
            </h1>
            <EcgLine className="mt-3 h-8 w-48 text-accent-500" />
          </StaggerItem>

          <StaggerItem>
            <p className="mt-2 text-lg font-medium text-accent-700">{profile.role}</p>
            <p className="mt-1 text-slate-600">
              {profile.school} · {profile.city}
            </p>
            <p className="mt-1 text-slate-600">
              {ui.interestLabel}: {profile.interest}
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{profile.tagline}</p>
          </StaggerItem>

          <StaggerItem className="mt-8 flex flex-wrap items-center gap-3">
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="rounded-lg bg-accent-700 px-5 py-3 font-semibold text-white shadow-lg shadow-accent-700/20 transition-colors hover:bg-accent-800"
              >
                {ui.downloadCv}
              </a>
            )}
            <a
              href="#contact"
              className={
                profile.cvUrl
                  ? "rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-ink transition-colors hover:border-accent-500 hover:text-accent-700"
                  : "rounded-lg bg-accent-700 px-5 py-3 font-semibold text-white shadow-lg shadow-accent-700/20 transition-colors hover:bg-accent-800"
              }
            >
              {ui.contact}
            </a>
            <a
              href="#rotations"
              className="rounded-lg px-3 py-3 font-semibold text-accent-700 transition-colors hover:text-accent-800"
            >
              {ui.viewJourney}
            </a>
          </StaggerItem>
        </Entrance>

        <Portrait name={profile.name} ui={ui} />
      </div>

      <Stagger className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((item) => (
          <StaggerItem key={item.label}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-serif text-2xl font-semibold text-accent-700">
                <CountUp value={item.value} />
              </p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export default Hero;
