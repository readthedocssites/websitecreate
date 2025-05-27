// Custom JavaScript for Trezor-like interactions

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to current step
    const stepCards = document.querySelectorAll('.step-card');
    if (stepCards.length > 0) {
        stepCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                this.style.transform = 'translateY(0)';
            });
        });
    }
});