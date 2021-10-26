let linkLogin = document.querySelector(".login-link");
let popupLogin = document.querySelector(".modal-sig-in");
let closeLogin = popupLogin.querySelector(".modal-close");
let form = popupLogin.querySelector("form");
let login = popupLogin.querySelector("[name=login]");
let password = popupLogin.querySelector("[name=password]");

let isStorageSupport = true;
let storage= "";

try{
    storage = localStorage.getItem("login");
}catch (err) {
    isStorageSupport = false;
}

linkLogin.addEventListener("click",function(evt){
    evt.preventDefault();
    popupLogin.classList.add("modal-show");

    if(storage){
        login.value=storage;
        password.focus();
    }else {
        login.focus();
    }
});

closeLogin.addEventListener("click",function(evt){
    evt.preventDefault();
    popupLogin.classList.remove("modal-show");
    popupLogin.classList.remove("modal-error");
});

form.addEventListener("submit",function(evt){    
    if(!login.value || !password.value){
        evt.preventDefault();
        popupLogin.classList.remove("modal-error");
        popupLogin.offsetWidth = popupLogin.offsetWidth;
        popupLogin.classList.add("modal-error")
    }else {
        if(isStorageSupport){
            localStorage.setItem("login",login.value);
        }
    }
});

window.addEventListener("keydown",function(evt){
    if(evt.code == 'Escape'){
        if(popupLogin.classList.contains("modal-show")){
            evt.preventDefault();
            popupLogin.classList.remove("modal-show");
            popupLogin.classList.remove("modal-error");
        }
    }
});