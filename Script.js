// Updated script.js for Personal Website - includes HW4 enhancements

document.addEventListener('DOMContentLoaded', function() {

    /** Home Page - Dynamic Greeting */
    const greetingDiv = document.getElementById('greeting');
    if (greetingDiv) {
        const now = new Date();
        const hour = now.getHours();
        let greeting;
        if (hour < 12) {
            greeting = "Good morning!";
        } else if (hour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }
        greetingDiv.textContent = greeting;
    }

    /** Home Page - Change background color */
    const changeBgButton = document.getElementById('changeBg');
    if (changeBgButton) {
        changeBgButton.addEventListener('click', function() {
            document.body.style.background = 'linear-gradient(#ffecd2, #fcb69f)';
        });
    }

    /** Blog Page - Read More enhancement */
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            this.innerHTML = 'Content coming soon!';
            this.style.color = '#e94560';
        });
    });

    /** Projects Page - Animate projects */
    const animateButton = document.getElementById('animateProjects');
    const projectArticles = document.querySelectorAll('main article');
    if (animateButton) {
        animateButton.addEventListener('click', function() {
            projectArticles.forEach((article, index) => {
                setTimeout(() => {
                    article.style.transform = 'scale(1.05)';
                    article.style.transition = 'transform 0.5s ease';
                }, index * 150);
            });
        });
    }

    /** Projects Page - Show More Projects */
    const showMoreProjectsBtn = document.getElementById('showMoreProjects');
    if (showMoreProjectsBtn) {
        showMoreProjectsBtn.addEventListener('click', function() {
            const newProject = document.createElement('article');
            newProject.innerHTML = `
                <h2>New AI Project</h2>
                <time>2025</time>
                <p>An innovative AI-based solution for smart city management.</p>
            `;
            document.querySelector('main').appendChild(newProject);
        });
    }

    /** Contact Page - Form Validation */
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;

            // Name validation
            const nameField = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (!nameField.value.trim()) {
                nameError.textContent = 'Name is required.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Email validation
            const emailField = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailField.value.trim()) {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!emailRegex.test(emailField.value.trim())) {
                emailError.textContent = 'Invalid email format.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Message validation
            const messageField = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (!messageField.value.trim()) {
                messageError.textContent = 'Message is required.';
                isValid = false;
            } else if (messageField.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters.';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }

    /** CV Page - Toggle Skills section */
    const toggleSkillsBtn = document.getElementById('toggleSkills');
    const skillsSection = document.getElementById('skillsSection');
    if (toggleSkillsBtn && skillsSection) {
        toggleSkillsBtn.addEventListener('click', function() {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            } else {
                skillsSection.style.display = 'none';
            }
        });
    }

});