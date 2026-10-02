import Section from "./ui/Section";
import { Reveal } from "./ui/motion";
import { CERTIFICATIONS, DOCTOR, MEMBERSHIPS, PUBLICATIONS } from "@/data/profile";

function List({ heading, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="font-semibold text-ink">{heading}</h3>
      <ul className="mt-4 space-y-3 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-accent-600" aria-hidden="true">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CredentialsSection() {
  return (
    <Section id="credentials" eyebrow="Chứng chỉ" title="Chứng chỉ, hội viên và nghiên cứu">
      <Reveal className="grid gap-4 md:grid-cols-2">
        <List heading="Chứng chỉ hành nghề và chuyên sâu" items={CERTIFICATIONS} />
        <List heading="Thành viên hội chuyên ngành" items={MEMBERSHIPS} />
      </Reveal>
      <p className="mt-4 text-sm text-slate-500">Giấy phép hành nghề số: {DOCTOR.license}</p>

      <Reveal className="mt-12">
        <h3 className="text-lg font-semibold text-ink">Công bố khoa học</h3>
        <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
          {PUBLICATIONS.map((pub) => (
            <li key={`${pub.title}-${pub.year}`} className="flex gap-6 py-4">
              <span className="w-14 shrink-0 font-serif font-semibold text-accent-700">{pub.year}</span>
              <span>
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink underline decoration-accent-300 underline-offset-4 hover:text-accent-700"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="font-medium text-ink">{pub.title}</span>
                )}
                <span className="block text-sm text-slate-500">{pub.venue}</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

export default CredentialsSection;
