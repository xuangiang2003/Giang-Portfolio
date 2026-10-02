import { renderOgImage } from "../../og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Xuan Giang — Sixth-year Medical Student";

export default function Image() {
  return renderOgImage("en");
}
