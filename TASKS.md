# Task list — Portfolio sinh viên Y khoa

Hồ sơ cá nhân của một sinh viên Y khoa năm 6 sắp tốt nghiệp: dùng để xin việc, thi nội trú, xin học bổng, kết nối nghiên cứu.

Stack: Next.js 16 (App Router) · React 19 · Tailwind CSS 3 · motion
Chạy local: `npm install` → `npm run dev` → http://localhost:3000
Kiểm tra bản production: `npm run build` → `npm run start`
Bản đang chạy: https://giang-portfolio-ten.vercel.app (repo `xuangiang2003/Giang-Portfolio`, nhánh `main` tự deploy)

Toàn bộ nội dung nằm ở một file: [src/data/profile.js](src/data/profile.js). Chỗ nào còn `[...]` là nội dung mẫu.

---

## Giai đoạn 0 — Dựng sườn ✅

- [x] Khởi tạo Next.js + Tailwind + motion, alias `@/` → `src/`
- [x] Tông sáng, màu nhấn teal, font Be Vietnam Pro (chữ thường) + Lora (tiêu đề), có dấu tiếng Việt
- [x] Tách nội dung ra `src/data/profile.js`
- [x] Header cố định, tự sáng mục đang xem, nút "Tải CV" (tự ẩn khi chưa có file)
- [x] Hero: tên, "Sinh viên Y khoa năm 6", trường, thời điểm tốt nghiệp, định hướng, ảnh chân dung, 4 con số
- [x] Giới thiệu + quan tâm và định hướng
- [x] Học vấn (timeline) + học bổng, giải thưởng
- [x] Thực tập lâm sàng (thẻ theo từng khoa)
- [x] Nghiên cứu khoa học + hoạt động ngoại khoá, tình nguyện
- [x] Kỹ năng theo nhóm + chứng chỉ
- [x] Liên hệ (kênh để trống tự ẩn), footer, nút về đầu trang
- [x] SEO nền: metadata, Open Graph, JSON-LD `Person`, `robots.txt`, `sitemap.xml`, favicon
- [x] Deploy lên Vercel, dùng domain `.vercel.app`

## Giai đoạn 1 — Thu thập nội dung từ Giang

- [ ] Họ tên đầy đủ, trường, thời điểm dự kiến tốt nghiệp, tỉnh / thành
- [ ] Chuyên ngành định hướng và mục tiêu sau tốt nghiệp (nội trú, chuyên khoa, nơi muốn làm)
- [ ] Ảnh chân dung (dọc 4:5, tối thiểu 1200px, nén dưới 300KB) → `public/portrait.jpg`, điền `PROFILE.portrait`
- [ ] File CV dạng PDF → `public/cv.pdf`, điền `PROFILE.cvUrl`
- [ ] Câu giới thiệu ngắn (tagline) + 3 đoạn "Giới thiệu"
- [ ] 4 con số nổi bật: GPA, số khoa đã thực tập, số đề tài, ngoại ngữ — chỉ dùng số có thể chứng minh
- [ ] Học vấn: trường, năm, GPA, xếp loại
- [ ] Học bổng, giải thưởng
- [ ] Thực tập lâm sàng: khoa, bệnh viện, thời gian, đã làm gì
- [ ] Nghiên cứu khoa học: tên đề tài, vai trò, nơi báo cáo / công bố, link
- [ ] Hoạt động: câu lạc bộ, Đoàn – Hội, tình nguyện
- [ ] Kỹ năng và chứng chỉ (BLS, ngoại ngữ, tin học...)
- [ ] Kênh liên hệ: email, điện thoại, LinkedIn, Facebook, Zalo
- [ ] Đoạn chữ trong khối Liên hệ: đang tìm kiếm cơ hội gì

## Giai đoạn 2 — Hoàn thiện giao diện

- [ ] Thay hết `[...]` trong `src/data/profile.js` và câu mẫu trong `ContactSection.js`
- [ ] Bỏ mục nào chưa có nội dung (vd: chưa có nghiên cứu thì ẩn phần đó) thay vì để trống
- [ ] Chốt màu nhấn (`tailwind.config.js` + `--accent-rgb` trong `globals.css`)
- [ ] Soát giao diện trên điện thoại (360px), tablet, desktop
- [ ] Ảnh Open Graph khi chia sẻ link (`src/app/opengraph-image`)
- [ ] Ảnh hoạt động: hội nghị, tình nguyện, thực tập (tuỳ chọn)
- [ ] Bản tiếng Anh (tuỳ chọn — hữu ích nếu xin học bổng / chương trình nước ngoài)

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

- [ ] Đổi `PROFILE.role`, thêm nơi công tác
- [ ] Thêm lại các mục của trang bác sĩ (chuyên môn, lịch khám, đặt lịch) — có trong lịch sử git, commit `786d3aa`
- [ ] Khi đó mới cần xét quy định quảng cáo dịch vụ khám chữa bệnh
