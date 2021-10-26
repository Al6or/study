let buttonMap = document.querySelector(".button-contacts-map");
let popupMap = document.querySelector(".modal-map");
let closeMap = popupMap.querySelector(".modal-close");

let imgMap = document.querySelector(".modal-map img");
let iframeMap = document.querySelector(".modal-map iframe");


buttonMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
});


closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.code == 'Escape') {
        if (popupMap.classList.contains("modal-show")) {
            evt.preventDefault();
            popupMap.classList.remove("modal-show");
        }
    }
});







