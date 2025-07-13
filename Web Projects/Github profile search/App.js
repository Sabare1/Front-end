let api = "https://api.github.com/users/";

let fetch = document.createElement("script");

fetch.src = `https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js`;
fetch.integrity = `sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==`;
fetch.crossOrigin = "anonymous";
document.head.appendChild(fetch);

let output = document.querySelector(".card-output");
let form = document.querySelector(".search-form");
let input = document.querySelector("#search-bar");

let getUser = (username) =>{
    axios(api+username)
    .then((response) => {
        userCardBuild(response.data);
        getRepo(username);
    })
    .catch((error) => {
        if(error.response.status == 404){
            errorFunction("Oops! User not found!");
        }
    });
}

let getRepo = (username) =>{
    axios(api+username+"/repos?sort=created")
    .then((response) =>{
        repoBuildHelp(response.data);
    })
    .catch((error) =>{
        if(error.response.status == 404){
            errorFunction("Oops! User doesn't have current repositories")
        }
    });
}

let userCardBuild = (response) =>{
    let name = response.name || response.login;
    let info = response.bio || "";
    let img_url = response.avatar_url;
    let followers = response.followers;
    let following = response.following;
    let pubRepos = response.public_repos;

    let cardEle = `
        <div class="image-container">
            <img src="${img_url}" alt="${name}"> 
        </div>
        <div class="info-container">
            <h2>${name}</h2>
            <p>${info}</p>
            <ul>
                <li>Followers <strong>${followers}</strong></li>
                <li>Following <strong>${following}</strong></li>
                <li>Repositories <strong>${pubRepos}</strong></li>
            </ul>
        </div>
        <div class="repo-container">
            <div class="repos"></div>
        </div>
    `;
    output.innerHTML = cardEle;
}

let errorFunction = (error) =>{
    let msg = `
    <div>
        <h2>
            ${error}
        </h2>
    </div>
    `;

    output.innerHTML = msg;
}

let repoBuildHelp = (response)=>{
    let repoDiv = document.querySelector(".repos");
    for(let i=0; i<5 && i<response.length; i++){
        let repo = response[i];
        let repoEl = document.createElement("a");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.classList.add("repo");
        repoEl.innerText = repo.name;
        repoDiv.appendChild(repoEl);
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let text = input.value;
    if(text){
        getUser(text);
    }
    input.value = "";
})