document.addEventListener("DOMContentLoaded", function(){
    let steps = document.querySelector(".step-container");
    let forms = document.querySelector(".form-container");
    let currentStep = 0;
    let percent = (currentStep/steps.length-1) * 100;
    let bar = document.querySelector(".bar");
    function updateProgress(){
        steps.forEach((item , index)=> {
            if(index === currentStep){
                item.classList.add("active-step");
            }
            else{
                item.classList.remove("active-step");
            }
        });

        forms.forEach((item, index) =>{
            if(index === currentStep){
                item.classList.add("active-form");
            }
            else{
                item.classList.remove("active-form");
            }
        })
    }
    function barUpdate(extraPercent){
        percent = (currentStep/(steps.length-1)) * 100;
        percent += extraPercent;
        bar.style.width = percent+"%";
    }

    function prev(){

    }   

    function next(){

    }
});