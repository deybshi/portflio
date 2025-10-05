// script.js
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Add click listeners to nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Timeline Animation on Scroll
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.5s ease-out forwards';
            }
        });
    });

    timelineItems.forEach(item => observer.observe(item));
}

if ('IntersectionObserver' in window) {
    animateTimeline();
}

// Modal Functionality
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const workDetails = {
    noli: {
        title: 'Noli Me Tangere',
        description: 'Latin for "Touch Me Not," this novel exposed the corruption of the Spanish clergy and government in the Philippines. It was banned but widely circulated, awakening national consciousness.'
    },
    filibusterismo: {
        title: 'El Filibusterismo',
        description: 'The Reign of Greed, a darker sequel to Noli, follows Simoun (Crisostomo Ibarra in disguise) in his plot for revenge. It calls for societal change.'
    },
    ultimo: {
        title: 'Mi Ultimo Adios',
        description: 'My Last Farewell, a poignant poem written on the eve of his execution. It expresses love for his country and hope for its future.'
    },
    other: {
        title: 'Other Works',
        description: 'Rizal also wrote "A La Juventud Filipina" (To the Filipino Youth), promoting education, and numerous essays, letters, and scientific papers on topics like linguistics and agriculture.'
    }
};

function openModal(key) {
    const details = workDetails[key];
    modalBody.innerHTML = `
        <h2>${details.title}</h2>