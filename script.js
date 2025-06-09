document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.subscribe-form, .contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('تم إرسال النموذج بنجاح!');
        form.reset();
    });
});