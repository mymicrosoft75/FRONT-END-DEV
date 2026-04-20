

const slides = document.getElementsByClassName("carousel-item")


let slidePosition = 0;


const totalSlide = slides.length;

let carouselButtonPrev = document.getElementById("carousel-button-prev")

let carouselButtonNext = document.getElementById("carousel-button-next")


carouselButtonPrev.addEventListener("click", function(){
    moveToPrevSlide();
})


carouselButtonNext.addEventListener("click", function(){
    moveToNextSlide();
})

function moveToPrevSlide() {
    hideAllSlides();
    if(slidePosition === 0) {
        slidePosition = totalSlide - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToNextSlide() {
    hideAllSlides();
    if(slidePosition === totalSlide - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function hideAllSlides() {
    for(let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}