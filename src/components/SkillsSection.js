import Section from "./ui/Section";
import { Reveal, Stagger, StaggerItem } from "./ui/motion";

function SkillsSection({ content }) {
  const { skills, certifications, ui } = content;

  return (
    <Section id="skills" eyebrow={ui.skills.eyebrow} title={ui.skills.title} tinted>
      <Stagger className="grid gap-4 sm:grid-cols-3">
        {skills.map((skill) => (
          <StaggerItem key={skill.group}>
            <div className="h-full rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="font-semibold text-ink">{skill.group}</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-8">
        <h3 className="text-lg font-semibold text-ink">{ui.skills.certifications}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <li key={cert} className="rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm text-accent-800">
              {cert}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

export default SkillsSection;
