# Đổi sách cuối tuần — báo cáo bản mẫu

## Phạm vi

Đã tạo `index.html` độc lập, với CSS, JavaScript và minh họa SVG trong tệp. Không có backend hoặc dịch vụ ngoài trang. Ba tệp font địa phương dùng đúng đường dẫn `../../../../../assets/fonts/BeVietnamPro-{Regular,Medium,Bold}.ttf`.

Giữ nguyên tên sự kiện, câu tiêu đề, ngày 18/10/2026, giờ 09:00–12:00, địa điểm “Không gian mẫu, Quận 3”, miễn phí và yêu cầu mang 1–3 cuốn sách trong tình trạng đọc được. Lịch có 09:00 check-in, 09:30 đổi sách và 11:30 chia sẻ khép lại. Không thêm nhà tài trợ, người tổ chức, người tham dự, lời chứng thực, số liệu hoặc giới hạn sách giáo khoa.

Nhãn bản mẫu và sự kiện hư cấu xuất hiện ngay đầu trang, tại biểu mẫu và cuối trang. Mọi đăng ký được mô phỏng tại chỗ. Không gửi email hoặc dữ liệu; không dùng lưu trữ trình duyệt. Tải lại xóa trạng thái đăng ký mẫu.

## Skill và ảnh thực sự đã mở

Áp dụng `D:/UI/web-ui-art-direction/SKILL.md`, cùng tài nguyên liên quan `references/owner-style.md`, `references/design-rules.md`, `references/component-craft.md`.

Đã mở trực tiếp bằng công cụ xem ảnh hai JPG gốc:

- `16233b3d54a543caec9fdeede60292fb.jpg`
- `21ae9f90f826cbd33a35d0a9cd531089.jpg`

Không dùng pixel, logo, câu chữ hoặc số liệu của ảnh trong HTML. Không mở JPG khác, atlas, phân tích thử nghiệm khác, kết quả đánh giá hoặc đầu ra lượt trước.

## Quyết định thiết kế

Đối tượng phục vụ là người muốn tìm hiểu cách đổi sách rồi thử đăng ký. Vật thể chủ đạo là sách: minh họa tự vẽ hai sách đứng và một sách mở, không giả làm ảnh sách thật.

Đã cân nhắc hai cấu trúc khác nhau trước khi triển khai: (1) vật thể chiếm sân khấu lớn, tiêu đề và thông tin đặt phía dưới; (2) chữ dẫn ở cột trái, sách minh họa ở cột phải, dải thông tin chính liền ngay dưới. Chọn cấu trúc thứ hai để tên ý tưởng, hành động đăng ký và các điều kiện tham gia được đọc trước khi trang chuyển sang lịch trình.

Hai cơ chế chuyển từ ảnh gốc vào trang:

- Từ `16233b3d`: một vật thể liên quan trực tiếp sản phẩm có kích thước lớn. Đặt sách ở bên phải hero, cạnh câu tiêu đề để người đọc nhận ra ngay chủ đề trao đổi sách; không sao chép ghế, hình góc hoặc bố cục ảnh.
- Từ `21ae9f90`: chữ lớn trên nền sáng và nhịp chuyển sang chương tối. Dùng câu tiêu đề tại hero, rồi nền xanh mực cho lịch trình để phân biệt thông tin thời gian với phần hướng dẫn và biểu mẫu sáng; không dùng hiệu ứng ánh sáng hoặc câu chữ của ảnh.

Hệ thị giác: Be Vietnam Pro với ba trọng lượng; nền giấy ấm, chữ xanh mực, đỏ đất cho câu nhấn và hành động chính, vàng giấy cho giờ trong lịch trình. Đường mảnh và số thứ tự liên hệ với gáy sách và thứ tự trao đổi. Không dùng ảnh chụp, hiệu ứng phát sáng hoặc chuyển động trang trí. Trên màn nhỏ, sách nằm dưới câu tiêu đề; hướng dẫn, lịch và biểu mẫu trở thành một cột.

## Hành vi

- Điều hướng bằng neo thật đến hướng dẫn, lịch trình và đăng ký; có liên kết bỏ qua đến nội dung chính.
- FAQ dùng `details` / `summary` gốc.
- Biểu mẫu có nhãn gốc cho họ tên, email, số sách 1–3 và ghi chú hỗ trợ tùy chọn tối đa 2.000 ký tự, với bộ đếm.
- Nút chính có `data-testid="primary"`, vùng phản hồi sống có `data-testid="feedback"`, form có `data-testid="work-form"`.
- Lần gửi hợp lệ đầu mô phỏng lỗi và giữ nguyên cả bốn trường. Nút đổi thành “Thử lại đăng ký mẫu”; thử lại xác nhận tại chỗ. Phản hồi là thông báo thường trực và nhận focus sau kết quả.
- Có trạng thái đang xử lý, khóa gửi trùng, xác nhận thành công và thông báo thay đổi chưa xác nhận sau khi sửa.
- `?state=error` mở lỗi tái hiện được, điền Nguyễn An, `an@example.com`, 2 cuốn; thử lại thành công.
- Có focus bàn phím nhìn thấy và quy tắc `prefers-reduced-motion`.

## Kiểm tra thực sự đã chạy

Chạy Node.js qua PowerShell, không tạo tệp kiểm tra phụ:

1. Biên dịch phần JavaScript với `vm.Script`: đạt.
2. Kiểm tra tĩnh các dữ kiện chính và ba test ID; không có URL dịch vụ ngoài hoặc API mạng/lưu trữ; cả ba đường dẫn font tồn tại: đạt.
3. Kiểm tra ID duy nhất, đích liên kết neo tồn tại, và lồng thẻ HTML/SVG cân bằng: đạt.
4. Chạy JavaScript với DOM mô phỏng: ghi chú dài và bộ đếm; khóa gửi trùng khi xử lý; thất bại đầu giữ nguyên tên/email/số sách/ghi chú; thử lại thành công; sửa sau thành công hiện thông báo chờ xác nhận; query lỗi điền sẵn và thử lại; từ chối tên chỉ có khoảng trắng, phục hồi sau nhập: đạt.
5. Tính tỷ lệ tương phản cho sáu cặp chữ thường: chữ/nền giấy 10,74:1; chữ phụ/nền giấy 5,66:1; nút chính 5,97:1; chữ phụ/nền tối 8,12:1; lỗi 7,08:1; thành công 7,01:1. Tất cả vượt 4,5:1.

Chưa render, chụp ảnh hoặc kiểm tra trực tiếp bằng trình duyệt ở lượt triển khai này. Các breakpoint cho 1440/390, focus, native validation và reduced motion đã triển khai nhưng chưa được chứng minh bằng trình duyệt thực. Lượt gốc sẽ áp dụng cùng cơ hội kiểm tra trình duyệt cho hai điều kiện; không chỉnh sửa sau phản hồi đánh giá.
