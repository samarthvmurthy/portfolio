document.getElementById('year').textContent = new Date().getFullYear();

const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    externalLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
    arrow: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    education: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"></path><path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"></path></svg>',
    work: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 7L2 7"></path></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-7.58 8-13a8 8 0 1 0-16 0c0 5.42 8 13 8 13Z"></path><circle cx="12" cy="9" r="3"></circle></svg>',
    resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/></svg>',
};

function renderSkillsTrack(skills, extraClass, hidden) {
    const track = document.createElement('div');
    track.className = `skills-track${extraClass ? ` ${extraClass}` : ''}`;
    if (hidden) track.setAttribute('aria-hidden', 'true');
    skills.forEach((skill) => {
        const item = document.createElement('div');
        item.className = 'skill-icon';
        item.title = skill.label;
        item.innerHTML = `<i class="${skill.icon}"></i><span>${skill.label}</span>`;
        track.appendChild(item);
    });
    return track;
}

function renderSkills(skillRows) {
    const skillsEl = document.getElementById('skills');
    skillsEl.innerHTML = '';
    skillRows.forEach((row) => {
        const rowEl = document.createElement('div');
        rowEl.className = `skills-row${row.reverse ? ' skills-row-reverse' : ''}`;
        const trackClass = row.reverse ? 'skills-track-reverse' : '';
        rowEl.appendChild(renderSkillsTrack(row.skills, trackClass, false));
        rowEl.appendChild(renderSkillsTrack(row.skills, trackClass, true));
        skillsEl.appendChild(rowEl);
    });
}

function renderProjectLinks(links) {
    return links
        .map((link) => {
            const isSource = link.type === 'source';
            const label = isSource ? 'Source' : 'Live Demo';
            const icon = isSource ? ICONS.github : ICONS.externalLink;
            return `<a href="${link.url}" target="_blank" rel="noopener" class="icon-link" title="${label}" aria-label="${label}">${icon}</a>`;
        })
        .join('');
}

function renderTechIcon(icon) {
    if (icon.type === 'devicon') {
        return `<span class="tech-icon" data-tooltip="${icon.tooltip}"><i class="${icon.class}"></i></span>`;
    }
    if (icon.type === 'emoji') {
        return `<span class="tech-icon emoji-icon" data-tooltip="${icon.tooltip}">${icon.value}</span>`;
    }
    return `<span class="tech-icon" data-tooltip="${icon.tooltip}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.content}</svg></span>`;
}

function renderProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const descriptionHtml = project.description.map((para) => `<p>${para}</p>`).join('');
    const langSegments = project.languages
        .map((lang) => `<span class="lang-segment" style="width: ${lang.percent}%; background: ${lang.color};"></span>`)
        .join('');
    const langLegend = project.languages
        .map((lang) => `<span><i style="background: ${lang.color};"></i>${lang.name} ${lang.percent}%</span>`)
        .join('');
    const techIcons = project.techIcons.map(renderTechIcon).join('');

    card.innerHTML = `
        <div class="project-card-header">
            <h3>${project.title}</h3>
            <div class="project-links">${renderProjectLinks(project.links)}</div>
        </div>
        ${descriptionHtml}
        <div class="project-stack-row">
            <div class="project-langs">
                <div class="lang-bar">${langSegments}</div>
                <div class="lang-legend">${langLegend}</div>
            </div>
            <div class="project-icons">${techIcons}</div>
        </div>
    `;
    return card;
}

function renderProjects(data) {
    const grid = document.getElementById('project-grid');
    grid.innerHTML = '';
    data.projects.forEach((project) => grid.appendChild(renderProjectCard(project)));

    const more = document.getElementById('more-projects');
    more.innerHTML = `
        <a href="${data.moreProjectsUrl}" target="_blank" rel="noopener" class="btn btn-github">
            ${ICONS.github}
            <span>See more on my GitHub</span>
            ${ICONS.arrow}
        </a>
    `;
}

function renderLeaf(leaf) {
    if (leaf.kind === 'gpa-courses') {
        const tags = leaf.courses.map((course) => `<span class="course-tag">${course}</span>`).join('');
        return `
            <div class="leaf-node">
                <div class="child-label">GPA &amp; Coursework</div>
                <span class="gpa-badge">${leaf.gpa}</span>
                <div class="course-tags">${tags}</div>
            </div>
        `;
    }
    if (leaf.kind === 'project') {
        return `
            <div class="leaf-node">
                <div class="child-label">Project</div>
                <strong>${leaf.title}</strong>
                ${leaf.text}
            </div>
        `;
    }
    if (leaf.kind === 'impact') {
        const items = leaf.items.map((item) => `<li>${item}</li>`).join('');
        return `
            <div class="leaf-node">
                <div class="child-label">Impact</div>
                <ul class="kpi-list">${items}</ul>
            </div>
        `;
    }
    return '';
}

function renderTimelineItem(item) {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    const iconLabel = item.type === 'education' ? 'Education' : 'Work';
    const iconSvg = item.type === 'education' ? ICONS.education : ICONS.work;
    const leaves = [`<div class="leaf-node"><div class="child-label">Details</div>${item.details}</div>`]
        .concat(item.leaves.map(renderLeaf))
        .join('');

    el.innerHTML = `
        <span class="timeline-icon" title="${iconLabel}">${iconSvg}</span>
        <div class="tree-node">
            <svg class="tree-lines"></svg>
            <div class="node-main">
                <div class="main-node">${item.title}</div>
            </div>
            <div class="node-leaves">${leaves}</div>
        </div>
    `;
    return el;
}

function renderJourney(journey) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    journey.forEach((yearGroup) => {
        const divider = document.createElement('div');
        divider.className = 'year-divider';
        divider.innerHTML = `<span>${yearGroup.year}</span>`;
        timeline.appendChild(divider);
        yearGroup.items.forEach((item) => timeline.appendChild(renderTimelineItem(item)));
    });
}

function renderContact(contact) {
    document.getElementById('contact-heading').textContent = contact.heading;
    document.getElementById('contact-intro').textContent = contact.intro;

    const emailLink = document.getElementById('copy-email');
    emailLink.href = `mailto:${contact.email}`;
    document.getElementById('contact-email-text').textContent = contact.email;

    document.getElementById('contact-location').textContent = contact.location;
    document.getElementById('resume-link').href = contact.resume;

    const socialIcons = { GitHub: ICONS.github, LinkedIn: ICONS.linkedin, Instagram: ICONS.instagram, Facebook: ICONS.facebook };
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = contact.social
        .map((entry) => `
            <a href="${entry.url}" target="_blank" rel="noopener" class="icon-link" title="${entry.platform}" aria-label="${entry.platform}">
                ${socialIcons[entry.platform] || ''}
            </a>
        `)
        .join('');
}

function renderSite(data) {
    document.title = data.site.title;
    document.getElementById('nav-name').textContent = data.site.navName;

    document.getElementById('hero-name').textContent = data.hero.name;
    document.getElementById('hero-tagline').textContent = data.hero.tagline;
    const heroImg = document.getElementById('hero');
    heroImg.src = data.hero.image;
    heroImg.alt = data.hero.imageAlt;

    document.getElementById('about-bio').textContent = data.about.bio;
    renderSkills(data.about.skillRows);

    renderProjects(data);
    renderJourney(data.journey);
    renderContact(data.contact);

    startTypingText(data.hero.typingText);
}

function startTypingText(fullText) {
    const typingText = document.getElementById('typing-text');
    let typingIndex = 0;

    function typeNextChar() {
        if (typingIndex <= fullText.length) {
            typingText.textContent = fullText.slice(0, typingIndex);
            typingIndex += 1;
            setTimeout(typeNextChar, 45);
        }
    }

    typeNextChar();
}

function initInteractions(data) {
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

    drawTreeConnectors();
    setTimeout(drawTreeConnectors, 400);

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
    const timezone = data.contact.timezone;

    function updateLocalTime() {
        if (!localTimeEl) return;
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }).format(now);
        const hourInTz = Number(
            new Intl.DateTimeFormat('en-US', { timeZone: timezone, hour: 'numeric', hour12: false }).format(now)
        );
        const isDaytime = hourInTz >= 7 && hourInTz < 20;
        localTimeEl.textContent = `${isDaytime ? '☀️' : '🌙'} ${timeStr} local time (New Jersey)`;
    }

    updateLocalTime();
    setInterval(updateLocalTime, 30000);

    const copyEmailLink = document.getElementById('copy-email');

    if (copyEmailLink) {
        copyEmailLink.addEventListener('click', () => {
            const email = copyEmailLink.href.replace('mailto:', '');
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
}

fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
        renderSite(data);
        initInteractions(data);
    })
    .catch((error) => {
        console.error('Failed to load data.json', error);
    });
