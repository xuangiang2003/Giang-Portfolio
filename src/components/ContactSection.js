import Section from "./ui/Section";
import { Reveal, Stagger, StaggerItem } from "./ui/motion";
import { CONTACT, PROFILE } from "@/data/profile";

// Kênh nào để trống trong src/data/profile.js thì tự ẩn
const CHANNELS = [
  { label: "Email", value: CONTACT.email, link: `mailto:${CONTACT.email}` },
  { label: "Điện thoại", value: CONTACT.phone, link: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: CONTACT.linkedin && "Hồ sơ LinkedIn", link: CONTACT.linkedin },
  { label: "Facebook", value: CONTACT.facebook && "Trang Facebook", link: CONTACT.facebook },
  { label: "Zalo", value: CONTACT.zalo && "Nhắn qua Zalo", link: CONTACT.zalo },
].filter((channel) => channel.value);

function ContactSection() {
  return (
    <Section id="contact" eyebrow="Liên hệ" title="Kết nối với tôi">
      <Reveal>
        <div className="rounded-3xl bg-accent-800 p-8 text-white sm:p-12">
          <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
            Cơ hội học tập, nghiên cứu hoặc việc làm?
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-accent-50">
            [Một hai câu: đang tìm kiếm điều gì — vị trí sau tốt nghiệp, nhóm nghiên cứu, người hướng dẫn — và cách liên
            hệ thuận tiện nhất.]
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-accent-800 transition-colors hover:bg-accent-50"
            >
              Gửi email
            </a>
            {PROFILE.cvUrl && (
              <a
                href={PROFILE.cvUrl}
                download
                className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Tải CV
              </a>
            )}
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CHANNELS.map((channel) => (
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
