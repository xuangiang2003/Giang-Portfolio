import { Be_Vietnam_Pro, Lora } from "next/font/google";
import { PROFILE, SITE_URL } from "@/data/profile";
import "./globals.css";

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

const title = `${PROFILE.name} — ${PROFILE.role}`;
const description = `${PROFILE.name}, ${PROFILE.role} tại ${PROFILE.school}. ${PROFILE.tagline}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", type: "profile", locale: "vi_VN" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
