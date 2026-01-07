/* --- File: ./assets/js/script.js --- */

// 1. Sticky Navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--sticky");
  } else {
    navbar.classList.remove("navbar--sticky");
  }
});

// Mobile Menu Toggle
// 1. Lấy các phần tử cần thiết từ DOM
const menuBtn = document.querySelector("#mobile-menu");
const menuList = document.querySelector(".navbar__links");
const navLinks = document.querySelectorAll(".navbar__link");

// 2. Xử lý sự kiện click vào nút 3 gạch
menuBtn.addEventListener("click", () => {
  // Toggle class 'is-active' cho nút 3 gạch (để tạo hiệu ứng xoay X)
  menuBtn.classList.toggle("is-active");
  // Toggle class 'active' cho menu (để menu trượt xuống)
  menuList.classList.toggle("active");
});

// 3. (Tùy chọn) Tự động đóng menu khi người dùng chọn 1 mục
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Xóa hết các class kích hoạt để menu đóng lại
    menuBtn.classList.remove("is-active");
    menuList.classList.remove("active");
  });
});
