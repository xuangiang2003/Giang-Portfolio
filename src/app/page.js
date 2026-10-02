import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import RotationsSection from "@/components/RotationsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { MotionProvider } from "@/components/ui/motion";
import { CONTACT, PROFILE, SITE_URL } from "@/data/profile";

// Dữ liệu có cấu trúc để Google hiểu đây là trang hồ sơ của một người
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  description: PROFILE.tagline,
  jobTitle: PROFILE.role,
  alumniOf: PROFILE.school,
  url: SITE_URL,
  email: CONTACT.email,
  sameAs: [CONTACT.linkedin, CONTACT.facebook].filter(Boolean),
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
          <EducationSection />
          <RotationsSection />
          <ResearchSection />
          <SkillsSection />
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
