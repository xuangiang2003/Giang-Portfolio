import { Reveal } from "./motion";

function Section({ id, eyebrow, title, intro, tinted = false, children }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${tinted ? "bg-white" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-700">{eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default Section;
