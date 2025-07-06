function submit(){
    const container = document.querySelector("#toast-container");
    container.className = "show";
    container.style.backgroundColor = "rgb(131, 240, 117)";

    let img = document.querySelector(".icon");
    img.setAttribute("src", "/accept.png");

    let content = document.querySelector(".toast-content");
    content.innerHTML = "successfully submitted!";

    let loader = document.querySelector(".bar");
    load(loader, "green");

    setTimeout( function () {container.className = container.className.replace("show", "");} , 3000);
}

function fail(){
    const container = document.querySelector("#toast-container");
    container.className = "show";
    container.style.backgroundColor = "rgb(240, 117, 117)";

    let img = document.querySelector(".icon");
    img.setAttribute("src", "/multiplication.png");

    let content = document.querySelector(".toast-content");
    content.innerHTML = "Task failed!!";

    let loader = document.querySelector(".bar");
    load(loader, "red");

    setTimeout( function () {container.className = container.className.replace("show", "");} , 3000);
}

function info(){
    const container = document.querySelector("#toast-container");
    container.className = "show";
    container.style.backgroundColor = "rgb(114, 116, 252)";

    let img = document.querySelector(".icon");
    img.setAttribute("src", "/information.png");

    let content = document.querySelector(".toast-content");
    content.innerHTML = "Do POTD and Earn Coins";

    let loader = document.querySelector(".bar");
    load(loader, "blue");
    
    setTimeout( function () {container.className = container.className.replace("show", "");} , 3000);
}

function warn(){
    const container = document.querySelector("#toast-container");
    container.className = "show";
    container.style.backgroundColor = "rgb(255, 255, 150)";

    let img = document.querySelector(".icon");
    img.setAttribute("src", "/warning.png");

    let content = document.querySelector(".toast-content");
    content.innerHTML = "!warning! server error";

    let loader = document.querySelector(".bar");
    load(loader, "black");

    setTimeout( function () {container.className = container.className.replace("show", "");} , 3000);
}

function load(elem, color){
    let width = 1;
    elem.style.backgroundColor = color;
    var id = setInterval(frame, 25);
    function frame(){
        if(width >= 100){
            clearInterval(id);
        }
        else{
            width++;
            elem.style.width = width+"%";
        }
    }
    
}