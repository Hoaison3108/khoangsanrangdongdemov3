/* ==========================================================================
   SCRIPT RENDER TRANG GIỚI THIỆU
   File: assets/js/about/about-page-script.js
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  if (typeof aboutPageDB === "undefined") return;

  renderAboutHeader();
  renderAboutIntro(); // Đổi tên hàm cho khớp
  renderCoreValues();
  renderTeam();
  renderTimeline();
  renderGallery();
});

// 1. Header
function renderAboutHeader() {
  const container = document.getElementById("about-header-content");
  if (container) {
    container.innerHTML = `
            <h1 class="heading-xl">${aboutPageDB.header.title}</h1>
            <p class="section-desc-text">${aboutPageDB.header.desc}</p>
            <div class="section-line"></div>
        `;
  }
}

/* File: assets/js/about/about-page-script.js */

// ...

// 2. Intro (Collage 3 ảnh + Text)
function renderAboutIntro() {
  const container = document.getElementById("about-intro-container");
  const data = aboutPageDB.intro;

  // Kiểm tra xem có đủ dữ liệu và ít nhất 1 ảnh không
  if (container && data && data.images && data.images.length >= 1) {
    const textHTML = data.desc
      .map((p) => `<p class="text-desc mb-3 text-justify">${p}</p>`)
      .join("");

    // Tạo HTML cho 4 ảnh (lấy 4 ảnh đầu tiên)
    const imagesHTML = data.images
      .slice(0, 3)
      .map(
        (src, index) => `
        <div class="intro-img-item">
            <img src="${src}" class="intro-img-item" alt="Intro ${index + 1}">
       </div>
            `
      )
      .join("");

    container.innerHTML = `
            <div class="about-intro">
                <div class="about-intro__content">
                    <h3 class="heading-md mb-3">${data.title}</h3>
                    ${textHTML}
                    <ul class="detail-list mt-3 text-desc">
                        <li>Hệ thống máy móc hiện đại.</li>
                        <li>Quy trình kiểm soát chất lượng ISO.</li>
                        <li>Đội ngũ kỹ sư giàu kinh nghiệm.</li>
                    </ul>
                </div>
                <div class="intro-images">
                    ${imagesHTML} </div>
            </div>
        `;
  }
}

// ...

// 3. Core Values
function renderCoreValues() {
  const container = document.getElementById("core-values-grid");
  if (container) {
    container.innerHTML = aboutPageDB.coreValues
      .map(
        (item) => `
            <div class="card-base p-4 text-center">
                <div class="icon-box-lg mb-3 ${item.color}"><i class="${item.icon} fa-3x"></i></div>
                <h3 class="heading-sm mb-2">${item.title}</h3>
                <p class="text-desc">${item.desc}</p>
            </div>
        `
      )
      .join("");
  }
}

// 4. Team (Ban lãnh đạo)
function renderTeam() {
  const container = document.getElementById("team-grid");
  if (container && aboutPageDB.team) {
    container.innerHTML = aboutPageDB.team
      .map(
        (member) => `
            <div class="team-card">
                <div class="team-img-wrapper">
                    <img src="${member.img}" alt="${member.name}" class="team-img">
                </div>
                <div class="team-info">
                    <h4 class="team-name">${member.name}</h4>
                    <span class="team-role">${member.role}</span>
                </div>
            </div>
        `
      )
      .join("");
  }
}

// 5. Timeline (Lịch sử)
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (container && aboutPageDB.timeline) {
    container.innerHTML = aboutPageDB.timeline
      .map(
        (item, index) => `
            <div class="timeline-item ${
              index % 2 === 0 ? "timeline-left" : "timeline-right"
            }">
                <div class="timeline-content">
                    <span class="timeline-year">${item.year}</span>
                    <h4 class="heading-sm mt-1">${item.title}</h4>
                    <p class="text-desc">${item.desc}</p>
                </div>
            </div>
        `
      )
      .join("");
  }
}

// 6. Gallery
/* File: assets/js/about/about-page-script.js */

// ... (Các hàm renderHeader, Intro, CoreValues, Team giữ nguyên) ...

// 6. Gallery (RENDER DRAGGABLE STRUCTURE)
function renderGallery() {
  const container = document.getElementById("gallery-grid");

  if (container && aboutPageDB.gallery) {
    const slidesHTML = aboutPageDB.gallery
      .map(
        (img) => `
            <div class="gallery-slide-item">
                <div class="gallery-card">
                    <img src="${img}" alt="Hoạt động công ty">
                </div>
            </div>
        `
      )
      .join("");

    // Không còn nút Button nữa
    container.innerHTML = `
            <div class="gallery-slider-viewport" id="gallery-viewport">
                <div class="gallery-track">
                    ${slidesHTML}
                </div>
            </div>
        `;

    initDraggableGallery();
  }
}

// --- LOGIC KÉO THẢ + TỰ ĐỘNG TRƯỢT (HYBRID) ---
/* File: assets/js/about/about-page-script.js */

// ... (Các phần render phía trên giữ nguyên) ...

// --- LOGIC KÉO THẢ + TỰ ĐỘNG TRƯỢT SIÊU MƯỢT (rAF Version) ---
/* File: assets/js/about/about-page-script.js */

// ... (Các phần trên giữ nguyên) ...

// --- LOGIC KÉO THẢ + SLIDE TỪNG NẤC (Interval) ---
function initDraggableGallery() {
  const slider = document.getElementById("gallery-viewport");
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeftSnap;
  let autoPlayInterval;

  // Cấu hình thời gian (ms)
  const slideDelay = 3000; // 3 giây trượt 1 lần

  // Hàm lấy chiều rộng của 1 item (để trượt đúng 1 tấm)
  const getScrollStep = () => {
    const item = slider.querySelector(".gallery-slide-item");
    return item ? item.offsetWidth : 300;
  };

  // 1. Hàm tự động trượt (Interval)
  function startAutoPlay() {
    // Xóa interval cũ để tránh trùng
    clearInterval(autoPlayInterval);

    autoPlayInterval = setInterval(() => {
      // Quan trọng: Bật cuộn mượt khi máy tự chạy
      slider.style.scrollBehavior = "smooth";

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const step = getScrollStep();

      // Kiểm tra nếu đã đến cuối (hoặc gần cuối)
      if (slider.scrollLeft >= maxScroll - 5) {
        // Quay về đầu
        slider.scrollLeft = 0;
      } else {
        // Trượt sang phải 1 tấm
        slider.scrollLeft += step;
      }
    }, slideDelay);
  }

  // Hàm dừng chạy
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // --- SỰ KIỆN KÉO THẢ (DRAG) ---

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");

    // QUAN TRỌNG: Tắt cuộn mượt khi kéo tay để không bị cảm giác "lag" (delay)
    slider.style.scrollBehavior = "auto";

    startX = e.pageX - slider.offsetLeft;
    scrollLeftSnap = slider.scrollLeft;
    stopAutoPlay(); // Dừng auto khi bắt đầu kéo
  });

  slider.addEventListener("mouseleave", () => {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove("active");
    startAutoPlay(); // Chạy lại khi chuột rời đi
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
    startAutoPlay(); // Chạy lại khi nhả chuột
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Tốc độ kéo
    slider.scrollLeft = scrollLeftSnap - walk;
  });

  // --- HỖ TRỢ CẢM ỨNG (MOBILE TOUCH) ---
  slider.addEventListener(
    "touchstart",
    () => {
      isDown = true;
      slider.style.scrollBehavior = "auto"; // Tắt smooth để vuốt thật tay
      stopAutoPlay();
    },
    { passive: true }
  );

  slider.addEventListener("touchend", () => {
    isDown = false;
    startAutoPlay();
  });

  // --- KHỞI ĐỘNG ---
  startAutoPlay();
}
