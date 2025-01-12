document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('button[type="button"]');
    const navMenu = document.querySelector('.home-nav-menu') || document.querySelector('nav'); // Check for both nav types
    const socialLinks = document.querySelector('.social-links');
    
    // Track menu state
    let isMenuOpen = false;
    
    menuBtn.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle active class on menu button
        this.classList.toggle('active');
        
        // Toggle menu visibility
        if (navMenu) {
            navMenu.classList.toggle('show');
        }
        
        // Only toggle social links if they exist (home page)
        if (socialLinks) {
            socialLinks.classList.toggle('show');
        }
        
        // Change hamburger icon to times icon
        const icon = this.querySelector('i');
        if (isMenuOpen) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (isMenuOpen && 
            !menuBtn.contains(event.target) && 
            !navMenu.contains(event.target)) {
            
            isMenuOpen = false;
            menuBtn.classList.remove('active');
            
            if (navMenu) {
                navMenu.classList.remove('show');
            }
            
            if (socialLinks) {
                socialLinks.classList.remove('show');
            }
            
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});