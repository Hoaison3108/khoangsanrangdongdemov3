/* ==========================================================================
   DATABASE DỰ ÁN (PROJECTS)
   1. projectsDB: Danh sách text mô tả dự án.
   2. projectGalleryDB: Danh sách ảnh hiển thị (Ảnh đầu tiên = Ảnh to).
   ========================================================================== */

// 1. Danh sách Text (Giữ nguyên cái cũ của bạn)
const projectsDB = [
  {
    id: "ha-tang-giao-thong",
    title: "HẠ TẦNG GIAO THÔNG",
    desc: "Cung cấp hơn 500,000 m3 đá và bê tông cho đoạn qua Phan Thiết - Vĩnh Hảo.",
  },
  {
    id: "cong-nghiep-nang",
    title: "CÔNG NGHIỆP NẶNG - THỦY ĐIỆN",
    desc: "Đối tác cung ứng vật liệu độc quyền cho hạ tầng kỹ thuật và các nhà máy.",
  },
  {
    id: "cong-trinh-dan-dung",
    title: "CÔNG TRÌNH DÂN DỤNG",
    desc: "Cung ứng các dòng bê tông mác cao, giá cả phù hợp với các công trình dân dụng.",
  },
];

// 2. Danh sách Ảnh Gallery (MỚI THÊM)
// Quy ước: Phần tử đầu tiên [0] sẽ hiện ở ô LỚN (bên trái).
// Các phần tử tiếp theo [1], [2] sẽ hiện ở ô NHỎ (bên phải).
const projectGalleryDB = [
  {
    src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/12/5/1124197/1.JPG",
    alt: "Thi công đường cao tốc",
  },
  {
    src: "https://images.unsplash.com/photo-1575971637203-d6255d9947a9?q=80&w=1074&auto=format&fit=crop",
    alt: "Hệ thống ống cống",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682142037005-ed60a8e1958d?q=80&w=1264&auto=format&fit=crop",
    alt: "Công trường xây dựng",
  },
];
