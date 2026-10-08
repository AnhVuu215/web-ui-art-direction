# Khung — báo cáo prototype

## Phạm vi

- Điều kiện Control: không đọc hoặc áp dụng skill art-direction, tài liệu phân tích, kết quả thử nghiệm khác hay điểm đánh giá.
- Frontend tiếng Việt độc lập trong `index.html`, CSS/JavaScript nội tuyến, không backend, thư viện hoặc dịch vụ ngoài.
- Ba công việc mẫu giữ nguyên mã, tên, trạng thái và người duyệt theo brief. Không thêm khách hàng, chỉ số, lời chứng thực hoặc dữ kiện sản xuất.
- Mọi hành động lưu được ghi rõ là mô phỏng. Dữ liệu chỉ ở bộ nhớ của trang; tải lại sẽ khôi phục dữ liệu ban đầu.

## JPG gốc đã mở

Đã mở trực tiếp cả bảy ảnh bằng công cụ xem ảnh:

1. `16233b3d54a543caec9fdeede60292fb.jpg`
2. `21ae9f90f826cbd33a35d0a9cd531089.jpg`
3. `50223f7ca6df60f8baf407b29cb0d033.jpg`
4. `5fbabad0075a50b928c38ca16e327043.jpg`
5. `85b954e2c242a7fc82980b05d4852d5e.jpg`
6. `be8fa1a3bd8dfb307c17dc1ff4b67531.jpg`
7. `ed8d239bca32ace72f715f222ab6d89e.jpg`

Chỉ dùng ảnh để quan sát cách phân cấp chữ, khoảng trống và điểm nhấn màu ấm. Không nhúng ảnh, sao chép logo, nội dung chữ, hình người hay số liệu từ ảnh.

## Quyết định thiết kế

- Giữ canvas `#14171c`, surface `#20262f`, chữ `#eef2f6` ở danh sách, chi tiết và chỉnh sửa. Amber `#ffbd5a` nhấn thao tác lưu và trạng thái chờ duyệt; lỗi đỏ và thành công xanh có nội dung chữ riêng.
- Đặt bộ lọc và danh sách công việc ngay sau tiêu đề. Không thêm hero quảng bá, thumbnail, timeline hoặc analytics.
- Nhận diện công việc bằng mã lớn, tên, trạng thái và người duyệt. Chi tiết gom metadata phía trên biểu mẫu để tránh chỉnh nhầm công việc.
- Desktop dùng thanh bên hẹp và danh sách dạng hàng. CSS mobile chuyển thành một cột, nút mở công việc và nút biểu mẫu rộng để thao tác dễ hơn.
- Dùng font BeVietnamPro nội bộ đủ Regular, Medium, Bold với đúng đường dẫn được yêu cầu.
- Label HTML gắn với select, focus bàn phím rõ, link bỏ qua tới nội dung, feedback live, trạng thái có chữ. Chuyển màn hình đưa focus tới tiêu đề hoặc bộ lọc. Có quy tắc reduced motion; không tạo animation.

## Luồng thực hiện

1. Chọn trạng thái “Chờ duyệt”, mở K-02.
2. Đổi người duyệt từ Minh Khang sang Thu Hà.
3. Lần lưu đầu tiên báo lỗi mô phỏng; lựa chọn Thu Hà vẫn giữ nguyên, người duyệt đã lưu vẫn là Minh Khang.
4. “Thử lưu lại” cập nhật Thu Hà và báo thành công mô phỏng.
5. Quay lại danh sách vẫn giữ bộ lọc “Chờ duyệt” và hiển thị Thu Hà.

`?state=error` mở trực tiếp K-02 với Thu Hà được chọn, bộ lọc Chờ duyệt và lỗi đã xuất hiện. Nhấn thử lưu lại sẽ thành công. Các test ID `primary`, `feedback`, `work-form` có trong HTML.

## Kiểm tra đã chạy

Chạy Node với harness DOM trong bộ nhớ, không mở trình duyệt:

- Parse JavaScript bằng `vm.Script`: đạt.
- Chạy luồng đầy đủ từ ba công việc, lọc trạng thái, mở K-02, đổi người duyệt, lưu lỗi, giữ lựa chọn, retry thành công, quay lại đúng bộ lọc và tên mới: đạt.
- Xác nhận lần lưu lỗi chưa sửa dữ liệu công việc: đạt.
- Khởi tạo `?state=error`, xác nhận K-02/Thu Hà/lỗi và retry thành công: đạt.
- Đối chiếu cả ba đường dẫn font chính xác và xác nhận file font tồn tại: đạt.
- Kiểm tra test ID, không có URL từ xa hay API gửi request: đạt.
- Kiểm tra có media query mobile và reduced motion: đạt về cấu trúc.

Chưa chạy visual QA tại 1440/390, thao tác bàn phím thực tế, kiểm tra accessibility tree hoặc render trong trình duyệt. Các khai báo responsive chưa phải bằng chứng hiển thị thực tế. Không render hoặc sửa theo phản hồi evaluator trong lần thực hiện này.
