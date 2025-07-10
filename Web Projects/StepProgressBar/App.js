let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let step1 = document.querySelector(".step1");
let step2 = document.querySelector(".step2");
let step3 = document.querySelector(".step3");
let step4 = document.querySelector(".step4");
let step5 = document.querySelector(".step5");
let bar1 = document.querySelector("#bar1");
let bar2 = document.querySelector("#bar2");
let bar3 = document.querySelector("#bar3");
let bar4 = document.querySelector("#bar4");
let bar5 = document.querySelector("#bar5");
let step = 0;



function prev(){
    if(step < 0){
        step = 0;
    }
    else if(step == 1){
        step--;
        bar1.style.width = 0+"%";
    }
    else if(step == 2){
        step--;
        bar2.style.width = 0+"%";
    }
    else if(step == 3){
        step--;
        bar3.style.width = 0+"%";
    }
    else if(step == 4){
        step--;
        bar4.style.width = 0+"%";
    }
    else if(step == 5){
        step--;
        bar5.style.width = 0+"%";
    }
}

function next(){
    if(step > 5){
        step = 5;
    }
    else if(step == 0){
        step++;
        bar1.style.width = 100 + "%";
    }
    else if(step == 1){
        step++;
        bar2.style.width = 100 + "%";
    }
    else if(step == 2){
        step++;
        bar3.style.width = 100 + "%";
    }
    else if(step == 3){
        step++;
        bar4.style.width = 100 + "%";
    }
    else if(step == 4){
        step++;
        bar5.style.width = 100 + "%";
    }
}