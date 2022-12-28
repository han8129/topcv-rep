const carousel =  document.querySelector(".carousel");

const track = carousel.querySelector(".carousel__track");
const slidesArray = Array.from(track.children);

const rightButton = carousel.querySelector(".carousel__button_right");
const leftButton = carousel.querySelector(".carousel__button_left");

const singleSlideWidth = slidesArray[0].getBoundingClientRect().width;

rightButton.addEventListener("click", e => {
       const currentSlide = track.querySelector(".current-slide");
       const nextSlide = currentSlide.nextElementSibling;

       const amountToMove = currentSlide.style.left;
       currentSlide.style.transform = "translateX(" + amountToMove + ")";
       console.log(nextSlide);
})