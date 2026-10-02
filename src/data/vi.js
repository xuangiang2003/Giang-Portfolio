// Nội dung tiếng Việt. Sửa ở đây thì nhớ sửa chỗ tương ứng trong en.js.
// Những chỗ còn trong ngoặc vuông [...] là nội dung mẫu, phải thay bằng thông tin thật.

const vi = {
  lang: "vi",

  profile: {
    // Điền họ tên đầy đủ khi có
    name: "Giang",
    shortName: "Giang",
    // Chưa tốt nghiệp và chưa có giấy phép hành nghề thì không ghi "Bác sĩ" / "BS."
    role: "Sinh viên Y khoa năm 6",
    school: "Trường Đại học Y Dược Cần Thơ",
    graduation: "[Dự kiến tốt nghiệp: tháng ../20..]",
    interest: "Sản Phụ khoa & Ngoại khoa",
    city: "Cần Thơ",
    tagline:
      "Mình là sinh viên Y khoa năm 6 tại Trường Đại học Y Dược Cần Thơ. Trong quá trình học tập và thực hành lâm sàng, mình đặc biệt quan tâm đến Sản Phụ khoa và Ngoại khoa. Mình mong muốn tiếp tục trau dồi kiến thức, kỹ năng lâm sàng và kinh nghiệm thực tế để chuẩn bị tốt cho định hướng chuyên môn sau khi tốt nghiệp.",
    // Đặt file CV vào public/ (vd: public/cv-vi.pdf) rồi điền "/cv-vi.pdf". Để trống thì nút "Tải CV" bị ẩn.
    cvUrl: "",
  },

  stats: [
    { value: "3.67/4.0", label: "điểm trung bình tích luỹ" },
    { value: "6 năm", label: "chương trình đào tạo Y khoa" },
    { value: "4 bệnh viện", label: "đã thực tập lâm sàng" },
    { value: "VSTEP bậc 3", label: "ngoại ngữ" },
  ],

  about: {
    paragraphs: [
      "[Đoạn 1 — Bạn là ai, đang học ở đâu, vì sao chọn ngành Y.]",
      "[Đoạn 2 — Trải nghiệm đáng nhớ trong quá trình học và thực tập, điều bạn học được từ đó.]",
      "[Đoạn 3 — Định hướng sau tốt nghiệp: chuyên ngành, nội trú, nơi muốn làm việc.]",
    ],
    highlights: ["Sản Phụ khoa", "Ngoại khoa", "[Mục tiêu gần: thi nội trú / học chuyên khoa / xin việc tại ...]"],
  },

  // Mới nhất để trên cùng
  education: [
    {
      time: "[2021] – [2027]",
      degree: "Y khoa (chương trình 6 năm)",
      school: "Trường Đại học Y Dược Cần Thơ",
      details: ["Điểm trung bình tích luỹ: 3.67/4.0", "[Xếp loại / học bổng / danh hiệu]"],
    },
    {
      time: "[2018] – [2021]",
      degree: "[THPT — lớp chuyên ...]",
      school: "[Trường THPT]",
      details: ["[Giải thưởng học sinh giỏi nếu có]"],
    },
  ],

  awards: ["[Học bổng / giải thưởng 1 — năm]", "[Học bổng / giải thưởng 2 — năm]"],

  // Các đợt thực tập lâm sàng
  rotations: [
    {
      department: "[Nội khoa]",
      hospital: "[Bệnh viện]",
      time: "[Thời gian]",
      description: "[Đã tham gia những gì: hỏi bệnh, khám, làm bệnh án, trực, thủ thuật được quan sát / thực hiện.]",
    },
    { department: "[Ngoại khoa]", hospital: "[Bệnh viện]", time: "[Thời gian]", description: "[Mô tả ngắn.]" },
    { department: "[Sản phụ khoa]", hospital: "[Bệnh viện]", time: "[Thời gian]", description: "[Mô tả ngắn.]" },
    { department: "[Nhi khoa]", hospital: "[Bệnh viện]", time: "[Thời gian]", description: "[Mô tả ngắn.]" },
  ],

  activities: [
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
  ],

  skills: [
    { group: "Lâm sàng", items: ["[Hỏi bệnh, khám lâm sàng]", "[Làm bệnh án]", "[Thủ thuật cơ bản]"] },
    { group: "Ngoại ngữ", items: ["Tiếng Anh — VSTEP bậc 3", "[Ngoại ngữ khác]"] },
    { group: "Khác", items: ["[Thuyết trình]", "[Làm việc nhóm]", "[Tin học văn phòng]"] },
  ],

  certifications: ["[Chứng chỉ 1 — vd: Cấp cứu cơ bản (BLS)]", "[Chứng chỉ 2]"],

  nav: [
    { id: "about", label: "Giới thiệu" },
    { id: "education", label: "Học vấn" },
    { id: "rotations", label: "Lâm sàng" },
    { id: "activities", label: "Hoạt động" },
    { id: "skills", label: "Kỹ năng" },
    { id: "contact", label: "Liên hệ" },
  ],

  // Chữ cố định trên giao diện
  ui: {
    language: "Ngôn ngữ",
    downloadCv: "Tải CV",
    contact: "Liên hệ",
    viewJourney: "Xem quá trình học →",
    interestLabel: "Định hướng",
    portraitAlt: "Chân dung",
    portraitPlaceholder: "Ảnh chân dung",
    portraitRatio: "(tỉ lệ 4:5)",
    backToTop: "Về đầu trang",
    about: { eyebrow: "Giới thiệu", title: "Về tôi", highlights: "Quan tâm và định hướng" },
    education: { eyebrow: "Học vấn", title: "Quá trình học tập", awards: "Học bổng và giải thưởng" },
    rotations: {
      eyebrow: "Lâm sàng",
      title: "Thực tập lâm sàng",
      intro:
        "Các khoa đã đi thực tập trong chương trình đào tạo, dưới sự hướng dẫn của giảng viên và bác sĩ tại bệnh viện.",
    },
    activities: { eyebrow: "Hoạt động", title: "Hoạt động ngoại khoá và tình nguyện" },
    skills: { eyebrow: "Kỹ năng", title: "Kỹ năng và chứng chỉ", certifications: "Chứng chỉ" },
    contactSection: {
      eyebrow: "Liên hệ",
      title: "Kết nối với tôi",
      heading: "Cơ hội học tập hoặc việc làm?",
      body: "[Một hai câu: đang tìm kiếm điều gì — vị trí sau tốt nghiệp, người hướng dẫn — và cách liên hệ thuận tiện nhất.]",
      sendEmail: "Gửi email",
      channels: {
        email: "Email",
        phone: "Điện thoại",
        linkedin: "LinkedIn",
        linkedinValue: "Hồ sơ LinkedIn",
        facebook: "Facebook",
        facebookValue: "Trang Facebook",
        zalo: "Zalo",
        zaloValue: "Nhắn qua Zalo",
      },
    },
    footer: { disclaimer: "Đây là trang hồ sơ cá nhân, không cung cấp tư vấn y khoa." },
  },
};

export default vi;
