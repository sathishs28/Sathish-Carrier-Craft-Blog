/* =====================================================
   SATHISH S - PORTFOLIO WEBSITE JAVASCRIPT
   =====================================================
   Features included:
   1. Typewriter Effect (Hero Section)
   2. Dark/Light Theme Toggle
   3. Mobile Navigation Menu
   4. Scroll Animations (Intersection Observer)
   5. Navbar Scroll Effects
   6. Blog Article Preview
   ===================================================== */

// =====================================================
// 1. TYPEWRITER EFFECT
// =====================================================
// Cycles through job titles in the hero section

const roles = [
    "Sr. QA Engineer",
    "Project Manager",
    "Automation Specialist", 
    "CI/CD Enthusiast",
    "DVB & OTT Tester",
    "Python + Selenium Framework Developer",
    "Python + Pytest Framework Developer",
];

let roleIndex = 0;      // Current role index
let charIndex = 0;      // Current character index
let isDeleting = false; // Are we deleting text?
const typewriter = document.getElementById('typewriter');

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        // Remove one character
        typewriter.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add one character
        typewriter.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // Typing speed control
    let typeSpeed = isDeleting ? 50 : 100;

    // Pause at end of word
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Wait 2 seconds before deleting
        isDeleting = true;
    } 
    // Move to next word after deleting
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Loop back to start
        typeSpeed = 500; // Brief pause before typing next word
    }

    setTimeout(typeEffect, typeSpeed);
}


// =====================================================
// 2. DARK / LIGHT THEME TOGGLE
// =====================================================
// Saves preference to localStorage

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}


// =====================================================
// 3. MOBILE NAVIGATION MENU
// =====================================================
// Toggle mobile menu open/close

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
}


// =====================================================
// 4. SCROLL ANIMATIONS (Intersection Observer)
// =====================================================
// Elements fade in when they enter the viewport

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,              // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px' // Slightly early trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill progress bars when skills section is visible
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    // Small delay for staggered animation effect
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 200);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in or timeline-item classes
    document.querySelectorAll('.fade-in, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}


// =====================================================
// 5. NAVBAR SCROLL EFFECTS
// =====================================================
// Add shadow on scroll + smooth navbar behavior

function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled down
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}


// =====================================================
// 6. BLOG ARTICLE PREVIEW
// =====================================================
// Shows a preview when blog cards are clicked
// Replace this with actual article pages when ready

const blogArticles = {
    cicd: {
        title: "Integrating Pytest with CI/CD: A QA Engineer's Guide",
        preview: `Full article coming soon!

Topics covered:
• Setting up pytest.ini configuration
• Creating reusable conftest.py fixtures
• Parallel execution with pytest-xdist
• HTML reporting integration
• Triggering tests on GitHub Actions PR merges
• Docker containerization for test environments

This guide will walk through how I automated ONT testing at OVT India by connecting Pytest suites to CI/CD pipelines.`
    },

    dvb: {
        title: "From DVB Headends to OTT: Evolution of Media Testing",
        preview: `Full article coming soon!

Topics covered:
• How MPEG-TS knowledge helps debug HLS streams
• Why broadcast engineers make excellent streaming QA leads
• Comparing traditional DVB-C testing vs modern OTT platforms
• Protocol evolution: DVB-SI to DASH/HLS manifest validation
• Lessons learned from 9 years in media technology QA`
    },

    streaming: {
        title: "Building a Test Lab Streaming Server with Raspberry Pi",
        preview: `Full article coming soon!

Topics covered:
• FFmpeg compilation for ARM architecture
• nginx-rtmp module setup and configuration
• HLS packaging with adaptive bitrate
• UDP multicast to RTMP conversion
• Bandwidth simulation for QA environments
• Troubleshooting common streaming issues`
    },

    tr69: {
        title: "TR-069 CWMP Testing with Aprecomm for ONT Devices",
        preview: `Full article coming soon!

Topics covered:
• Understanding TR-069 CWMP protocol basics
• Using Aprecomm for ACS (Auto Configuration Server) simulation
• Parameter validation and RPC method testing
• Firmware upgrade automation via CWMP
• Bulk device management testing strategies`
    },

    linux: {
        title: "Linux Shell Scripts Every QA Engineer Should Know",
        preview: `Full article coming soon!

Topics covered:
• Log grepping with awk, sed, and grep combinations
• Automated test environment provisioning scripts
• Docker container management for test beds
• Cron-based test scheduling and reporting
• Bash one-liners for quick debugging`
    },

    career: {
        title: "From Manual Tester to Automation Engineer: My 9-Year Roadmap",
        preview: `Full article coming soon!

Topics covered:
• Key certifications that boosted my career
• Essential learning resources and platforms
• Mindset shifts: manual vs automation thinking
• How to transition without losing domain expertise
• Building a portfolio that gets you hired`
    }
};

function showBlogDetail(blogId) {
    const article = blogArticles[blogId];
    if (article) {
        // Simple alert for now - replace with modal or page navigation later
        alert(`${article.title}

${article.preview}`);
    }
}

// Attach click handlers to blog cards
function initBlogCards() {
    document.querySelectorAll('.blog-card').forEach(card => {
        const blogId = card.getAttribute('data-blog');
        if (blogId) {
            card.addEventListener('click', () => showBlogDetail(blogId));
        }

        // Prevent read-more link from triggering card click twice
        const readMore = card.querySelector('.read-more');
        if (readMore) {
            readMore.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showBlogDetail(blogId);
            });
        }
    });
}


// =====================================================
// 7. SMOOTH SCROLL FOR ANCHOR LINKS
// =====================================================
// Ensures smooth scrolling for all internal links

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}


// =====================================================
// 8. ACTIVE NAV LINK HIGHLIGHTING
// =====================================================
// Highlights the current section in navigation

function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}


// =====================================================
// INITIALIZE EVERYTHING WHEN DOM IS READY
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme first
    loadTheme();

    // Start typewriter animation
    typeEffect();

    // Initialize all interactive features
    initScrollAnimations();
    initNavbarEffects();
    initBlogCards();
    initSmoothScroll();
    initActiveNavHighlight();

    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile menu buttons
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    console.log('🚀 Portfolio website loaded successfully!');
    console.log('📧 Contact: sathishgesh28@gmail.com');
});