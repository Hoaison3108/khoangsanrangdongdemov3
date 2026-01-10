/* ==========================================================================
   WEB COMPONENT: NAVBAR DÙNG CHUNG
   File: assets/js/components/navbar-component.js
   ========================================================================== */

class AppNavbar extends HTMLElement {
  // Hàm này chạy ngay khi thẻ <app-navbar> được tạo trong HTML
  connectedCallback() {
    this.render();
    this.initMobileMenu();
    this.highlightActiveMenu();
  }

  // 1. DATA VÀ RENDER
  render() {
    // Cấu hình menu
    const menuItems = [
      { text: "TRANG CHỦ", link: "index.html", exact: true },
      { text: "GIỚI THIỆU", link: "about.html" },
      // aliases: Những trang con mà khi vào đó, menu này vẫn sáng
      {
        text: "SẢN PHẨM",
        link: "products.html",
        aliases: ["products.html", "products-detail.html"],
      },
      { text: "DỰ ÁN", link: "index.html#projects" },
      { text: "TIN TỨC", link: "index.html#news" },
      { text: "LIÊN HỆ", link: "index.html#contact" },
    ];

    // Xác định kiểu navbar (Trong suốt hay Có nền)
    const pathName = window.location.pathname;
    const pageName =
      pathName.substring(pathName.lastIndexOf("/") + 1) || "index.html";
    const isHomePage = pageName === "index.html" || pageName === "";
    const navClass = isHomePage ? "navbar" : "navbar navbar--solid";

    // Tạo HTML
    this.innerHTML = `
            <nav class="${navClass}">
                <div class="container navbar__container">
                    <a href="index.html" class="navbar__logo">
                        <img src="https://github.com/Hoaison3108/khoangsanrangdongdemov3/blob/main/assets/image/LOGO%20RDG%20Final%20new.png?raw=true" 
                             class="logo-img" alt="Logo Rạng Đông">
                        <div class="logo-text">
                            <span class="logo-text__top">KHOÁNG SẢN</span>
                            <span class="logo-text__bottom">RẠNG ĐÔNG</span>
                        </div>
                    </a>
                    
                    <div class="navbar__toggle" id="mobile-menu-btn">
                        <span class="bar"></span><span class="bar"></span><span class="bar"></span>
                    </div>
                    
                    <ul class="navbar__links">
                        ${menuItems
                          .map(
                            (item) => `
                            <li><a href="${
                              item.link
                            }" class="navbar__link" data-aliases='${JSON.stringify(
                              item.aliases || []
                            )}' data-exact="${item.exact || false}">${
                              item.text
                            }</a></li>
                        `
                          )
                          .join("")}
                    </ul>
                    
                    <a href="index.html#contact" class="btn btn--quote">BÁO GIÁ NGAY</a>
                </div>
            </nav>
        `;
  }

  // 2. LOGIC TỰ ĐỘNG ACTIVE MENU (Cực kỳ mạnh mẽ)
  highlightActiveMenu() {
    const pathName = window.location.pathname;
    const pageName =
      pathName.substring(pathName.lastIndexOf("/") + 1) || "index.html";
    const links = this.querySelectorAll(".navbar__link");

    links.forEach((link) => {
      link.classList.remove("navbar__link--active"); // Reset

      const href = link.getAttribute("href");
      const exact = link.getAttribute("data-exact") === "true";
      const aliases = JSON.parse(link.getAttribute("data-aliases"));

      let isActive = false;

      // Kiểm tra Aliases (Ưu tiên số 1: Dành cho trang con như products-detail)
      if (
        aliases.length > 0 &&
        aliases.some((alias) => pageName.includes(alias))
      ) {
        isActive = true;
      }
      // Kiểm tra Exact (Dành cho trang chủ)
      else if (exact) {
        if (pageName === href) isActive = true;
      }
      // Kiểm tra trang hiện tại
      else if (pageName === href) {
        isActive = true;
      }

      if (isActive) {
        link.classList.add("navbar__link--active");
      }
    });
  }

  // 3. XỬ LÝ MOBILE MENU
  initMobileMenu() {
    const menuBtn = this.querySelector("#mobile-menu-btn");
    const menuList = this.querySelector(".navbar__links");
    const navLinks = this.querySelectorAll(".navbar__link");

    if (menuBtn && menuList) {
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("is-active");
        menuList.classList.toggle("active");
      });
    }

    // Click vào link thì đóng menu mobile
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("is-active");
        menuList.classList.remove("active");
      });
    });
  }
}

// Định nghĩa thẻ <app-navbar> để trình duyệt hiểu
customElements.define("app-navbar", AppNavbar);
