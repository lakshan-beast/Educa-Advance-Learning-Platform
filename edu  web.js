// let menuBtn = document.getElementById('menu-btn');

// menuBtn.addEventListener('click', () => {
//       let navbar = document.getElementById('navbar');

//       if (navbar.style.display === 'block') {
//             console.log('None');
//             // navbar.style.display = 'none';
            
//             menuBtn.classList.remove('fa-xmark');
//             menuBtn.classList.add('fa-bars');
//       } else {
//             console.log('Display');
//             // navbar.style.display = 'block';

//             menuBtn.classList.add('fa-xmark');
//             menuBtn.classList.remove('fa-bars');
//       }
// })




const YEAR = new Date().getFullYear();
document.getElementById('year').innerHTML = YEAR;





let slideIndex = 0;
showSlides();

function showSlides() {
      let index; 
      let slides = document.getElementsByClassName('image-content');
      for (let index = 0; index < slides.length; index++) {
            slides[index].style.display = 'none';            
      }
      slideIndex++;
      if (slideIndex > slides.length) {
            slideIndex = 1;          
      }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 2000);
}





















