const carouselsArray =  document.querySelectorAll(".carousel");

let carouselIndex;
for (carouselIndex = 0; carouselIndex < carouselsArray.length; carouselIndex++)
{
       const carousel = carouselsArray[carouselIndex];
       const track = carousel.querySelector(".carousel__track");

       const rightButton = carousel.querySelector(".carousel__button_right");
       const leftButton = carousel.querySelector(".carousel__button_left");

       const singleSlideWidth = track.querySelector(".carousel__slide").getBoundingClientRect().width;
       const gapWidth = window.getComputedStyle(track).getPropertyValue("gap")
       const amountToMove = singleSlideWidth + parseFloat(gapWidth);

       rightButton.addEventListener("click", e => {
              track.scrollBy({ top: 0, left: amountToMove, behavior: "smooth" })
       })

       leftButton.addEventListener("click", e => {
              track.scrollBy({ top: 0, left: - amountToMove, behavior: "smooth" })
       })
}
