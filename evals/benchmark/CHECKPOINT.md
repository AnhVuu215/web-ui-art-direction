# Checkpoint — 2026-10-08

Đã dừng theo yêu cầu của chủ skill: commit hiện trạng và tiếp tục ngày mai. Không chạy thêm lượt sinh giao diện hoặc tự tạo phiếu chấm.

## Trạng thái đã lưu

- Kế hoạch đã chốt: 6 brief × 3 cặp × 2 điều kiện = 36 lượt dự kiến, không phải 36 lượt đã hoàn thành.
- `DARK-03`: hai bản đầu tiên hoàn thành; đã render desktop/mobile/error và kiểm tra retry bằng browser. Chưa hoàn tất audit toàn bộ hành trình.
- `EVENT-02`: hai bản đầu tiên hoàn thành; báo cáo kiểm tra của từng agent đã lưu. Chưa render bằng harness chung.
- `INVENTORY-03-B`: agent bị ngắt, chỉ có HTML; chưa có report. Giữ nguyên bản dở, không tính là hoàn thành hoặc thay thế âm thầm.
- Những lượt còn lại chưa được chạy. Skill thử nghiệm vẫn ghim ở commit `a578204ff16983b18c2cd0dc41e6829357cfee2c`.
- Trang chấm hiện chứa hai cặp pilot cũ và cặp mới `DARK-03`. Hai cặp pilot chỉ dùng khám phá. Chưa nhận phiếu chấm thật từ chủ skill.
- Không có cặp nào được đánh dấu đủ điều kiện kết luận. Không có bằng chứng để khẳng định skill luôn tạo UI đẹp hơn.

## Thứ tự tiếp tục

1. Đọc [protocol](protocol.md), [ledger](ledger.json), [plan](plan.json) và các prompt đã chốt; không thay đổi brief giữa vòng.
2. Xử lý lượt bị ngắt bằng ghi nhận rõ lần tiếp tục; bảo toàn HTML đầu tiên trước khi cho agent tiếp tục. Không ghi nó là một lần chạy mới độc lập.
3. Render `EVENT-02`, kiểm tra hành trình thực cho cả hai điều kiện, tiếp tục các lượt chưa chạy trong context mới nếu dịch vụ khả dụng.
4. Hoàn thiện cổng audit trước khi đặt `eligible=true`: xác minh hash prompt/source, skill pin, context độc lập và cơ hội kiểm tra chung. Analyzer hiện chưa tự xác minh đầy đủ các điều kiện này.
5. Sửa cache các góc nhìn đã xem để gắn với `renderFingerprint`; hiện phiếu đã gắn fingerprint nhưng cache `seen` chưa gắn. Sửa cảnh báo trong `review/pairs.json` đang mô tả toàn bộ là pilot cũ. Rerun kiểm tra review sau các thay đổi này.
6. Xây lại bộ ảnh A/B khi có thêm cặp; chờ phiếu chấm thật. Không dùng phiếu kiểm tra tự động làm bằng chứng gu người dùng.
7. Cập nhật tài liệu sử dụng, kết quả thực tế và chạy lại các kiểm tra trước khi công bố kết luận. Bộ skill đã cài chưa được đồng bộ checkpoint này; các quy tắc skill chưa thay đổi.

## Khởi động trang chấm trên Windows

Từ thư mục repository, dùng Node có sẵn trên máy:

```powershell
& 'C:\Users\Tuan Anh\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' scripts/local-review-server.cjs 8046
```

Sau đó mở `http://127.0.0.1:8046/evals/benchmark/review/index.html`. Server chỉ phục vụ máy này, không phải website được xuất bản. Phiếu lưu trong trình duyệt; cần xuất JSON để phân tích. Địa chỉ chỉ dùng được khi server đang chạy.
