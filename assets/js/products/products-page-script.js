/* ==========================================================================
   SCRIPT TRANG DANH SÁCH SẢN PHẨM (products.html)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("all-products-container");

  // Kiểm tra DB
  if (typeof productsDetailDB === "undefined" || !container) {
    console.error("Lỗi: Không tìm thấy DB hoặc Container.");
    return;
  }

  // Xóa nội dung cũ (nếu có)
  container.innerHTML = "";

  // Duyệt qua DB và tạo HTML
  productsDetailDB.forEach((product) => {
    // Xử lý Badge
    let badgeHTML = product.badge
      ? `<span class="badge ${product.badge.class}">${product.badge.text}</span>`
      : "";

    // Xử lý ảnh (Lấy ảnh đầu tiên trong mảng images)
    let imageSrc =
      product.images && product.images.length > 0
        ? product.images[0]
        : "https://via.placeholder.com/400";

    // Xử lý Specs (Lấy 2 dòng đầu làm tóm tắt)
    let specsHTML = "";
    if (product.specs && product.specs.length > 0) {
      specsHTML = `<ul class="product-card__specs">`;
      // Chỉ lấy tối đa 2 thông số để thẻ không quá dài
      product.specs.slice(0, 2).forEach((spec) => {
        specsHTML += `<li>${spec}</li>`;
      });
      specsHTML += `</ul>`;
    }

    const html = `
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

    container.innerHTML += html;
  });
});
