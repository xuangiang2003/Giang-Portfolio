import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import RotationsSection from "./RotationsSection";
import ActivitiesSection from "./ActivitiesSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ScrollProgress from "./ScrollProgress";
import { MotionProvider } from "./ui/motion";
import { CONTACT, LANGUAGES, SITE_URL, getContent } from "@/data";

// Cả trang, dùng chung cho mọi ngôn ngữ
function ProfilePage({ lang }) {
  const content = getContent(lang);
  const { profile, nav, ui } = content;
  const path = LANGUAGES.find(({ code }) => code === lang).path;

  // Dữ liệu có cấu trúc để Google hiểu đây là trang hồ sơ của một người
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    description: profile.tagline,
    jobTitle: profile.role,
    alumniOf: profile.school,
    url: new URL(path, SITE_URL).href,
    email: CONTACT.email || undefined,
    sameAs: [CONTACT.linkedin, CONTACT.facebook].filter(Boolean),
  };

  return (
    <MotionProvider>
      {/* overflow-x-clip: phần tử đang trượt vào từ bên cạnh không làm trang cuộn ngang */}
      <div className="min-h-screen overflow-x-clip">
        <ScrollProgress />
        <Header
          lang={lang}
          nav={nav}
          shortName={profile.shortName}
          cvUrl={profile.cvUrl}
          ui={{ language: ui.language, downloadCv: ui.downloadCv }}
        />
        <main>
          <Hero content={content} />
          <AboutSection content={content} />
          <EducationSection content={content} />
          <RotationsSection content={content} />
          <ActivitiesSection content={content} />
          <SkillsSection content={content} />
          <ContactSection content={content} />
        </main>
        <Footer content={content} />
        <BackToTop label={ui.backToTop} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </MotionProvider>
  );
}

export default ProfilePage;
