/**
 * MAIN SCRIPT - KHOÁNG SẢN RẠNG ĐÔNG
 * -----------------------------------------------------------
 * 1. Global Setup (Navbar, Mobile Menu)
 * 2. Data Rendering Functions (Company, Stats, Products, etc.)
 * 3. UI Logic (Sliders, Animations)
 * 4. Initialization (DOMContentLoaded)
 */

/* ==========================================================================
   1. GLOBAL SETUP (NAVBAR & MOBILE MENU)
   ========================================================================== */
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#mobile-menu");
const menuList = document.querySelector(".navbar__links");
const navLinks = document.querySelectorAll(".navbar__link");

// Sticky Navbar Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--sticky");
  } else {
    navbar.classList.remove("navbar--sticky");
  }
});

// Mobile Menu Toggle
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    menuList.classList.toggle("active");
  });
}

// Close Menu when clicking a link
if (navLinks) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("is-active");
      menuList.classList.remove("active");
    });
  });
}

/* ==========================================================================
   2. DATA RENDERING FUNCTIONS
   ========================================================================== */

/**
 * Render thông tin công ty (Footer, Contact Page)
 * Dữ liệu từ: assets/js/common/company-db.js
 */
function renderCompanyInfo() {
  if (typeof companyInfoDB === "undefined") return;

  // A. Footer Contact Info
  const footerAddress = document.querySelector(
    ".footer__contact-item .fa-map-marker-alt"
  );
  if (footerAddress)
    footerAddress.nextElementSibling.innerText = companyInfoDB.address;

  const footerPhone = document.querySelector(
    ".footer__contact-item .fa-phone-alt"
  );
  if (footerPhone)
    footerPhone.nextElementSibling.innerText = `Hotline: ${companyInfoDB.hotline} - ${companyInfoDB.phoneTable}`;

  const footerTime = document.querySelector(".footer__contact-item .fa-clock");
  if (footerTime)
    footerTime.nextElementSibling.innerText = companyInfoDB.workingHours;

  // B. Footer Social Links
  const socialContainer = document.querySelector(
    ".footer__about .social-links"
  );
  if (socialContainer) {
    socialContainer.innerHTML = companyInfoDB.socials
      .map(
        (social) => `
            <a href="${social.link}" class="social-links__item" target="_blank" title="${social.name}">
                <i class="${social.icon}"></i>
            </a>
        `
      )
      .join("");
  }

  // C. Footer Menu Links
  const footerNavList = document.querySelector(".footer__nav .footer__list");
  if (footerNavList) {
    footerNavList.innerHTML = companyInfoDB.footerLinks
      .map(
        (link) => `
            <li><a href="${link.link}" class="footer__link">${link.text}</a></li>
        `
      )
      .join("");
  }

  // D. Contact Section (Trang chủ hoặc trang Contact)
  const contactValues = document.querySelectorAll(".contact__value");
  if (contactValues.length >= 3) {
    contactValues[0].innerText = companyInfoDB.hotlineDisplay; // Hotline
    contactValues[1].innerText = companyInfoDB.email; // Email
    contactValues[2].innerText = companyInfoDB.address; // Address
  }
}

/**
 * Render số liệu thống kê (Stats Section)
 * Dữ liệu từ: assets/js/common/stats-db.js
 */
function renderStats() {
  const statsContainer = document.querySelector(".stats__container");
  if (!statsContainer || typeof statsDB === "undefined") return;

  statsContainer.innerHTML = statsDB
    .map((stat) => {
      let suffix = "";
      if (stat.label.includes("%")) suffix = "%";
      if (stat.label.includes("+")) suffix = "+";
      if (stat.label.includes("Tỷ")) suffix = " Tỷ";
      if (stat.number === 24) suffix = "/7";

      let cleanLabel = stat.label
        .replace(" (%)", "")
        .replace(" +", "")
        .replace(" (Tỷ)", "")
        .replace(" (h/7)", "");

      return `
        <div class="stats__item">
            <h2 class="stats__number">
                <span class="counter" data-target="${stat.number}">0</span>${suffix}
            </h2>
            <p class="stats__label">${cleanLabel}</p>
        </div>`;
    })
    .join("");

  // Khởi tạo Animation sau khi render
  initStatsObserver();
}

/**
 * Render danh sách sản phẩm (Products Section)
 * Dữ liệu từ: assets/js/products/products-db.js
 */
function renderProductCards() {
  const swiperWrapper = document.querySelector(
    ".product-swiper .swiper-wrapper"
  );
  if (!swiperWrapper || typeof productsDB === "undefined") return;

  swiperWrapper.innerHTML = "";
  productsDB.forEach((product) => {
    let badgeHTML = product.badge
      ? `<span class="badge ${product.badge.class}">${product.badge.text}</span>`
      : "";

    let specsHTML = "";
    if (product.specs && product.specs.length > 0) {
      specsHTML =
        `<ul class="product-card__specs">` +
        product.specs.map((s) => `<li>${s}</li>`).join("") +
        `</ul>`;
    }

    let imgSrc = product.image || (product.images ? product.images[0] : "");
    let descText = product.desc || product.shortDesc || "";
    let imgClass = product.imageClass || "";

    const slideHTML = `
            <div class="swiper-slide">
                <article class="product-card card-base">
                    <div class="product-card__media">
                        <img src="${imgSrc}" alt="${product.name}" class="product-card__img ${imgClass}">
                        ${badgeHTML}
                    </div>
                    <div class="product-card__content">
                        <h3 class="product-card__title">${product.name}</h3>
                        <p class="product-card__desc">${descText}</p>
                        ${specsHTML}
                        <a href="product-detail.html?id=${product.id}" class="product-card__link">XEM CHI TIẾT</a>
                    </div>
                </article>
            </div>`;
    swiperWrapper.innerHTML += slideHTML;
  });

  initProductSwiper();
}

/**
 * Render ý kiến khách hàng (Testimonials Section)
 * Dữ liệu từ: assets/js/testimonials/testimonials-db.js
 */
function renderTestimonials() {
  const swiperWrapper = document.querySelector(
    ".testimonial-swiper .swiper-wrapper"
  );
  if (!swiperWrapper || typeof testimonialsDB === "undefined") return;

  swiperWrapper.innerHTML = testimonialsDB
    .map((item) => {
      let starsHTML = "★".repeat(item.stars) + "☆".repeat(5 - item.stars);
      return `
            <div class="swiper-slide">
                <div class="testimonial-card card-base">
                    <div class="testimonial-card__stars">${starsHTML}</div>
                    <p class="testimonial-card__comment">"${item.comment}"</p>
                    <div class="testimonial-card__user">
                        <div class="testimonial-card__avatar">
                            <img src="${item.avatar}" alt="${item.name}" class="testimonial-card__img obj-pos-top">
                        </div>
                        <div class="testimonial-card__meta">
                            <strong class="testimonial-card__name">${item.name}</strong>
                            <p class="testimonial-card__company">${item.company}</p>
                        </div>
                    </div>
                </div>
            </div>`;
    })
    .join("");

  initTestimonialSwiper();
}

/**
 * Render danh sách dự án (Projects List)
 * Dữ liệu từ: assets/js/projects/projects-db.js
 */
function renderProjects() {
  const container = document.querySelector(".project-list");
  if (container && typeof projectsDB !== "undefined") {
    container.innerHTML = projectsDB
      .map(
        (p) => `
            <div class="project-card-simple">
                <h4 class="project-card-simple__title">${p.title}</h4>
                <p class="project-card-simple__desc">${p.desc}</p>
            </div>
        `
      )
      .join("");
  }
}

/**
 * Render hình ảnh dự án (Project Gallery)
 * Dữ liệu từ: assets/js/projects/projects-db.js (projectGalleryDB)
 */
function renderProjectGallery() {
  const container = document.querySelector(".projects-showcase__gallery");
  if (
    container &&
    typeof projectGalleryDB !== "undefined" &&
    projectGalleryDB.length > 0
  ) {
    const largeImg = projectGalleryDB[0];
    const smallImgsHTML = projectGalleryDB
      .slice(1)
      .map(
        (img) => `
            <div class="projects-showcase__small-item">
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `
      )
      .join("");

    container.innerHTML = `
            <div class="projects-showcase__large"><img src="${largeImg.src}" alt="${largeImg.alt}"></div>
            <div class="projects-showcase__small">${smallImgsHTML}</div>
        `;
  }
}

/**
 * Render tin tức (News Section)
 * Dữ liệu từ: assets/js/news/news-db.js
 */
function renderNews() {
  const container = document.querySelector(".news__grid");
  if (container && typeof newsDB !== "undefined") {
    container.innerHTML = newsDB
      .map(
        (item) => `
            <article class="news-card card-base">
                <div class="news-card__media">
                    <img src="${item.image}" alt="${item.title}" class="news-card__img">
                    <span class="news-date-badge">${item.date}</span>
                </div>
                <div class="news-card__body">
                    <h3 class="news-card__title">${item.title}</h3>
                    <p class="news-card__excerpt">${item.desc}</p>
                    <a href="${item.link}" class="news-card__link">ĐỌC TIẾP <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `
      )
      .join("");
  }
}

/* ==========================================================================
   3. UI LOGIC (SLIDERS & ANIMATIONS)
   ========================================================================== */

// --- A. Swiper Initializers ---

function initProductSwiper() {
  if (document.querySelector(".product-swiper")) {
    new Swiper(".product-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }
}

function initTestimonialSwiper() {
  if (document.querySelector(".testimonial-swiper")) {
    new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
    });
  }
}

// --- B. Hero Slider Logic ---
function initHeroSlider() {
  const heroSection = document.querySelector(".hero");
  if (!heroSection) return;

  const heroImages = [
    "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1680787317308-fd872f9cde12?q=80&w=687&auto=format&fit=crop",
    "https://media.istockphoto.com/id/1040410620/vi/anh/%C4%91%E1%BB%95-b%C3%AA-t%C3%B4ng-l%C3%AAn-n%E1%BB%81n-m%C3%B3ng-t%C3%B2a-nh%C3%A0.jpg?s=2048x2048&w=is&k=20&c=lWOqcEL_BrrIhjL3H9SJHUTSuuSxDLDMS09QeVhRHDs=",
  ];

  // Tạo HTML cho slider
  const container = document.createElement("div");
  container.className = "hero-slider-container";

  heroImages.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = `hero-slide ${i === 0 ? "active" : ""}`;
    slide.style.backgroundImage = `url('${src}')`;
    container.appendChild(slide);
  });

  // Thêm nút điều hướng
  const prevBtn = document.createElement("button");
  prevBtn.className = "slider-nav-btn slider-btn-prev";
  prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';

  const nextBtn = document.createElement("button");
  nextBtn.className = "slider-nav-btn slider-btn-next";
  nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

  heroSection.insertBefore(container, heroSection.firstChild);
  heroSection.appendChild(prevBtn);
  heroSection.appendChild(nextBtn);

  // Logic chuyển slide
  let currentIndex = 0;
  const slides = document.querySelectorAll(".hero-slide");
  let isAnimating = false;
  let interval;

  const changeSlide = (nextIndex) => {
    if (isAnimating) return;
    isAnimating = true;

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];
    const direction = nextIndex > currentIndex ? "next" : "prev";

    // Reset vị trí
    slides.forEach((s) => {
      if (s !== currentSlide && s !== nextSlide) {
        s.className = "hero-slide"; // Reset class
        s.style.transform = "translateX(100%)";
      }
    });

    // Setup vị trí ban đầu cho slide mới
    nextSlide.style.transition = "none";
    nextSlide.style.transform =
      direction === "next" ? "translateX(100%)" : "translateX(-100%)";
    void nextSlide.offsetWidth; // Force Reflow

    // Animation
    nextSlide.style.transition = "transform 1.5s ease-in-out";
    currentSlide.style.transition = "transform 1.5s ease-in-out";

    nextSlide.classList.add("active");
    nextSlide.style.transform = "translateX(0)";

    currentSlide.classList.remove("active");
    currentSlide.style.transform =
      direction === "next" ? "translateX(-100%)" : "translateX(100%)";

    currentIndex = nextIndex;
    setTimeout(() => (isAnimating = false), 1500);
  };

  const next = () => changeSlide((currentIndex + 1) % slides.length);
  const prev = () =>
    changeSlide((currentIndex - 1 + slides.length) % slides.length);

  nextBtn.addEventListener("click", () => {
    clearInterval(interval);
    next();
    interval = setInterval(next, 5000);
  });
  prevBtn.addEventListener("click", () => {
    clearInterval(interval);
    prev();
    interval = setInterval(next, 5000);
  });

  interval = setInterval(next, 5000);
}

// --- C. About Slider Logic ---
function initAboutSlider() {
  const slides = document.querySelectorAll(".about-slide-item");
  if (slides.length > 0) {
    let idx = 0;
    setInterval(() => {
      slides[idx].classList.remove("active");
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add("active");
    }, 4000);
  }
}

// --- D. Stats Counter Animation ---
function initStatsObserver() {
  const statsSection = document.querySelector(".stats");
  const counters = document.querySelectorAll(".counter");
  let hasStarted = false;

  if (!statsSection || counters.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const duration = 2000;
            const increment = target / (duration / 20);

            const updateCount = () => {
              const current = +counter.innerText;
              if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 20);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
          });
          hasStarted = true;
          observer.unobserve(statsSection);
        }
      });
    },
    { threshold: 0.4 }
  );
  observer.observe(statsSection);
}

/* ==========================================================================
   4. INITIALIZATION (CHẠY CHƯƠNG TRÌNH)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  // 1. Render Common & Data Driven Sections
  renderCompanyInfo();
  renderStats(); // Stats Animation sẽ tự kích hoạt sau khi render

  if (typeof productsDB !== "undefined") renderProductCards();
  if (typeof testimonialsDB !== "undefined") renderTestimonials();
  if (typeof projectsDB !== "undefined") renderProjects();
  if (typeof projectGalleryDB !== "undefined") renderProjectGallery();
  if (typeof newsDB !== "undefined") renderNews();

  // 2. Init Interactive Elements
  initHeroSlider();
  initAboutSlider();
});
