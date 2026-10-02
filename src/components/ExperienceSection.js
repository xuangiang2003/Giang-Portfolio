import Section from "./ui/Section";
import { Reveal } from "./ui/motion";
import { EDUCATION, EXPERIENCE } from "@/data/profile";

function Timeline({ heading, items }) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-ink">{heading}</h3>
      <ol className="space-y-8 border-l-2 border-accent-100 pl-6">
        {items.map((item) => (
          <li key={`${item.title}-${item.time}`} className="relative">
            <span
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent-600 bg-white"
              aria-hidden="true"
            />
            <Reveal>
              <p className="text-sm font-medium text-accent-700">{item.time}</p>
              <p className="mt-1 text-lg font-semibold text-ink">{item.title}</p>
              <p className="text-slate-600">{item.subtitle}</p>
              {item.description && <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>}
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ExperienceSection() {
  const work = EXPERIENCE.map((e) => ({ time: e.time, title: e.role, subtitle: e.place, description: e.description }));
  const education = EDUCATION.map((e) => ({ time: e.time, title: e.degree, subtitle: e.school }));

  return (
    <Section id="experience" eyebrow="Kinh nghiệm" title="Quá trình công tác và đào tạo" tinted>
      <div className="grid gap-12 lg:grid-cols-2">
        <Timeline heading="Công tác" items={work} />
        <Timeline heading="Đào tạo" items={education} />
      </div>
    </Section>
  );
}

export default ExperienceSection;
