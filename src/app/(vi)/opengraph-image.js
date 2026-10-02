import { renderOgImage } from "../og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Xuân Giang — Sinh viên Y khoa năm 6";

export default function Image() {
  return renderOgImage("vi");
}
