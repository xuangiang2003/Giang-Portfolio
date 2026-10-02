import Section from "./ui/Section";
import { Reveal } from "./ui/motion";

function AboutSection({ content }) {
  const { about, ui } = content;

  return (
    <Section id="about" eyebrow={ui.about.eyebrow} title={ui.about.title} tinted>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-4 text-lg leading-relaxed text-slate-600">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-accent-100 bg-accent-50/60 p-6">
            <h3 className="font-semibold text-ink">{ui.about.highlights}</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              {about.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default AboutSection;
