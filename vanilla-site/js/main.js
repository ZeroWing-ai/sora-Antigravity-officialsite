// Main JavaScript for Sora Portfolio

// ===== Initialize on DOM Load =====
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initProfile();
    initWorks();
    initSNS();
    initScrollAnimations();
    initSmoothScroll();
});

// ===== Header Scroll Effect =====
function initHeader() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// ===== Profile Section =====
function initProfile() {
    const profileText = document.getElementById('profileText');
    profileText.textContent = profile.description;
}

// ===== Works Section =====
function initWorks() {
    const worksContainer = document.getElementById('worksContainer');

    // Group works by category
    const categories = [...new Set(works.map(work => work.category))];

    categories.forEach(category => {
        const categoryWorks = works.filter(work => work.category === category);
        const categorySection = createCategoryCarousel(category, categoryWorks);
        worksContainer.appendChild(categorySection);
    });
}

function createCategoryCarousel(category, items) {
    const section = document.createElement('div');
    section.className = 'category-section fade-in';

    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = category;

    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';

    // Create slides
    items.forEach((item, index) => {
        const slide = createCarouselSlide(item, index === 0);
        carouselContainer.appendChild(slide);
    });

    // Create navigation dots
    const nav = document.createElement('div');
    nav.className = 'carousel-nav';
    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = index === 0 ? 'active' : '';
        dot.setAttribute('data-index', index);
        nav.appendChild(dot);
    });
    carouselContainer.appendChild(nav);

    // Create prev/next buttons
    if (items.length > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn prev';
        prevBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>';

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn next';
        nextBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>';

        carouselContainer.appendChild(prevBtn);
        carouselContainer.appendChild(nextBtn);

        // Initialize carousel functionality
        initCarousel(carouselContainer, items.length);
    }

    section.appendChild(title);
    section.appendChild(carouselContainer);

    return section;
}

function createCarouselSlide(item, isActive) {
    const slide = document.createElement('div');
    slide.className = `carousel-slide ${isActive ? 'active' : ''}`;

    const link = document.createElement('a');
    link.href = item.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'carousel-link';

    const imageDiv = document.createElement('div');
    imageDiv.className = 'carousel-image';
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    imageDiv.appendChild(img);

    const content = document.createElement('div');
    content.className = 'carousel-content';

    const category = document.createElement('span');
    category.className = 'carousel-category';
    category.textContent = item.category;

    const title = document.createElement('h4');
    title.className = 'carousel-title';
    title.textContent = item.title;

    const description = document.createElement('p');
    description.className = 'carousel-description';
    description.textContent = item.description;

    const cta = document.createElement('div');
    cta.className = 'carousel-cta';
    cta.innerHTML = '詳しく見る <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

    content.appendChild(category);
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(cta);

    link.appendChild(imageDiv);
    link.appendChild(content);
    slide.appendChild(link);

    return slide;
}

function initCarousel(container, itemCount) {
    const slides = container.querySelectorAll('.carousel-slide');
    const dots = container.querySelectorAll('.carousel-nav button');
    const prevBtn = container.querySelector('.carousel-btn.prev');
    const nextBtn = container.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    let autoPlayInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % itemCount;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + itemCount) % itemCount;
        showSlide(prevIndex);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            showSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // Start auto-play
    startAutoPlay();

    // Pause on hover
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);
}

// ===== SNS Section =====
function initSNS() {
    const snsContainer = document.getElementById('snsContainer');

    sns.forEach(item => {
        const card = createSNSCard(item);
        snsContainer.appendChild(card);
    });
}

function createSNSCard(item) {
    const card = document.createElement('a');
    card.href = item.link;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'sns-featured fade-in';

    const imageDiv = document.createElement('div');
    imageDiv.className = 'sns-image';
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    imageDiv.appendChild(img);

    const content = document.createElement('div');
    content.className = 'sns-content';

    const badges = document.createElement('div');
    badges.className = 'sns-badges';

    const featuredBadge = document.createElement('span');
    featuredBadge.className = 'sns-badge sns-badge-featured';
    featuredBadge.textContent = 'Featured';

    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'sns-badge sns-badge-category';
    categoryBadge.textContent = item.category;

    badges.appendChild(featuredBadge);
    badges.appendChild(categoryBadge);

    const title = document.createElement('h3');
    title.className = 'sns-title';
    title.textContent = item.title;

    const description = document.createElement('p');
    description.className = 'sns-description';
    description.textContent = item.description;

    const cta = document.createElement('div');
    cta.className = 'sns-cta';
    cta.innerHTML = '記事を読む <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

    content.appendChild(badges);
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(cta);

    card.appendChild(imageDiv);
    card.appendChild(content);

    return card;
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
