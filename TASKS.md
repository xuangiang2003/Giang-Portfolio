# Task list — Portfolio bác sĩ

Stack: Next.js 16 (App Router) · React 19 · Tailwind CSS 3 · motion
Chạy local: `npm install` → `npm run dev` → http://localhost:3000
Kiểm tra bản production: `npm run build` → `npm run start`

Toàn bộ nội dung nằm ở một file: [src/data/profile.js](src/data/profile.js). Chỗ nào còn `[...]` là nội dung mẫu.

---

## Giai đoạn 0 — Dựng sườn ✅

- [x] Khởi tạo Next.js + Tailwind + motion, alias `@/` → `src/`
- [x] Tông sáng, màu nhấn teal, font Be Vietnam Pro (chữ thường) + Lora (tiêu đề), có dấu tiếng Việt
- [x] Tách nội dung ra `src/data/profile.js`
- [x] Header cố định, tự sáng mục đang xem, nút "Đặt lịch khám"
- [x] Hero: tên, học vị, chuyên khoa, nơi công tác, khung ảnh chân dung, 4 con số nổi bật
- [x] Giới thiệu
- [x] Chuyên môn (lưới thẻ)
- [x] Kinh nghiệm: 2 cột timeline Công tác / Đào tạo
- [x] Chứng chỉ, hội viên, công bố khoa học
- [x] Lịch khám: nơi làm việc + giờ khám
- [x] Liên hệ: khối đặt lịch + các kênh (kênh để trống tự ẩn)
- [x] Footer có câu miễn trừ y khoa, nút về đầu trang
- [x] SEO nền: metadata, Open Graph, JSON-LD `Physician`, `robots.txt`, `sitemap.xml`, favicon
- [x] `npm run build` chạy sạch, trang chủ trả 200 ở local

## Giai đoạn 1 — Thu thập nội dung từ bác sĩ

- [ ] Họ tên đầy đủ, học hàm / học vị, chuyên khoa, nơi công tác
- [ ] Số giấy phép hành nghề và phạm vi chuyên môn ghi trên giấy phép
- [ ] Ảnh chân dung chuyên nghiệp (dọc 4:5, tối thiểu 1200px) → `public/portrait.jpg`, điền `DOCTOR.portrait`
- [ ] Câu giới thiệu ngắn (tagline) + 3 đoạn "Giới thiệu"
- [ ] 4 con số nổi bật — chỉ dùng số có thể chứng minh
- [ ] Danh sách lĩnh vực khám và điều trị (4–6 mục)
- [ ] Quá trình công tác (mốc thời gian, chức danh, nơi làm)
- [ ] Quá trình đào tạo (bằng cấp, khoá ngắn hạn, fellowship)
- [ ] Chứng chỉ chuyên sâu, hội chuyên ngành
- [ ] Công bố khoa học / báo cáo hội nghị (kèm link nếu có)
- [ ] Nơi khám, địa chỉ, giờ khám, link Google Maps
- [ ] Kênh liên hệ: điện thoại, email, Zalo, Facebook, link đặt lịch
- [ ] Hướng dẫn đặt lịch (đoạn chữ trong khối Liên hệ)

## Giai đoạn 2 — Hoàn thiện giao diện

- [ ] Thay hết `[...]` trong `src/data/profile.js` và 2 câu mẫu trong `SpecialtiesSection.js`, `ContactSection.js`
- [ ] Chốt màu nhấn (`tailwind.config.js` + `--accent-rgb` trong `globals.css`)
- [ ] Soát giao diện trên điện thoại (360px), tablet, desktop
- [ ] Thêm icon cho thẻ chuyên môn và kênh liên hệ
- [ ] Ảnh Open Graph khi chia sẻ link (`src/app/opengraph-image`)
- [ ] Nhúng bản đồ Google Maps cho từng nơi khám (tuỳ chọn)
- [ ] Ảnh hoạt động: hội nghị, giảng dạy, phòng khám (tuỳ chọn)
- [ ] Bản tiếng Anh (tuỳ chọn)

## Giai đoạn 3 — Pháp lý & độ tin cậy

- [ ] Kiểm tra nội dung với quy định quảng cáo dịch vụ khám chữa bệnh (Luật Quảng cáo, Nghị định 342/2025/NĐ-CP): nội dung phải khớp phạm vi trên giấy phép hành nghề, có tên và địa chỉ cơ sở được cấp phép
- [ ] Xác định trang có cần giấy xác nhận nội dung quảng cáo của Sở Y tế hay không
- [ ] Hỏi bệnh viện nơi công tác về việc dùng tên / logo bệnh viện
- [ ] Chưa đưa cảm nhận bệnh nhân lên trang cho tới khi xác nhận được là hợp lệ và có sự đồng ý bằng văn bản
- [ ] Không đăng ảnh, tên hay thông tin nhận diện được người bệnh

## Giai đoạn 4 — Deploy Vercel + domain

- [ ] Commit và push repo lên GitHub
- [ ] Vercel → Add New Project → import repo (framework tự nhận Next.js, không cần cấu hình)
- [ ] Mua / chọn domain, thêm ở Vercel → Project → Settings → Domains
- [ ] Trỏ DNS theo hướng dẫn của Vercel (bản ghi A cho domain gốc, CNAME cho `www`)
- [ ] Đặt biến môi trường `NEXT_PUBLIC_SITE_URL=https://<domain>` rồi redeploy (dùng cho canonical, sitemap, Open Graph)
- [ ] Kiểm tra HTTPS, chuyển hướng `www` ↔ domain gốc

## Giai đoạn 5 — Sau khi lên sóng

- [ ] Khai báo Google Search Console, gửi `sitemap.xml`
- [ ] Kiểm tra JSON-LD bằng Rich Results Test
- [ ] Chạy Lighthouse (mục tiêu ≥ 90 cho Performance, Accessibility, SEO)
- [ ] Bật Vercel Analytics (tuỳ chọn)
- [ ] Tạo / cập nhật Google Business Profile, trỏ về domain
- [ ] Mục bài viết / kiến thức sức khoẻ (tuỳ chọn, tốt cho SEO dài hạn)
