import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { PORTRAIT, SITE_URL, getContent } from "@/data";

// Ảnh xem trước khi dán link vào Zalo, Messenger, Facebook... (1200×630).
// Dựng từ dữ liệu trong vi.js / en.js nên đổi tên, vai trò hay ảnh thì thẻ tự đổi theo.

export const OG_SIZE = { width: 1200, height: 630 };

const ECG_PATH = "M0 22 H70 l6 -6 l6 6 h10 l5 4 l7 -24 l7 32 l5 -12 h12 q9 -11 18 0 H240";

const fontFile = (name) => readFile(join(process.cwd(), "src/app/fonts", name));

export async function renderOgImage(lang) {
  const { profile } = getContent(lang);

  const [sans, sansBold, serifLatin, serifVietnamese, portrait] = await Promise.all([
    fontFile("BeVietnamPro-Regular.ttf"),
    fontFile("BeVietnamPro-SemiBold.ttf"),
    fontFile("Lora-SemiBold-latin.ttf"),
    fontFile("Lora-SemiBold-vietnamese.ttf"),
    PORTRAIT ? readFile(join(process.cwd(), "public", PORTRAIT)) : null,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 64px 0 72px",
          backgroundColor: "#f6faf9",
          backgroundImage: "radial-gradient(circle at 85% 0%, #99f6e4 0%, rgba(246,250,249,0) 55%)",
          fontFamily: "Be Vietnam Pro",
          color: "#475569",
        }}
      >
        {portrait && (
          <img
            src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
            alt=""
            width={352}
            height={440}
            style={{ borderRadius: 36, objectFit: "cover", border: "2px solid #ccfbf1" }}
          />
        )}

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontFamily: "Lora", fontSize: 84, color: "#0f2a2e", lineHeight: 1.1 }}>{profile.name}</div>

          <svg width="288" height="48" viewBox="0 0 240 40" style={{ marginTop: 18 }}>
            <path d={ECG_PATH} fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div style={{ marginTop: 18, fontSize: 38, fontWeight: 600, color: "#0f766e" }}>{profile.role}</div>
          <div style={{ marginTop: 12, fontSize: 26 }}>{profile.school}</div>
          <div style={{ marginTop: 6, fontSize: 26 }}>{profile.interest}</div>

          <div style={{ marginTop: 40, fontSize: 22, color: "#94a3b8" }}>{new URL(SITE_URL).host}</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Be Vietnam Pro", data: sans, weight: 400, style: "normal" },
        { name: "Be Vietnam Pro", data: sansBold, weight: 600, style: "normal" },
        // Lora chia theo bộ ký tự: latin cho chữ thường, vietnamese cho chữ có dấu
        { name: "Lora", data: serifLatin, weight: 600, style: "normal" },
        { name: "Lora", data: serifVietnamese, weight: 600, style: "normal" },
      ],
    }
  );
}
