const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel__item")

let carouselIndex = 0;

function slideCarousel() {
     carouselItems[carouselIndex].classList.remove("active")
     if(!carouselItems[carouselIndex + 1]) {
          carouselIndex = 0
     } else {
          carouselIndex++
     }
     carouselItems[carouselIndex].classList.add("active")
     console.log(carouselIndex)
}

setInterval(slideCarousel, 3000);