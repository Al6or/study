let buttonSlide1 = document.getElementById("button-carousel-slide1");
let buttonSlide2 = document.getElementById("button-carousel-slide2");
let buttonSlide3 = document.getElementById("button-carousel-slide3");
let slideIndex = document.getElementById("slide");

buttonSlide1.addEventListener("change", changeStyleSlide);
buttonSlide2.addEventListener("change", changeStyleSlide);
buttonSlide3.addEventListener("change", changeStyleSlide);

function changeStyleSlide(evt) {
    if (buttonSlide1.checked) {
        slideIndex.style.marginLeft = "0";
    } else {
        if (buttonSlide2.checked) {
            slideIndex.style.marginLeft = "-33.33%";
        } else {
            slideIndex.style.marginLeft = "-66.66%";
        }
    }
}