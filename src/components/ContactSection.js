import Section from "./ui/Section";
import { Reveal, Stagger, StaggerItem } from "./ui/motion";
import { CONTACT } from "@/data/profile";

// Kênh nào để trống trong src/data/profile.js thì tự ẩn
const CHANNELS = [
  { label: "Điện thoại", value: CONTACT.phone, link: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { label: "Email", value: CONTACT.email, link: `mailto:${CONTACT.email}` },
  { label: "Zalo", value: CONTACT.zalo && "Nhắn qua Zalo", link: CONTACT.zalo },
  { label: "Facebook", value: CONTACT.facebook && "Trang Facebook", link: CONTACT.facebook },
].filter((channel) => channel.value);

function ContactSection() {
  return (
    <Section id="contact" eyebrow="Liên hệ" title="Đặt lịch và liên hệ">
      <Reveal>
        <div className="rounded-3xl bg-accent-800 p-8 text-white sm:p-12">
          <h3 className="font-serif text-2xl font-semibold sm:text-3xl">Cần đặt lịch khám hoặc tư vấn?</h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-accent-50">
            [Hướng dẫn ngắn: gọi điện hoặc nhắn Zalo trong giờ hành chính, cần chuẩn bị gì khi đến khám.]
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT.bookingUrl || `tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-accent-800 transition-colors hover:bg-accent-50"
            >
              {CONTACT.bookingUrl ? "Đặt lịch trực tuyến" : "Gọi đặt lịch"}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Gửi email
            </a>
          </div>
          <p className="mt-6 text-sm text-accent-100">
            Trường hợp cấp cứu, vui lòng gọi 115 hoặc đến cơ sở y tế gần nhất.
          </p>
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
