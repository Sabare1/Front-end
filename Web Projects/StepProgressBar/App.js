let bar = document.querySelector(".bar");
let form = document.querySelector(".form-container");
let totalWidth = form.offsetWidth;
let width = bar.offsetWidth;

function prevEvent(){
    console.log(width);
    if(width > 1){
        width -= (20/100)*(totalWidth);
        bar.style.width = width;
    }
}

function nextEvent(){
    console.log(width);
    if(width < totalWidth){
        width += (20/100)*(totalWidth);
        bar.style.width = width;
    }
}