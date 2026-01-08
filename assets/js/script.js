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

document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
       HERO BACKGROUND SLIDER (WITH BUTTONS)
       ========================================= */

  const heroImages = [
    "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1680787317308-fd872f9cde12?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1040410620/vi/anh/%C4%91%E1%BB%95-b%C3%AA-t%C3%B4ng-l%C3%AAn-n%E1%BB%81n-m%C3%B3ng-t%C3%B2a-nh%C3%A0.jpg?s=2048x2048&w=is&k=20&c=lWOqcEL_BrrIhjL3H9SJHUTSuuSxDLDMS09QeVhRHDs=",
  ];

  const heroSection = document.querySelector(".hero");
  const slideIntervalTime = 5000;
  let currentSlideIndex = 0;
  let slideInterval;
  let isAnimating = false; // Cờ để chặn bấm liên tục gây loạn

  // 1. Khởi tạo Slider & Nút bấm
  function initHeroSlider() {
    if (!heroSection) return;

    // a. Tạo container chứa ảnh
    const sliderContainer = document.createElement("div");
    sliderContainer.className = "hero-slider-container";

    heroImages.forEach((imgUrl, index) => {
      const slide = document.createElement("div");
      slide.className = "hero-slide";
      slide.style.backgroundImage = `url('${imgUrl}')`;
      if (index === 0) slide.classList.add("active");
      sliderContainer.appendChild(slide);
    });
    heroSection.insertBefore(sliderContainer, heroSection.firstChild);

    // b. Tạo nút Previous
    const prevBtn = document.createElement("button");
    prevBtn.className = "slider-nav-btn slider-btn-prev";
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>'; // Icon FontAwesome
    prevBtn.addEventListener("click", () => handleManualSlide("prev"));
    heroSection.appendChild(prevBtn);

    // c. Tạo nút Next
    const nextBtn = document.createElement("button");
    nextBtn.className = "slider-nav-btn slider-btn-next";
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.addEventListener("click", () => handleManualSlide("next"));
    heroSection.appendChild(nextBtn);
  }

  // 2. Xử lý khi bấm nút (Reset timer + Chuyển ảnh)
  function handleManualSlide(direction) {
    if (isAnimating) return; // Nếu đang chạy hiệu ứng thì không cho bấm

    // Reset thời gian tự động chạy
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide("next"), slideIntervalTime);

    // Chuyển slide
    changeSlide(direction);
  }

  // 3. Hàm chuyển đổi Slide (Xử lý cả Next và Prev)
  function changeSlide(direction) {
    const slides = document.querySelectorAll(".hero-slide");
    if (slides.length === 0) return;

    isAnimating = true; // Khóa click

    const currentSlide = slides[currentSlideIndex];
    let nextIndex;

    // Tính toán index tiếp theo
    if (direction === "next") {
      nextIndex = (currentSlideIndex + 1) % slides.length;
    } else {
      nextIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    }

    const nextSlide = slides[nextIndex];

    // --- RESET CÁC SLIDE KHÁC ---
    slides.forEach((slide) => {
      if (slide !== currentSlide && slide !== nextSlide) {
        slide.classList.remove("active", "exit");
        slide.style.transition = "none";
        slide.style.transform = "translateX(100%)"; // Mặc định chờ bên phải
      }
    });

    // --- XỬ LÝ HIỆU ỨNG (QUAN TRỌNG) ---

    // Setup vị trí xuất phát cho slide mới
    nextSlide.style.transition = "none"; // Tắt animation để set vị trí đầu

    if (direction === "next") {
      // NEXT: Slide mới từ Phải (100%) -> Giữa (0)
      nextSlide.style.transform = "translateX(100%)";
    } else {
      // PREV: Slide mới từ Trái (-100%) -> Giữa (0)
      nextSlide.style.transform = "translateX(-100%)";
    }

    // Force Reflow (Bắt buộc để trình duyệt nhận diện thay đổi style)
    void nextSlide.offsetWidth;

    // Bật animation và chạy
    nextSlide.style.transition = "transform 1.5s ease-in-out";
    currentSlide.style.transition = "transform 1.5s ease-in-out";

    // Thực hiện chuyển động
    nextSlide.classList.add("active");
    nextSlide.classList.remove("exit");
    nextSlide.style.transform = "translateX(0)";

    currentSlide.classList.remove("active");
    currentSlide.classList.add("exit");

    if (direction === "next") {
      // NEXT: Slide cũ trượt sang Trái (-100%)
      currentSlide.style.transform = "translateX(-100%)";
    } else {
      // PREV: Slide cũ trượt sang Phải (100%)
      currentSlide.style.transform = "translateX(100%)";
    }

    // Cập nhật index
    currentSlideIndex = nextIndex;

    // Mở khóa click sau khi chạy xong animation (1.5s)
    setTimeout(() => {
      isAnimating = false;
    }, 1500);
  }

  // 4. Chạy chương trình
  if (heroSection) {
    initHeroSlider();
    slideInterval = setInterval(() => changeSlide("next"), slideIntervalTime);
  }

  // --- Mobile Menu Code ---
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__links");
  if (menu && menuLinks) {
    menu.addEventListener("click", function () {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
       ABOUT SECTION SLIDESHOW (AUTO FADE)
       ========================================= */
  const aboutSlides = document.querySelectorAll(".about-slide-item");

  if (aboutSlides.length > 0) {
    let aboutIndex = 0;

    setInterval(() => {
      // 1. Bỏ class active ở ảnh hiện tại
      aboutSlides[aboutIndex].classList.remove("active");

      // 2. Tăng index (nếu hết ảnh thì quay về 0)
      aboutIndex = (aboutIndex + 1) % aboutSlides.length;

      // 3. Thêm class active cho ảnh mới
      aboutSlides[aboutIndex].classList.add("active");
    }, 4000); // 4000ms = 4 giây đổi 1 lần
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ... (Giữ code Hero Slider và About Slider của bạn) ...

  /* =========================================
       PRODUCT SWIPER (THƯ VIỆN)
       ========================================= */
  var swiper = new Swiper(".product-swiper", {
    slidesPerView: 1, // Mobile: 1 ảnh
    spaceBetween: 30, // Khoảng cách 30px
    loop: true, // Lặp vô tận
    grabCursor: true, // Con trỏ bàn tay khi kéo

    // Tự động chạy
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // Rê chuột vào vẫn giữ autoplay chạy sau đó
      pauseOnMouseEnter: true, // Rê chuột vào thì tạm dừng (Swiper 9+)
    },

    // Phân trang (Dấu chấm)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Nút bấm Next/Prev
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive (Tự đổi số lượng ảnh theo màn hình)
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2, // Tablet
      },
      1024: {
        slidesPerView: 3, // PC
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
       STATS COUNTER ANIMATION (CHẠY KHI SCROLL ĐẾN)
       ========================================= */

  const statsSection = document.querySelector(".stats");
  const counters = document.querySelectorAll(".counter");
  let hasStarted = false; // Biến cờ để đảm bảo chỉ chạy 1 lần duy nhất

  // 1. Hàm thực hiện hiệu ứng đếm số
  function startCountAnimation() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target"); // Lấy số đích (120, 1000...)
      const duration = 2000; // Thời gian chạy (2000ms = 2 giây)
      const increment = target / (duration / 20); // Tính bước nhảy mỗi 20ms

      const updateCount = () => {
        const current = +counter.innerText;

        if (current < target) {
          // Cộng dồn và làm tròn lên
          counter.innerText = Math.ceil(current + increment);
          // Lặp lại sau 20ms
          setTimeout(updateCount, 20);
        } else {
          // Đảm bảo số cuối cùng chính xác
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  // 2. Thiết lập Trình quan sát (Intersection Observer)
  if (statsSection) {
    const observerOptions = {
      root: null, // Quan sát trong viewport trình duyệt
      threshold: 0.4, // Khi 40% của section hiển thị thì mới kích hoạt
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Nếu phần Stats đã xuất hiện trong màn hình VÀ chưa chạy lần nào
        if (entry.isIntersecting && !hasStarted) {
          startCountAnimation();
          hasStarted = true; // Đánh dấu đã chạy xong
          observer.unobserve(statsSection); // Ngừng quan sát để tiết kiệm tài nguyên
        }
      });
    }, observerOptions);

    // Bắt đầu quan sát section Stats
    observer.observe(statsSection);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ... (Code Gallery cũ) ...

  /* =========================================
       TESTIMONIAL SWIPER (AUTO SCROLL)
       ========================================= */
  var testimonialSwiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 1, // Mobile: Hiện 1 card
    spaceBetween: 30, // Khoảng cách 30px
    loop: true, // Lặp vô tận

    // Tự động chạy
    autoplay: {
      delay: 3000, // 3 giây trượt 1 lần
      disableOnInteraction: false, // Người dùng vuốt xong vẫn tự chạy tiếp
      pauseOnMouseEnter: true, // QUAN TRỌNG: Hover chuột vào thì dừng lại
    },

    // Phân trang (Dấu chấm)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive
    breakpoints: {
      768: {
        slidesPerView: 2, // Tablet: Hiện 2 card
      },
      1024: {
        slidesPerView: 3, // PC: Hiện 3 card
      },
    },
  });
});
