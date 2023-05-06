// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

const options = {
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const index = Array.from(sections).indexOf(entry.target);
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));

  
  // Name header scroll
const nameLogo = document.querySelector('#name-logo');
const header = document.querySelector('header');
const nameContainer = document.querySelector('#home h1');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  const nameRect = nameContainer.getBoundingClientRect();

  if (nameRect.top + nameRect.height <= headerHeight) {
    nameLogo.style.opacity = '1';
  } else {
    nameLogo.style.opacity = '0';
  }
});

// Contact Modal
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("contact-modal");
  var btn = document.getElementById("contact-btn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

const projects = document.querySelectorAll('.project');
const projectInfos = document.querySelectorAll('.project-info h2');

projects.forEach((project, index) => {
  project.addEventListener('mouseover', () => {
    projectInfos[index].style.color = '#005ea8';

  });

  project.addEventListener('mouseout', () => {
    projectInfos[index].style.color = 'white';
  });
});




