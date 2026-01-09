/* ==========================================================================
   DATABASE CHI TIẾT SẢN PHẨM (Clean HTML)
   File: assets/js/products/products-detail-db.js
   ========================================================================== */

const productsDetailDB = [
  // 1. BÊ TÔNG THƯƠNG PHẨM
  {
    id: "be-tong-thuong-pham",
    name: "BÊ TÔNG THƯƠNG PHẨM (MÁC 100 - 600)",
    code: "BT-RDG-01",
    price: "Liên hệ báo giá",
    shortDesc:
      "Đầy đủ các mác từ M100 đến M600, được trộn bằng máy móc tự động tại trạm trộn theo tỷ lệ chính xác, mang lại chất lượng đồng đều.",
    images: [
      "https://media.istockphoto.com/id/1040410620/vi/anh/%C4%91%E1%BB%95-b%C3%AA-t%C3%B4ng-l%C3%AAn-n%E1%BB%81n-m%C3%B3ng-t%C3%B2a-nh%C3%A0.jpg?s=2048x2048&w=is&k=20&c=lWOqcEL_BrrIhjL3H9SJHUTSuuSxDLDMS09QeVhRHDs=",
      "https://file.hstatic.net/1000388599/file/be_tong_tuoi_la_gi_1_c3c333270929497e930983d922096773_grande.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/xe-bon-tron-be-tong-tuoi.jpg",
    ],
    badge: { text: "BÁN CHẠY NHẤT", class: "badge--orange" },
    tabs: {
      desc: `
                <h3 class="detail-heading">Mô tả sản phẩm</h3>
                <p class="detail-text mb-3">Bê tông thương phẩm (bê tông tươi) của Rạng Đông được trộn sẵn tại trạm trộn với hệ thống điều khiển PLC tự động 100%. Chúng tôi kiểm soát chặt chẽ nguồn nguyên liệu đầu vào:</p>
                <ul class="detail-list">
                    <li><strong>Xi măng:</strong> Sử dụng các thương hiệu uy tín (Hà Tiên, Nghi Sơn, Holcim...).</li>
                    <li><strong>Cát, Đá:</strong> Khai thác trực tiếp từ mỏ của công ty, qua dây chuyền sàng rửa sạch tạp chất.</li>
                    <li><strong>Phụ gia:</strong> Sika, Vinkems... đảm bảo tính năng kỹ thuật cao.</li>
                </ul>
                <p class="detail-text mt-3">Hệ thống xe bồn và xe bơm (bơm cần 37m-56m, bơm tĩnh) sẵn sàng phục vụ 24/7 tại các địa hình khó khăn.</p>
            `,
      specs: `
                <div class="table-responsive">
                    <table class="specs-table">
                        <tr><th>Chỉ tiêu</th><th>Thông số</th></tr>
                        <tr><td>Mác bê tông</td><td>M100, M150, M200, M250, M300... đến M600</td></tr>
                        <tr><td>Độ sụt (Slump)</td><td>10 ± 2 cm đến 18 ± 2 cm</td></tr>
                        <tr><td>Cốt liệu lớn</td><td>Đá 1x2, Đá 0.5x1 (Sàng rửa sạch)</td></tr>
                        <tr><td>Tiêu chuẩn áp dụng</td><td>TCVN 9340:2012</td></tr>
                        <tr><td>Thời gian ninh kết</td><td>Tiêu chuẩn hoặc R7, R3 (theo yêu cầu)</td></tr>
                    </table>
                </div>
            `,
      app: `
                <p class="detail-text">Sản phẩm đáp ứng đa dạng các hạng mục:</p>
                <ul class="detail-list">
                    <li>Đổ móng, sàn, cột, dầm nhà phố, biệt thự.</li>
                    <li>Thi công móng cọc, tầng hầm chung cư cao tầng.</li>
                    <li>Đường giao thông nông thôn, đường nội bộ khu công nghiệp.</li>
                    <li>Các công trình thủy lợi, kênh mương (Bê tông chống thấm, bền sunfat).</li>
                </ul>
            `,
    },
  },

  // 2. ĐÁ XÂY DỰNG
  {
    id: "da-xay-dung",
    name: "ĐÁ XÂY DỰNG (1x2, 2x4, 4x6, ĐÁ MI)",
    code: "DA-RDG-02",
    price: "Liên hệ báo giá",
    shortDesc:
      "Đá xây dựng được khai thác trực tiếp từ mỏ đá Rạng Đông, qua dây chuyền nghiền sàng hiện đại của Nhật Bản. Sản phẩm có cường độ nén cao, hình dáng khối, ít thoi dẹt.",
    images: [
      "https://files.bienphong.com.vn//bbpmedia/media/1200/2023/7/19/19132228pmimage003.jpg",
      "https://betongbinhduong.com/wp-content/uploads/2023/07/da-1x2.jpg",
      "https://vatlieuxaydung360.net/wp-content/uploads/2020/07/da-4x6-1.jpg",
    ],
    badge: { text: "KHAI THÁC TRỰC TIẾP", class: "badge--blue" },
    tabs: {
      desc: `
                <h3 class="detail-heading">Nguồn gốc và Chất lượng</h3>
                <p class="detail-text mb-3">Mỏ đá của Rạng Đông có trữ lượng lớn, chất lượng đá gốc (đá Granite/Basalt) có cường độ cao. Quy trình sản xuất khép kín:</p>
                <p class="detail-text">Khoan nổ mìn -> Xúc bốc -> Nghiền thô -> Nghiền tinh -> Sàng phân loại -> Rửa sạch -> Thành phẩm.</p>
                <p class="detail-text mt-3">Chúng tôi cung cấp đầy đủ các loại đá: Đá 1x2 (đổ bê tông), Đá 4x6 (lót nền), Đá mi bụi (bê tông nhựa), Đá hộc (xây kè).</p>
            `,
      specs: `
                <div class="table-responsive">
                    <table class="specs-table">
                        <tr><th>Loại đá</th><th>Kích thước hạt (mm)</th><th>Ứng dụng chính</th></tr>
                        <tr><td>Đá 1x2</td><td>10 - 28 mm</td><td>Đổ bê tông tươi, bê tông nhựa</td></tr>
                        <tr><td>Đá 2x4</td><td>20 - 40 mm</td><td>Đổ bê tông khối lớn, cầu cảng</td></tr>
                        <tr><td>Đá 4x6</td><td>40 - 60 mm</td><td>Lót nền móng, kè bờ</td></tr>
                        <tr><td>Đá Mi (Sàng/Bụi)</td><td>< 10 mm</td><td>Làm gạch không nung, san lấp</td></tr>
                        <tr><td>Độ hút nước</td><td>< 0.5%</td><td>-</td></tr>
                    </table>
                </div>
            `,
      app: `
                <ul class="detail-list">
                    <li>Cốt liệu cho bê tông xi măng và bê tông nhựa nóng.</li>
                    <li>Gia cố nền đường, móng nhà xưởng.</li>
                    <li>Xây kè chắn đất, tường rào (đá hộc).</li>
                    <li>San lấp mặt bằng (đá mi, đá 0x4).</li>
                </ul>
            `,
    },
  },

  // 3. GẠCH KHÔNG NUNG
  {
    id: "gach-khong-nung",
    name: "GẠCH KHÔNG NUNG (BLOCK, TERRAZZO)",
    code: "GKN-RDG-03",
    price: "Liên hệ báo giá",
    shortDesc:
      "Gạch Block, gạch vỉa hè Terrazzo với đa dạng mẫu mã và màu sắc. Độ bền cao, cách âm, cách nhiệt vượt trội.",
    images: [
      "https://vro.vn/wp-content/uploads/2025/05/gach-khong-nung-block.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/gach-block-xay-tuong.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/gach-terrazzo.jpg",
    ],
    badge: { text: "SẢN PHẨM XANH", class: "badge--green" },
    tabs: {
      desc: `
                <h3 class="detail-heading">Công nghệ sản xuất xanh</h3>
                <p class="detail-text mb-3">Sản phẩm gạch không nung Rạng Đông sử dụng nguyên liệu đá mi, xi măng và cát, không qua nung đốt nên không phát sinh khí thải CO2. Công nghệ ép rung định hình giúp viên gạch có kết cấu đặc chắc, khả năng chịu lực vượt trội so với gạch đất nung truyền thống.</p>
            `,
      specs: `
                <div class="table-responsive">
                    <table class="specs-table">
                        <tr><th>Loại gạch</th><th>Kích thước (DxRxC)</th><th>Định mức (viên/m2)</th></tr>
                        <tr><td>Gạch Block 4 lỗ</td><td>80 x 80 x 180 mm</td><td>~ 65 viên</td></tr>
                        <tr><td>Gạch Đinh (Thẻ)</td><td>40 x 80 x 180 mm</td><td>-</td></tr>
                        <tr><td>Gạch Block rỗng</td><td>390 x 190 x 190 mm</td><td>12.5 viên</td></tr>
                        <tr><td>Gạch Terrazzo</td><td>400 x 400 x 30 mm</td><td>6.25 viên</td></tr>
                        <tr><td>Mác gạch</td><td>M75 - M200</td><td>-</td></tr>
                    </table>
                </div>
            `,
      app: `
                <ul class="detail-list">
                    <li>Xây tường bao, vách ngăn cho nhà xưởng, trường học, cao ốc.</li>
                    <li>Lát vỉa hè, sân vườn, công viên (Gạch Terrazzo, con sâu).</li>
                    <li>Xây tường rào kiên cố.</li>
                </ul>
            `,
    },
  },

  // 4. CÁT XÂY DỰNG
  {
    id: "cat-xay-dung",
    name: "CÁT XÂY DỰNG (CÁT VÀNG, CÁT ĐEN)",
    code: "CAT-RDG-04",
    price: "Liên hệ báo giá",
    shortDesc:
      "Cát vàng đổ bê tông, cát xây tô sàng rửa sạch, module hạt đều, khả năng lấp đầy, giúp tăng cường độ bê tông.",
    images: [
      "https://media.vov.vn/sites/default/files/styles/large/public/2024-04/can-cat-nhan-tao-o-dau-01.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/cat-vang-be-tong.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/cat-xay-to.jpg",
    ],
    badge: { text: "SẢN PHẨM XANH", class: "badge--green" },
    tabs: {
      desc: `
                <h3 class="detail-heading">Đặc điểm sản phẩm</h3>
                <p class="detail-text mb-3">Chúng tôi cung cấp hai dòng cát chính:</p>
                <ul class="detail-list">
                    <li><strong>Cát Vàng (Cát bê tông):</strong> Hạt to, sắc cạnh, sạch, dùng để đổ bê tông giúp nhanh cứng và đạt cường độ cao.</li>
                    <li><strong>Cát Đen (Cát xây tô):</strong> Hạt mịn, dùng để xây tường và trát, tạo bề mặt phẳng mịn.</li>
                </ul>
                <p class="detail-text mt-3">Toàn bộ cát đều được qua hệ thống rửa để loại bỏ tạp chất trước khi xuất xưởng.</p>
            `,
      specs: `
                <div class="table-responsive">
                    <table class="specs-table">
                        <tr><th>Chỉ tiêu</th><th>Cát Bê Tông (Vàng)</th><th>Cát Xây Tô (Đen)</th></tr>
                        <tr><td>Module độ lớn (Mk)</td><td>> 2.0</td><td>0.7 - 2.0</td></tr>
                        <tr><td>Hàm lượng bùn, bụi</td><td>< 1.5%</td><td>< 3.0%</td></tr>
                        <tr><td>Tạp chất hữu cơ</td><td>Không lẫn</td><td>Không lẫn</td></tr>
                        <tr><td>Hàm lượng muối Cl-</td><td>< 0.01% (Cát sông)</td><td>< 0.05%</td></tr>
                    </table>
                </div>
            `,
      app: `
                <ul class="detail-list">
                    <li>Sản xuất bê tông thương phẩm, bê tông nhựa.</li>
                    <li>Xây trát tường, hoàn thiện công trình.</li>
                    <li>San lấp mặt bằng.</li>
                </ul>
            `,
    },
  },

  // 5. BÊ TÔNG NHỰA NÓNG
  {
    id: "be-tong-nhua-nong",
    name: "BÊ TÔNG NHỰA NÓNG (ASPHALT)",
    code: "ASP-RDG-05",
    price: "Liên hệ báo giá",
    shortDesc:
      "Bê tông nhựa chặt (Asphalt) rải nóng cho các công trình giao thông. Đa dạng cấp phối phù hợp với nhu cầu thi công thực tế.",
    images: [
      "https://thietbimaianh.com.vn/uploads/tiny_uploads/_DSC0316.jpg",
      "https://muabanmayxaydung.vn/wp-content/uploads/2020/07/tham-be-tong-nhua-nong.jpg",
      "https://nhuaduong.net/wp-content/uploads/2019/08/thi-cong-be-tong-nhua-nong.jpg",
    ],
    badge: { text: "CÔNG NGHỆ CAO", class: "badge--blue" },
    tabs: {
      desc: `
                <h3 class="detail-heading">Quy trình sản xuất</h3>
                <p class="detail-text mb-3">Sản phẩm là hỗn hợp cốt liệu đá, cát, bột khoáng và nhựa đường Polymer được trộn nóng ở nhiệt độ cao. Quy trình kiểm soát nhiệt độ nghiêm ngặt đảm bảo nhựa đường bao phủ đều cốt liệu, tạo độ dính bám tối đa.</p>
                <p class="detail-text">Chúng tôi có đội xe chuyên dụng vận chuyển nhựa nóng đến công trường, đảm bảo nhiệt độ khi thi công.</p>
            `,
      specs: `
                <div class="table-responsive">
                    <table class="specs-table">
                        <tr><th>Loại Asphalt</th><th>Cỡ hạt max (mm)</th><th>Ứng dụng</th></tr>
                        <tr><td>Bê tông nhựa chặt C9.5</td><td>9.5 mm</td><td>Lớp mặt trên</td></tr>
                        <tr><td>Bê tông nhựa chặt C12.5</td><td>12.5 mm</td><td>Lớp mặt trên (phổ biến)</td></tr>
                        <tr><td>Bê tông nhựa chặt C19</td><td>19 mm</td><td>Lớp mặt dưới</td></tr>
                    </table>
                </div>
            `,
      app: `
                <ul class="detail-list">
                    <li>Làm lớp mặt cho đường bộ, đường cao tốc, cầu cảng.</li>
                    <li>Sân bay, bến bãi, kho xưởng công nghiệp.</li>
                    <li>Đường nội bộ khu dân cư.</li>
                </ul>
            `,
    },
  },

  // 6. CẤU KIỆN ĐÚC SẴN
  {
    id: "cau-kien-duc-san",
    name: "CẤU KIỆN BÊ TÔNG ĐÚC SẴN",
    code: "CK-RDG-06",
    price: "Liên hệ báo giá",
    shortDesc:
      "Cống tròn, cống hộp, dải phân cách bê tông cốt thép đúc sẵn, các loại cấu kiện khác... nhận đặt hàng theo yêu cầu.",
    images: [
      "https://www.sivali.vn/images/c%E1%BB%91ng_b%C3%AA_t%C3%B4ng_t%E1%BA%A1i_qu%E1%BA%A3ng_ninh.jpg",
      "https://betongducsan.net/wp-content/uploads/2019/03/cong-hop-be-tong-cot-thep.jpg",
      "https://betongducsan.net/wp-content/uploads/2019/03/dai-phan-cach-be-tong.jpg",
    ],
    badge: null,
    tabs: {
      desc: `
                <h3 class="detail-heading">Chất lượng vượt trội</h3>
                <p class="detail-text mb-3">Các cấu kiện đúc sẵn của Rạng Đông được kiểm soát chất lượng từ khâu làm lồng thép, ghép cốp pha đến khâu bảo dưỡng bê tông. Bề mặt sản phẩm láng mịn, kích thước hình học chính xác, lắp ghép dễ dàng.</p>
                <p class="detail-text">Nhận đúc các cấu kiện phi tiêu chuẩn theo bản vẽ thiết kế riêng của dự án.</p>
            `,
      specs: `
                <div class="table-responsive">
                    <table class="specs-table">
                        <tr><th>Sản phẩm</th><th>Quy cách phổ biến</th></tr>
                        <tr><td>Cống tròn</td><td>D300, D400... đến D2000</td></tr>
                        <tr><td>Cống hộp</td><td>1.6mx1.6m, 2mx2m...</td></tr>
                        <tr><td>Hố ga</td><td>Đúc sẵn nguyên khối / lắp ghép</td></tr>
                        <tr><td>Tải trọng</td><td>VH (Vỉa hè), HL-93 (Hoạt tải xe)</td></tr>
                    </table>
                </div>
            `,
      app: `
                <ul class="detail-list">
                    <li>Hệ thống thoát nước mưa, nước thải cho khu đô thị, khu công nghiệp.</li>
                    <li>Hệ thống hào kỹ thuật điện, nước.</li>
                    <li>Phân làn giao thông (dải phân cách cứng).</li>
                </ul>
            `,
    },
  },
];
