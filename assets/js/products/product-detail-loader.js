document.addEventListener("DOMContentLoaded", function () {
  // 1. Lấy tham số 'id' từ URL (Ví dụ: ?id=be-tong-thuong-pham)
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // 2. Tìm sản phẩm trong Database
  const product = productsDB.find((p) => p.id === productId);

  // Nếu không tìm thấy sản phẩm (hoặc không có ID), chuyển về trang chủ hoặc hiện lỗi
  if (!product) {
    alert("Sản phẩm không tồn tại!");
    window.location.href = "index.html";
    return;
  }

  // 3. Đổ dữ liệu vào giao diện (DOM Manipulation)

  // --- Cập nhật Tiêu đề & Breadcrumb ---
  document.title = `${product.name} | Rạng Đông`;
  document.querySelector(".product-title").innerText = product.name;
  document.querySelector(
    ".text-subtitle"
  ).innerText = `MÃ SẢN PHẨM: ${product.code}`;
  document.querySelector(".breadcrumb .current").innerText = product.name;

  // --- Cập nhật Giá & Mô tả ngắn ---
  document.querySelector(".price-value").innerText = product.price;
  document.querySelector(".product-desc-short").innerText = product.shortDesc;

  // --- Cập nhật List thông số (Icon check) ---
  const specsList = document.querySelector(".product-specs-list");
  specsList.innerHTML = product.specs
    .map(
      (spec) => `
        <div class="spec-item">
            <i class="fas fa-check-circle"></i>
            <span>${spec}</span>
        </div>
    `
    )
    .join("");

  // --- Cập nhật Hình ảnh Gallery ---
  const mainImg = document.getElementById("mainImage");
  const thumbContainer = document.querySelector(".p-gallery__thumbs");

  // Ảnh lớn mặc định là ảnh đầu tiên
  mainImg.src = product.images[0];
  mainImg.alt = product.name;

  // Tạo danh sách ảnh nhỏ
  thumbContainer.innerHTML = product.images
    .map(
      (img, index) => `
        <div class="p-gallery__thumb ${
          index === 0 ? "active" : ""
        }" onclick="changeImage(this)">
            <img src="${img}" alt="${product.name} ${index + 1}">
        </div>
    `
    )
    .join("");

  // --- Cập nhật Nội dung Tabs ---
  document.getElementById("desc").innerHTML = product.tabs.desc;
  document.getElementById("specs").innerHTML = product.tabs.specs;
  document.getElementById("app").innerHTML = product.tabs.app;
});
