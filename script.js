//Nav Bar
// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
//   const menuToggle = document.getElementById('navbarNav');
//   const bsCollapse = menuToggle ? new bootstrap.Collapse(menuToggle, { toggle: false }) : null;

//   navLinks.forEach((link) => {
//     link.addEventListener('click', () => {
//       if (menuToggle && menuToggle.classList.contains('show')) {
//         bsCollapse.hide();
//       }
//     });
//   });
// });

// Simple Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been "sent" successfully (simulated).`);
    this.reset();
});

// Back to Top
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        // Correct way to apply !important dynamically
        backToTopBtn.style.setProperty("display", "flex", "important");
    } else {
        // Correct way to hide it with !important dynamically
        backToTopBtn.style.setProperty("display", "none", "important");
    }
});

// Select all navigation links inside the collapsible menu
const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
const menuToggle = document.getElementById('navbarNav'); // Replace with your actual navbar target ID if different

// Create a Bootstrap collapse instance
const bsCollapse = menuToggle ? new bootstrap.Collapse(menuToggle, { toggle: false }) : null;

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Check if the mobile menu is currently open/visible
    if (menuToggle && menuToggle.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});