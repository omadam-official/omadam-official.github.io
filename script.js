document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".card,.org-card,.node-grid article,.principle-grid article").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
