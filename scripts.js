// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
// Project Scroll Animation
document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.project-list li');
  
    // Function to handle the animation
    const animateProjects = () => {
      anime({
        targets: projectItems,
        opacity: [0, 1],
        translateY: [-50, 0],
        delay: anime.stagger(100),
        easing: 'easeOutQuad',
        duration: 1000
      });
    };
  
    // Intersection Observer Options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };
  
    // Intersection Observer Callback
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProjects();
          observer.unobserve(entry.target); // Unobserve the target after the animation has been triggered
        }
      });
    };
  
    // Create Intersection Observer
    const observer = new IntersectionObserver(callback, options);
  
    const projectsSection = document.querySelector('#projects');
    observer.observe(projectsSection);
  });
  