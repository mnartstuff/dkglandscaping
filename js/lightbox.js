window.addEventListener('load', function(){
  "use strict";

const images = document.querySelectorAll(".lightbox-img");
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox-img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

for( let i = 0; i < images.length; i++){
  images[i].addEventListener('click', () => {
    lightbox.classList.add('active');
    let img = document.createElement('img');

      img.src = images[i].src;
      lightboxImg.appendChild(img);

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget)
          return;

        img.remove();
        lightbox.classList.remove('active');
      });

    prevBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      i--;
      if(i<0){i=images.length-1};
      img.src = images[i].src;
    });

    nextBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      i++;
      if(i>=images.length) {i=0};
      img.src = images[i].src;
    });

  });

}

});
