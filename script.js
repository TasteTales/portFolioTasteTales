const images = document.querySelectorAll('.about-image img');
let currentImage = 0;

function showImage(index) {
  images.forEach(img => img.style.opacity = 0);
  images[index].style.opacity = 1;
}

function nextImage() {
  showImage(currentImage);
  currentImage = (currentImage + 1) % images.length; 
} showImage(currentImage);
setInterval(nextImage, 4500);
 navLinks = document.querySelectorAll('.navbar a');


navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId);    
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});