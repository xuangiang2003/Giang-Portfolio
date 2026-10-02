import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import CredentialsSection from "@/components/CredentialsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { MotionProvider } from "@/components/ui/motion";
import { CONTACT, DOCTOR, LOCATIONS, SITE_URL } from "@/data/profile";

// Dữ liệu có cấu trúc để Google hiểu đây là trang hồ sơ của một bác sĩ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: DOCTOR.name,
  description: DOCTOR.tagline,
  medicalSpecialty: DOCTOR.specialty,
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: LOCATIONS.map((location) => ({
    "@type": "PostalAddress",
    name: location.name,
    streetAddress: location.address,
    addressCountry: "VN",
  })),
};

export default function Home() {
  return (
    <MotionProvider>
      {/* overflow-x-clip: phần tử đang trượt vào từ bên cạnh không làm trang cuộn ngang */}
      <div className="min-h-screen overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <SpecialtiesSection />
          <ExperienceSection />
          <CredentialsSection />
          <ScheduleSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </MotionProvider>
  );
}
