// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to service cards
document.querySelectorAll('.icons-container .icons').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Apply animation to About-us cards
document.querySelectorAll('.About-us').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Read More button functionality
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const card = this.closest('.icons');
        const currentHeight = card.style.maxHeight;
        
        if (currentHeight === 'none' || currentHeight === '') {
            card.style.maxHeight = card.scrollHeight + 'px';
            card.style.overflow = 'hidden';
        }
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Navigation menu toggle for mobile
const menuIcon = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

if (menuIcon) {
    menuIcon.addEventListener('click', function() {
        navlist.style.display = navlist.style.display === 'none' ? 'flex' : 'none';
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navlist.style.display = 'none';
        }
    });
});

// Responsive menu visibility
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navlist.style.display = 'flex';
    }
});

// Parallax effect on home section
const homeSection = document.querySelector('.home');
if (homeSection) {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        homeSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// Counter animation for stats
function animateCounter(element, target, duration = 1000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Form validation
const newsletterForm = document.querySelector('.newsletter-content form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        
        if (emailInput && emailInput.value) {
            // Show success message
            alert('Thank you for subscribing!');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
});

// Smooth scroll behavior initialization
document.documentElement.style.scrollBehavior = 'smooth';

// Log page load
console.log('Homepage loaded successfully!');
