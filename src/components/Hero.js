import Image from "next/image";
import { CONTACT, DOCTOR, STATS } from "@/data/profile";

function Portrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-accent-100 bg-gradient-to-b from-accent-50 to-accent-100 shadow-xl shadow-accent-900/10">
      {DOCTOR.portrait ? (
        <Image
          src={DOCTOR.portrait}
          alt={`Chân dung ${DOCTOR.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 384px, 80vw"
          className="object-cover"
        />
      ) : (
        // Khung giữ chỗ: điền DOCTOR.portrait trong src/data/profile.js để thay bằng ảnh thật
        <div className="grid h-full place-items-center p-6 text-center text-sm text-accent-800/70">
          Ảnh chân dung bác sĩ
          <br />
          (tỉ lệ 4:5)
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[640px] rounded-full bg-accent-200/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white px-3 py-1 text-sm text-accent-800">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {DOCTOR.specialty} · {DOCTOR.city}
          </p>

          <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{DOCTOR.name}</h1>
          <p className="mt-3 text-lg font-medium text-accent-700">{DOCTOR.title}</p>
          <p className="mt-1 text-slate-600">{DOCTOR.workplace}</p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{DOCTOR.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT.bookingUrl || "#contact"}
              className="rounded-lg bg-accent-700 px-5 py-3 font-semibold text-white shadow-lg shadow-accent-700/20 transition-colors hover:bg-accent-800"
            >
              Đặt lịch khám
            </a>
            <a
              href="#schedule"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-ink transition-colors hover:border-accent-500 hover:text-accent-700"
            >
              Xem lịch khám
            </a>
          </div>
        </div>

        <Portrait />
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-4">
        {STATS.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-serif text-2xl font-semibold text-accent-700">{item.value}</p>
            <p className="mt-1 text-sm text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
