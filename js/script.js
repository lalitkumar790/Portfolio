//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bxs-tag-x');
    navbar.classList.toggle('active');
}


// scroll sections active link

let sections = document.querySelectorAll('section');

let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
        };
    });


    // sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)


    //remove toggle icon and navbar when click navbar link(scroll)
    
    menuIcon.classList.remove('bxs-tag-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration: 2000 ,
    delay:200    


});

ScrollReveal().reveal('.home-content, .heading',{ origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

window.addEventListener('DOMContentLoaded', function() {
  const textElement = document.querySelector('.multiple-text');
  const options = ["Web Developer", "Cloud Enthusiast", "Content Writer","Graphic designer","quick learner"]; // Add your multiple options here
  let optionIndex = 0;
  let currentText = '';

  function typeText() {
    const textArray = options[optionIndex].split('');
    currentText = '';
    let i = 0;
    const typingInterval = setInterval(function() {
      currentText += textArray[i];
      textElement.textContent = currentText;
      i++;
      if (i === textArray.length) {
        clearInterval(typingInterval);
        setTimeout(eraseText, 1000); // Adjust the time before erasing (in milliseconds)
      }
    }, 100); // Adjust the typing speed here (in milliseconds)
  }

  function eraseText() {
    const textArray = currentText.split('');
    let i = textArray.length - 1;
    const erasingInterval = setInterval(function() {
      textArray.pop();
      currentText = textArray.join('');
      textElement.textContent = currentText;
      i--;
      if (i < 0) {
        clearInterval(erasingInterval);
        optionIndex = (optionIndex + 1) % options.length;
        setTimeout(typeText, 800); // Adjust the time before typing the next option (in milliseconds)
      }
    }, 50); // Adjust the erasing speed here (in milliseconds)
  }

  typeText();
});
