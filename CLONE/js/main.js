/* ====================================
   Black Rose Salon - Main JavaScript
   ==================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ====================================
  // Usługi dropdown (10 hubów + podstrony)
  // ====================================
  if (window.NAV_SERVICES && window.NAV_SERVICES.length) {
    const styleLink = document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
    const href = styleLink ? styleLink.getAttribute('href') : '';
    const base = href ? (href.replace(/\/?css\/styles\.css.*$/, '').trim() || '') : '';
    const basePrefix = base ? base + (base.endsWith('/') ? '' : '/') : '';

    function url(path) {
      const p = path.replace(/\/$/, '') + '/';
      return basePrefix ? basePrefix + p : p;
    }

    // Desktop: replace Usługi link with dropdown
    const desktopNav = document.querySelector('.desktop-nav');
    if (desktopNav) {
      const uslugiLink = Array.from(desktopNav.querySelectorAll('.nav-link, a[href*="uslugi"], button[data-scroll-to="uslugi"]')).find(el => el.textContent.trim() === 'Usługi' || (el.getAttribute('href') && el.getAttribute('href').includes('uslugi')) || el.getAttribute('data-scroll-to') === 'uslugi');
      if (uslugiLink) {
        const dropdown = document.createElement('div');
        dropdown.className = 'nav-dropdown';
        dropdown.innerHTML =
          '<button type="button" class="nav-link nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">Usługi</button>' +
          '<div class="nav-dropdown-panel" aria-hidden="true">' +
          window.NAV_SERVICES.map(cat => {
            const hubUrl = url(cat.slug);
            const catLinks = cat.children.map(c => '<li><a href="' + url(cat.slug + '/' + c.slug) + '">' + c.label + '</a></li>').join('');
            return '<div class="nav-dropdown-category">' +
              '<a href="' + hubUrl + '" class="nav-dropdown-category-title">' + cat.label + '</a>' +
              '<ul class="nav-dropdown-sublinks">' + catLinks + '</ul>' +
              '</div>';
          }).join('') +
          '</div>';
        uslugiLink.replaceWith(dropdown);

        const trigger = dropdown.querySelector('.nav-dropdown-trigger');
        const panel = dropdown.querySelector('.nav-dropdown-panel');
        let closeTimeout = null;

        function openDropdown() {
          if (closeTimeout) {
            clearTimeout(closeTimeout);
            closeTimeout = null;
          }
          dropdown.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
          panel.setAttribute('aria-hidden', 'false');
        }

        function closeDropdown() {
          closeTimeout = setTimeout(() => {
            dropdown.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
            panel.setAttribute('aria-hidden', 'true');
            closeTimeout = null;
          }, 150);
        }

        dropdown.addEventListener('mouseenter', openDropdown);
        dropdown.addEventListener('mouseleave', closeDropdown);
      }
    }

    // Mobile: replace Usługi link with expandable list
    const mobileNav = document.querySelector('.mobile-menu nav');
    if (mobileNav) {
      const mobileUslugi = Array.from(mobileNav.querySelectorAll('.mobile-nav-link, a.mobile-nav-link')).find(el => el.textContent.trim() === 'Usługi' || (el.getAttribute('href') && el.getAttribute('href').includes('uslugi')));
      if (mobileUslugi) {
        const wrapper = document.createElement('div');
        wrapper.className = 'mobile-nav-uslugi';
        const uslugiTitle = document.createElement('a');
        uslugiTitle.href = (basePrefix || '') + '#uslugi';
        uslugiTitle.className = 'mobile-nav-uslugi-title';
        uslugiTitle.textContent = 'Usługi';
        wrapper.appendChild(uslugiTitle);
        const listWrap = document.createElement('div');
        listWrap.className = 'mobile-nav-uslugi-list';
        listWrap.innerHTML = window.NAV_SERVICES.map((cat, i) => {
          const hubUrl = url(cat.slug);
          const subLinks = cat.children.map(c => '<a href="' + url(cat.slug + '/' + c.slug) + '" class="mobile-nav-sublink">' + c.label + '</a>').join('');
          return '<div class="mobile-nav-category">' +
            '<button type="button" class="mobile-nav-category-trigger" aria-expanded="false" data-index="' + i + '">' + cat.label + '</button>' +
            '<div class="mobile-nav-category-content">' +
            '<a href="' + hubUrl + '" class="mobile-nav-hub-link">Strona kategorii</a>' +
            '<div class="mobile-nav-sublinks">' + subLinks + '</div>' +
            '</div>' +
            '</div>';
        }).join('');
        wrapper.appendChild(listWrap);
        mobileUslugi.replaceWith(wrapper);
        mobileNav.classList.add('has-uslugi');

        // Zawsze widoczny blok na dole: Usługi + O nas, Zespół, Cennik, Kontakt + divider
        const bottomWrap = document.createElement('div');
        bottomWrap.className = 'mobile-nav-bottom';
        const uslugiBottomLink = document.createElement('a');
        uslugiBottomLink.href = (basePrefix || '') + '#uslugi';
        uslugiBottomLink.className = 'mobile-nav-link';
        uslugiBottomLink.textContent = 'Usługi';
        bottomWrap.appendChild(uslugiBottomLink);
        let next = wrapper.nextElementSibling;
        while (next) {
          const toMove = next;
          next = next.nextElementSibling;
          bottomWrap.appendChild(toMove);
        }
        mobileNav.appendChild(bottomWrap);

        listWrap.querySelectorAll('.mobile-nav-category-trigger').forEach(btn => {
          btn.addEventListener('click', () => {
            const cat = btn.closest('.mobile-nav-category');
            const isOpen = cat.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen);
          });
        });
      }
    }
  }

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
  // Showcase Carousel — Przed & Po
  // ====================================
  const showcase = document.querySelector('.ba-showcase');
  if (showcase) {
    const track = showcase.querySelector('.ba-showcase-track');
    const slides = showcase.querySelectorAll('.ba-showcase-slide');
    const dotsWrap = showcase.querySelector('.ba-showcase-dots');
    const prevBtn = showcase.querySelector('.ba-showcase-prev');
    const nextBtn = showcase.querySelector('.ba-showcase-next');
    const counterCurrent = showcase.querySelector('.ba-showcase-current');
    const total = slides.length;
    let current = 0;
    let autoplayTimer = null;

    // Build dots
    if (dotsWrap && total > 0) {
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'ba-showcase-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slajd ' + (i + 1));
        dot.addEventListener('click', () => { goTo(i); resetAutoplay(); });
        dotsWrap.appendChild(dot);
      }
    }

    function goTo(index) {
      current = ((index % total) + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      if (counterCurrent) counterCurrent.textContent = String(current + 1).padStart(2, '0');
      dotsWrap.querySelectorAll('.ba-showcase-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function resetAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(function () { goTo(current + 1); }, 5000);
    }

    prevBtn?.addEventListener('click', function () { goTo(current - 1); resetAutoplay(); });
    nextBtn?.addEventListener('click', function () { goTo(current + 1); resetAutoplay(); });

    // Touch swipe
    let touchStartX = 0;
    showcase.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    showcase.addEventListener('touchend', function (e) {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        goTo(current + (diff > 0 ? 1 : -1));
        resetAutoplay();
      }
    });

    // Pause autoplay on hover
    showcase.addEventListener('mouseenter', function () { clearInterval(autoplayTimer); });
    showcase.addEventListener('mouseleave', resetAutoplay);

    goTo(0);
    resetAutoplay();
  }

  // ====================================
  // Gallery Filter & Lightbox
  // ====================================
  const galleryImages = [
    // Manicure
    { id: 1,  src: 'portfolio/manicure/manicure-rozowy-ombre-french.webp',       alt: 'Manicure rozowy ombre french',            category: 'Manicure' },
    { id: 2,  src: 'portfolio/manicure/manicure-nude-blyski.webp',               alt: 'Manicure nude z blyskami',                category: 'Manicure' },
    { id: 3,  src: 'portfolio/manicure/manicure-czerwony-nude.webp',             alt: 'Manicure czerwony nude',                  category: 'Manicure' },
    { id: 4,  src: 'portfolio/manicure/manicure-rozowy-perla.webp',              alt: 'Manicure rozowy perla',                   category: 'Manicure' },
    { id: 5,  src: 'portfolio/manicure/manicure-lawendowy-bialy.webp',           alt: 'Manicure lawendowy bialy',                category: 'Manicure' },
    { id: 6,  src: 'portfolio/manicure/manicure-slubny-bialy-burgund.webp',      alt: 'Manicure slubny bialy burgund',           category: 'Manicure' },
    { id: 7,  src: 'portfolio/manicure/manicure-rozowy-fiolet-perla.webp',       alt: 'Manicure rozowy fiolet perla',            category: 'Manicure' },
    { id: 8,  src: 'portfolio/manicure/manicure-czerwony-perla-polysk.webp',     alt: 'Manicure czerwony perla polysk',          category: 'Manicure' },
    { id: 9,  src: 'portfolio/manicure/manicure-aplikacja-paznokcie.webp',       alt: 'Aplikacja lakieru na paznokcie',          category: 'Manicure' },
    { id: 10, src: 'portfolio/manicure/kolory-paznokci-wzornik.webp',            alt: 'Wzornik kolorow paznokci',                category: 'Manicure' },
    // Zdobienia
    { id: 11, src: 'portfolio/manicure/manicure-zolty-nail-art.webp',            alt: 'Nail art zolty z czarnymi wzorami',       category: 'Zdobienia' },
    { id: 12, src: 'portfolio/manicure/manicure-burgund-zlote-liscie.webp',      alt: 'Nail art burgund zlote liscie',           category: 'Zdobienia' },
    { id: 13, src: 'portfolio/manicure/manicure-bronz-geometria.webp',           alt: 'Nail art braz geometria',                 category: 'Zdobienia' },
    { id: 14, src: 'portfolio/manicure/manicure-neon-zielony-kwiaty.webp',       alt: 'Nail art neon zielony kwiaty',            category: 'Zdobienia' },
    { id: 15, src: 'portfolio/manicure/manicure-bialy-kwiatowy.webp',            alt: 'Nail art bialy wzor kwiatowy',            category: 'Zdobienia' },
    { id: 16, src: 'portfolio/manicure/manicure-neon-rozowy-ombre.webp',         alt: 'Nail art neon rozowy ombre',              category: 'Zdobienia' },
    { id: 17, src: 'portfolio/manicure/manicure-limonkowy-brokat.webp',          alt: 'Nail art limonkowy z brokatem',           category: 'Zdobienia' },
    // Zabiegi
    { id: 18, src: 'portfolio/zabiegi-na-twarz/zabieg-twarzy-serum.webp',                    alt: 'Zabieg na twarz - aplikacja serum',      category: 'Zabiegi' },
    { id: 19, src: 'portfolio/zabiegi-na-twarz/zabieg-twarzy-aplikacja-serum.webp',          alt: 'Aplikacja serum kroplomierzem',          category: 'Zabiegi' },
    { id: 20, src: 'portfolio/zabiegi-na-twarz/zabieg-twarzy-urzadzenie.webp',               alt: 'Zabieg twarzy urzadzeniem kosmetycznym', category: 'Zabiegi' },
    { id: 21, src: 'portfolio/zabiegi-na-twarz/zabieg-twarzy-pielegnacja.webp',              alt: 'Pielegnacja twarzy - zabieg',            category: 'Zabiegi' },
    { id: 22, src: 'portfolio/zabiegi-na-twarz/zabieg-twarzy-serum-aplikacja.webp',          alt: 'Aplikacja serum podczas zabiegu',        category: 'Zabiegi' },
    { id: 23, src: 'portfolio/zabiegi-na-twarz/analiza-skory-diagnostyka.webp',              alt: 'Analiza skory urzadzeniem diagnostycznym', category: 'Zabiegi' },
    { id: 24, src: 'portfolio/zabiegi-na-twarz/diagnostyka-skory-ekran.webp',                alt: 'Diagnostyka skory - ekran analizy',       category: 'Zabiegi' },
    { id: 25, src: 'portfolio/koloryzacja-wlosow/koloryzacja-wlosow-technika-grzebieniowa.webp', alt: 'Koloryzacja wlosow technika grzebieniowa', category: 'Zabiegi' },
    { id: 26, src: 'portfolio/koloryzacja-wlosow/koloryzacja-wlosow-farbowanie.webp',        alt: 'Farbowanie wlosow',                      category: 'Zabiegi' },
    { id: 27, src: 'portfolio/koloryzacja-wlosow/koloryzacja-wlosow-ciemne-wlosy.webp',      alt: 'Koloryzacja ciemnych wlosow',            category: 'Zabiegi' },
    { id: 28, src: 'portfolio/koloryzacja-wlosow/koloryzacja-wlosow-efekt-klientka.webp',    alt: 'Efekt koloryzacji wlosow',               category: 'Zabiegi' },
    { id: 29, src: 'portfolio/salon/salon-lozko-drenaz-limfatyczny.webp',                    alt: 'Drenaz limfatyczny - zabieg modelowania', category: 'Zabiegi' },
    { id: 30, src: 'portfolio/salon/salon-drenaz-limfatyczny-nogi.webp',                     alt: 'Drenaz limfatyczny nog',                 category: 'Zabiegi' },
    { id: 31, src: 'portfolio/salon/masaz-pracownik-podczas-zabiegu.webp',                   alt: 'Pracownica podczas zabiegu masazu',       category: 'Zabiegi' },
    // Salon
    { id: 32, src: 'portfolio/salon/salon-pudelko-roze-prezentacja.webp',        alt: 'Pudelko z rozami Black Rose',             category: 'Salon' },
    { id: 33, src: 'portfolio/salon/salon-pracownik-zestawy-prezentowe.webp',    alt: 'Pracownica z zestawami prezentowymi',     category: 'Salon' },
    { id: 34, src: 'portfolio/salon/salon-zestawy-prezentowe-pink.webp',         alt: 'Zestawy prezentowe Black Rose',           category: 'Salon' },
    { id: 35, src: 'portfolio/salon/salon-pudelko-black-rose.webp',              alt: 'Pudelko prezentowe Black Rose',           category: 'Salon' },
    { id: 36, src: 'portfolio/salon/salon-produkty-w-pudelku.webp',              alt: 'Produkty kosmetyczne w pudelku',          category: 'Salon' },
    { id: 37, src: 'portfolio/salon/salon-zestaw-prezentowy-overhead.webp',      alt: 'Zestaw prezentowy z gory',               category: 'Salon' },
    { id: 38, src: 'portfolio/salon/salon-zespol-pracownicy.webp',               alt: 'Zespol Black Rose Salon',                category: 'Salon' },
    { id: 39, src: 'portfolio/salon/salon-pracownik-portret.webp',               alt: 'Pracownica salonu - portret',             category: 'Salon' },
    { id: 40, src: 'portfolio/salon/salon-wyposazenie-magenta.webp',             alt: 'Wyposazenie salonu magenta',             category: 'Salon' },
    { id: 41, src: 'portfolio/salon/salon-modelka-biale-kwiaty.webp',            alt: 'Modelka z bialymi kwiatami',             category: 'Salon' },
    { id: 42, src: 'portfolio/salon/salon-wzornik-kolorow-paznokci.webp',        alt: 'Wzornik kolorow paznokci Black Rose',    category: 'Salon' },
    { id: 43, src: 'portfolio/salon/salon-pracownik-bezowy-stroj.webp',          alt: 'Pracownica w bezowym stroju',            category: 'Salon' },
    { id: 44, src: 'portfolio/salon/salon-pokoj-zabiegowy-rozowe-swiatlo.webp',  alt: 'Pokoj zabiegowy rozowe swiatlo',         category: 'Salon' },
    { id: 45, src: 'portfolio/salon/salon-pokoj-zabiegowy-pink.webp',            alt: 'Pokoj zabiegowy Pink',                   category: 'Salon' },
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
        <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
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
    { name: 'Martyna K.', service: 'Manicure Hybrydowy', rating: 5, date: 'Styczeń 2026', text: 'Fantastyczny salon! Pani Anna wykonała mi przepiękny manicure, który trzymał się idealnie przez 3 tygodnie. Polecam wszystkim!', image: 'images/snapinsta.webp' },
    { name: 'Agnieszka W.', service: 'Henna Pudrowa', rating: 5, date: 'Grudzień 2025', text: 'Wreszcie mam idealne brwi! Pani Kasia jest prawdziwą artystką. Efekt naturalny i piękny. Na pewno wrócę.', image: 'images/snapinsta.webp' },
    { name: 'Paulina M.', service: 'Zabiegi na Twarz', rating: 5, date: 'Styczeń 2026', text: 'Zabieg oczyszczający zrobił cuda z moją cerą. Profesjonalne podejście i bardzo miła atmosfera. Gorąco polecam!', image: 'images/snapinsta.webp' },
    { name: 'Ewa S.', service: 'Pedicure', rating: 5, date: 'Listopad 2025', text: 'Najlepszy pedicure jaki miałam! Dbają o każdy szczegół, a stópki wyglądają jak nowe. Będę regularną klientką.', image: 'images/snapinsta.webp' },
    { name: 'Monika T.', service: 'SPA & Relaks', rating: 5, date: 'Grudzień 2025', text: 'Cudowny relaks po ciężkim tygodniu. Masaż był niesamowity, a cały zabieg przeprowadzony bardzo profesjonalnie.', image: 'images/snapinsta.webp' },
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

(function imageProtection() {
  document.addEventListener('contextmenu', (e) => {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
  });
  document.addEventListener('dragstart', (e) => {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
  });
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
    }
  });
})();

/* ====================================
   Edytor – obrót zdjęć o 90° (zapisywany na stałe)
   Kąt obrotu każdego zdjęcia zapisywany jest w localStorage
   i przywracany przy ponownym wczytaniu strony.
   ==================================== */
(function imageRotateEditor() {
  const STORE_KEY = 'brImageRotations';
  let activeImg = null;

  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveStore(store) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
  }

  function keyFor(img) {
    const src = img.getAttribute('src') || img.currentSrc || '';
    return location.pathname + '|' + src;
  }

  function apply(img, deg) {
    img.style.transform = 'rotate(' + deg + 'deg)';
    img.style.transition = 'transform 0.25s ease';
  }

  // Przywróć zapisane obroty
  const store = loadStore();
  function restoreAll() {
    document.querySelectorAll('img').forEach((img) => {
      const deg = store[keyFor(img)];
      if (deg) apply(img, deg);
    });
  }
  restoreAll();
  window.addEventListener('load', restoreAll);

  // TYMCZASOWY przycisk eksportu zapisanych obrotów
  const exportBtn = document.createElement('button');
  exportBtn.type = 'button';
  exportBtn.textContent = '⬇ Pobierz obroty';
  Object.assign(exportBtn.style, {
    position: 'fixed',
    bottom: '16px',
    left: '16px',
    zIndex: '99999',
    padding: '12px 16px',
    borderRadius: '8px',
    border: 'none',
    background: '#c0392b',
    color: '#fff',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
  });
  exportBtn.addEventListener('click', () => {
    const data = localStorage.getItem(STORE_KEY) || '{}';
    const blob = new Blob([data], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'brImageRotations.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
  document.body.appendChild(exportBtn);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Obróć zdjęcie o 90°');
  btn.textContent = '⟳';
  Object.assign(btn.style, {
    position: 'fixed',
    zIndex: '99999',
    width: '34px',
    height: '34px',
    padding: '0',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(0,0,0,0.65)',
    color: '#fff',
    fontSize: '18px',
    lineHeight: '34px',
    cursor: 'pointer',
    display: 'none',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
  });
  document.body.appendChild(btn);

  function placeBtn() {
    if (!activeImg) return;
    const r = activeImg.getBoundingClientRect();
    btn.style.top = (r.top + 6) + 'px';
    btn.style.left = (r.right - 40) + 'px';
  }

  function show(img) {
    activeImg = img;
    btn.style.display = 'block';
    placeBtn();
  }

  function hide() {
    activeImg = null;
    btn.style.display = 'none';
  }

  document.addEventListener('mouseover', (e) => {
    const img = e.target.closest && e.target.closest('img');
    if (img) show(img);
  });

  document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget === btn) return;
    const img = e.target.closest && e.target.closest('img');
    if (img && img === activeImg && (!e.relatedTarget || e.relatedTarget.closest('img') !== img)) {
      hide();
    }
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!activeImg) return;
    const key = keyFor(activeImg);
    const deg = ((store[key] || 0) + 90) % 360;
    store[key] = deg;
    saveStore(store);
    apply(activeImg, deg);
  });

  window.addEventListener('scroll', placeBtn, true);
  window.addEventListener('resize', placeBtn);
})();
