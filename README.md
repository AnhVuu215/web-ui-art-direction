# Web UI Art Direction

Skill cho Codex giúp biến ý tưởng hoặc bộ ảnh tham khảo thành giao diện web có cá tính, rõ mục đích và dùng được — từ trang giới thiệu đến **hệ thống sau đăng nhập**. Trọng tâm là **lý do đằng sau quyết định thiết kế**: người dùng đang làm gì, dữ liệu và hành động nào cần nổi bật, hình ảnh và chữ tạo cảm giác gì, từng chi tiết nhỏ có nhất quán hay không.

Bộ skill khởi đầu từ 33 ảnh giao diện, mockup và slide do người dùng cung cấp. [Atlas phân tích từng ảnh](references/visual-atlas.md) ghi rõ điểm quan sát được, nguyên tắc có thể chuyển dụng và điều cần kiểm tra. Phiên bản hiện tại bổ sung [quy tắc cho product UI](references/product-ui.md), dựa trên việc đọc chọn lọc các trang công khai của nhiều design system, nghiên cứu UX, thư viện flow và tài liệu sản phẩm. [Ghi chú nguồn](references/source-notes.md) nói rõ đã đọc gì và giới hạn của từng loại bằng chứng. Ảnh gốc không được đưa lên GitHub vì quyền sử dụng ảnh chưa được xác minh.

## Gu thẩm mỹ mặc định của chủ skill

Từ 33 ảnh, chủ skill chọn 7 ảnh làm nhóm tham chiếu ưu tiên. [Owner style](references/owner-style.md) phân tích mẫu số chung: **chữ sans lớn và tự tin; bố cục editorial; một người, vật thể hoặc giao diện sản phẩm làm tâm điểm; ánh sáng cam/đỏ giàu chiều sâu trên nền tối; khoảng trắng để đổi nhịp; chi tiết điều khiển gọn và chính xác**. Khi brief chưa chốt phong cách, Codex nên bắt đầu từ hướng này thay vì tự chọn một giao diện SaaS xanh pastel chung chung.

Đây là **gu ưu tiên, không phải khuôn mẫu**. Brand và yêu cầu cụ thể của dự án được ưu tiên trước. Trang sau đăng nhập vẫn phải dễ đọc, dễ thao tác; không phủ gradient cam lên bảng, form và trạng thái chỉ để giống ảnh tham khảo. 7 ảnh gốc vẫn chỉ được phân tích bằng chữ, không được đưa vào repository.

### 7 ảnh được ưu tiên cho điều gì?

| Ảnh trong bộ sưu tập | Chi tiết đáng học | Cách chuyển thành quy tắc |
| --- | --- | --- |
| `5fbabad0` · ứng dụng nghe nhạc | Bàn tay cầm sản phẩm trên trường sáng đỏ cam; chuyển sang chương nền đen. | Cho thấy sản phẩm ở một khoảnh khắc sử dụng thật, rồi đổi nhịp để giải thích. |
| `21ae9f90` · agency | Chữ cực lớn trên trắng, một vệt sáng cam, chương kể chuyện trên đen. | Để chữ dẫn, dùng một biến cố thị giác có chủ đích thay vì nhiều hiệu ứng nhỏ. |
| `85b954e2` · media agency | Mở đầu nóng, các phần giải thích tối và chặt, module chứng cứ. | Giữ accent nhất quán, để thông tin thực tạo khác biệt giữa các phần. |
| `16233b3d` · nội thất | Ghế điêu khắc đè lên chữ; bo góc lõm, đường mảnh, vật liệu ấm. | Lấy vật thể thật của sản phẩm làm nguồn cho hình, màu và chi tiết. |
| `50223f7c` · motion studio | Dấu hiệu thị giác lớn trong ánh sáng cam đen; chương sau thở trên nền kem. | Một tâm điểm mạnh cần được tiếp nối bằng khoảng nghỉ. |
| `be8fa1a3` · branding agency | Chân dung có ánh sáng ấm, panel bất đối xứng, bảng màu gọn. | Sự hiện diện của con người cần phù hợp ngữ cảnh, không dùng ảnh stock vô nghĩa. |
| `ed8d239b` · bộ slide | Chữ lớn, nền cam, xen panel tối/sáng, dấu `+` lặp lại. | Một dấu hiệu nhỏ lặp lại có thể nối nhiều bố cục khác nhau. |

Đây là **quan sát trên ảnh tĩnh**, không phải kết luận rằng các website mẫu hoạt động tốt. Các chữ siêu nhỏ, số liệu, chân dung, logo và bố cục nguyên mẫu không được bê sang sản phẩm mới. Tài liệu [owner-style.md](references/owner-style.md) phân tích từng ảnh sâu hơn và chỉ rõ phần nào không nên kế thừa.

## Skill giải quyết việc gì?

Một lời nhắc kiểu “làm landing page hiện đại, đẹp, có hồn” thường chưa đủ để ra giao diện tốt. Skill buộc người thiết kế/AI kết nối:

1. **Con người và công việc:** Ai vào trang, vai trò và quyền của họ là gì, họ cần hiểu hoặc làm gì?
2. **Ý tưởng thị giác:** Một góc nhìn chủ đạo có liên hệ thật với sản phẩm.
3. **Hệ thống:** Chữ, màu, lưới, ảnh, khoảng trắng, chi tiết và chuyển động cùng nói một ngôn ngữ.
4. **Trải nghiệm:** Điều hướng, tìm kiếm, bảng, form, trạng thái, mobile, bàn phím và khả năng đọc vẫn rõ ràng.
5. **Kiểm chứng:** Chỉ nhận xét phần đã quan sát/kiểm tra; không coi screenshot là bằng chứng website hoạt động.

Skill phù hợp với trang web mới, redesign, dashboard, admin, workspace, form nhiều bước hoặc frontend dựa trên ảnh tham khảo. Nó không nhằm xử lý backend, sửa lỗi chức năng không liên quan đến giao diện, hay tự động sinh cùng một phong cách cho mọi sản phẩm.

## Cấu trúc

```text
web-ui-art-direction/
├── SKILL.md                     # Khi nào dùng và quy trình chính
├── README.md                    # Hướng dẫn và phạm vi
├── LICENSE                      # MIT cho nội dung gốc của repo
├── evals/
│   └── prompts.csv              # 10 tình huống kích hoạt/không kích hoạt
├── scripts/
│   └── check-package.ps1        # Kiểm tra cấu trúc, link và prompt bằng PowerShell
└── references/
    ├── design-rules.md          # Quy tắc thị giác và checklist chống giao diện rập khuôn
    ├── owner-style.md           # Gu mặc định rút từ 7 ảnh chủ skill chọn
    ├── owner-components.md      # Áp gu đó vào header, nav, button, card, form, table, state
    ├── owner-product-ui.md      # Áp gu đó xuyên suốt hệ thống sau đăng nhập
    ├── evaluation.md            # Bộ thử kích hoạt, đầu ra thị giác và UX
    ├── component-craft.md       # Header, nav, button, input, tab, overlay và micro-detail
    ├── product-ui.md            # Quy tắc cho hệ thống sau đăng nhập
    ├── source-notes.md          # Nguồn công khai, kết luận và giới hạn bằng chứng
    ├── visual-atlas.md          # Phân tích 33 ảnh tham khảo
    ├── worked-example.md        # Ví dụ từ brief du lịch tới hướng thiết kế
    └── worked-app-example.md    # Ví dụ một luồng công việc sau đăng nhập
```

## Cài vào Codex trên Windows

Trong PowerShell, clone repo vào thư mục skill cá nhân:

```powershell
git clone https://github.com/AnhVuu215/web-ui-art-direction.git "$env:USERPROFILE\.codex\skills\web-ui-art-direction"
```

Nếu đã có thư mục cùng tên, hãy kiểm tra và cập nhật repo cũ thay vì clone đè. Khởi động lại Codex hoặc mở chat mới để skill được nhận diện. Cũng có thể đặt thư mục skill trong `.agents/skills/` của riêng một dự án nếu bạn chỉ muốn dùng tại dự án đó.

Kiểm tra bản cài cá nhân có `SKILL.md`:

```powershell
Test-Path "$env:USERPROFILE\.codex\skills\web-ui-art-direction\SKILL.md"
```

Kết quả `True` chỉ xác nhận file tồn tại; để biết skill được chọn đúng lúc, thử các prompt kích hoạt và không kích hoạt trong [bộ đánh giá](references/evaluation.md).

Nếu đã clone bản cũ và không có chỉnh sửa cục bộ trong thư mục skill, cập nhật bằng:

```powershell
git -C "$env:USERPROFILE\.codex\skills\web-ui-art-direction" pull --ff-only
```

## Cách dùng

Codex có thể tự chọn skill khi yêu cầu phù hợp, hoặc gọi tường minh:

```text
$web-ui-art-direction Hãy thiết kế lại trang chủ dịch vụ du lịch của tôi.
Đối tượng là người đi theo nhóm nhỏ, ưu tiên trải nghiệm địa phương.
Đọc frontend hiện tại, giữ chức năng và nội dung thật, đề xuất art direction
rồi triển khai responsive. Kiểm tra trạng thái loading, empty, error và keyboard.
```

Nếu muốn Codex bám rõ gu cá nhân đã chọn, có thể dùng:

```text
$web-ui-art-direction Thiết kế website này theo gu mặc định trong
references/owner-style.md. Chọn một hình ảnh hoặc cảnh gắn thật với sản phẩm,
dùng chữ lớn và tương phản có chủ ý; giữ màn hình thao tác dễ đọc. Đừng sao chép
bố cục hay tài sản từ 7 ảnh tham khảo. Render desktop và mobile để tự đánh giá.
```

Khi có ảnh tham khảo:

```text
$web-ui-art-direction Phân tích các ảnh tôi gửi: nhận diện bố cục, font,
màu, chất liệu hình ảnh, nhịp section, micro-detail và phần nào không phù hợp
cho sản phẩm của tôi. Sau đó chọn một hướng riêng, không sao chép nguyên mẫu.
```

Khi làm hệ thống sau đăng nhập:

```text
$web-ui-art-direction Thiết kế luồng quản lý đơn hàng cho nhân viên và quản lý.
Đọc frontend, dữ liệu mẫu và quyền hiện có. Xác định luồng tìm đơn → xem chi tiết
→ cập nhật trạng thái → nhận phản hồi. Thiết kế list/table, form, phân quyền,
trạng thái trống/loading/lỗi/thành công và mobile. Giữ nhận diện thương hiệu,
giải thích các quyết định và chỉ triển khai những chức năng có trong phạm vi.
```

Khi chỉ cần thiết kế, hãy nói rõ “chỉ phân tích/đề xuất, chưa viết code”. Khi cần code, hãy cung cấp repo hoặc thư mục dự án cùng các giới hạn về nội dung, thương hiệu và kỹ thuật.

## Quy trình đầu ra mong đợi

1. Tóm tắt người dùng mục tiêu, việc chính cần làm và các ràng buộc đã biết.
2. Với brief mở, nêu hai hướng có khác biệt thực chất; chọn hướng phù hợp với lý do cụ thể. Với brief đã cố định phong cách, đi thẳng theo ràng buộc đó.
3. Viết câu định hướng ngắn: đối tượng + cảm giác + chất liệu/ẩn dụ + công dụng.
4. Chốt hệ chữ, lưới, màu chức năng, hình ảnh, chi tiết lặp lại; với app, chốt thêm cấu trúc điều hướng và ngôn ngữ trạng thái.
5. Thiết kế/triển khai theo hành trình nội dung hoặc tác vụ xuyên nhiều màn hình; giữ hành động chính rõ ràng.
6. Kiểm tra desktop, mobile, bàn phím, zoom chữ, dữ liệu ít/nhiều, trạng thái và hành vi thực tế; báo đúng phần đã xác minh.

Xem [ví dụ homepage](references/worked-example.md), [ví dụ app](references/worked-app-example.md), [quy tắc thị giác](references/design-rules.md), [quy tắc product UI](references/product-ui.md) và [quy tắc component](references/component-craft.md).

## Cách đọc bộ tài liệu theo nhu cầu

| Bạn đang làm gì? | Đọc tài liệu nào? | Kết quả cần chốt |
| --- | --- | --- |
| Muốn hiểu gu cá nhân | [Owner style](references/owner-style.md) + [atlas 33 ảnh](references/visual-atlas.md) | Chủ thể, chữ, màu, ánh sáng, nhịp trang và giới hạn của ảnh tham khảo. |
| Thiết kế homepage/portfolio | [Owner style](references/owner-style.md) + [design rules](references/design-rules.md) | Một cảnh mở đầu gắn với sản phẩm, phần giải thích, chứng cứ, CTA, responsive. |
| Thiết kế header, nút, card, form | [Owner components](references/owner-components.md) + [component craft](references/component-craft.md) | Phân cấp hành động, cấu tạo, trạng thái, bàn phím, mobile và độ nhất quán. |
| Thiết kế sản phẩm sau đăng nhập | [Owner product UI](references/owner-product-ui.md) + [product UI](references/product-ui.md) | Một luồng từ mục tiêu đến kết quả, đủ màn hình và trạng thái quan trọng. |
| Muốn xem ví dụ chuyển brief thành thiết kế | [Ví dụ homepage](references/worked-example.md) hoặc [ví dụ app](references/worked-app-example.md) | Phân biệt quyết định thiết kế với hình trang trí và dữ liệu chưa xác minh. |
| Muốn kiểm tra cơ sở của quy tắc | [Source notes](references/source-notes.md) | Nguồn công khai nào hỗ trợ quy tắc, nguồn nào chỉ là ví dụ. |
| Muốn biết skill có thực sự cải thiện đầu ra | [Evaluation](references/evaluation.md) | Chạy cùng brief có/không có skill, xem render, hành vi và lỗi bắt buộc phải sửa. |

Các tài liệu `owner-*` nói về **gu của chủ skill**. `component-craft.md` và `product-ui.md` nói về hành vi, cấu trúc và khả năng sử dụng có thể áp dụng rộng hơn. Khi làm một sản phẩm thật, cần cả hai lớp: ý tưởng thị giác nhất quán và giao diện hoàn thành tác vụ. Codex chỉ nên đọc các tài liệu liên quan đến nhiệm vụ hiện tại, không cần nạp toàn bộ `references/` cho một nút hoặc một màn hình.

## Bổ sung cho hệ thống sau đăng nhập

- Bắt đầu từ **vai trò → mục tiêu → đối tượng dữ liệu → hành động → kết quả → cách phục hồi**, rồi mới chọn màn hình và component.
- Mỗi bề mặt có một việc: trang tổng quan cho việc cần chú ý, bảng cho tìm và so sánh, trang chi tiết cho ngữ cảnh và hành động, form cho nhập liệu, settings cho thay đổi có phạm vi rõ.
- Trạng thái “chưa có dữ liệu”, “không có kết quả lọc”, “đang tải”, “lỗi lưu”, “thiếu quyền” và “thành công” cần lời giải thích và bước tiếp theo khác nhau.
- Cá tính của sản phẩm nằm ở ngôn ngữ, cấu trúc, nhịp chữ và những chi tiết phục vụ công việc; giao diện dùng hằng ngày cần ổn định để người dùng thao tác nhanh.
- Đánh giá **một luồng hoàn chỉnh** với dữ liệu thực tế và quyền khác nhau. Screenshot chỉ cho thấy một thời điểm.

### Cường độ thị giác thay đổi theo công việc

Trang công khai có thể mở bằng một cảnh giàu ánh sáng và chữ lớn. Màn hình đăng nhập giữ chất liệu đó ở phần khung, để form rõ ràng. Workspace có thể dùng một panel chính có cá tính, còn danh sách và lịch sử nên ổn định để quét nhanh. Form, bảng và settings cần bề mặt đọc tốt, quy tắc trạng thái rõ. Màn hình kết quả hoặc cột mốc quan trọng có thể tăng cường độ thị giác trở lại **khi có nội dung thật để nhấn mạnh**.

Với bất kỳ sản phẩm nào, hãy theo dõi **cùng một đối tượng** qua lúc người dùng tìm thấy nó, mở chi tiết, thay đổi, chờ kết quả và quay lại. Tên, trạng thái, quyền và hành động của đối tượng phải nhất quán; không vẽ thêm màn hình chỉ để phô diễn phong cách. [Owner product UI](references/owner-product-ui.md) có bảng kiểm tra sự liên tục này theo từng thời điểm.

## Từ hệ thống đến component nhỏ

[Component craft](references/component-craft.md) bổ sung cách chọn và rà soát header, nav, button, link, input, tab, dialog, drawer, tooltip, thông báo và điều khiển trong bảng. Nó tập trung vào **mục đích, cấu tạo, nhãn, trạng thái, bàn phím, mobile và chi tiết thị giác**, không áp một kích thước hoặc bộ màu cố định cho mọi sản phẩm. Ví dụ: header toàn ứng dụng khác header của một trang; button kích hoạt hành động còn link dẫn tới địa chỉ; tooltip chỉ giải thích thêm, không giấu thông tin bắt buộc.

[Owner components](references/owner-components.md) thêm một tầng cụ thể cho gu đã chọn: header gọn để nhường tâm điểm, CTA màu nóng đúng chỗ, card có kích thước theo mức độ quan trọng, form yên tĩnh, table chính xác, trạng thái quan trọng rõ nghĩa. Mỗi component đều cần trạng thái hover/focus/selected/loading/error nếu luồng sử dụng có thể đi tới trạng thái đó. Sự tinh tế đến từ quan hệ giữa các thành phần, không phải việc đặt glow và gradient lên từng nút.

### Prompt kiểm tra trên sản phẩm bất kỳ

```text
$web-ui-art-direction Đọc frontend và nội dung thật của dự án này.
Thiết kế lại trang công khai và một luồng quan trọng sau đăng nhập.
Trước khi vẽ, hãy xác định chủ thể thật của sản phẩm, đối tượng dữ liệu,
việc người dùng cần làm ở từng màn hình và lúc nào nên tăng/giảm cường độ
thị giác. Giữ brand hiện có nếu đã rõ. Không bịa số liệu hay dùng ảnh
minh họa như bằng chứng sản phẩm. Render desktop/mobile của các màn hình
liên quan và một trạng thái lỗi hoặc trống. Tự đánh giá theo
references/evaluation.md, sửa những chỗ giống template hoặc làm khó thao tác.
```

Khi chỉ cần hình ảnh thiết kế, hãy nói rõ đó là **mockup**; các nút và luồng chỉ được coi là hoạt động sau khi triển khai và kiểm thử. Nếu đã có code, cần kiểm tra trong giao diện chạy thật thay vì kết luận từ ảnh render.

### Kiểm nghiệm thay vì tin rằng tài liệu dài sẽ tự tạo UI đẹp

[Evaluation](references/evaluation.md) và [10 prompt thử](evals/prompts.csv) bao gồm brief mở, brand có sẵn, app nhiều màn hình, component nhỏ và yêu cầu không nên kích hoạt skill. So sánh đầu ra có/không có skill trên cùng dữ kiện; ghi lại ảnh render, màn hình rộng/hẹp, trạng thái và những hành vi đã kiểm tra. Một mẫu thiết kế chỉ trở thành **chuẩn thị giác của chủ skill** sau khi chủ skill xem và chấp nhận nó. Hiện repository chứa quy tắc và ví dụ suy luận, **chưa tuyên bố có một bộ ảnh đầu ra đã được duyệt làm chuẩn**.

Để kiểm tra nhanh gói skill sau khi sửa file, chạy trong thư mục repo bằng PowerShell:

```powershell
.\scripts\check-package.ps1
```

Script kiểm tra frontmatter, tên skill, liên kết nội bộ, placeholder và bảng prompt; nó **không chấm chất lượng giao diện**. Muốn biết skill thực sự giúp ích, phải chạy các prompt và xem đầu ra theo rubric trong `evaluation.md`.

## Những gì rút ra từ 33 ảnh

- Không có một công thức “đẹp” duy nhất: editorial trắng, ảnh thật, 3D, dark cinematic và brutalist đều có thể hiệu quả trong đúng bối cảnh.
- Những mẫu mạnh nhất có một ý tưởng xuyên suốt: chi tiết như bo góc, đường kẻ, ánh sáng, cách crop ảnh và kiểu CTA đều phục vụ ý tưởng đó.
- Nhiều ảnh là concept trình bày đẹp nhưng có chữ quá nhỏ, tương phản yếu, số liệu chưa rõ nguồn hoặc tương tác chỉ được gợi ý. Skill giữ kỹ thuật art direction nhưng yêu cầu xây lại trải nghiệm sử dụng cho web thật.
- “Có hồn” đến từ nội dung, bối cảnh, sự chọn lọc và tính nhất quán; thêm hiệu ứng không tự tạo được điều đó.

## Giới hạn và bản quyền

33 ảnh tham khảo không nằm trong repo và không được cấp phép lại theo MIT. Atlas là ghi chép phân tích mới, dùng tên tệp để truy vết trong bộ sưu tập gốc. Việc có ảnh trong bộ sưu tập không chứng minh tác giả, nguồn hay quyền tái sử dụng.

Việc khảo cứu nguồn công khai **không đồng nghĩa** đã đọc toàn bộ website, truy cập màn hình cần đăng nhập hoặc thử nghiệm sản phẩm thật. Thư viện ảnh cung cấp ví dụ, design system cung cấp hướng dẫn của chính họ, còn nghiên cứu UX cho thêm bằng chứng về hành vi. Các kết luận chuyển dụng đều ghi trong [source-notes.md](references/source-notes.md).

Skill không bảo đảm tự động đạt WCAG hoặc hiệu năng tốt: phải kiểm tra trang triển khai thực tế. Các ngưỡng truy cập nêu trong [design-rules.md](references/design-rules.md) được đối chiếu với tài liệu [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/); hướng dẫn về tránh layout shift tham chiếu [web.dev](https://web.dev/articles/optimize-cls).

## Đóng góp

Khi bổ sung quy tắc, hãy đưa ra **bối cảnh áp dụng**, **tác dụng với người dùng**, **trường hợp không nên áp dụng** và **nguồn hỗ trợ**. Ưu tiên một quy tắc có căn cứ hơn một danh sách dài các xu hướng. Không thêm ảnh, logo, testimonial hoặc số liệu của bên thứ ba nếu chưa có quyền và nguồn rõ ràng.

## Giấy phép

Nội dung gốc trong repo phát hành theo [MIT License](LICENSE). Giấy phép này không bao gồm 33 ảnh tham khảo gốc.
