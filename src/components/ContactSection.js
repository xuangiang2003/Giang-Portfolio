import Section from "./ui/Section";
import { Reveal, Stagger, StaggerItem } from "./ui/motion";
import { CONTACT } from "@/data/site";

function ContactSection({ content }) {
  const { profile, ui } = content;
  const text = ui.contactSection;

  // Kênh nào để trống trong src/data/site.js thì tự ẩn
  const channels = [
    { label: text.channels.email, value: CONTACT.email, link: `mailto:${CONTACT.email}` },
    { label: text.channels.phone, value: CONTACT.phone, link: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { label: text.channels.linkedin, value: CONTACT.linkedin && text.channels.linkedinValue, link: CONTACT.linkedin },
    { label: text.channels.facebook, value: CONTACT.facebook && text.channels.facebookValue, link: CONTACT.facebook },
    { label: text.channels.zalo, value: CONTACT.zalo && text.channels.zaloValue, link: CONTACT.zalo },
  ].filter((channel) => channel.value);

  return (
    <Section id="contact" eyebrow={text.eyebrow} title={text.title}>
      <Reveal>
        <div className="rounded-3xl bg-accent-800 p-8 text-white sm:p-12">
          <h3 className="font-serif text-2xl font-semibold sm:text-3xl">{text.heading}</h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-accent-50">{text.body}</p>
          <p className="mt-4 text-sm text-accent-100">
            {profile.name} · {profile.role} · {text.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 empty:hidden">
            {CONTACT.email && (
              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded-lg bg-white px-6 py-3 font-semibold text-accent-800 transition-colors hover:bg-accent-50"
              >
                {text.sendEmail}
              </a>
            )}
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                {ui.downloadCv}
              </a>
            )}
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => (
          <StaggerItem key={channel.label}>
            <a
              href={channel.link}
              target={channel.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block h-full rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-accent-400"
            >
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                {channel.label}
              </span>
              <span className="mt-1 block truncate font-medium text-ink">{channel.value}</span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default ContactSection;
