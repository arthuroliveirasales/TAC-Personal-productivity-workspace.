const addCard = document.querySelector(".addCard");
const spaceWork = document.querySelector(".spaceWork");
const cardContainer = document.querySelector(".cardContainer")

addCard.addEventListener("click", criarCard);

function criarCard(){
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTop = document.createElement("div");
    cardTop.classList.add("cardTop");

    const cardTitle = document.createElement("input");
    cardTitle.classList.add("cardTitle");
    cardTitle.placeholder = "Title";

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("optionsContainer");

    const options = document.createElement("button");
    options.classList.add("options");
    options.textContent = "...";

    const menuOptions = document.createElement("div");
    menuOptions.classList.add("menuOptions")

//button's of menuOptions:

//addTask button function
    const addTask = document.createElement("button");
    addTask.classList.add("addTask");
    addTask.textContent = "Add List";


    addTask.addEventListener("click", criarList);

    function criarList(){
        const list = document.createElement("div");
        list.classList.add("list");

        const listTitleContainer = document.createElement("div");
        listTitleContainer.classList.add("listTitleContainer");

        const listTitle = document.createElement("input");
        listTitle.classList.add("listTitle");
        listTitle.placeholder = "Title";

        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "‒";

        const listContentContainer = document.createElement("div");
        listContentContainer.classList.add("listContentContainer");

        

        const addAndRemoveListContentConteiner = document.createElement("div");
        addAndRemoveListContentConteiner.classList.add("addAndRemoveListContentConteiner");

        const addListContent = document.createElement("button");
        addListContent.classList.add("addListContent");
        addListContent.textContent = "+ Add";

        const removeListContent = document.createElement("button");
        removeListContent.classList.add("removeListContent");
        removeListContent.textContent = "- Remove";

    cardContent.append(list);

    list.append(listTitleContainer);
        listTitleContainer.append(listTitle, removeButton);

    list.append(listContentContainer);


    list.append(addAndRemoveListContentConteiner);
        addAndRemoveListContentConteiner.append(addListContent);
        addAndRemoveListContentConteiner.append(removeListContent);

//addListContent:

addListContent.addEventListener("click", () => {
    const listContent = document.createElement("div");
    listContent.classList.add("listContent");

    const content = document.createElement("input");
    content.classList.add("content");

    const complete = document.createElement("button");
    complete.classList.add("complete");

    listContent.append(content, complete);
    listContentContainer.appendChild(listContent);

    complete.addEventListener("click", () => {
        complete.classList.toggle("completed");
        content.classList.toggle("completed");
    });
});

removeListContent.addEventListener("click", () => {
    const last = listContentContainer.lastElementChild;
    if (last) last.remove();
});
 
removeButton.addEventListener("click", () => {
    list.remove();
});

};
//}   

//addNotes:

    const addNotes = document.createElement("button");
    addNotes.classList.add("addNotes");
    addNotes.textContent = "Add Notes";

    addNotes.addEventListener("click", () => {
        const inputContentContainer = document.createElement("div");
        inputContentContainer.classList.add("inputContentContainer");

        const inputContent = document.createElement("textarea");
        inputContent.classList.add("inputContent");
        inputContent.placeholder = "Type something";

        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "‒";

        cardContent.append(inputContentContainer);
        inputContentContainer.append(inputContent, removeButton);

        inputContent.addEventListener("input", size);

    
        function size(e){
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
}

removeButton.addEventListener("click", () => {
    inputContentContainer.remove();
});

    });

    const uploadFile = document.createElement("button");
    uploadFile.classList.add("uploadFile");
    uploadFile.textContent = "Upload File";

//edit:

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.textContent = "Edit";

//edit action:

edit.addEventListener("click", () => {
    const removeButtons = cardContent.querySelectorAll(".removeButton");

    removeButtons.forEach(button => {
        button.classList.toggle("visible");
    });
});

document.addEventListener("click", (e) => {
    if (e.target.closest(".edit, .removeButton.visible")) return;

    const removeButtons = cardContent.querySelectorAll(".removeButton");

    removeButtons.forEach(button => {
        button.classList.remove("visible");
    });
});














    const duplicate = document.createElement("button");
    duplicate.classList.add("duplicate");
    duplicate.textContent = "Duplicate";

    const deleteCard = document.createElement("button");
    deleteCard.classList.add("deleteCard");
    deleteCard.textContent = "Delete Card";

//======================================================    

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");

    


    cardContainer.append(card);    
    card.append(cardTop);
    cardTop.append(cardTitle);
    cardTop.append(optionsContainer);
    optionsContainer.append(options);
    
    optionsContainer.append(menuOptions);

    menuOptions.append(addTask);
    menuOptions.append(addNotes);
    menuOptions.append(uploadFile);
    menuOptions.append(edit);
    menuOptions.append(duplicate);
    menuOptions.append(deleteCard);

    card.append(cardContent);



options.addEventListener("click", showOptions);

function showOptions(e){
    e.stopPropagation();
    menuOptions.classList.toggle("visible");
}

document.addEventListener("click", closeOptions);

function closeOptions(e){
    e.stopPropagation();
    menuOptions.classList.remove("visible");
}


//delet card: 

deleteCard.addEventListener("click", (e) => {
    e.stopPropagation();
    card.remove();
});

}

