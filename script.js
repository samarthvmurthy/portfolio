document.getElementById('year').textContent = new Date().getFullYear();

const typingText = document.getElementById('typing-text');
const fullText = 'Welcome to my corner of the web';
let typingIndex = 0;

function typeNextChar() {
    if (typingIndex <= fullText.length) {
        typingText.textContent = fullText.slice(0, typingIndex);
        typingIndex += 1;
        setTimeout(typeNextChar, 45);
    }
}

typeNextChar();

const menuToggle = document.getElementById('menu-toggle');
const links = document.getElementById('links');

menuToggle.addEventListener('click', () => {
    links.classList.toggle('open');
});

links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        links.classList.remove('open');
    });
});

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('#links a');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    },
    { rootMargin: '-50% 0px -50% 0px' }
);

sections.forEach((section) => observer.observe(section));

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const cardObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const cards = [...document.querySelectorAll('.project-card')];
                const index = cards.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add('is-visible');
                cardObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('.project-card').forEach((card) => cardObserver.observe(card));

function drawTreeConnectors() {
    if (window.innerWidth <= 760) return;

    document.querySelectorAll('.tree-node').forEach((treeNode) => {
        const svg = treeNode.querySelector('.tree-lines');
        const main = treeNode.querySelector('.main-node');
        const leaves = treeNode.querySelectorAll('.leaf-node');
        if (!svg || !main || leaves.length === 0) return;

        const containerRect = treeNode.getBoundingClientRect();
        const mainRect = main.getBoundingClientRect();

        const mainX = mainRect.right - containerRect.left;
        const mainY = mainRect.top + mainRect.height / 2 - containerRect.top;

        let paths = '';
        leaves.forEach((leaf) => {
            const leafRect = leaf.getBoundingClientRect();
            const leafX = leafRect.left - containerRect.left;
            const leafY = leafRect.top + leafRect.height / 2 - containerRect.top;
            const midX = (mainX + leafX) / 2;
            paths += `<path d="M${mainX},${mainY} L${midX},${mainY} L${midX},${leafY} L${leafX},${leafY}"></path>`;
        });

        svg.innerHTML = paths;
    });
}

window.addEventListener('load', () => {
    drawTreeConnectors();
    setTimeout(drawTreeConnectors, 400);
});

if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(drawTreeConnectors);
}

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawTreeConnectors, 150);
});

const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;
});

// EmailJS setup: create a free account at emailjs.com, add an email service and
// a template, then fill in these three values from your EmailJS dashboard.
const EMAILJS_PUBLIC_KEY = 'nDKzFbNeyflOjEpO6';
const EMAILJS_SERVICE_ID = 'service_taqx0bk';
const EMAILJS_TEMPLATE_ID = 'template_nsmu9sb';

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
        .then(() => {
            status.textContent = 'Thanks for reaching out! I will get back to you soon.';
            form.reset();
        })
        .catch(() => {
            status.textContent = 'Something went wrong. Please try again or email me directly.';
        });
});

const localTimeEl = document.getElementById('local-time');

function updateLocalTime() {
    if (!localTimeEl) return;
    const now = new Date();
    const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }).format(now);
    const hourInNJ = Number(
        new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', hour12: false }).format(now)
    );
    const isDaytime = hourInNJ >= 7 && hourInNJ < 20;
    localTimeEl.textContent = `${isDaytime ? '☀️' : '🌙'} ${timeStr} local time (New Jersey)`;
}

updateLocalTime();
setInterval(updateLocalTime, 30000);

const copyEmailLink = document.getElementById('copy-email');

if (copyEmailLink) {
    copyEmailLink.addEventListener('click', () => {
        const email = 'samarthvmurthy@gmail.com';
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).catch(() => {});
        }
        const hint = copyEmailLink.querySelector('.copy-hint');
        if (hint) {
            const original = hint.textContent;
            hint.textContent = 'Copied!';
            hint.style.opacity = '1';
            setTimeout(() => {
                hint.textContent = original;
                hint.style.opacity = '';
            }, 1500);
        }
    });
}
