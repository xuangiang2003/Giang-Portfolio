import Section from "./ui/Section";
import { Reveal, ScrollTimeline, TimelineDot } from "./ui/motion";

function EducationSection({ content }) {
  const { education, awards, ui } = content;

  return (
    <Section id="education" eyebrow={ui.education.eyebrow} title={ui.education.title}>
      <div className={`grid gap-12 ${awards.length ? "lg:grid-cols-[1.6fr_1fr]" : ""}`}>
        <ScrollTimeline>
          <ol className="space-y-8 pl-6">
            {education.map((item) => (
              <li key={`${item.degree}-${item.time}`} className="relative">
                <TimelineDot className="absolute -left-[30px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-600 bg-paper p-0.5" />
                <Reveal>
                  <p className="text-sm font-medium text-accent-700">{item.time}</p>
                  <p className="mt-1 text-lg font-semibold text-ink">{item.degree}</p>
                  <p className="text-slate-600">{item.school}</p>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </ScrollTimeline>

        {awards.length > 0 && (
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-ink">{ui.education.awards}</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                {awards.map((award) => (
                  <li key={award} className="flex gap-3">
                    <span className="text-accent-600" aria-hidden="true">
                      ✓
                    </span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}

export default EducationSection;
