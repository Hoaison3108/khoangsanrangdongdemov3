/* ==========================================================================
   SCRIPT CHI TIẾT SẢN PHẨM (STRUCTURED DATA VERSION)
   File: assets/js/products/products-detail-script.js
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Lấy ID và Kiểm tra
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    window.location.href = "products.html";
    return;
  }
  if (typeof productsDetailDB === "undefined") return;

  const product = productsDetailDB.find((p) => p.id === productId);

  if (!product) {
    const container = document.querySelector(".product-detail-container");
    if (container)
      container.innerHTML = `<div style="text-align:center; padding:50px;"><h2>Không tìm thấy sản phẩm!</h2></div>`;
    return;
  }

  // 2. Render Thông tin Cơ bản
  document.title = `${product.name} - Khoáng Sản Rạng Đông`;

  const breadcrumbName = document.getElementById("breadcrumb-name");
  if (breadcrumbName) breadcrumbName.innerText = product.name;

  document.getElementById("detail-name").innerText = product.name;
  document.getElementById("detail-code").innerText = `MÃ SP: ${product.code}`;
  document.getElementById("detail-price").innerText = product.price;
  document.getElementById("detail-desc").innerText = product.shortDesc;

  // --- LOGIC MỚI: Hiển thị Specs tóm tắt (Dưới giá tiền) ---
  // Lấy 3 thông số đầu tiên từ mảng specs để hiển thị
  const specsContainer = document.getElementById("detail-specs-list");
  if (specsContainer && Array.isArray(product.tabs.specs)) {
    // Chỉ lấy 3 dòng đầu
    const topSpecs = product.tabs.specs.slice(0, 3);
    specsContainer.innerHTML = topSpecs
      .map((item) => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
      .join("");
  } else if (specsContainer) {
    specsContainer.innerHTML = "";
  }

  // 3. Render Hình ảnh (Giữ nguyên)
  const mainImg = document.getElementById("detail-main-img");
  const thumbContainer = document.getElementById("detail-thumbs");

  if (product.images && product.images.length > 0) {
    mainImg.src = product.images[0];
    thumbContainer.innerHTML = product.images
      .map(
        (src, index) => `
            <img src="${src}" class="thumb-img ${index === 0 ? "active" : ""}" 
                 onclick="changeMainImage(this, '${src}')" alt="Thumb ${
          index + 1
        }">
        `
      )
      .join("");
  }

  // 4. Render Tabs (NÂNG CẤP LOGIC)
  const contentArea = document.getElementById("tab-content-area");

  // Hàm tạo nội dung Tab dựa trên kiểu dữ liệu
  function renderTabContent(key, data) {
    if (!data) return "<p>Đang cập nhật...</p>";

    // Tab Mô tả: HTML string
    if (key === "description") return data.desc;

    // Tab Thông số: Array -> Table
    if (key === "specifications" && Array.isArray(data.specs)) {
      const rows = data.specs
        .map((item) => `<tr><td>${item.label}</td><td>${item.value}</td></tr>`)
        .join("");
      return `<div class="table-responsive">
                        <table class="specs-table">
                            <tr><th>Đặc tính</th><th>Thông số</th></tr>
                            ${rows}
                        </table>
                    </div>`;
    }

    // Tab Ứng dụng: Array -> List
    if (key === "application" && Array.isArray(data.app)) {
      const items = data.app.map((str) => `<li>${str}</li>`).join("");
      return `<ul class="detail-list">${items}</ul>`;
    }

    return "Nội dung không khả dụng.";
  }

  // Mặc định load tab desc
  contentArea.innerHTML = renderTabContent("description", product.tabs);

  // Sự kiện chuyển Tab
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const htmlKey = this.getAttribute("data-tab"); // description, specifications, application
      contentArea.innerHTML = renderTabContent(htmlKey, product.tabs);
    });
  });
});

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
