document.addEventListener("DOMContentLoaded", () => {
  // Animate elements on scroll
  const animatedElements = document.querySelectorAll(".animate__animated");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeInUp"); // example Animate.css class
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const footer = document.querySelector("#footer");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add("visible");
        observer.unobserve(footer); // only animate once
      }
    });
  }, { threshold: 0.1 });

  observer.observe(footer);
});

