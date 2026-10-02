import Section from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/motion";
import { LOCATIONS } from "@/data/profile";

function ScheduleSection() {
  return (
    <Section
      id="schedule"
      eyebrow="Lịch khám"
      title="Nơi làm việc và giờ khám"
      intro="Lịch có thể thay đổi theo lịch trực và hội chẩn. Vui lòng liên hệ trước khi đến."
      tinted
    >
      <Stagger className="grid gap-4 md:grid-cols-2">
        {LOCATIONS.map((location) => (
          <StaggerItem key={location.name}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="text-lg font-semibold text-ink">{location.name}</h3>
              <address className="mt-1 not-italic text-slate-600">{location.address}</address>

              <dl className="mt-5 space-y-2 border-t border-slate-200 pt-5">
                {location.hours.map((slot) => (
                  <div key={slot.days} className="flex justify-between gap-4">
                    <dt className="text-slate-600">{slot.days}</dt>
                    <dd className="font-medium tabular-nums text-ink">{slot.time}</dd>
                  </div>
                ))}
              </dl>

              {location.mapUrl && (
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 font-semibold text-accent-700 hover:text-accent-800"
                >
                  Xem bản đồ →
                </a>
              )}
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default ScheduleSection;
