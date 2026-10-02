// TOÀN BỘ nội dung của trang nằm ở file này — sửa ở đây, không cần đụng vào component.
// Những chỗ còn trong ngoặc vuông [...] là nội dung mẫu, phải thay bằng thông tin thật
// của bác sĩ trước khi đưa lên domain chính thức.

// Domain thật: đặt biến NEXT_PUBLIC_SITE_URL trên Vercel (vd: https://bacsigiang.vn)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const DOCTOR = {
  name: "[Họ và tên bác sĩ]",
  shortName: "BS. Giang",
  title: "[Học hàm / học vị — vd: ThS.BS, BS.CKI]",
  specialty: "[Chuyên khoa]",
  workplace: "[Bệnh viện / phòng khám đang công tác]",
  city: "[Tỉnh / Thành phố]",
  // Số chứng chỉ / giấy phép hành nghề — quảng cáo dịch vụ KCB phải khớp với phạm vi ghi trên giấy này
  license: "[Số giấy phép hành nghề]",
  tagline: "[Một câu ngắn về cách bác sĩ chăm sóc người bệnh — tận tâm, dựa trên bằng chứng, dễ hiểu.]",
  // Đặt ảnh vào public/ (vd: public/portrait.jpg) rồi điền "/portrait.jpg". Để trống thì hiện khung giữ chỗ.
  portrait: "",
};

export const CONTACT = {
  phone: "[Số điện thoại]",
  email: "[email@example.com]",
  zalo: "", // vd: "https://zalo.me/09xxxxxxxx"
  facebook: "",
  // Link đặt lịch (trang bệnh viện, Zalo OA, Google Form...). Để trống thì nút dẫn xuống mục Liên hệ.
  bookingUrl: "",
};

export const STATS = [
  { value: "[10+]", label: "năm kinh nghiệm lâm sàng" },
  { value: "[5.000+]", label: "lượt khám và điều trị" },
  { value: "[12]", label: "bài báo khoa học" },
  { value: "[3]", label: "hội chuyên ngành là thành viên" },
];

export const ABOUT = {
  paragraphs: [
    "[Đoạn 1 — Bác sĩ là ai, đang làm việc ở đâu, chuyên sâu về nhóm bệnh nào.]",
    "[Đoạn 2 — Quá trình học tập và hành nghề nổi bật, điều gì đưa bác sĩ đến với chuyên khoa này.]",
    "[Đoạn 3 — Quan điểm điều trị: lắng nghe, giải thích rõ ràng, quyết định cùng người bệnh.]",
  ],
  highlights: [
    "[Thế mạnh chuyên môn 1]",
    "[Thế mạnh chuyên môn 2]",
    "[Ngôn ngữ làm việc: Tiếng Việt, Tiếng Anh]",
  ],
};

export const SPECIALTIES = [
  { title: "[Lĩnh vực 1]", description: "[Mô tả ngắn: khám, chẩn đoán và điều trị những bệnh gì.]" },
  { title: "[Lĩnh vực 2]", description: "[Mô tả ngắn.]" },
  { title: "[Lĩnh vực 3]", description: "[Mô tả ngắn.]" },
  { title: "[Thủ thuật / kỹ thuật]", description: "[Mô tả ngắn.]" },
  { title: "[Tư vấn & theo dõi]", description: "[Mô tả ngắn.]" },
  { title: "[Tầm soát / dự phòng]", description: "[Mô tả ngắn.]" },
];

// Mới nhất để trên cùng
export const EXPERIENCE = [
  {
    time: "[2020] – Hiện tại",
    role: "[Chức danh]",
    place: "[Bệnh viện / khoa]",
    description: "[Phụ trách công việc gì, nhóm bệnh nào.]",
  },
  {
    time: "[2015] – [2020]",
    role: "[Chức danh]",
    place: "[Bệnh viện / khoa]",
    description: "[Mô tả ngắn.]",
  },
];

export const EDUCATION = [
  { time: "[2018]", degree: "[Chuyên khoa I / Thạc sĩ ...]", school: "[Trường đại học]" },
  { time: "[2014]", degree: "[Bác sĩ đa khoa]", school: "[Trường đại học]" },
  { time: "[2019]", degree: "[Khoá đào tạo ngắn hạn / fellowship]", school: "[Đơn vị đào tạo, quốc gia]" },
];

export const CERTIFICATIONS = [
  "[Chứng chỉ hành nghề khám bệnh, chữa bệnh — phạm vi ...]",
  "[Chứng chỉ chuyên sâu 1]",
  "[Chứng chỉ chuyên sâu 2]",
];

export const MEMBERSHIPS = ["[Hội chuyên ngành 1]", "[Hội chuyên ngành 2]"];

export const PUBLICATIONS = [
  { year: "[2024]", title: "[Tên bài báo / báo cáo hội nghị]", venue: "[Tạp chí / hội nghị]", url: "" },
  { year: "[2022]", title: "[Tên bài báo / báo cáo hội nghị]", venue: "[Tạp chí / hội nghị]", url: "" },
];

export const LOCATIONS = [
  {
    name: "[Bệnh viện / phòng khám 1]",
    address: "[Số nhà, đường, phường, tỉnh/thành]",
    mapUrl: "", // link Google Maps
    hours: [
      { days: "Thứ 2 – Thứ 6", time: "[07:30 – 16:30]" },
      { days: "Thứ 7", time: "[07:30 – 11:30]" },
    ],
  },
  {
    name: "[Phòng khám ngoài giờ]",
    address: "[Địa chỉ]",
    mapUrl: "",
    hours: [{ days: "Thứ 2 – Thứ 6", time: "[17:30 – 20:00]" }],
  },
];

export const NAV = [
  { id: "top", label: "Trang đầu" },
  { id: "about", label: "Giới thiệu" },
  { id: "specialties", label: "Chuyên môn" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "credentials", label: "Chứng chỉ" },
  { id: "schedule", label: "Lịch khám" },
  { id: "contact", label: "Liên hệ" },
];
