let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let step1 = document.querySelector(".step1");
let step2 = document.querySelector(".step2");
let step3 = document.querySelector(".step3");
let step4 = document.querySelector(".step4");
let step5 = document.querySelector(".step5");
let bar = document.querySelector(".bar");

let step = 0;



function prev(){
    let percent = (step/(5))*100;
    if(step <= 0){
        step = 0;
    }
    else{
        prevLoad(bar, percent);
        step--;
    }
}

function next(){
    console.log(step);
    let percent = (step/(5))*100;
    if(step >= 5){
        step = 5;
    }
    else{
        nextLoad(bar, percent);
        step++;
    }
}

function prevLoad(elem, percent){
    let minPercent = percent - 20;
    let temp = setInterval(frame, 10);

    function frame(){
        if(percent <= minPercent){
            clearInterval(temp);
        }
        else{
            percent--;
            elem.style.width = percent+"%";
        }
    }
}

function nextLoad(elem, percent){
    let maxPercent = percent+20;
    let temp = setInterval(frame, 10);

    function frame(){
        if(percent >= maxPercent){
            clearInterval(temp);
        }
        else{
            percent++;
            elem.style.width = percent+"%";
        }
    }
}