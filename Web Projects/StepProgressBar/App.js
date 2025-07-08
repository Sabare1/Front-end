let bar = document.querySelector(".bar");
let form = document.querySelector(".form-container");
let totalWidth = form.offsetWidth;
let width = bar.offsetWidth;

function prevEvent(){
    if(width > 1){
        bar.style.width = width;
    }
}

function nextEvent(){
    if(width < totalWidth){
        bar.style.width = width;
    }
}