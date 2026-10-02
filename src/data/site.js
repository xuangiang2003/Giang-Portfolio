// Thông tin dùng chung cho mọi ngôn ngữ. Nội dung theo từng ngôn ngữ nằm ở vi.js và en.js.

// Trên Vercel tự lấy domain production của project (vd: giang-portfolio-ten.vercel.app).
// Khi có domain riêng: đặt biến NEXT_PUBLIC_SITE_URL trên Vercel (vd: https://xuangiang.vn)
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Ngôn ngữ đầu tiên là mặc định (nằm ở địa chỉ gốc "/")
export const LANGUAGES = [
  { code: "vi", label: "Tiếng Việt", path: "/" },
  { code: "en", label: "English", path: "/en" },
];

// Đặt ảnh vào public/ (vd: public/portrait.jpg) rồi điền "/portrait.jpg". Để trống thì hiện khung giữ chỗ.
export const PORTRAIT = "/portrait.jpg";

// Kênh nào để trống thì tự ẩn
export const CONTACT = {
  email: "xuangiang2003@gmail.com",
  phone: "",
  linkedin: "",
  facebook: "",
  zalo: "", // vd: "https://zalo.me/09xxxxxxxx"
};
