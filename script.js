// Premium Wedding Invitation - Bugis Theme
// Vanilla JS for interactions, animations, slider, countdown, and WhatsApp redirect.

(function () {
  const body = document.body;
  const openingOverlay = document.getElementById("openingOverlay");
  const openInvitationBtn = document.getElementById("openInvitationBtn");
  const bgMusic = document.getElementById("bgMusic");
  const recipientNameEl = document.getElementById("recipientName");

  const countdownDate = new Date("2026-06-20T09:00:00+08:00").getTime();
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const sliderTrack = document.getElementById("photoSlider");
  const sliderPrev = document.getElementById("sliderPrev");
  const sliderNext = document.getElementById("sliderNext");
  const sliderDotsContainer = document.getElementById("sliderDots");

  const galleryModal = document.getElementById("galleryModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const modalImage = document.getElementById("modalImage");

  const wishesForm = document.getElementById("wishesForm");

  // Parse recipient from URL (?to=Nama+Tamu)
  function populateRecipientFromURL() {
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to");
      if (to && recipientNameEl) {
        recipientNameEl.textContent = to.replace(/\+/g, " ");
      }
    } catch (e) {
      // Silently ignore parsing errors
    }
  }

  // Opening envelope interaction
  function setupOpeningInteraction() {
    if (!openInvitationBtn || !openingOverlay) return;

    openInvitationBtn.addEventListener("click", () => {
      openingOverlay.classList.add("opened");
      // Allow scroll after envelope animation
      setTimeout(() => {
        body.classList.remove("is-locked");
      }, 900);

      // Start background music after user interaction
      if (bgMusic) {
        bgMusic
          .play()
          .catch(() => {
            // Autoplay might be blocked; ignore errors
          });
      }

      // Hide overlay smoothly
      setTimeout(() => {
        openingOverlay.classList.add("hidden");
      }, 1100);
    });
  }

  // Countdown logic
  function setupCountdown() {
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    function updateCountdown() {
      const now = Date.now();
      const distance = countdownDate - now;

      if (distance <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Intersection Observer for scroll animations
  function setupScrollAnimations() {
    const animatedEls = document.querySelectorAll("[data-animate]");
    if (!("IntersectionObserver" in window) || animatedEls.length === 0) {
      // Fallback: show all
      animatedEls.forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    animatedEls.forEach((el) => observer.observe(el));
  }

  // Parallax background movement (CSS variable)
  function setupParallax() {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY || window.pageYOffset;
          document.documentElement.style.setProperty(
            "--scroll-parallax",
            String(scrolled)
          );
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Photo slider
  function setupSlider() {
    if (!sliderTrack || !sliderDotsContainer) return;

    const slides = Array.from(sliderTrack.children);
    const slideCount = slides.length;
    if (slideCount === 0) return;

    let currentIndex = 0;
    let autoSlideIntervalId = null;
    let isHovering = false;

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "slider-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Lihat foto ${index + 1}`);
      dot.addEventListener("click", () => goToSlide(index));
      sliderDotsContainer.appendChild(dot);
    });

    const dots = Array.from(
      sliderDotsContainer.querySelectorAll(".slider-dot")
    );

    function updateSliderPosition() {
      const offset = -currentIndex * 100;
      sliderTrack.style.transform = `translateX(${offset}%)`;

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = (index + slideCount) % slideCount;
      updateSliderPosition();
      restartAutoSlide();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAutoSlide() {
      if (autoSlideIntervalId != null) return;
      autoSlideIntervalId = setInterval(() => {
        if (!isHovering) {
          nextSlide();
        }
      }, 4500);
    }

    function stopAutoSlide() {
      if (autoSlideIntervalId != null) {
        clearInterval(autoSlideIntervalId);
        autoSlideIntervalId = null;
      }
    }

    function restartAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    sliderTrack.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );

    sliderTrack.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        const threshold = 40;
        if (Math.abs(deltaX) > threshold) {
          if (deltaX < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      },
      { passive: true }
    );

    // Hover pause on desktop
    sliderTrack.addEventListener("mouseenter", () => {
      isHovering = true;
    });
    sliderTrack.addEventListener("mouseleave", () => {
      isHovering = false;
    });

    if (sliderPrev) sliderPrev.addEventListener("click", prevSlide);
    if (sliderNext) sliderNext.addEventListener("click", nextSlide);

    // Initialize
    currentIndex = 0;
    updateSliderPosition();
    startAutoSlide();
  }

  // Gallery modal
  function setupGalleryModal() {
    if (!galleryModal || !modalBackdrop || !modalClose || !modalImage) return;

    const galleryButtons = document.querySelectorAll(".gallery-item");
    if (!galleryButtons.length) return;

    function openModal(src) {
      modalImage.src = src;
      galleryModal.classList.add("active");
      galleryModal.setAttribute("aria-hidden", "false");
      body.classList.add("is-locked");
    }

    function closeModal() {
      galleryModal.classList.remove("active");
      galleryModal.setAttribute("aria-hidden", "true");
      modalImage.src = "";
      body.classList.remove("is-locked");
    }

    galleryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-gallery");
        if (src) {
          openModal(src);
        }
      });
    });

    modalBackdrop.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && galleryModal.classList.contains("active")) {
        closeModal();
      }
    });
  }

  // WhatsApp redirect for wishes & attendance
  function setupWishesForm() {
    if (!wishesForm) return;

    wishesForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("guestName");
      const attendanceSelect = document.getElementById("attendance");
      const messageTextarea = document.getElementById("message");

      const name = nameInput ? nameInput.value.trim() : "";
      const attendance = attendanceSelect ? attendanceSelect.value : "";
      const message = messageTextarea ? messageTextarea.value.trim() : "";

      if (!name || !attendance || !message) {
        alert("Mohon lengkapi semua data sebelum mengirim.");
        return;
      }

      const coupleNames = "Andi & Sari";

      const lines = [
        `Assalamu’alaikum, kami *${name}*.`,
        "",
        `Terkait undangan pernikahan *${coupleNames}*:`,
        `*${attendance}*`,
        "",
        "Ucapan & doa:",
        message,
        "",
        "Dikirim melalui undangan digital."
      ];

      const text = encodeURIComponent(lines.join("\n"));

      // Replace with your own WhatsApp number including country code, e.g. 6281234567890
      const phoneNumber = "6281234567890";
      const waUrl = `https://wa.me/${phoneNumber}?text=${text}`;

      window.open(waUrl, "_blank");
    });
  }

  // Initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    populateRecipientFromURL();
    setupOpeningInteraction();
    setupCountdown();
    setupScrollAnimations();
    setupParallax();
    setupSlider();
    setupGalleryModal();
    setupWishesForm();
  });
})();
