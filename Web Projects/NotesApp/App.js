
let saveNotes = () =>{

    let titles = document.querySelectorAll(".title");
    let bodys = document.querySelectorAll(".body");
    let data = [];
    titles.forEach((titles, index) => {
        let head = titles.value;
        let content = bodys[index].value;
        if(content.trim() !== ""){
            data.push({head, content});
        }
    })
}

let addNote = () => {
    let newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.innerHTML = `
    <div class="icons-container">
          <input type="image" class="save" src="save.png" />
          <input type="image" class="bin" src="bin.png" />
        </div>
        <textarea class="title" placeholder="Enter title"></textarea><br />
        <textarea class="body" placeholder="Enter your thoughts"></textarea>
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
