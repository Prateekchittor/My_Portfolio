// Scroll-triggered animations with repeated reveal
const options = {
    threshold: 0.1
  };
  
  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      } else {
        entry.target.classList.remove('revealed'); // 👈 Remove when out of view
      }
    });
  };
  
  const observer = new IntersectionObserver(reveal, options);
  
  // Observe all elements with animation classes
  document.querySelectorAll('.fade-up, .zoom-in').forEach(el => observer.observe(el));
  
