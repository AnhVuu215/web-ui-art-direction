# Web UI Art Direction

Skill cho Codex giúp biến ý tưởng hoặc bộ ảnh tham khảo thành giao diện web có cá tính, rõ mục đích và dùng được. Trọng tâm là **lý do đằng sau quyết định thiết kế**: người dùng đang làm gì, nội dung nào cần nổi bật, hình ảnh và chữ tạo cảm giác gì, từng chi tiết nhỏ có nhất quán hay không.

Bộ skill này được tổng hợp từ việc xem 33 ảnh giao diện, mockup và slide do người dùng cung cấp. [Atlas phân tích từng ảnh](references/visual-atlas.md) ghi rõ điểm quan sát được, nguyên tắc có thể chuyển dụng và điều cần kiểm tra. Ảnh gốc không được đưa lên GitHub vì quyền sử dụng ảnh chưa được xác minh.

## Skill giải quyết việc gì?

Một lời nhắc kiểu “làm landing page hiện đại, đẹp, có hồn” thường chưa đủ để ra giao diện tốt. Skill buộc người thiết kế/AI kết nối:

1. **Con người và công việc:** Ai vào trang, họ cần hiểu hoặc làm gì?
2. **Ý tưởng thị giác:** Một góc nhìn chủ đạo có liên hệ thật với sản phẩm.
3. **Hệ thống:** Chữ, màu, lưới, ảnh, khoảng trắng, chi tiết và chuyển động cùng nói một ngôn ngữ.
4. **Trải nghiệm:** Điều hướng, nội dung, trạng thái, mobile, bàn phím và khả năng đọc vẫn rõ ràng.
5. **Kiểm chứng:** Chỉ nhận xét phần đã quan sát/kiểm tra; không coi screenshot là bằng chứng website hoạt động.

Skill phù hợp với trang web mới, redesign hoặc frontend dựa trên ảnh tham khảo. Nó không nhằm xử lý backend, sửa lỗi chức năng không liên quan đến giao diện, hay tự động sinh cùng một phong cách cho mọi sản phẩm.

## Cấu trúc

```text
web-ui-art-direction/
├── SKILL.md                     # Khi nào dùng và quy trình chính
├── README.md                    # Hướng dẫn và phạm vi
├── LICENSE                      # MIT cho nội dung gốc của repo
└── references/
    ├── design-rules.md          # Quy tắc chi tiết và checklist chống giao diện rập khuôn
    ├── visual-atlas.md          # Phân tích 33 ảnh tham khảo
    └── worked-example.md        # Ví dụ từ brief du lịch tới hướng thiết kế
```

## Cài vào Codex trên Windows

Trong PowerShell, clone repo vào thư mục skill cá nhân:

```powershell
git clone https://github.com/AnhVuu215/web-ui-art-direction.git "$env:USERPROFILE\.codex\skills\web-ui-art-direction"
```

Nếu đã có thư mục cùng tên, hãy kiểm tra và cập nhật repo cũ thay vì clone đè. Khởi động lại Codex hoặc mở chat mới để skill được nhận diện. Cũng có thể đặt thư mục skill trong `.agents/skills/` của riêng một dự án nếu bạn chỉ muốn dùng tại dự án đó.

## Cách dùng

Codex có thể tự chọn skill khi yêu cầu phù hợp, hoặc gọi tường minh:

```text
$web-ui-art-direction Hãy thiết kế lại trang chủ dịch vụ du lịch của tôi.
Đối tượng là người đi theo nhóm nhỏ, ưu tiên trải nghiệm địa phương.
Đọc frontend hiện tại, giữ chức năng và nội dung thật, đề xuất art direction
rồi triển khai responsive. Kiểm tra trạng thái loading, empty, error và keyboard.
```

Khi có ảnh tham khảo:

```text
$web-ui-art-direction Phân tích các ảnh tôi gửi: nhận diện bố cục, font,
màu, chất liệu hình ảnh, nhịp section, micro-detail và phần nào không phù hợp
cho sản phẩm của tôi. Sau đó chọn một hướng riêng, không sao chép nguyên mẫu.
```

Khi chỉ cần thiết kế, hãy nói rõ “chỉ phân tích/đề xuất, chưa viết code”. Khi cần code, hãy cung cấp repo hoặc thư mục dự án cùng các giới hạn về nội dung, thương hiệu và kỹ thuật.

## Quy trình đầu ra mong đợi

1. Tóm tắt người dùng mục tiêu, việc chính cần làm và các ràng buộc đã biết.
2. Với brief mở, nêu hai hướng có khác biệt thực chất; chọn hướng phù hợp với lý do cụ thể. Với brief đã cố định phong cách, đi thẳng theo ràng buộc đó.
3. Viết câu định hướng ngắn: đối tượng + cảm giác + chất liệu/ẩn dụ + công dụng.
4. Chốt hệ chữ, lưới, màu chức năng, loại hình ảnh, chi tiết lặp lại và nhịp section.
5. Thiết kế/triển khai từng section theo hành trình nội dung; giữ hành động chính rõ ràng.
6. Kiểm tra desktop, mobile, bàn phím, zoom chữ, trạng thái và hiệu năng ảnh; báo đúng phần đã xác minh.

Xem [ví dụ hoàn chỉnh](references/worked-example.md) và [bộ quy tắc chi tiết](references/design-rules.md).

## Những gì rút ra từ 33 ảnh

- Không có một công thức “đẹp” duy nhất: editorial trắng, ảnh thật, 3D, dark cinematic và brutalist đều có thể hiệu quả trong đúng bối cảnh.
- Những mẫu mạnh nhất có một ý tưởng xuyên suốt: chi tiết như bo góc, đường kẻ, ánh sáng, cách crop ảnh và kiểu CTA đều phục vụ ý tưởng đó.
- Nhiều ảnh là concept trình bày đẹp nhưng có chữ quá nhỏ, tương phản yếu, số liệu chưa rõ nguồn hoặc tương tác chỉ được gợi ý. Skill giữ kỹ thuật art direction nhưng yêu cầu xây lại trải nghiệm sử dụng cho web thật.
- “Có hồn” đến từ nội dung, bối cảnh, sự chọn lọc và tính nhất quán; thêm hiệu ứng không tự tạo được điều đó.

## Giới hạn và bản quyền

33 ảnh tham khảo không nằm trong repo và không được cấp phép lại theo MIT. Atlas là ghi chép phân tích mới, dùng tên tệp để truy vết trong bộ sưu tập gốc. Việc có ảnh trong bộ sưu tập không chứng minh tác giả, nguồn hay quyền tái sử dụng.

Skill không bảo đảm tự động đạt WCAG hoặc hiệu năng tốt: phải kiểm tra trang triển khai thực tế. Các ngưỡng truy cập nêu trong [design-rules.md](references/design-rules.md) được đối chiếu với tài liệu [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/); hướng dẫn về tránh layout shift tham chiếu [web.dev](https://web.dev/articles/optimize-cls).

## Đóng góp

Khi bổ sung quy tắc, hãy đưa ra **bối cảnh áp dụng**, **tác dụng với người dùng**, và **trường hợp không nên áp dụng**. Ưu tiên một quy tắc có căn cứ hơn một danh sách dài các xu hướng. Không thêm ảnh, logo, testimonial hoặc số liệu của bên thứ ba nếu chưa có quyền và nguồn rõ ràng.

## Giấy phép

Nội dung gốc trong repo phát hành theo [MIT License](LICENSE). Giấy phép này không bao gồm 33 ảnh tham khảo gốc.
