// Smooth scroll (for internal links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  
  // Navbar active link highlight
  const links = document.querySelectorAll(".nav-links a");
  
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
  
  
  // Contact form submit (basic)
  const form = document.querySelector(".contact-form");
  
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      alert("Message sent successfully 🚀");
  
      form.reset();
    });
  }
  
  
  // Simple fade-in animation on scroll
  const cards = document.querySelectorAll(".card");
  
  window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;
  
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
  
      if (cardTop < triggerBottom) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });
  
  // Initial state for animation
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.5s ease";
  });