/* ==========================================================================
   DATABASE TRANG GIỚI THIỆU (RICH CONTENT)
   File: assets/js/about/about-page-db.js
   ========================================================================== */

const aboutPageDB = {
  header: {
    title: "VỀ <span class='highlight'>CHÚNG TÔI</span>",
    desc: "Hành trình hơn 10 năm kiến tạo những giá trị bền vững từ lòng đất mẹ.",
  },

  // 1. Giới thiệu chung & Ảnh Collage
  intro: {
    title: "CÂU CHUYỆN THƯƠNG HIỆU",
    desc: [
      "Khởi đầu từ một mỏ khai thác đá quy mô nhỏ tại Bình Thuận, Khoáng Sản Rạng Đông đã không ngừng nỗ lực để mở rộng quy mô và nâng cao chất lượng sản phẩm. Chúng tôi hiểu rằng, mỗi viên đá, mỗi mét khối bê tông đều là nền tảng cho sự an toàn và thịnh vượng của các công trình.",
      "Với phương châm 'Chất lượng tạo niềm tin', chúng tôi đã đầu tư mạnh mẽ vào dây chuyền nghiền sàng hiện đại của Nhật Bản và hệ thống trạm trộn bê tông tự động hóa hoàn toàn. Đến nay, Rạng Đông tự hào là đối tác chiến lược của nhiều dự án hạ tầng trọng điểm quốc gia.",
    ],
    // 3 ảnh cho Collage
    images: [
      "https://github.com/Hoaison3108/khoangsanrangdongdemov3/blob/main/assets/image/DJI_0057.JPG?raw=true", // Ảnh 1
      "https://images.pexels.com/photos/20591229/pexels-photo-20591229.jpeg", // Ảnh 2
      "https://images.pexels.com/photos/15071423/pexels-photo-15071423.jpeg", // Ảnh 3
    ],
  },

  // 2. Tầm nhìn - Sứ mệnh (Giữ nguyên)
  coreValues: [
    {
      icon: "fas fa-eye",
      color: "text-primary",
      title: "TẦM NHÌN",
      desc: "Trở thành đơn vị cung ứng vật liệu xây dựng hàng đầu khu vực Nam Trung Bộ & Tây Nguyên.",
    },
    {
      icon: "fas fa-rocket",
      color: "text-secondary",
      title: "SỨ MỆNH",
      desc: "Cung cấp giải pháp vật liệu tối ưu, bền vững, thân thiện với môi trường.",
    },
    {
      icon: "fas fa-gem",
      color: "text-primary",
      title: "GIÁ TRỊ CỐT LÕI",
      desc: "<strong>Uy tín - Tận tâm - Sáng tạo.</strong> Đặt lợi ích khách hàng làm kim chỉ nam.",
    },
    {
      icon: "fas fa-hands-helping", // Icon bắt tay hợp tác/giúp đỡ
      color: "text-secondary",
      title: "TRÁCH NHIỆM XÃ HỘI",
      desc: "Cam kết bảo vệ môi trường, hỗ trợ cộng đồng và đóng góp vào sự phát triển bền vững của địa phương.",
    },
  ],

  // 3. Ban Lãnh Đạo (Mới)
  team: [
    {
      name: "Ông Trần Công Hải",
      role: "Tổng Giám Đốc",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    },
    {
      name: "Ông Lê Thanh Cương",
      role: "Phó Tổng Giám Đốc",
      img: "https://images.pexels.com/photos/28186652/pexels-photo-28186652.jpeg",
    },
    {
      name: "Ông Nguyễn Trọng Sóng",
      role: "Giám Đốc Điều Hành Mỏ",
      img: "https://images.pexels.com/photos/7109090/pexels-photo-7109090.jpeg",
    },
    {
      name: "Ông Trần Minh Châu",
      role: "Trưởng Phòng Kinh Doanh",
      img: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
    },
  ],

  // 4. Lịch sử hình thành (Mới)
  timeline: [
    {
      year: "2013",
      title: "Thành lập công ty",
      desc: "Khai thác mỏ đá đầu tiên tại Lương Sơn.",
    },
    {
      year: "2015",
      title: "Mở rộng quy mô",
      desc: "Đầu tư dây chuyền nghiền sàng công suất 250 tấn/giờ.",
    },
    {
      year: "2018",
      title: "Trạm trộn Bê tông",
      desc: "Đầu tư trạm trộn bê tông thương phẩm công suất 120 tấn/giờ.",
    },
    {
      year: "2022",
      title: "Trạm trộn Bê tông nhựa",
      desc: "Đầu tư trạm trộn bê tông nhựa công suất 120 tấn/giờ.",
    },
    {
      year: "2025",
      title: "Chuyển đổi số",
      desc: "Áp dụng công nghệ quản lý ERP và sản xuất xanh.",
    },
  ],

  // 5. Thư viện ảnh (Mới)
  gallery: [
    "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=800",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800",
    "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800",
  ],
};
