// TOÀN BỘ nội dung của trang nằm ở file này — sửa ở đây, không cần đụng vào component.
// Những chỗ còn trong ngoặc vuông [...] là nội dung mẫu, phải thay bằng thông tin thật.

// Trên Vercel tự lấy domain production của project (vd: giang-portfolio-ten.vercel.app).
// Khi có domain riêng: đặt biến NEXT_PUBLIC_SITE_URL trên Vercel (vd: https://xuangiang.vn)
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const PROFILE = {
  name: "[Họ và tên]",
  shortName: "Giang",
  // Chưa tốt nghiệp và chưa có giấy phép hành nghề thì không ghi "Bác sĩ" / "BS."
  role: "Sinh viên Y khoa năm 6",
  school: "[Trường đại học]",
  graduation: "[Dự kiến tốt nghiệp: tháng ../20..]",
  interest: "[Chuyên ngành định hướng — vd: Nội khoa, Nhi khoa]",
  city: "[Tỉnh / Thành phố]",
  tagline: "[Một hai câu về bản thân: đang học gì, quan tâm lĩnh vực nào, mục tiêu sau khi tốt nghiệp.]",
  // Đặt ảnh vào public/ (vd: public/portrait.jpg) rồi điền "/portrait.jpg". Để trống thì hiện khung giữ chỗ.
  portrait: "",
  // Đặt file CV vào public/ (vd: public/cv.pdf) rồi điền "/cv.pdf". Để trống thì nút "Tải CV" bị ẩn.
  cvUrl: "",
};

// Kênh nào để trống thì tự ẩn
export const CONTACT = {
  email: "[email@example.com]",
  phone: "",
  linkedin: "",
  facebook: "",
  zalo: "", // vd: "https://zalo.me/09xxxxxxxx"
};

export const STATS = [
  { value: "[3.5/4.0]", label: "điểm trung bình tích luỹ" },
  { value: "[8]", label: "khoa đã thực tập lâm sàng" },
  { value: "[2]", label: "đề tài nghiên cứu khoa học" },
  { value: "[IELTS 7.0]", label: "ngoại ngữ" },
];

export const ABOUT = {
  paragraphs: [
    "[Đoạn 1 — Bạn là ai, đang học ở đâu, vì sao chọn ngành Y.]",
    "[Đoạn 2 — Trải nghiệm đáng nhớ trong quá trình học và thực tập, điều bạn học được từ đó.]",
    "[Đoạn 3 — Định hướng sau tốt nghiệp: chuyên ngành, nội trú, nơi muốn làm việc.]",
  ],
  highlights: [
    "[Lĩnh vực quan tâm 1]",
    "[Lĩnh vực quan tâm 2]",
    "[Mục tiêu gần: thi nội trú / học chuyên khoa / xin việc tại ...]",
  ],
};

// Mới nhất để trên cùng
export const EDUCATION = [
  {
    time: "[2021] – [2027]",
    degree: "[Bác sĩ Y khoa]",
    school: "[Trường đại học]",
    details: ["[Điểm trung bình tích luỹ: ../4.0]", "[Xếp loại / học bổng / danh hiệu]"],
  },
  {
    time: "[2018] – [2021]",
    degree: "[THPT — lớp chuyên ...]",
    school: "[Trường THPT]",
    details: ["[Giải thưởng học sinh giỏi nếu có]"],
  },
];

export const AWARDS = ["[Học bổng / giải thưởng 1 — năm]", "[Học bổng / giải thưởng 2 — năm]"];

// Các đợt thực tập lâm sàng
export const ROTATIONS = [
  {
    department: "[Nội khoa]",
    hospital: "[Bệnh viện]",
    time: "[Thời gian]",
    description: "[Đã tham gia những gì: hỏi bệnh, khám, làm bệnh án, trực, thủ thuật được quan sát / thực hiện.]",
  },
  { department: "[Ngoại khoa]", hospital: "[Bệnh viện]", time: "[Thời gian]", description: "[Mô tả ngắn.]" },
  { department: "[Sản phụ khoa]", hospital: "[Bệnh viện]", time: "[Thời gian]", description: "[Mô tả ngắn.]" },
  { department: "[Nhi khoa]", hospital: "[Bệnh viện]", time: "[Thời gian]", description: "[Mô tả ngắn.]" },
];

export const RESEARCH = [
  {
    year: "[2026]",
    title: "[Tên đề tài / bài báo / báo cáo hội nghị]",
    role: "[Vai trò: chủ nhiệm đề tài, thành viên, đồng tác giả]",
    venue: "[Hội nghị khoa học sinh viên / tạp chí]",
    url: "",
  },
  { year: "[2025]", title: "[Tên đề tài]", role: "[Vai trò]", venue: "[Nơi báo cáo / công bố]", url: "" },
];

export const ACTIVITIES = [
  {
    time: "[2023] – [2025]",
    title: "[Chức vụ / vai trò]",
    organization: "[Câu lạc bộ, Đoàn – Hội, tổ chức]",
    description: "[Đã làm gì, kết quả ra sao.]",
  },
  {
    time: "[2024]",
    title: "[Tình nguyện viên]",
    organization: "[Chương trình khám bệnh tình nguyện / mùa hè xanh]",
    description: "[Mô tả ngắn.]",
  },
];

export const SKILLS = [
  { group: "Lâm sàng", items: ["[Hỏi bệnh, khám lâm sàng]", "[Làm bệnh án]", "[Thủ thuật cơ bản]"] },
  { group: "Nghiên cứu", items: ["[Tìm và đọc y văn]", "[Thống kê: SPSS / R]", "[Viết báo cáo khoa học]"] },
  { group: "Ngoại ngữ", items: ["[Tiếng Anh — IELTS ...]", "[Ngoại ngữ khác]"] },
  { group: "Khác", items: ["[Thuyết trình]", "[Làm việc nhóm]", "[Tin học văn phòng]"] },
];

export const CERTIFICATIONS = ["[Chứng chỉ 1 — vd: Cấp cứu cơ bản (BLS)]", "[Chứng chỉ 2]"];

export const NAV = [
  { id: "top", label: "Trang đầu" },
  { id: "about", label: "Giới thiệu" },
  { id: "education", label: "Học vấn" },
  { id: "rotations", label: "Lâm sàng" },
  { id: "research", label: "Nghiên cứu" },
  { id: "skills", label: "Kỹ năng" },
  { id: "contact", label: "Liên hệ" },
];
