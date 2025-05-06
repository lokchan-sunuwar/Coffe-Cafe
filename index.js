const menuOpen = document.querySelector('#menu-open-button');
const menuClose = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

AOS.init({
  once: false,
  duration: 1400,
  easing: 'zoom-in',
  mirror: true,
});

menuOpen.addEventListener('click', () => {
  document.body.classList.toggle('show-mobile-menu');
});

menuClose.addEventListener('click', () => menuOpen.click());

navLinks.forEach(link => {
  link.addEventListener('click', () => menuOpen.click());
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 10 },
    320: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 50 },
  }
});

const slides = [
  {
    title: "Welcome to Coffee Cafe",
    subtitle: "Where every sip is a moment of bliss.",
    text: "Your perfect place for coffee and relaxation.",
    img: "images/coffee-hero-section.png"
  },
  {
    title: "Taste the Perfection",
    subtitle: "Freshly brewed coffee served daily.",
    text: "Enjoy comfort, warmth, and flavor in every sip.",
    img: "images/burger-frenchfries.png"
  },
  {
    title: "Brew. Relax. Repeat.",
    subtitle: "Crafted coffee for crafted moments.",
    text: "Unwind and energize your soul with us.",
    img: "images/cold-beverages.png"
  }
];

let current = 0;

const title = document.querySelector('.hero-text .title');
const subtitle = document.querySelector('.hero-text .subtitle');
const paragraph = document.querySelector('.hero-text p');
const image = document.querySelector('.hero-img');
const imageWrapper = document.querySelector('.hero-image-wrapper');

function showSlide(index) {
  const slide = slides[index];

  // Update text & image
  title.textContent = slide.title;
  subtitle.textContent = slide.subtitle;
  paragraph.textContent = slide.text;
  image.src = slide.img;

  // Zoom-in effect on image (reset animation)
  imageWrapper.classList.remove('aos-animate');
  void imageWrapper.offsetWidth; // Force reflow
  imageWrapper.classList.add('aos-animate');

  // Optional: Add scale effect briefly using CSS class
  image.classList.add('zoom-effect');
  setTimeout(() => image.classList.remove('zoom-effect'), 1000);

  // Reinitialize AOS
  AOS.refresh();
}

// Auto-change every 5 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3500);

// Initial load
showSlide(current);
