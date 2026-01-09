/* ==========================================================================
   SCRIPT CHI TIẾT SẢN PHẨM (FINAL FIXED - UPDATE MENU ACTIVE)
   File: assets/js/products/products-detail-script.js
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Lấy ID sản phẩm từ URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  // --- [MỚI] LOGIC CẬP NHẬT TRẠNG THÁI MENU ---
  // Mục đích: Tắt sáng "Trang chủ" và bật sáng "Sản phẩm"
  const navLinks = document.querySelectorAll(".navbar__link");
  if (navLinks.length > 0) {
    navLinks.forEach((link) => {
      // 1. Xóa class active ở tất cả các link (bao gồm Trang chủ)
      link.classList.remove("navbar__link--active");

      // 2. Kiểm tra nếu link này trỏ tới phần Products (href chứa '#products')
      // hoặc kiểm tra textContent nếu cần
      const href = link.getAttribute("href");
      if (href && href.includes("#products")) {
        link.classList.add("navbar__link--active");
      }
    });
  }
  // ---------------------------------------------

  // Nếu không có ID trên URL -> Chuyển về mục sản phẩm ở trang chủ
  if (!productId) {
    window.location.href = "index.html#products";
    return;
  }

  // Kiểm tra DB
  if (typeof productsDetailDB === "undefined") {
    console.error("Lỗi: Không tìm thấy productsDetailDB.");
    return;
  }

  // 2. Tìm sản phẩm
  const product = productsDetailDB.find((p) => p.id === productId);

  // Xử lý trường hợp ID sai
  if (!product) {
    document.querySelector(".products-detail-container").innerHTML = `
            <div style="text-align:center; padding: 50px; grid-column: 1/-1;">
                <h2 class="heading-xl">Không tìm thấy sản phẩm!</h2>
                <p>Sản phẩm bạn đang tìm kiếm không tồn tại.</p>
                <br>
                <a href="index.html#products" class="btn btn--primary">XEM CÁC SẢN PHẨM KHÁC</a>
            </div>`;
    return;
  }

  // --- RENDER DỮ LIỆU ---

  // A. Thông tin cơ bản
  document.title = `${product.name} - Khoáng Sản Rạng Đông`;
  document.getElementById("breadcrumb-name").innerText = product.name;
  document.getElementById("detail-name").innerText = product.name;
  document.getElementById("detail-code").innerText = `MÃ SP: ${product.code}`;
  document.getElementById("detail-price").innerText = product.price;
  document.getElementById("detail-desc").innerText = product.shortDesc;

  // B. Hiển thị Specs tóm tắt
  const specsContainer = document.getElementById("detail-specs-list");
  if (specsContainer && product.specs && product.specs.length > 0) {
    specsContainer.innerHTML = product.specs
      .map((spec) => `<li>${spec}</li>`)
      .join("");
  } else if (specsContainer) {
    specsContainer.innerHTML = "";
  }

  // C. Gallery Hình ảnh
  const mainImg = document.getElementById("detail-main-img");
  const thumbContainer = document.getElementById("detail-thumbs");

  if (product.images && product.images.length > 0) {
    mainImg.src = product.images[0];

    thumbContainer.innerHTML = product.images
      .map(
        (src, index) => `
            <img src="${src}" 
                 class="thumb-img ${index === 0 ? "active" : ""}" 
                 onclick="changeMainImage(this, '${src}')"
                 alt="Thumb ${index + 1}">
        `
      )
      .join("");
  } else {
    mainImg.src = "https://via.placeholder.com/600x400?text=No+Image";
  }

  // D. Tabs Nội dung
  const tabMap = {
    description: "desc",
    specifications: "specs",
    application: "app",
  };

  const contentArea = document.getElementById("tab-content-area");
  contentArea.innerHTML =
    product.tabs.desc || "<p>Nội dung đang cập nhật...</p>";

  // Xử lý Click Tab
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const key = this.getAttribute("data-tab");
      const dbKey = tabMap[key];
      contentArea.innerHTML =
        product.tabs[dbKey] || "<p>Nội dung đang cập nhật...</p>";
    });
  });
});

// Hàm Global đổi ảnh
window.changeMainImage = function (thumbElement, srcUrl) {
  const mainImg = document.getElementById("detail-main-img");
  mainImg.style.opacity = 0.5;
  setTimeout(() => {
    mainImg.src = srcUrl;
    mainImg.style.opacity = 1;
  }, 150);

  document
    .querySelectorAll(".thumb-img")
    .forEach((img) => img.classList.remove("active"));
  thumbElement.classList.add("active");
};
