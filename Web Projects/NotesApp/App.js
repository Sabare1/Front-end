let saveNotes = () =>{

    let titleItems = document.querySelectorAll(".title");
    let bodyItems = document.querySelectorAll(".body");
    let data = [];
    titleItems.forEach((item, index) => {
        let head = item.value;
        let content = bodyItems[index].value;
        if(content.trim() !== ""){
            data.push({head, content});
        }
    })

    let titlesData = data.map((item) => item.head);
    let bodysData = data.map((item) => item.content);
    localStorage.setItem('titles', JSON.stringify(titlesData));
    localStorage.setItem('bodys', JSON.stringify(bodysData));
}

let addNote = (title="", content="") => {
    if(title instanceof Event){
        title = "";
    }
    let newNote = document.createElement("div");
    console.log(newNote);
    newNote.classList.add("note");
    newNote.innerHTML = `
    <div class="icons-container">
          <input type="image" class="save" src="save.png" />
          <input type="image" class="bin" src="bin.png" />
        </div>
        <textarea class="title" name="title" placeholder="Enter title">${title}</textarea>
        <textarea class="body" name="body" placeholder="Enter your thoughts">${content}</textarea>
    `;

    function saveContent(){
        saveNotes();
    }

    function getRid(){
        newNote.remove();
        saveNotes();
    }

    const saveBtn = newNote.querySelector(".save");
    const removeBtn = newNote.querySelector(".bin");

    saveBtn.addEventListener("click", saveContent);
    removeBtn.addEventListener("click", getRid);

    let container = document.querySelector(".container");
    container.appendChild(newNote);
}

let addBtn = document.querySelector(".add");
addBtn.addEventListener("click", addNote);

function loadNotes(){
    const titleData = localStorage.getItem("titles");
    const bodyData = localStorage.getItem("bodys");
    let titleLen = (titleData !== null) ? titleData.length : 0;
    let bodyLen = (bodyData !== null) ? bodyData.length : 0;
    for(let i=0; i< titleLen && bodyLen; i++){
        addNote(titleData[i], bodyData[i]);
    }
}

loadNotes();