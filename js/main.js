/**
 * Artist Archives - Main JavaScript
 */

// Evolving color wheel animation for hero background
(function() {
  const colorBg = document.getElementById('colorBackground');
  if (!colorBg) return;

  let hue = 0;

  function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
      const k = (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  }

  function updateColors() {
    const hue1 = hue % 360;
    const hue2 = (hue + 60) % 360;
    const hue3 = (hue + 120) % 360;
    const hue4 = (hue + 180) % 360;

    // Brighter, more saturated pastel colors
    const rgb1 = hslToRgb(hue1, 65, 72);
    const rgb2 = hslToRgb(hue2, 60, 74);
    const rgb3 = hslToRgb(hue3, 55, 76);
    const rgb4 = hslToRgb(hue4, 60, 73);

    colorBg.style.background = `linear-gradient(135deg,
      rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]}) 0%,
      rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]}) 33%,
      rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]}) 66%,
      rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]}) 100%)`;

    hue += 0.15; // ~40 seconds per full color cycle
    requestAnimationFrame(updateColors);
  }

  updateColors();
})();

// Entrance Animation Sequence
(function() {
  const heroLogo = document.getElementById('heroLogo');
  const heroTagline = document.getElementById('heroTagline');
  const navLogo = document.querySelector('.nav-logo');
  const navLinks = document.querySelector('.hidden.md\\:flex');
  const menuBtn = document.getElementById('menuBtn');

  // Start with everything hidden, then animate in sequence
  window.addEventListener('load', () => {
    // Step 1: Logo fades in after 300ms
    setTimeout(() => {
      if (heroLogo) {
        heroLogo.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
        heroLogo.style.opacity = '1';
        heroLogo.style.transform = 'scale(1)';
      }
    }, 300);

    // Step 2: Tagline fades in after logo
    setTimeout(() => {
      if (heroTagline) {
        heroTagline.style.transition = 'opacity 1s ease';
        heroTagline.style.opacity = '1';
      }
    }, 1200);

    // Step 3: Navbar elements fade in
    setTimeout(() => {
      if (navLogo) {
        navLogo.style.transition = 'opacity 0.8s ease';
        navLogo.style.opacity = '1';
      }
      if (navLinks) {
        navLinks.style.transition = 'opacity 0.8s ease';
        navLinks.style.opacity = '1';
      }
      if (menuBtn) {
        menuBtn.style.transition = 'opacity 0.8s ease';
        menuBtn.style.opacity = '1';
      }
    }, 1800);
  });
})();

// Scroll-triggered animations (play once)
(function() {
  // Elements to animate on scroll
  const animateOnScroll = [
    // Features section cards
    { selector: '#features .text-center.p-8', stagger: 150 },
    // How It Works section
    { selector: '#enterprises h2', stagger: 0 },
    { selector: '#enterprises .flex.gap-6', stagger: 100 },
    // Creators section
    { selector: '#creators h2', stagger: 0 },
    { selector: '#creators .group', stagger: 100 },
    // Team section
    { selector: '#team h2', stagger: 0 },
    { selector: '#team .text-center:not(.mb-16)', stagger: 150 },
    // Contact section
    { selector: '#contact h2', stagger: 0 },
    { selector: '#contact form', stagger: 0 },
    // How It Works paths
    { selector: '.bg-black.text-white .flex.gap-4', stagger: 80 }
  ];

  // Add initial hidden state to elements
  animateOnScroll.forEach(config => {
    const elements = document.querySelectorAll(config.selector);
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
    });
  });

  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.animDelay) || 0;

        setTimeout(() => {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, delay);

        // Unobserve after animating (only animate once)
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe elements with staggered delays
  animateOnScroll.forEach(config => {
    const elements = document.querySelectorAll(config.selector);
    elements.forEach((el, index) => {
      el.dataset.animDelay = index * config.stagger;
      observer.observe(el);
    });
  });
})();

// Section configuration for scroll tracking
const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'enterprises', name: 'AI' },
  { id: 'creators', name: 'Creators' },
  { id: 'team', name: 'Team' },
  { id: 'contact', name: 'Contact' }
];

// Elements
const exposureMeter = document.getElementById('exposureMeter');
const meterNeedle = document.getElementById('meterNeedle');
const meterStops = document.querySelectorAll('.meter-stop');
const modeDial = document.getElementById('modeDial');
const dialGrip = document.getElementById('dialGrip');
const dialIndicator = document.getElementById('dialIndicator');

let currentSection = 0;

// Function to calculate needle position based on active label
function updateNeedlePosition(index) {
  const stop = meterStops[index];
  if (stop && meterNeedle) {
    const container = document.querySelector('.meter-container');
    const containerRect = container.getBoundingClientRect();
    const stopRect = stop.getBoundingClientRect();

    // Calculate center of the stop relative to container
    const stopCenter = stopRect.left + (stopRect.width / 2) - containerRect.left;
    const percentage = (stopCenter / containerRect.width) * 100;

    meterNeedle.style.left = percentage + '%';
  }
}

// Mode dial drag functionality
let isDragging = false;
let startY = 0;
let dragThreshold = 30;
let accumulatedDelta = 0;

if (modeDial) {
  modeDial.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    accumulatedDelta = 0;
    modeDial.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    accumulatedDelta += deltaY - (accumulatedDelta > 0 ? Math.floor(accumulatedDelta / dragThreshold) * dragThreshold : Math.ceil(accumulatedDelta / dragThreshold) * dragThreshold);
    startY = e.clientY;

    if (Math.abs(accumulatedDelta) >= dragThreshold) {
      const direction = accumulatedDelta > 0 ? 1 : -1;
      const targetSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));

      if (targetSection !== currentSection) {
        const element = document.getElementById(sections[targetSection].id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      accumulatedDelta = 0;
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      modeDial.style.cursor = 'grab';
      accumulatedDelta = 0;
    }
  });

  // Touch support
  modeDial.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    accumulatedDelta = 0;
    e.preventDefault();
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const deltaY = e.touches[0].clientY - startY;
    accumulatedDelta += deltaY - (accumulatedDelta > 0 ? Math.floor(accumulatedDelta / dragThreshold) * dragThreshold : Math.ceil(accumulatedDelta / dragThreshold) * dragThreshold);
    startY = e.touches[0].clientY;

    if (Math.abs(accumulatedDelta) >= dragThreshold) {
      const direction = accumulatedDelta > 0 ? 1 : -1;
      const targetSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));

      if (targetSection !== currentSection) {
        const element = document.getElementById(sections[targetSection].id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      accumulatedDelta = 0;
    }
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
    accumulatedDelta = 0;
  });
}

// Click on meter stops to scroll to section
meterStops.forEach((stop, index) => {
  stop.style.cursor = 'pointer';
  stop.style.pointerEvents = 'auto';
  stop.addEventListener('click', () => {
    const section = sections[index];
    const element = document.getElementById(section.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Main scroll handler
function handleScroll() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Show/hide meter and dial after scrolling past hero
  const showControls = scrollY > 100;
  if (exposureMeter) exposureMeter.classList.toggle('visible', showControls);
  if (modeDial) modeDial.classList.toggle('visible', showControls);

  // Find current section
  let newSection = 0;
  sections.forEach((section, index) => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.4) {
        newSection = index;
      }
    }
  });

  // Update if section changed
  if (newSection !== currentSection) {
    currentSection = newSection;

    // Update needle position
    updateNeedlePosition(currentSection);

    // Update meter stop active states
    meterStops.forEach((stop, i) => {
      stop.classList.toggle('active', i === currentSection);
    });

    // Update dial rotation (72 degrees per section for 5 sections)
    const dialRotation = currentSection * 72;
    if (dialGrip) dialGrip.style.transform = `rotate(${dialRotation}deg)`;

    // Update indicator text
    if (dialIndicator) dialIndicator.textContent = sections[currentSection].name;
  }
}

// Recalculate needle position on resize
window.addEventListener('resize', () => {
  updateNeedlePosition(currentSection);
});

// Initialize scroll handling
window.addEventListener('scroll', handleScroll);
handleScroll();

// Initialize needle position after DOM is ready
setTimeout(() => {
  updateNeedlePosition(currentSection);
}, 100);

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
let menuOpen = false;

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
      line1.classList.add('rotate-45', 'translate-y-px');
      line1.classList.remove('-translate-y-1');
      line2.classList.add('opacity-0');
      line3.classList.add('-rotate-45', '-translate-y-px');
      line3.classList.remove('translate-y-1');
    } else {
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      line1.classList.remove('rotate-45', 'translate-y-px');
      line1.classList.add('-translate-y-1');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-rotate-45', '-translate-y-px');
      line3.classList.add('translate-y-1');
    }
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      line1.classList.remove('rotate-45', 'translate-y-px');
      line1.classList.add('-translate-y-1');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-rotate-45', '-translate-y-px');
      line3.classList.add('translate-y-1');
    });
  });
}

// Navbar background transition on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');
  if (navbar && hero) {
    const heroHeight = hero.offsetHeight;
    // Start transitioning when scrolled past 20% of hero, fully solid at 60%
    const scrollThreshold = heroHeight * 0.2;
    const solidThreshold = heroHeight * 0.6;

    if (window.scrollY > solidThreshold) {
      // Fully solid white navbar after hero
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      navbar.style.backdropFilter = 'blur(12px)';
      navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
    } else if (window.scrollY > scrollThreshold) {
      // Gradual transition zone
      const progress = (window.scrollY - scrollThreshold) / (solidThreshold - scrollThreshold);
      const opacity = progress * 0.98;
      navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
      navbar.style.backdropFilter = `blur(${progress * 12}px)`;
      navbar.style.boxShadow = progress > 0.5 ? `0 1px 3px rgba(0, 0, 0, ${progress * 0.08})` : 'none';
    } else {
      // Transparent in hero section
      navbar.style.backgroundColor = 'transparent';
      navbar.style.backdropFilter = 'none';
      navbar.style.boxShadow = 'none';
    }
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Counter animation
function animateCounter(elementId, target, duration = 2000) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);
    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Trigger counters when visible
const counter1 = document.getElementById('counter1');
if (counter1) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter('counter1', 300);
        animateCounter('counter2', 100);
        animateCounter('counter3', 25);
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(counter1.parentElement.parentElement.parentElement);
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will be in touch soon.');
  });
}
