# Task list — Portfolio sinh viên Y khoa

Hồ sơ cá nhân của một sinh viên Y khoa năm 6 sắp tốt nghiệp: dùng để xin việc, thi nội trú, xin học bổng, kết nối nghiên cứu.

Stack: Next.js 16 (App Router) · React 19 · Tailwind CSS 3 · motion
Chạy local: `npm install` → `npm run dev` → http://localhost:3000
Kiểm tra bản production: `npm run build` → `npm run start`
Bản đang chạy: https://giang-portfolio-ten.vercel.app (repo `xuangiang2003/Giang-Portfolio`, nhánh `main` tự deploy)

Trang có hai ngôn ngữ: tiếng Việt ở `/` (mặc định), tiếng Anh ở `/en`, đổi bằng dropdown trên header.

Nội dung nằm trong [src/data/](src/data/). Chỗ nào còn `[...]` là nội dung mẫu.

- [vi.js](src/data/vi.js) — nội dung tiếng Việt
- [en.js](src/data/en.js) — nội dung tiếng Anh (cùng cấu trúc với `vi.js`, sửa bên này nhớ sửa bên kia)
- [site.js](src/data/site.js) — phần dùng chung: kênh liên hệ, ảnh chân dung, danh sách ngôn ngữ

---

## Giai đoạn 0 — Dựng sườn ✅

- [x] Khởi tạo Next.js + Tailwind + motion, alias `@/` → `src/`
- [x] Tông sáng, màu nhấn teal, font Be Vietnam Pro (chữ thường) + Lora (tiêu đề), có dấu tiếng Việt
- [x] Tách nội dung ra `src/data/`
- [x] Song ngữ Việt – Anh: dropdown chọn ngôn ngữ, mặc định tiếng Việt, có `hreflang` và sitemap cho cả hai
- [x] Header cố định, tự sáng mục đang xem, nút "Tải CV" (tự ẩn khi chưa có file)
- [x] Hero: tên, "Sinh viên Y khoa năm 6", trường, thời điểm tốt nghiệp, định hướng, ảnh chân dung, 4 con số
- [x] Giới thiệu + quan tâm và định hướng
- [x] Học vấn (timeline) + học bổng, giải thưởng
- [x] Thực tập lâm sàng (thẻ theo từng khoa)
- [x] Hoạt động ngoại khoá, tình nguyện (đã bỏ phần nghiên cứu khoa học theo yêu cầu)
- [x] Kỹ năng theo nhóm + chứng chỉ
- [x] Liên hệ (kênh để trống tự ẩn), footer, nút về đầu trang
- [x] SEO nền: metadata, Open Graph, JSON-LD `Person`, `robots.txt`, `sitemap.xml`, favicon
- [x] Deploy lên Vercel, dùng domain `.vercel.app`
- [x] Hiệu ứng: hero hiện theo lớp, ảnh mở kiểu kéo rèm, đường điện tim tự vẽ, số đếm chạy, timeline vẽ theo cuộn, menu trượt, thanh tiến độ đọc
- [x] Menu xổ xuống trên điện thoại, biểu tượng tab "XG", gắn Vercel Analytics (cần bật trong dashboard Vercel)

## Giai đoạn 1 — Thu thập nội dung từ Giang

Đã điền theo bản preview Giang gửi (02/10/2026), cả bản Việt và bản Anh.

- [x] Trường, năm tốt nghiệp dự kiến (2027), định hướng, đoạn giới thiệu, 3 đoạn "Về tôi"
- [x] 4 con số nổi bật: GPA 3.67/4.0, 6 năm, 4 bệnh viện, VSTEP B1
- [x] Học vấn: Y khoa 2021 – 2027
- [x] Thực tập lâm sàng: 4 khoa tại 4 bệnh viện ở Cần Thơ
- [x] Hoạt động: thực hành sức khoẻ cộng đồng, học tập và làm việc nhóm
- [x] Kỹ năng lâm sàng, ngoại ngữ, kỹ năng khác
- [x] Email liên hệ, câu trích và đoạn chữ ở khối Liên hệ
- [x] Ảnh chân dung → `public/portrait.jpg` (đã cắt 4:5, 900×1125). Nên thay bằng ảnh chụp chuyên nghiệp hơn khi có (áo blouse, nền trơn)
- [ ] Họ tên đầy đủ (hiện là "Xuân Giang", chưa có họ)
- [ ] Thời gian từng đợt thực tập (hiện đang ẩn)
- [ ] Học bổng, giải thưởng, chứng chỉ (hiện đang ẩn vì chưa có)
- [ ] File CV dạng PDF, mỗi ngôn ngữ một bản → `public/cv-vi.pdf`, `public/cv-en.pdf`, điền `cvUrl` trong `vi.js` và `en.js`
- [ ] Kênh liên hệ khác: điện thoại, LinkedIn, Facebook, Zalo

## Giai đoạn 2 — Hoàn thiện giao diện

- [x] Thay hết `[...]` trong `vi.js`, `en.js` và `site.js`
- [ ] Giang xác nhận lại các chi tiết lấy từ bản preview: tên bệnh viện theo từng khoa, năm 2021 – 2027, hoạt động tại Phường Cái Vồn
- [ ] Nhờ Giang đọc lại bản tiếng Anh (tên trường, tên bệnh viện, tên chuyên ngành, cách diễn đạt)
- [ ] Chốt màu nhấn (`tailwind.config.js` + `--accent-rgb` trong `globals.css`)
- [ ] Soát giao diện trên điện thoại (360px), tablet, desktop
- [x] Ảnh xem trước khi chia sẻ link, mỗi ngôn ngữ một ảnh (`src/app/og.js`)
- [ ] Ảnh hoạt động: hội nghị, tình nguyện, thực tập (tuỳ chọn)

## Giai đoạn 3 — Kiểm tra nội dung

- [ ] Không ghi "Bác sĩ" / "BS." cho tới khi tốt nghiệp; không mô tả như đang hành nghề độc lập
- [ ] Không đăng ảnh, tên, bệnh án hay thông tin nhận diện được người bệnh trong phần thực tập
- [ ] Ảnh chụp trong bệnh viện: kiểm tra quy định của trường và bệnh viện trước khi đăng
- [ ] Nhờ một giảng viên hoặc người đi trước đọc lại nội dung

## Giai đoạn 4 — Vercel

- [x] Repo ở GitHub của Giang, Vercel đứng tên Giang, Danh là collaborator
- [ ] Xác nhận push từ máy Danh được Vercel deploy (repo private + gói Hobby có thể chặn)
- [ ] Xác nhận sitemap và canonical trỏ đúng domain sau lần deploy tới (tự lấy từ `VERCEL_PROJECT_PRODUCTION_URL`)

Domain riêng (tuỳ chọn, làm sau):

- [ ] Mua domain, thêm ở Vercel → Project → Settings → Domains
- [ ] Trỏ DNS theo hướng dẫn của Vercel (bản ghi A cho domain gốc, CNAME cho `www`)
- [ ] Đặt biến môi trường `NEXT_PUBLIC_SITE_URL=https://<domain>` rồi redeploy

## Giai đoạn 5 — Sau khi có nội dung thật

- [ ] Khai báo Google Search Console, gửi `sitemap.xml`
- [ ] Chạy Lighthouse (mục tiêu ≥ 90 cho Performance, Accessibility, SEO)
- [ ] Gắn link trang vào CV, LinkedIn, chữ ký email

## Khi tốt nghiệp và có giấy phép hành nghề

- [ ] Đổi `profile.role` trong `vi.js` và `en.js`, thêm nơi công tác
- [ ] Thêm lại các mục của trang bác sĩ (chuyên môn, lịch khám, đặt lịch) — có trong lịch sử git, commit `786d3aa`
- [ ] Khi đó mới cần xét quy định quảng cáo dịch vụ khám chữa bệnh
