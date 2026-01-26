// Navbar Functionality
(function() {
  'use strict';
  
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdowns = document.querySelectorAll('[data-dropdown]');
  
  // Sticky navbar on scroll
  let lastScroll = 0;
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
      if (currentScroll > 20) {
        navbar.classList.add('shadow-theme-sm');
      } else {
        navbar.classList.remove('shadow-theme-sm');
      }
    }
    
    lastScroll = currentScroll;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuButton.querySelector('svg');
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    });
  }
  
  // Dropdown functionality
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('[data-dropdown-toggle]');
    const menu = dropdown.querySelector('[data-dropdown-menu]');
    
    if (button && menu) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
      });
      
      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          menu.classList.add('hidden');
        }
      });
    }
  });
  
  // Close mobile menu on link click
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
})();

