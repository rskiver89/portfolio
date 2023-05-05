// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Logo scroll
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




