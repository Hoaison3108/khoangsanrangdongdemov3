/* ==========================================================================
   DATABASE CHI TIẾT SẢN PHẨM (CLEAN DATA VERSION)
   File: assets/js/products/products-detail-db.js
   ========================================================================== */

const productsDetailDB = [
  // 1. BÊ TÔNG THƯƠNG PHẨM
  {
    id: "be-tong-thuong-pham",
    name: "BÊ TÔNG THƯƠNG PHẨM",
    code: "BT-RDG-01",
    price: "Liên hệ báo giá",
    shortDesc:
      "Đầy đủ các mác từ M100 đến M600, được trộn bằng máy móc tự động tại trạm trộn theo tỷ lệ chính xác.",
    images: [
      "https://media.istockphoto.com/id/1040410620/vi/anh/%C4%91%E1%BB%95-b%C3%AA-t%C3%B4ng-l%C3%AAn-n%E1%BB%81n-m%C3%B3ng-t%C3%B2a-nh%C3%A0.jpg?s=2048x2048&w=is&k=20&c=lWOqcEL_BrrIhjL3H9SJHUTSuuSxDLDMS09QeVhRHDs=",
      "https://file.hstatic.net/1000388599/file/be_tong_tuoi_la_gi_1_c3c333270929497e930983d922096773_grande.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/xe-bon-tron-be-tong-tuoi.jpg",
    ],
    badge: { text: "BÁN CHẠY NHẤT", class: "badge--orange" },

    // DỮ LIỆU ĐÃ ĐƯỢC LÀM SẠCH
    tabs: {
      // Desc giữ nguyên HTML vì là văn bản rich-text phức tạp
      desc: `
         <h3 class="detail-heading">Mô tả sản phẩm</h3>
         <p class="detail-text mb-3">Bê tông thương phẩm (bê tông tươi) của Rạng Đông được trộn sẵn tại trạm trộn với hệ thống điều khiển PLC tự động 100%.</p>
         <ul class="detail-list">
             <li><strong>Xi măng:</strong> Các thương hiệu uy tín (Hà Tiên, Nghi Sơn...).</li>
             <li><strong>Cát, Đá:</strong> Khai thác trực tiếp từ mỏ công ty.</li>
         </ul>
      `,
      // Specs chuyển thành Mảng Object
      specs: [
        { label: "Mác bê tông", value: "M100, M150... đến M600" },
        { label: "Độ sụt (Slump)", value: "10 ± 2 cm đến 18 ± 2 cm" },
        { label: "Cốt liệu lớn", value: "Đá 1x2, Đá 0.5x1 (Sàng rửa sạch)" },
        { label: "Tiêu chuẩn", value: "TCVN 9340:2012" },
        { label: "Ninh kết", value: "Tiêu chuẩn hoặc R7, R3" },
      ],
      // App chuyển thành Mảng String
      app: [
        "Đổ móng, sàn, cột, dầm nhà phố, biệt thự.",
        "Thi công móng cọc, tầng hầm chung cư cao tầng.",
        "Đường giao thông nông thôn, đường nội bộ.",
        "Công trình thủy lợi (Bê tông chống thấm, bền sunfat).",
      ],
    },
  },

  // 2. ĐÁ XÂY DỰNG
  {
    id: "da-xay-dung",
    name: "ĐÁ XÂY DỰNG",
    code: "DA-RDG-02",
    price: "Liên hệ báo giá",
    shortDesc:
      "Đá xây dựng khai thác trực tiếp, qua dây chuyền nghiền sàng hiện đại Nhật Bản. Cường độ nén cao, ít thoi dẹt.",
    images: [
      "https://files.bienphong.com.vn//bbpmedia/media/1200/2023/7/19/19132228pmimage003.jpg",
      "https://betongbinhduong.com/wp-content/uploads/2023/07/da-1x2.jpg",
      "https://vatlieuxaydung360.net/wp-content/uploads/2020/07/da-4x6-1.jpg",
    ],
    badge: { text: "KHAI THÁC TRỰC TIẾP", class: "badge--blue" },
    tabs: {
      desc: `
         <h3 class="detail-heading">Nguồn gốc và Chất lượng</h3>
         <p class="detail-text">Mỏ đá của Rạng Đông có trữ lượng lớn, chất lượng đá gốc (đá Granite/Basalt) có cường độ cao.</p>
         <p class="detail-text">Quy trình: Khoan nổ mìn -> Xúc bốc -> Nghiền thô -> Nghiền tinh -> Sàng phân loại -> Rửa sạch.</p>
      `,
      specs: [
        { label: "Đá 1x2", value: "10 - 28 mm (Đổ bê tông tươi)" },
        { label: "Đá 2x4", value: "20 - 40 mm (Đổ bê tông lớn)" },
        { label: "Đá 4x6", value: "40 - 60 mm (Lót nền, kè bờ)" },
        { label: "Đá Mi", value: "< 10 mm (Gạch không nung)" },
        { label: "Độ hút nước", value: "< 0.5%" },
      ],
      app: [
        "Cốt liệu cho bê tông xi măng và bê tông nhựa nóng.",
        "Gia cố nền đường, móng nhà xưởng.",
        "Xây kè chắn đất, tường rào (đá hộc).",
        "San lấp mặt bằng (đá mi, đá 0x4).",
      ],
    },
  },

  // 3. GẠCH KHÔNG NUNG
  {
    id: "gach-khong-nung",
    name: "GẠCH KHÔNG NUNG",
    code: "GKN-RDG-03",
    price: "Liên hệ báo giá",
    shortDesc:
      "Gạch Block, Terrazzo đa dạng mẫu mã. Công nghệ ép rung định hình, độ bền cao, cách âm tốt.",
    images: [
      "https://vro.vn/wp-content/uploads/2025/05/gach-khong-nung-block.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/gach-block-xay-tuong.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/gach-terrazzo.jpg",
    ],
    badge: { text: "SẢN PHẨM XANH", class: "badge--green" },
    tabs: {
      desc: `<h3 class="detail-heading">Công nghệ sản xuất xanh</h3><p class="detail-text">Sử dụng nguyên liệu đá mi, xi măng, không nung đốt, bảo vệ môi trường.</p>`,
      specs: [
        { label: "Gạch Block 4 lỗ", value: "80x80x180 mm" },
        { label: "Gạch Đinh", value: "40x80x180 mm" },
        { label: "Gạch Block rỗng", value: "390x190x190 mm" },
        { label: "Gạch Terrazzo", value: "400x400x30 mm" },
        { label: "Mác gạch", value: "M75 - M200" },
      ],
      app: [
        "Xây tường bao, vách ngăn nhà xưởng, cao ốc.",
        "Lát vỉa hè, sân vườn, công viên (Terrazzo).",
        "Xây tường rào kiên cố.",
      ],
    },
  },

  // 4. CÁT XÂY DỰNG
  {
    id: "cat-xay-dung",
    name: "CÁT XÂY DỰNG",
    code: "CAT-RDG-04",
    price: "Liên hệ báo giá",
    shortDesc:
      "Cát vàng bê tông hạt to, cát đen xây tô mịn. Đã qua sàng rửa sạch, không lẫn tạp chất.",
    images: [
      "https://media.vov.vn/sites/default/files/styles/large/public/2024-04/can-cat-nhan-tao-o-dau-01.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/cat-vang-be-tong.jpg",
      "https://vlxdhiepthuy.vn/wp-content/uploads/2021/07/cat-xay-to.jpg",
    ],
    badge: { text: "SẢN PHẨM SẠCH", class: "badge--green" },
    tabs: {
      desc: `<h3 class="detail-heading">Đặc điểm</h3><p class="detail-text">Cát được khai thác và qua hệ thống rửa để loại bỏ bùn sét, tạp chất hữu cơ.</p>`,
      specs: [
        { label: "Cát Bê Tông (Vàng)", value: "Module > 2.0 (Hạt to)" },
        { label: "Cát Xây Tô (Đen)", value: "Module 0.7 - 2.0 (Hạt mịn)" },
        { label: "Hàm lượng bùn", value: "< 1.5% (Bê tông)" },
        { label: "Tạp chất hữu cơ", value: "Không lẫn" },
      ],
      app: [
        "Sản xuất bê tông thương phẩm (Cát vàng).",
        "Xây tường, trát hoàn thiện (Cát đen).",
        "San lấp mặt bằng.",
      ],
    },
  },

  // 5. BÊ TÔNG NHỰA NÓNG
  {
    id: "be-tong-nhua-nong",
    name: "BÊ TÔNG NHỰA NÓNG",
    code: "ASP-RDG-05",
    price: "Liên hệ báo giá",
    shortDesc:
      "Bê tông nhựa chặt rải nóng. Đa dạng cấp phối C9.5, C12.5, C19. Đảm bảo độ nhám và độ bằng phẳng.",
    images: [
      "https://thietbimaianh.com.vn/uploads/tiny_uploads/_DSC0316.jpg",
      "https://muabanmayxaydung.vn/wp-content/uploads/2020/07/tham-be-tong-nhua-nong.jpg",
      "https://nhuaduong.net/wp-content/uploads/2019/08/thi-cong-be-tong-nhua-nong.jpg",
    ],
    badge: { text: "CÔNG NGHỆ CAO", class: "badge--blue" },
    tabs: {
      desc: `<h3 class="detail-heading">Quy trình</h3><p class="detail-text">Hỗn hợp cốt liệu đá, cát, bột khoáng và nhựa đường Polymer được trộn nóng ở nhiệt độ cao, kiểm soát nghiêm ngặt.</p>`,
      specs: [
        { label: "Nhựa chặt C9.5", value: "Cỡ hạt max 9.5mm" },
        { label: "Nhựa chặt C12.5", value: "Cỡ hạt max 12.5mm" },
        { label: "Nhựa chặt C19", value: "Cỡ hạt max 19mm" },
      ],
      app: [
        "Làm lớp mặt đường bộ, cao tốc.",
        "Sân bay, bến bãi, kho xưởng.",
        "Đường nội bộ khu dân cư.",
      ],
    },
  },

  // 6. CẤU KIỆN ĐÚC SẴN
  {
    id: "cau-kien-duc-san",
    name: "CẤU KIỆN ĐÚC SẴN",
    code: "CK-RDG-06",
    price: "Liên hệ báo giá",
    shortDesc:
      "Cống tròn, cống hộp, hố ga, dải phân cách. Bề mặt láng mịn, kích thước chuẩn xác.",
    images: [
      "https://www.sivali.vn/images/c%E1%BB%91ng_b%C3%AA_t%C3%B4ng_t%E1%BA%A1i_qu%E1%BA%A3ng_ninh.jpg",
      "https://betongducsan.net/wp-content/uploads/2019/03/cong-hop-be-tong-cot-thep.jpg",
      "https://betongducsan.net/wp-content/uploads/2019/03/dai-phan-cach-be-tong.jpg",
    ],
    badge: { text: "CÔNG NGHỆ CAO", class: "badge--blue" },
    tabs: {
      desc: `<h3 class="detail-heading">Chất lượng</h3><p class="detail-text">Kiểm soát từ khâu làm lồng thép, ghép cốp pha đến bảo dưỡng. Nhận đúc theo bản vẽ riêng.</p>`,
      specs: [
        { label: "Cống tròn", value: "D300 - D2000" },
        { label: "Cống hộp", value: "1.6m x 1.6m, 2m x 2m..." },
        { label: "Hố ga", value: "Đúc sẵn / Lắp ghép" },
        { label: "Tải trọng", value: "VH (Vỉa hè), HL-93 (Hoạt tải xe)" },
      ],
      app: [
        "Hệ thống thoát nước đô thị, KCN.",
        "Hào kỹ thuật điện, nước.",
        "Dải phân cách giao thông.",
      ],
    },
  },
];
