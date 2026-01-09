/* ==========================================================================
   DATABASE SẢN PHẨM - KHOÁNG SẢN RẠNG ĐÔNG
   Lưu ý: 
   - ID phải là duy nhất và không dấu (dùng cho URL).
   - Phần tabs (desc, specs, app) chấp nhận mã HTML.
   ========================================================================== */

const productsDB = [
  // 1. BÊ TÔNG THƯƠNG PHẨM
  {
    id: "be-tong-thuong-pham",
    name: "BÊ TÔNG THƯƠNG PHẨM (MÁC 100 - 600)",
    code: "BT-RDG-01",
    price: "Liên hệ",
    shortDesc:
      "Bê tông Rạng Đông được sản xuất trên dây chuyền tự động hóa hoàn toàn, trạm trộn công suất lớn (120m3/h), đảm bảo cấp phối chính xác, độ sụt ổn định. Phù hợp cho mọi công trình từ nhà dân dụng đến dự án cao tầng.",
    images: [
      "https://media.istockphoto.com/id/1040410620/vi/anh/%C4%91%E1%BB%95-b%C3%AA-t%C3%B4ng-l%C3%AAn-n%E1%BB%81n-m%C3%B3ng-t%C3%B2a-nh%C3%A0.jpg?s=2048x2048&w=is&k=20&c=lWOqcEL_BrrIhjL3H9SJHUTSuuSxDLDMS09QeVhRHDs=", // Ảnh chính
      "https://file.hstatic.net/1000388599/file/be_tong_tuoi_la_gi_1_c3c333270929497e930983d922096773_grande.jpg", // Ảnh bơm
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/xe-bon-tron-be-tong-tuoi.jpg", // Xe bồn
    ],
    specs: [
      "Cường độ nén: Đạt chuẩn TCVN 9340:2012",
      "Độ sụt: 10±2, 12±2 (Tùy chỉnh theo yêu cầu)",
      "Phụ gia: Chống thấm, đông kết nhanh R7, R3",
    ],
    tabs: {
      desc: `
                <h3 class="heading-md">Mô tả sản phẩm</h3>
                <p class="text-desc mb-3">Bê tông thương phẩm (bê tông tươi) của Rạng Đông được trộn sẵn tại trạm trộn với hệ thống điều khiển PLC tự động 100%. Chúng tôi kiểm soát chặt chẽ nguồn nguyên liệu đầu vào:</p>
                <ul class="detail-list">
                    <li><strong>Xi măng:</strong> Sử dụng các thương hiệu uy tín (Hà Tiên, Nghi Sơn, Holcim...).</li>
                    <li><strong>Cát, Đá:</strong> Khai thác trực tiếp từ mỏ của công ty, qua dây chuyền sàng rửa sạch tạp chất.</li>
                    <li><strong>Phụ gia:</strong> Sika, Vinkems... đảm bảo tính năng kỹ thuật cao.</li>
                </ul>
                <p class="text-desc mt-3">Hệ thống xe bồn và xe bơm (bơm cần 37m-56m, bơm tĩnh) sẵn sàng phục vụ 24/7 tại các địa hình khó khăn.</p>
            `,
      specs: `
                <table class="specs-table">
                    <tr><th>Chỉ tiêu</th><th>Thông số</th></tr>
                    <tr><td>Mác bê tông</td><td>M100, M150, M200, M250, M300... đến M600</td></tr>
                    <tr><td>Độ sụt (Slump)</td><td>10 ± 2 cm đến 18 ± 2 cm</td></tr>
                    <tr><td>Cốt liệu lớn</td><td>Đá 1x2, Đá 0.5x1 (Sàng rửa sạch)</td></tr>
                    <tr><td>Tiêu chuẩn áp dụng</td><td>TCVN 9340:2012</td></tr>
                    <tr><td>Thời gian ninh kết</td><td>Tiêu chuẩn hoặc R7, R3 (theo yêu cầu)</td></tr>
                </table>
            `,
      app: `
                <p class="text-desc">Sản phẩm đáp ứng đa dạng các hạng mục:</p>
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
    price: "Liên hệ",
    shortDesc:
      "Đá xây dựng được khai thác trực tiếp từ mỏ đá Rạng Đông, qua dây chuyền nghiền sàng hiện đại của Nhật Bản. Sản phẩm có cường độ nén cao, hình dáng khối, ít thoi dẹt.",
    images: [
      "https://files.bienphong.com.vn//bbpmedia/media/1200/2023/7/19/19132228pmimage003.jpg",
      "https://betongbinhduong.com/wp-content/uploads/2023/07/da-1x2.jpg",
      "https://vatlieuxaydung360.net/wp-content/uploads/2020/07/da-4x6-1.jpg",
    ],
    specs: [
      "Cường độ nén: > 1000 daN/cm2",
      "Hàm lượng thoi dẹt: < 15%",
      "Độ sạch: Đã qua sàng rửa, không lẫn sét",
    ],
    tabs: {
      desc: `
                <h3 class="heading-md">Nguồn gốc và Chất lượng</h3>
                <p class="text-desc mb-3">Mỏ đá của Rạng Đông có trữ lượng lớn, chất lượng đá gốc (đá Granite/Basalt) có cường độ cao. Quy trình sản xuất khép kín:</p>
                <p class="text-desc">Khoan nổ mìn -> Xúc bốc -> Nghiền thô -> Nghiền tinh -> Sàng phân loại -> Rửa sạch -> Thành phẩm.</p>
                <p class="text-desc mt-3">Chúng tôi cung cấp đầy đủ các loại đá: Đá 1x2 (đổ bê tông), Đá 4x6 (lót nền), Đá mi bụi (bê tông nhựa), Đá hộc (xây kè).</p>
            `,
      specs: `
                <table class="specs-table">
                    <tr><th>Loại đá</th><th>Kích thước hạt (mm)</th><th>Ứng dụng chính</th></tr>
                    <tr><td>Đá 1x2</td><td>10 - 28 mm</td><td>Đổ bê tông tươi, bê tông nhựa</td></tr>
                    <tr><td>Đá 2x4</td><td>20 - 40 mm</td><td>Đổ bê tông khối lớn, cầu cảng</td></tr>
                    <tr><td>Đá 4x6</td><td>40 - 60 mm</td><td>Lót nền móng, kè bờ</td></tr>
                    <tr><td>Đá Mi (Sàng/Bụi)</td><td>< 10 mm</td><td>Làm gạch không nung, san lấp</td></tr>
                    <tr><td>Độ hút nước</td><td>< 0.5%</td><td>-</td></tr>
                </table>
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
    price: "Liên hệ",
    shortDesc:
      "Gạch Block và gạch vỉa hè Terrazzo được sản xuất bằng công nghệ ép rung thủy lực. Sản phẩm có độ bền cao, kích thước chuẩn xác, thân thiện với môi trường.",
    images: [
      "https://vro.vn/wp-content/uploads/2025/05/gach-khong-nung-block.jpg",
      "https://lh5.googleusercontent.com/proxy/abc123xyz_placeholder_image_brick_2", // Bạn thay link ảnh thật vào đây
      "https://lh5.googleusercontent.com/proxy/abc123xyz_placeholder_image_brick_3",
    ],
    specs: [
      "Cường độ chịu lực: Mác 7.5, 10.0, 15.0",
      "Kích thước: Chuẩn xác ± 1mm",
      "Tính năng: Cách âm, cách nhiệt, chống cháy",
    ],
    tabs: {
      desc: `
                <h3 class="heading-md">Công nghệ sản xuất xanh</h3>
                <p class="text-desc mb-3">Sản phẩm gạch không nung Rạng Đông sử dụng nguyên liệu đá mi, xi măng và cát, không qua nung đốt nên không phát sinh khí thải CO2. Công nghệ ép rung định hình giúp viên gạch có kết cấu đặc chắc, khả năng chịu lực vượt trội so với gạch đất nung truyền thống.</p>
            `,
      specs: `
                <table class="specs-table">
                    <tr><th>Loại gạch</th><th>Kích thước (DxRxC)</th><th>Định mức (viên/m2)</th></tr>
                    <tr><td>Gạch Block 4 lỗ</td><td>80 x 80 x 180 mm</td><td>~ 65 viên</td></tr>
                    <tr><td>Gạch Đinh (Thẻ)</td><td>40 x 80 x 180 mm</td><td>-</td></tr>
                    <tr><td>Gạch Block rỗng (Xây tường)</td><td>390 x 190 x 190 mm</td><td>12.5 viên</td></tr>
                    <tr><td>Gạch Terrazzo (Lát vỉa hè)</td><td>400 x 400 x 30 mm</td><td>6.25 viên</td></tr>
                    <tr><td>Mác gạch</td><td>M75 - M200</td><td>-</td></tr>
                </table>
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
    price: "Liên hệ",
    shortDesc:
      "Cát vàng đổ bê tông và cát xây tô được tuyển rửa sạch, module hạt đều, không lẫn bùn sét và tạp chất hữu cơ. Đảm bảo chất lượng công trình.",
    images: [
      "https://media.vov.vn/sites/default/files/styles/large/public/2024-04/can-cat-nhan-tao-o-dau-01.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/cat-vang-be-tong.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/cat-xay-to.jpg",
    ],
    specs: [
      "Module độ lớn: 2.0 - 3.3 (Cát bê tông)",
      "Hàm lượng bùn sét: < 1%",
      "Nguồn gốc: Sông tự nhiên / Nghiền nhân tạo",
    ],
    tabs: {
      desc: `
                <h3 class="heading-md">Đặc điểm sản phẩm</h3>
                <p class="text-desc mb-3">Chúng tôi cung cấp hai dòng cát chính:</p>
                <ul class="detail-list">
                    <li><strong>Cát Vàng (Cát bê tông):</strong> Hạt to, sắc cạnh, sạch, dùng để đổ bê tông giúp nhanh cứng và đạt cường độ cao.</li>
                    <li><strong>Cát Đen (Cát xây tô):</strong> Hạt mịn, dùng để xây tường và trát, tạo bề mặt phẳng mịn.</li>
                </ul>
                <p class="text-desc mt-3">Toàn bộ cát đều được qua hệ thống rửa để loại bỏ tạp chất trước khi xuất xưởng.</p>
            `,
      specs: `
                <table class="specs-table">
                    <tr><th>Chỉ tiêu</th><th>Cát Bê Tông (Vàng)</th><th>Cát Xây Tô (Đen)</th></tr>
                    <tr><td>Module độ lớn (Mk)</td><td>> 2.0</td><td>0.7 - 2.0</td></tr>
                    <tr><td>Hàm lượng bùn, bụi</td><td>< 1.5%</td><td>< 3.0%</td></tr>
                    <tr><td>Tạp chất hữu cơ</td><td>Không lẫn</td><td>Không lẫn</td></tr>
                    <tr><td>Hàm lượng muối Cl-</td><td>< 0.01% (Cát sông)</td><td>< 0.05%</td></tr>
                </table>
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
    price: "Liên hệ",
    shortDesc:
      "Bê tông nhựa chặt rải nóng (Asphalt) được sản xuất tại trạm trộn công nghệ hiện đại. Đa dạng cấp phối: C9.5, C12.5, C19... đáp ứng tiêu chuẩn đường bộ Việt Nam.",
    images: [
      "https://thietbimaianh.com.vn/uploads/tiny_uploads/_DSC0316.jpg",
      "https://muabanmayxaydung.vn/wp-content/uploads/2020/07/tham-be-tong-nhua-nong.jpg",
      "https://nhuaduong.net/wp-content/uploads/2019/08/thi-cong-be-tong-nhua-nong.jpg",
    ],
    specs: [
      "Loại: Hạt mịn, Hạt trung, Hạt thô",
      "Nhiệt độ xuất xưởng: 140°C - 160°C",
      "Độ ổn định Marshall: Đạt chuẩn",
    ],
    tabs: {
      desc: `
                <h3 class="heading-md">Quy trình sản xuất</h3>
                <p class="text-desc mb-3">Sản phẩm là hỗn hợp cốt liệu đá, cát, bột khoáng và nhựa đường Polymer được trộn nóng ở nhiệt độ cao. Quy trình kiểm soát nhiệt độ nghiêm ngặt đảm bảo nhựa đường bao phủ đều cốt liệu, tạo độ dính bám tối đa.</p>
                <p class="text-desc">Chúng tôi có đội xe chuyên dụng vận chuyển nhựa nóng đến công trường, đảm bảo nhiệt độ khi thi công.</p>
            `,
      specs: `
                <table class="specs-table">
                    <tr><th>Loại Asphalt</th><th>Cỡ hạt max (mm)</th><th>Ứng dụng</th></tr>
                    <tr><td>Bê tông nhựa chặt C9.5</td><td>9.5 mm</td><td>Lớp mặt trên (đường cao tốc, đô thị)</td></tr>
                    <tr><td>Bê tông nhựa chặt C12.5</td><td>12.5 mm</td><td>Lớp mặt trên (phổ biến)</td></tr>
                    <tr><td>Bê tông nhựa chặt C19</td><td>19 mm</td><td>Lớp mặt dưới</td></tr>
                    <tr><td>Độ ổn định (kN)</td><td>> 8.0</td><td>TCVN 8819:2011</td></tr>
                </table>
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
    price: "Liên hệ",
    shortDesc:
      "Sản phẩm cống tròn, cống hộp, dải phân cách, hố ga đúc sẵn... được sản xuất bằng công nghệ rung ép lõi, sử dụng bê tông mác cao và thép chịu lực.",
    images: [
      "https://www.sivali.vn/images/c%E1%BB%91ng_b%C3%AA_t%C3%B4ng_t%E1%BA%A1i_qu%E1%BA%A3ng_ninh.jpg",
      "https://betongducsan.net/wp-content/uploads/2019/03/cong-hop-be-tong-cot-thep.jpg",
      "https://betongducsan.net/wp-content/uploads/2019/03/dai-phan-cach-be-tong.jpg",
    ],
    specs: [
      "Công nghệ: Rung ép / Quay ly tâm",
      "Thép: Thép kéo nguội cường độ cao",
      "Bê tông: Mác M300 trở lên",
    ],
    tabs: {
      desc: `
                <h3 class="heading-md">Chất lượng vượt trội</h3>
                <p class="text-desc mb-3">Các cấu kiện đúc sẵn của Rạng Đông được kiểm soát chất lượng từ khâu làm lồng thép, ghép cốp pha đến khâu bảo dưỡng bê tông. Bề mặt sản phẩm láng mịn, kích thước hình học chính xác, lắp ghép dễ dàng.</p>
                <p class="text-desc">Nhận đúc các cấu kiện phi tiêu chuẩn theo bản vẽ thiết kế riêng của dự án.</p>
            `,
      specs: `
                <table class="specs-table">
                    <tr><th>Sản phẩm</th><th>Quy cách phổ biến</th></tr>
                    <tr><td>Cống tròn (Ly tâm/Rung ép)</td><td>D300, D400, D600... đến D2000</td></tr>
                    <tr><td>Cống hộp</td><td>1.6mx1.6m, 2mx2m...</td></tr>
                    <tr><td>Hố ga</td><td>Đúc sẵn nguyên khối hoặc lắp ghép</td></tr>
                    <tr><td>Dải phân cách</td><td>Theo chuẩn đường bộ Việt Nam</td></tr>
                    <tr><td>Tải trọng thiết kế</td><td>VH (Vỉa hè), HL-93 (Hoạt tải xe)</td></tr>
                </table>
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
