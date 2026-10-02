// Nội dung tiếng Việt. Sửa ở đây thì nhớ sửa chỗ tương ứng trong en.js.
// Danh sách nào để rỗng ([]) thì khối tương ứng trên trang tự ẩn.

const vi = {
  lang: "vi",

  profile: {
    // Điền họ tên đầy đủ khi có
    name: "Xuân Giang",
    shortName: "Xuân Giang",
    // Chưa tốt nghiệp và chưa có giấy phép hành nghề thì không ghi "Bác sĩ" / "BS."
    role: "Sinh viên Y khoa năm 6",
    school: "Trường Đại học Y Dược Cần Thơ",
    graduation: "Dự kiến tốt nghiệp: 2027",
    interest: "Sản Phụ khoa & Ngoại khoa",
    city: "Cần Thơ",
    tagline:
      "Mình là sinh viên Y khoa năm 6, đang trên hành trình hoàn thiện kiến thức và kỹ năng lâm sàng. Mình đặc biệt quan tâm đến Sản Phụ khoa và Ngoại khoa, đồng thời mong muốn tiếp tục học tập và phát triển chuyên môn sau khi tốt nghiệp.",
    // Đặt file CV vào public/ (vd: public/cv-vi.pdf) rồi điền "/cv-vi.pdf". Để trống thì nút "Tải CV" bị ẩn.
    cvUrl: "",
  },

  stats: [
    { value: "3.67/4.0", label: "điểm trung bình tích luỹ" },
    { value: "6 năm", label: "chương trình đào tạo Y khoa" },
    { value: "4 bệnh viện", label: "đã thực tập lâm sàng" },
    { value: "VSTEP B1", label: "ngoại ngữ (bậc 3)" },
  ],

  about: {
    paragraphs: [
      "Mình là sinh viên Y khoa năm 6 tại Trường Đại học Y Dược Cần Thơ. Trong quá trình học tập, mình được tiếp cận từ kiến thức cơ sở đến thực hành lâm sàng và từng bước hình thành tư duy tiếp cận người bệnh một cách toàn diện.",
      "Qua các đợt thực tập tại bệnh viện, mình được rèn luyện kỹ năng khai thác bệnh sử, khám bệnh, làm bệnh án, phân tích cận lâm sàng và tiếp cận chẩn đoán – điều trị dưới sự hướng dẫn của giảng viên và bác sĩ.",
      "Mình đang định hướng phát triển chuyên môn trong Sản Phụ khoa và Ngoại khoa. Mục tiêu của mình là tiếp tục học hỏi, nâng cao kỹ năng lâm sàng và tìm được hướng phát triển phù hợp sau khi tốt nghiệp.",
    ],
    highlights: ["Sản Phụ khoa", "Ngoại khoa", "Kỹ năng lâm sàng", "Học tập chuyên môn"],
  },

  // Mới nhất để trên cùng
  education: [
    {
      time: "2021 – 2027",
      degree: "Y khoa (chương trình 6 năm)",
      school: "Trường Đại học Y Dược Cần Thơ",
      details: ["Điểm trung bình tích luỹ hiện tại: 3.67/4.0"],
    },
  ],

  // vd: "Học bổng khuyến khích học tập — 2024"
  awards: [],

  // Các đợt thực tập lâm sàng. `time` để trống thì không hiện.
  rotations: [
    {
      department: "Nội khoa",
      hospital: "Bệnh viện Đa khoa Trung ương Cần Thơ",
      time: "",
      description:
        "Thực hành khai thác bệnh sử, khám bệnh, làm bệnh án và tiếp cận chẩn đoán, điều trị các bệnh lý nội khoa thường gặp.",
    },
    {
      department: "Ngoại khoa",
      hospital: "Bệnh viện Đa khoa Thành phố Cần Thơ",
      time: "",
      description:
        "Rèn luyện kỹ năng khám ngoại khoa, theo dõi người bệnh và tiếp cận các bệnh lý, thủ thuật ngoại khoa thường gặp.",
    },
    {
      department: "Sản Phụ khoa",
      hospital: "Bệnh viện Phụ sản Cần Thơ",
      time: "",
      description:
        "Thực hành khai thác bệnh sử, khám sản – phụ khoa và theo dõi người bệnh; tiếp cận các tình huống thường gặp trong sản khoa và phụ khoa.",
    },
    {
      department: "Nhi khoa",
      hospital: "Bệnh viện Nhi đồng Cần Thơ",
      time: "",
      description:
        "Thực hành khai thác bệnh sử, khám và đánh giá trẻ bệnh; tiếp cận các bệnh lý nhi khoa thường gặp và theo dõi đáp ứng điều trị.",
    },
  ],

  activities: [
    {
      time: "2026",
      title: "Thực hành sức khoẻ cộng đồng",
      organization: "Trường Đại học Y Dược Cần Thơ",
      description:
        "Tham gia thực hành cộng đồng tại Phường Cái Vồn, Thành phố Vĩnh Long; khảo sát tình hình sức khoẻ, đánh giá tiêu chí y tế xã và tham gia truyền thông, giáo dục sức khoẻ về phòng chống tăng huyết áp.",
    },
    {
      time: "",
      title: "Học tập và làm việc nhóm",
      organization: "Trong chương trình đào tạo Y khoa",
      description:
        "Tham gia các hoạt động học tập nhóm, trình bày ca bệnh, thảo luận chuyên môn và phối hợp trong các hoạt động thực hành lâm sàng và cộng đồng.",
    },
  ],

  skills: [
    {
      group: "Lâm sàng",
      items: [
        "Khai thác bệnh sử",
        "Khám lâm sàng",
        "Làm bệnh án",
        "Phân tích cận lâm sàng",
        "Tiếp cận chẩn đoán",
      ],
    },
    { group: "Ngoại ngữ", items: ["Tiếng Anh — VSTEP bậc 3 (B1)"] },
    {
      group: "Khác",
      items: [
        "Thuyết trình và làm việc nhóm",
        "Tự học và tổng hợp tài liệu y khoa",
        "Quản lý thời gian và tinh thần trách nhiệm",
      ],
    },
  ],

  // vd: "Cấp cứu cơ bản (BLS)"
  certifications: [],

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
    menu: "Menu",
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
        "Thực hành và học tập tại các bệnh viện trong chương trình đào tạo, dưới sự hướng dẫn của giảng viên và bác sĩ.",
    },
    activities: { eyebrow: "Hoạt động", title: "Hoạt động ngoại khoá và cộng đồng" },
    skills: { eyebrow: "Kỹ năng", title: "Kỹ năng và chứng chỉ", certifications: "Chứng chỉ" },
    contactSection: {
      eyebrow: "Liên hệ",
      title: "Kết nối với tôi",
      heading: "“Học để hiểu – Thực hành để trưởng thành – Tận tâm để trở thành người bác sĩ tốt hơn.”",
      body: "Mình luôn sẵn sàng kết nối với những cơ hội học tập, thực hành và phát triển chuyên môn phù hợp với định hướng Sản Phụ khoa và Ngoại khoa.",
      location: "Cần Thơ, Việt Nam",
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
