/* ==========================================================================
   SCRIPT TRANG DANH SÁCH SẢN PHẨM (STRUCTURED DATA VERSION)
   File: assets/js/products/products-page-script.js
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("all-products-container");

  if (!container || typeof productsDetailDB === "undefined") {
    console.error("Lỗi: Không tìm thấy DB hoặc Container.");
    return;
  }

  const productsHTML = productsDetailDB
    .map((product) => {
      // Badge
      const badgeHTML = product.badge
        ? `<span class="badge ${product.badge.class}">${product.badge.text}</span>`
        : "";

      // Image
      const imageSrc =
        product.images && product.images.length > 0
          ? product.images[0]
          : "https://via.placeholder.com/400";

      // Specs (Lấy từ mảng tabs.specs mới)
      let specsHTML = "";
      if (
        product.tabs &&
        Array.isArray(product.tabs.specs) &&
        product.tabs.specs.length > 0
      ) {
        // Lấy 2 thông số đầu tiên
        const specItems = product.tabs.specs
          .slice(0, 2)
          .map((item) => `<li>${item.label}: ${item.value}</li>`)
          .join("");
        specsHTML = `<ul class="product-card__specs">${specItems}</ul>`;
      }

      return `
            <div class="product-grid-item">
                <article class="product-card card-base">
                    <div class="product-card__media">
                        <img src="${imageSrc}" alt="${product.name}" class="product-card__img">
                        ${badgeHTML}
                    </div>
                    <div class="product-card__content">
                        <h3 class="product-card__title">${product.name}</h3>
                        <p class="product-card__desc">${product.shortDesc}</p>
                        ${specsHTML}
                        <a href="products-detail.html?id=${product.id}" class="product-card__link">
                            XEM CHI TIẾT
                        </a>
                    </div>
                </article>
            </div>
        `;
    })
    .join("");

  container.innerHTML = productsHTML;
});
