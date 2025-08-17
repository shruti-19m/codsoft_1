// Navbar highlighting when scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navbar li a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`#navbar li a[href*="${sectionId}"]`)
        .classList.add("active");
    }
  });
});

// Smooth scroll on navbar click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Simple contact form handler (demo only)
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});
