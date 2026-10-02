import Section from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/motion";

function ActivitiesSection({ content }) {
  const { activities, ui } = content;

  return (
    <Section id="activities" eyebrow={ui.activities.eyebrow} title={ui.activities.title}>
      <Stagger className="grid gap-4 md:grid-cols-2">
        {activities.map((item) => (
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
