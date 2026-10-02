import Section from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/motion";
import { SPECIALTIES } from "@/data/profile";

function SpecialtiesSection() {
  return (
    <Section
      id="specialties"
      eyebrow="Chuyên môn"
      title="Lĩnh vực khám và điều trị"
      intro="[Một câu dẫn ngắn về phạm vi chuyên môn — đúng với phạm vi ghi trên giấy phép hành nghề.]"
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SPECIALTIES.map((item, i) => (
          <StaggerItem key={item.title}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-accent-400">
              <p className="font-serif text-sm font-semibold text-accent-700">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default SpecialtiesSection;
