const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__links");

// 1. Kích hoạt menu khi bấm nút 3 gạch
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// 2. Tự động đóng menu khi click vào một link bất kỳ
// (Giúp người dùng nhìn thấy nội dung ngay sau khi chọn mục)
const navLinks = document.querySelectorAll(".navbar__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
  });
});
