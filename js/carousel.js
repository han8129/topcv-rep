const carousel =  document.querySelector(".carousel");

const track = carousel.querySelector(".carousel__track");
const slidesArray = Array.from(track.children);

const rightButton = carousel.querySelector(".carousel__button_right");
const leftButton = carousel.querySelector(".carousel__button_left");

const singleSlideWidth = slidesArray[0].getBoundingClientRect().width;
const gapWidth = window.getComputedStyle(track).getPropertyValue("gap")
const amountToMove = singleSlideWidth + parseFloat(gapWidth);

rightButton.addEventListener("click", e => {
       track.scrollBy({top: 0, left: amountToMove, behavior: "smooth"})
})

leftButton.addEventListener("click",e => {
       track.scrollBy({top: 0, left: - amountToMove, behavior: "smooth"})
})
