/* ==========================================================================
   DATABASE SẢN PHẨM TÓM TẮT (DÙNG CHO TRANG CHỦ)
   File này chỉ chứa thông tin để render thẻ Product Card trên Index.html
   ========================================================================== */

const productsDB = [
  // 1. BÊ TÔNG
  {
    id: "be-tong-thuong-pham",
    name: "BÊ TÔNG THƯƠNG PHẨM",
    desc: "Đầy đủ các mác từ M100 đến M600, được trộn bằng máy móc tự động tại trạm trộn theo tỷ lệ chính xác, mang lại chất lượng đồng đều.",
    image:
      "https://media.istockphoto.com/id/1040410620/vi/anh/%C4%91%E1%BB%95-b%C3%AA-t%C3%B4ng-l%C3%AAn-n%E1%BB%81n-m%C3%B3ng-t%C3%B2a-nh%C3%A0.jpg?s=2048x2048&w=is&k=20&c=lWOqcEL_BrrIhjL3H9SJHUTSuuSxDLDMS09QeVhRHDs=",
    badge: { text: "BÁN CHẠY NHẤT", class: "badge--orange" },
    specs: ["Độ sụt ổn định", "Trạm trộn công suất lớn"],
  },

  // 2. ĐÁ XÂY DỰNG
  {
    id: "da-xay-dung",
    name: "ĐÁ XÂY DỰNG",
    desc: "Cung ứng đá 1x2, 2x4, 4x6 và đá các loại sản phẩm khác. Sản phẩm sạch, ít tạp chất, độ bền nén cao đạt chuẩn ISO.",
    image:
      "https://files.bienphong.com.vn//bbpmedia/media/1200/2023/7/19/19132228pmimage003.jpg",
    badge: { text: "KHAI THÁC TRỰC TIẾP", class: "badge--blue" },
    specs: ["Độ nén cao", "Trữ lượng lớn"],
  },

  // 3. GẠCH KHÔNG NUNG
  {
    id: "gach-khong-nung",
    name: "GẠCH KHÔNG NUNG",
    desc: "Gạch Block, gạch vỉa hè Terrazzo với đa dạng mẫu mã và màu sắc. Độ bền cao, cách âm, cách nhiệt vượt trội.",
    image:
      "https://vro.vn/wp-content/uploads/2025/05/gach-khong-nung-block.jpg",
    badge: { text: "SẢN PHẨM XANH", class: "badge--green" },
    // Thêm class định vị ảnh nếu cần (obj-pos-right/left/bottom)
    imageClass: "obj-pos-right",
    specs: ["Thân thiện môi trường", "Đa dạng kích thước"],
  },

  // 4. CÁT XÂY DỰNG
  {
    id: "cat-xay-dung",
    name: "CÁT XÂY DỰNG",
    desc: "Cát vàng đổ bê tông, cát xây tô sàng rửa sạch, module hạt đều, khả năng lấp đầy, giúp tăng cường độ bê tông.",
    image:
      "https://media.vov.vn/sites/default/files/styles/large/public/2024-04/can-cat-nhan-tao-o-dau-01.jpg",
    badge: { text: "SẢN PHẨM XANH", class: "badge--green" },
    imageClass: "obj-pos-bottom",
    specs: ["Không lẫn tạp chất", "Nguồn gốc rõ ràng"],
  },

  // 5. BÊ TÔNG NHỰA NÓNG
  {
    id: "be-tong-nhua-nong",
    name: "BÊ TÔNG NHỰA NÓNG",
    desc: "Bê tông nhựa chặt (Asphalt) rải nóng cho các công trình giao thông. Đa dạng cấp phối phù hợp với nhu cầu thi công thực tế.",
    image: "https://thietbimaianh.com.vn/uploads/tiny_uploads/_DSC0316.jpg",
    badge: { text: "CÔNG NGHỆ CAO", class: "badge--blue" },
    specs: ["Chịu tải trọng lớn", "Mặt đường êm thuận"],
  },

  // 6. CẤU KIỆN ĐÚC SẴN
  {
    id: "cau-kien-duc-san",
    name: "CẤU KIỆN ĐÚC SẴN",
    desc: "Cống tròn, cống hộp, dải phân cách bê tông cốt thép đúc sẵn, các loại cấu kiện khác... nhận đặt hàng theo yêu cầu.",
    image:
      "https://www.sivali.vn/images/c%E1%BB%91ng_b%C3%AA_t%C3%B4ng_t%E1%BA%A1i_qu%E1%BA%A3ng_ninh.jpg",
    badge: { text: "CÔNG NGHỆ CAO", class: "badge--blue" },
    specs: ["Bê tông mác cao", "Ván khuôn định hình thép"],
  },
];
