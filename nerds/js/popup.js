let buttonMessage = document.querySelector(".button-message");
let popupMessage = document.querySelector(".modal-message");
let closeMessage = document.querySelector(".modal-close");

let formMessage = document.querySelector(".message-form");
let firstNameMessage = document.querySelector("[name=first-name]");
let emailMessage = document.querySelector("[name=email]");
let textMessage = document.querySelector("[name=text]");

let isStorageSupport = true;
let storageFirstName = "";
let storageEmail = "";

try {
    storageFirstName = localStorage.getItem("firstNameMessage");
    storageEmail = localStorage.getItem("emailMessage");
} catch (err) {
    isStorageSupport = false;
};

buttonMessage.addEventListener("click", clickButtonMessage);

function clickButtonMessage(evt) {
    evt.preventDefault();
    popupMessage.classList.add("modal-show");

    if (storageFirstName) {
        if (storageEmail) {
            firstNameMessage.value = storageFirstName;
            emailMessage.value = storageEmail;
            textMessage.focus();
        } else {
            firstNameMessage.value = storageFirstName;
            emailMessage.focus();
        }
    } else {
        firstNameMessage.focus();
    }
};

closeMessage.addEventListener("click", clickCloseMessage);

function clickCloseMessage(evt) {
    evt.preventDefault();
    popupMessage.classList.remove("modal-show");
};

formMessage.addEventListener("submit", submitformMessage);

function submitformMessage(evt){
    if(!firstNameMessage.value || !emailMessage.value || !textMessage.value){
        evt.preventDefault();
        popupMessage.classList.remove("modal-error");
        popupMessage.offsetWidth = popupMessage.offsetWidth;
        popupMessage.classList.add("modal-error");
    }else{
        if(isStorageSupport){
            localStorage.setItem("firstNameMessage",firstNameMessage.value);
            localStorage.setItem("emailMessage",emailMessage.value);
        }
    }
};



window.addEventListener("keydown",function(evt){
    if(evt.code == 'Escape'){
        if(popupMessage.classList.contains("modal-show")){
            evt.preventDefault();
            popupMessage.classList.remove("modal-show");
            popupMessage.classList.remove("modal-error");
        }
    }
});



