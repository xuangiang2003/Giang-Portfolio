import Section from "./ui/Section";
import { Reveal, Stagger, StaggerItem } from "./ui/motion";
import { CERTIFICATIONS, SKILLS } from "@/data/profile";

function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Kỹ năng" title="Kỹ năng và chứng chỉ" tinted>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill) => (
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
        <h3 className="text-lg font-semibold text-ink">Chứng chỉ</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {CERTIFICATIONS.map((cert) => (
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
