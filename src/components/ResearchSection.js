import Section from "./ui/Section";
import { Reveal } from "./ui/motion";
import { ACTIVITIES, RESEARCH } from "@/data/profile";

function ResearchSection() {
  return (
    <Section id="research" eyebrow="Nghiên cứu" title="Nghiên cứu khoa học và hoạt động">
      <Reveal>
        <h3 className="text-lg font-semibold text-ink">Nghiên cứu khoa học</h3>
        <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
          {RESEARCH.map((item) => (
            <li key={`${item.title}-${item.year}`} className="flex gap-6 py-4">
              <span className="w-14 shrink-0 font-serif font-semibold text-accent-700">{item.year}</span>
              <span>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink underline decoration-accent-300 underline-offset-4 hover:text-accent-700"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="font-medium text-ink">{item.title}</span>
                )}
                <span className="block text-sm text-slate-500">
                  {item.role} · {item.venue}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="text-lg font-semibold text-ink">Hoạt động ngoại khoá và tình nguyện</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {ACTIVITIES.map((item) => (
            <article key={`${item.title}-${item.time}`} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-accent-700">{item.time}</p>
              <h4 className="mt-1 font-semibold text-ink">{item.title}</h4>
              <p className="text-slate-600">{item.organization}</p>
              <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export default ResearchSection;
