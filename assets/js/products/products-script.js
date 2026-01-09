/* ==========================================================================
   PRODUCTS-SCRIPT.JS
   Xử lý logic riêng cho trang chi tiết sản phẩm
   (Gallery ảnh, Tabs nội dung, Slider sản phẩm liên quan)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // --- 1. PRODUCT GALLERY (XỬ LÝ CHUYỂN ẢNH) ---
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".p-gallery__thumb");

  if (mainImage && thumbs.length > 0) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        // 1. Lấy đường dẫn ảnh từ thẻ img bên trong thumb được click
        const newSrc = this.querySelector("img").src;

        // 2. Gán đường dẫn đó cho ảnh lớn với hiệu ứng mờ nhẹ
        mainImage.style.opacity = "0";
        setTimeout(() => {
          mainImage.src = newSrc;
          mainImage.style.opacity = "1";
        }, 200); // 200ms khớp với transition CSS nếu có

        // 3. Xóa class active ở tất cả thumbs
        thumbs.forEach((t) => t.classList.remove("active"));

        // 4. Thêm class active cho thumb hiện tại
        this.classList.add("active");
      });
    });
  }

  // --- 2. PRODUCT TABS (XỬ LÝ CHUYỂN TAB THÔNG TIN) ---
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // 1. Xóa class active ở tất cả các nút
        tabBtns.forEach((b) => b.classList.remove("active"));

        // 2. Thêm class active cho nút được click
        this.classList.add("active");

        // 3. Lấy ID của nội dung cần hiện (từ thuộc tính data-tab)
        const targetId = this.getAttribute("data-tab");

        // 4. Ẩn tất cả nội dung tab
        tabContents.forEach((content) => {
          content.style.display = "none";
        });

        // 5. Hiện nội dung tương ứng
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.style.display = "block";
          // Reset animation để hiệu ứng fade chạy lại
          targetContent.style.animation = "none";
          targetContent.offsetHeight; /* trigger reflow */
          targetContent.style.animation = null;
        }
      });
    });
  }

  // --- 3. RELATED PRODUCTS SLIDER (KHỞI TẠO SWIPER) ---
  // Kiểm tra xem có class .product-swiper không trước khi khởi tạo
  const productSwiperEl = document.querySelector(".product-swiper");

  if (productSwiperEl) {
    var productSwiper = new Swiper(".product-swiper", {
      slidesPerView: 1, // Mobile: 1 ảnh
      spaceBetween: 30, // Khoảng cách 30px
      loop: true, // Lặp lại vô tận
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // Tiếp tục chạy sau khi user tương tác
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2, // Tablet: 2 ảnh
        },
        1024: {
          slidesPerView: 3, // PC: 3 ảnh
        },
      },
    });
  }
});
