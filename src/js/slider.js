document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projects');
    let isScrolling = false;
    let startX;
    let scrollLeft;

    if (window.innerWidth <= 1024) {  // Only enable for tablet and mobile
        // Add necessary styles dynamically
        projectsSection.style.overflowX = 'scroll';
        projectsSection.style.scrollBehavior = 'smooth';
        projectsSection.style.webkitOverflowScrolling = 'touch';  // For iOS momentum scrolling
        projectsSection.style.display = 'flex';
        projectsSection.style.flexWrap = 'nowrap';  // Prevent wrapping
        
        // Touch events for mobile
        projectsSection.addEventListener('touchstart', (e) => {
            isScrolling = true;
            startX = e.touches[0].pageX - projectsSection.offsetLeft;
            scrollLeft = projectsSection.scrollLeft;
        });

        projectsSection.addEventListener('touchmove', (e) => {
            if (!isScrolling) return;
            e.preventDefault();
            const x = e.touches[0].pageX - projectsSection.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            projectsSection.scrollLeft = scrollLeft - walk;
        });

        projectsSection.addEventListener('touchend', () => {
            isScrolling = false;
        });

        // Mouse events for tablet
        projectsSection.addEventListener('mousedown', (e) => {
            isScrolling = true;
            startX = e.pageX - projectsSection.offsetLeft;
            scrollLeft = projectsSection.scrollLeft;
        });

        projectsSection.addEventListener('mousemove', (e) => {
            if (!isScrolling) return;
            e.preventDefault();
            const x = e.pageX - projectsSection.offsetLeft;
            const walk = (x - startX) * 2;
            projectsSection.scrollLeft = scrollLeft - walk;
        });

        projectsSection.addEventListener('mouseup', () => {
            isScrolling = false;
        });

        projectsSection.addEventListener('mouseleave', () => {
            isScrolling = false;
        });
    }
});