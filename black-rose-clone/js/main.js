/* ====================================
   Black Rose Salon - Main JavaScript
   ==================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ====================================
  // Header Scroll Effect
  // ====================================
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ====================================
  // Mobile Menu Toggle
  // ====================================
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIconOpen = document.querySelector('.menu-icon-open');
  const menuIconClose = document.querySelector('.menu-icon-close');

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuIconOpen.style.display = isOpen ? 'none' : 'block';
    menuIconClose.style.display = isOpen ? 'block' : 'none';
  });

  // ====================================
  // Smooth Scroll Navigation
  // ====================================
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-scroll-to');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        mobileMenu.classList.remove('open');
        menuIconOpen.style.display = 'block';
        menuIconClose.style.display = 'none';
      }
    });
  });

  // ====================================
  // IntersectionObserver - Scroll Animations
  // ====================================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '-50px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // ====================================
  // Before/After Slider
  // ====================================
  const baSlider = document.querySelector('.ba-slider-container');
  if (baSlider) {
    let isDragging = false;
    let sliderPosition = 50;
    let activeBAIndex = 0;

    const baBeforeLayer = baSlider.querySelector('.ba-before-layer');
    const baHandle = baSlider.querySelector('.ba-slider-handle');
    const baInfoTitle = document.querySelector('.ba-info h3');
    const baInfoSubtitle = document.querySelector('.ba-info .subtitle');
    const baInfoNumber = document.querySelector('.ba-info-number');
    const baDots = document.querySelectorAll('.ba-dot');
    const baBeforeImg = baSlider.querySelector('.ba-before-layer img');
    const baAfterImg = baSlider.querySelector('.ba-after-layer img');

    const transformations = [
      { title: 'Manicure Hybrydowy', subtitle: 'French Ombre', before: 'images/snapinsta.jpg', after: 'images/snapinsta.jpg' },
      { title: 'Henna Pudrowa', subtitle: 'z Geometrią', before: 'images/snapinsta.jpg', after: 'images/snapinsta.jpg' },
      { title: 'Stylizacja Żelowa', subtitle: 'Baby Boomer', before: 'images/snapinsta.jpg', after: 'images/snapinsta.jpg' },
      { title: 'Zabieg na Twarz', subtitle: 'Oczyszczanie', before: 'images/snapinsta.jpg', after: 'images/snapinsta.jpg' },
    ];

    function updateSliderPosition(pos) {
      sliderPosition = Math.min(Math.max(pos, 5), 95);
      baBeforeLayer.style.clipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;
      baHandle.style.left = sliderPosition + '%';
    }

    function updateBASlide(index) {
      activeBAIndex = index;
      sliderPosition = 50;
      updateSliderPosition(50);
      baBeforeImg.src = transformations[index].before;
      baAfterImg.src = transformations[index].after;
      if (baInfoTitle) baInfoTitle.textContent = transformations[index].title;
      if (baInfoSubtitle) baInfoSubtitle.textContent = transformations[index].subtitle;
      if (baInfoNumber) baInfoNumber.textContent = String(index + 1).padStart(2, '0');
      baDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    function getSliderX(e) {
      const rect = baSlider.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      return ((clientX - rect.left) / rect.width) * 100;
    }

    baSlider.addEventListener('mousedown', () => { isDragging = true; });
    baSlider.addEventListener('mouseup', () => { isDragging = false; });
    baSlider.addEventListener('mouseleave', () => { isDragging = false; });
    baSlider.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSliderPosition(getSliderX(e));
    });

    baSlider.addEventListener('touchstart', () => { isDragging = true; });
    baSlider.addEventListener('touchend', () => { isDragging = false; });
    baSlider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      updateSliderPosition(getSliderX(e));
    });

    // BA Navigation
    document.querySelector('.ba-prev')?.addEventListener('click', () => {
      updateBASlide((activeBAIndex - 1 + transformations.length) % transformations.length);
    });

    document.querySelector('.ba-next')?.addEventListener('click', () => {
      updateBASlide((activeBAIndex + 1) % transformations.length);
    });

    baDots.forEach((dot, i) => {
      dot.addEventListener('click', () => updateBASlide(i));
    });

    // Initialize
    updateSliderPosition(50);
  }

  // ====================================
  // Gallery Filter & Lightbox
  // ====================================
  const galleryImages = [
    { id: 1, src: 'images/snapinsta.jpg', alt: 'Manicure hybrydowy', category: 'Manicure' },
    { id: 2, src: 'images/snapinsta.jpg', alt: 'Stylizacja paznokci', category: 'Manicure' },
    { id: 3, src: 'images/snapinsta.jpg', alt: 'Henna brwi', category: 'Oprawa oka' },
    { id: 4, src: 'images/snapinsta.jpg', alt: 'Nail art', category: 'Zdobienia' },
    { id: 5, src: 'images/snapinsta.jpg', alt: 'Pedicure', category: 'Pedicure' },
    { id: 6, src: 'images/snapinsta.jpg', alt: 'French manicure', category: 'Manicure' },
    { id: 7, src: 'images/snapinsta.jpg', alt: 'Wnętrze salonu', category: 'Salon' },
    { id: 8, src: 'images/snapinsta.jpg', alt: 'Zabiegi na twarz', category: 'Zabiegi' },
  ];

  let activeCategory = 'Wszystkie';
  let filteredImages = [...galleryImages];
  let lightboxIndex = -1;

  const galleryGrid = document.querySelector('.gallery-grid');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-content img');
  const lightboxTitle = document.querySelector('.lightbox-info .title');
  const lightboxCategory = document.querySelector('.lightbox-info .category');
  const lightboxCounter = document.querySelector('.lightbox-counter');

  function renderGallery() {
    if (!galleryGrid) return;
    filteredImages = activeCategory === 'Wszystkie'
      ? [...galleryImages]
      : galleryImages.filter(img => img.category === activeCategory);

    galleryGrid.innerHTML = filteredImages.map((img, index) => `
      <div class="gallery-item animate-on-scroll animate-fade-in-up is-visible" style="animation-delay: ${(index % 8) * 50}ms" data-gallery-index="${index}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
        <div class="gallery-item-overlay">
          <p class="title">${img.alt}</p>
          <span class="category">${img.category}</span>
        </div>
        <div class="corner-accent"></div>
      </div>
    `).join('');

    // Rebind gallery click events
    galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        lightboxIndex = parseInt(item.getAttribute('data-gallery-index'));
        openLightbox();
      });
    });
  }

  function openLightbox() {
    if (!lightbox || lightboxIndex < 0) return;
    const img = filteredImages[lightboxIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxTitle.textContent = img.alt;
    lightboxCategory.textContent = img.category;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${filteredImages.length}`;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxIndex = -1;
  }

  function lightboxNext() {
    lightboxIndex = (lightboxIndex + 1) % filteredImages.length;
    openLightbox();
  }

  function lightboxPrev() {
    lightboxIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    openLightbox();
  }

  // Gallery filter buttons
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category');
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery();
    });
  });

  // Lightbox controls
  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  document.querySelector('.lightbox-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxPrev();
  });
  document.querySelector('.lightbox-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxNext();
  });
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNext();
    if (e.key === 'ArrowLeft') lightboxPrev();
  });

  // Initial render
  renderGallery();

  // ====================================
  // Testimonials Carousel
  // ====================================
  const testimonials = [
    { name: 'Martyna K.', service: 'Manicure Hybrydowy', rating: 5, date: 'Styczeń 2026', text: 'Fantastyczny salon! Pani Anna wykonała mi przepiękny manicure, który trzymał się idealnie przez 3 tygodnie. Polecam wszystkim!', image: 'images/snapinsta.jpg' },
    { name: 'Agnieszka W.', service: 'Henna Pudrowa', rating: 5, date: 'Grudzień 2025', text: 'Wreszcie mam idealne brwi! Pani Kasia jest prawdziwą artystką. Efekt naturalny i piękny. Na pewno wrócę.', image: 'images/snapinsta.jpg' },
    { name: 'Paulina M.', service: 'Zabiegi na Twarz', rating: 5, date: 'Styczeń 2026', text: 'Zabieg oczyszczający zrobił cuda z moją cerą. Profesjonalne podejście i bardzo miła atmosfera. Gorąco polecam!', image: 'images/snapinsta.jpg' },
    { name: 'Ewa S.', service: 'Pedicure', rating: 5, date: 'Listopad 2025', text: 'Najlepszy pedicure jaki miałam! Dbają o każdy szczegół, a stópki wyglądają jak nowe. Będę regularną klientką.', image: 'images/snapinsta.jpg' },
    { name: 'Monika T.', service: 'SPA & Relaks', rating: 5, date: 'Grudzień 2025', text: 'Cudowny relaks po ciężkim tygodniu. Masaż był niesamowity, a cały zabieg przeprowadzony bardzo profesjonalnie.', image: 'images/snapinsta.jpg' },
  ];

  let currentTestimonial = 0;
  let isTestimonialAnimating = false;

  const testimonialCard = document.querySelector('.testimonial-card');
  const testimonialImage = document.querySelector('.testimonial-image-circle img');
  const testimonialStars = document.querySelector('.testimonial-stars');
  const testimonialText = document.querySelector('.testimonial-text');
  const testimonialName = document.querySelector('.testimonial-author .name');
  const testimonialService = document.querySelector('.testimonial-author .service');
  const testimonialDate = document.querySelector('.testimonial-author .date');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');

  function updateTestimonial(index) {
    if (isTestimonialAnimating || !testimonialCard) return;
    isTestimonialAnimating = true;
    testimonialCard.classList.add('animating');

    setTimeout(() => {
      currentTestimonial = index;
      const t = testimonials[currentTestimonial];
      testimonialImage.src = t.image;
      testimonialImage.alt = t.name;
      testimonialText.textContent = `"${t.text}"`;
      testimonialName.textContent = t.name;
      testimonialService.textContent = t.service;
      testimonialDate.textContent = t.date;

      // Update stars
      testimonialStars.innerHTML = Array(t.rating).fill(0).map(() =>
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
      ).join('');

      // Update dots
      testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentTestimonial);
      });

      testimonialCard.classList.remove('animating');
      isTestimonialAnimating = false;
    }, 300);
  }

  function nextTestimonial() {
    updateTestimonial((currentTestimonial + 1) % testimonials.length);
  }

  function prevTestimonial() {
    updateTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  }

  document.querySelector('.testimonial-prev')?.addEventListener('click', prevTestimonial);
  document.querySelector('.testimonial-next')?.addEventListener('click', nextTestimonial);

  testimonialDots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateTestimonial(i));
  });

  // Auto-advance
  let testimonialInterval = setInterval(nextTestimonial, 6000);

  // Pause on hover
  testimonialCard?.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
  testimonialCard?.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 6000);
  });

  // ====================================
  // FAQ Accordion
  // ====================================
  const faqItems = document.querySelectorAll('.faq-item');

  // Open first item by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('open');
  }

  function updateFaqIcons() {
    faqItems.forEach(item => {
      const isOpen = item.classList.contains('open');
      const plus = item.querySelector('.icon-plus');
      const minus = item.querySelector('.icon-minus');
      if (plus) plus.style.display = isOpen ? 'none' : 'block';
      if (minus) minus.style.display = isOpen ? 'block' : 'none';
    });
  }

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
      }

      updateFaqIcons();
    });
  });

  // Initial icon state
  updateFaqIcons();

  // ====================================
  // Before & After Carousel
  // ====================================
  document.querySelectorAll('.ba-carousel').forEach(carousel => {
    const track = carousel.querySelector('.ba-carousel-track');
    const slides = carousel.querySelectorAll('.ba-carousel-slide');
    const dots = carousel.querySelectorAll('.ba-carousel-dot');
    const prevBtn = carousel.querySelector('.ba-carousel-prev');
    const nextBtn = carousel.querySelector('.ba-carousel-next');
    let current = 0;
    const total = slides.length;

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  });

});
