import Section from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/motion";
import { ACTIVITIES } from "@/data/profile";

function ActivitiesSection() {
  return (
    <Section id="activities" eyebrow="Hoạt động" title="Hoạt động ngoại khoá và tình nguyện">
      <Stagger className="grid gap-4 md:grid-cols-2">
        {ACTIVITIES.map((item) => (
          <StaggerItem key={`${item.title}-${item.time}`}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-accent-700">{item.time}</p>
              <h3 className="mt-1 font-semibold text-ink">{item.title}</h3>
              <p className="text-slate-600">{item.organization}</p>
              <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default ActivitiesSection;
