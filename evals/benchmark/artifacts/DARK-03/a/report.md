# Khung — prototype hàng đợi sản xuất

## Phạm vi và hướng thiết kế

Prototype frontend tiếng Việt, HTML/CSS/JavaScript nội tuyến. Giữ canvas `#14171c`, surface `#20262f`, chữ `#eef2f6` và hành động chính `#ffbd5a` trên danh sách, chi tiết và biểu mẫu. Lỗi dùng hồng đỏ; thành công dùng xanh lá, đều có thông điệp chữ.

Áp dụng `D:/UI/web-ui-art-direction/SKILL.md` cùng hai tài nguyên liên quan: `references/product-ui.md` và `references/component-craft.md`.

Hướng thiết kế: bàn làm việc tối cho người điều phối dựng video, nhấn vào tên công việc và thao tác phân công. Chữ lớn ở tiêu đề, đường viền có cấu trúc, khoảng trống vừa đủ để đọc tên dài. Biểu tượng khung nét đơn và bảng metadata thể hiện công việc như một vật phẩm sản xuất. Không dùng ảnh, timeline, analytics hay nội dung quảng cáo.

Hai JPG gốc thực sự đã mở bằng công cụ xem ảnh:

- `16233b3d54a543caec9fdeede60292fb.jpg`: tham khảo chữ nổi bật, chia vùng bằng đường viền và khoảng trắng. Áp dụng nhẹ vào tiêu đề danh sách và thẻ thông tin công việc.
- `50223f7ca6df60f8baf407b29cb0d033.jpg`: tham khảo shell tối, tương phản chữ và phân cấp nội dung. Giữ hệ màu Khung theo brief thay vì chuyển sang nền sáng của reference.

Không sao chép pixels, logo, copy hay bố cục của ảnh. Không mở các JPG còn lại.

## Luồng và trạng thái

- Lọc trạng thái bằng select có label; mở tên công việc từ bảng.
- K-02 mở với người duyệt Minh Khang; chọn Thu Hà rồi lưu.
- Lần lưu có thay đổi đầu tiên thất bại có chủ ý, giữ nguyên lựa chọn, feedback bền vững và nút thử lại.
- Thử lại cập nhật dữ liệu trong bộ nhớ trang, hiện thành công. Trở về giữ bộ lọc và tên người duyệt mới.
- Quay lại khi chưa lưu có lựa chọn tiếp tục chỉnh sửa hoặc bỏ thay đổi.
- `?state=error` mở K-02, lọc Chờ duyệt, Thu Hà được chọn và thông báo thất bại; thử lại thành công.
- Hiển thị rõ dữ liệu và thao tác mô phỏng; không có backend hay gọi dịch vụ ngoài. Tải lại đặt dữ liệu về ban đầu.
- Form và feedback có các `data-testid` yêu cầu; focus bàn phím rõ, form sử dụng select và button native. Trạng thái saving khóa thao tác lặp, thành công/lỗi chuyển focus tới feedback.
- CSS responsive biến bảng thành danh sách ở viewport hẹp và xếp chi tiết theo một cột. Có quy tắc reduced motion; không dùng animation trang trí.

## Kiểm tra thực sự đã chạy

Đã chạy kiểm tra bằng Node, không tạo thêm file:

- Parse JavaScript nội tuyến bằng `vm.Script`: đạt.
- Xác nhận cả ba đường dẫn font trỏ tới file tồn tại: đạt.
- Xác nhận đủ ba `data-testid` và thư mục đầu ra chỉ có `index.html`, `report.md`: đạt.
- Quét nguồn không có URL HTTP, `fetch`, XMLHttpRequest hay WebSocket: đạt.
- Thực thi script trong DOM giả lập: danh sách ba công việc → lọc Chờ duyệt → mở K-02 → chọn Thu Hà → lỗi lần đầu giữ lựa chọn → thử lại thành công → quay về cùng bộ lọc, danh sách có Thu Hà: đạt.
- DOM giả lập với `?state=error`: K-02 mở, Thu Hà được chọn, thông báo lỗi hiện và retry thành công: đạt.
- Tính tương phản từ token: chữ/surface 13.53:1; chữ phụ/surface 7.27:1; chữ/nút chính 10.27:1; chữ lỗi/nền lỗi 7.76:1; chữ thành công/nền thành công 8.37:1. Đây là kiểm tra cặp màu nguồn, không phải audit toàn bộ trang.

Chưa render hoặc kiểm thử trình duyệt trong lượt tạo đầu tiên. Root sẽ áp dụng cùng cơ hội trình duyệt cho hai điều kiện. DOM giả lập kiểm tra logic trạng thái, không chứng minh giao diện hiển thị, tương tác native select, keyboard runtime hoặc visual QA ở 1440/390. Responsive và reduced motion đã có trong CSS nhưng cần xác minh trên trình duyệt.
