// script.js for Personal Website

// 1. Home Page: Change background color
document.addEventListener('DOMContentLoaded', function() {
    const changeBgButton = document.getElementById('changeBg');
    if (changeBgButton) {
        changeBgButton.addEventListener('click', function() {
            document.body.style.background = 'linear-gradient(#ffecd2, #fcb69f)';
        });
    }

    // 2. Blog Page: Show message instead of alert on "Read More"
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            this.innerHTML = 'Content coming soon!';
            this.style.color = '#e94560';
        });
    });

    // 3. Projects Page: Animate project articles
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

    // 4. Contact Page: Form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields before submitting!');
                event.preventDefault();
            }
        });
    }

    // 5. CV Page: Toggle sections
    const toggleButtons = document.querySelectorAll('.toggle-section');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.nextElementSibling;
            if (section.style.display === 'none') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
