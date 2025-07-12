document.addEventListener("DOMContentLoaded", function(){
    let steps = document.querySelectorAll(".step");
    let forms = document.querySelectorAll(".form");
    let currentStep = 0;
    let bar = document.querySelector(".bar");
    let prevBtns = document.querySelectorAll(".prev-btn");
    let nextBtns = document.querySelectorAll(".next-btn");

    function updateProgress(){
        steps.forEach((item , index)=> {
            if(index !== currentStep){
                item.classList.add("inactive-step");
            }
            else{
                item.classList.remove("inactive-step");
            }
        });

        forms.forEach((item, index) =>{
            if(index !== currentStep){
                item.classList.add("inactive-form");
            }
            else{
                item.classList.remove("inactive-form");
            }
        })
    }
    function barUpdate(newPercent){
        bar.style.width = newPercent+"%";
    }

    prevBtns.forEach((item, index)=>{
        item.addEventListener("click", function(){
            if(currentStep <= 0){
                currentStep = 0;
                return;
            }
            currentStep--;
            let num = 5+((currentStep)/(steps.length))*100;

            updateProgress();
            barUpdate(num);
        })
    })

    nextBtns.forEach((item, index)=>{
        item.addEventListener("click", function(){
            if(currentStep >= 5){
                currentStep = 5;
                return;
            }
            currentStep++;
            let num = 5+((currentStep)/(steps.length))*100;
            if(currentStep == 5)
                num -= 5;
            updateProgress();
            barUpdate(num);
        })
    })
});