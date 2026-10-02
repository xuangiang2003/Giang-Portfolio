import { Be_Vietnam_Pro, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LANGUAGES, SITE_URL, getContent } from "@/data";
import "./globals.css";

// Phần dùng chung của hai layout: (vi) ở "/" và (en) ở "/en".
// Mỗi ngôn ngữ có layout riêng để thẻ <html lang> đúng với nội dung.

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap",
});

export function buildMetadata(lang) {
  const { profile } = getContent(lang);
  const path = LANGUAGES.find(({ code }) => code === lang).path;
  const title = profile.name;
  const description = `${profile.name}, ${profile.role}, ${profile.school}. ${profile.tagline}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(LANGUAGES.map(({ code, path }) => [code, path])),
    },
    openGraph: { title, description, url: path, type: "profile", locale: lang === "vi" ? "vi_VN" : "en_US" },
    twitter: { card: "summary_large_image" },
  };
}

export function HtmlShell({ lang, children }) {
  return (
    <html lang={lang} className={`${sans.variable} ${serif.variable}`}>
      <body>
        {children}
        {/* Thống kê lượt xem — chỉ ghi nhận trên bản deploy ở Vercel, sau khi bật Analytics trong dashboard */}
        <Analytics />
      </body>
    </html>
  );
}
