import Section from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/motion";

function RotationsSection({ content }) {
  const { rotations, ui } = content;

  return (
    <Section
      id="rotations"
      eyebrow={ui.rotations.eyebrow}
      title={ui.rotations.title}
      intro={ui.rotations.intro}
      tinted
    >
      <Stagger className="grid gap-4 sm:grid-cols-2">
        {rotations.map((item) => (
          <StaggerItem key={`${item.department}-${item.hospital}`}>
            <article className="h-full rounded-2xl border border-slate-200 bg-paper p-6 transition-colors hover:border-accent-400">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-ink">{item.department}</h3>
                {item.time && <span className="text-sm text-slate-500">{item.time}</span>}
              </div>
              <p className="mt-1 font-medium text-accent-700">{item.hospital}</p>
              <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default RotationsSection;
