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

//addTask function
    const addTask = document.createElement("button");
    addTask.classList.add("addTask");
    addTask.textContent = "Add List";


    addTask.addEventListener("click", criarList);

    function criarList(){
        const list = document.createElement("div");
        list.classList.add("list");

        const listTitleContainer = document.createElement("div");
        listTitleContainer.classList.add("listTitleConteiner");

        const listTitle = document.createElement("input");
        listTitle.classList.add("listTitle");
        listTitle.placeholder = "Title";

        const listContentContainer = document.createElement("div");
        listContentContainer.classList.add("listContentContainer");

        const listContent = document.createElement("div");
        listContent.classList.add("listContent");

        const content = document.createElement("input");
        content.classList.add("content");

        const complete = document.createElement("button");
        complete.classList.add("complete");

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
        listTitleContainer.append(listTitle);

    list.append(listContentContainer)
        listContentContainer.append(listContent);
            listContent.append(content);
            listContent.append(complete);

    list.append(addAndRemoveListContentConteiner);
        addAndRemoveListContentConteiner.append(addListContent);
        addAndRemoveListContentConteiner.append(removeListContent);

addListContent.addEventListener("click", addContent);

function addContent(){
    console.log("teste123");
    const listContent = document.createElement("div");
    listContent.classList.add("listContent");

    const content = document.createElement("input");
    content.classList.add("content");

    const complete = document.createElement("button");
    complete.classList.add("complete");

    listContentContainer.append(listContent);
    listContent.append(content);
    listContent.append(complete);

}




    }
//}            
    const uploadFile = document.createElement("button");
    uploadFile.classList.add("uploadFile");
    uploadFile.textContent = "UploadFile";

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.textContent = "Edit";

    const duplicate = document.createElement("button");
    duplicate.classList.add("duplicate");
    duplicate.textContent = "Duplicate";

    const deleteCard = document.createElement("button");
    deleteCard.classList.add("deleteCard");
    deleteCard.textContent = "DeleteCard";

//======================================================    

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");

    const inputContent = document.createElement("textarea");
    inputContent.classList.add("inputContent");
    inputContent.placeholder = "Type something";


    cardContainer.append(card);    
    card.append(cardTop);
    cardTop.append(cardTitle);
    cardTop.append(optionsContainer);
    optionsContainer.append(options);
    
    optionsContainer.append(menuOptions);

    menuOptions.append(addTask);
    menuOptions.append(uploadFile);
    menuOptions.append(edit);
    menuOptions.append(duplicate);
    menuOptions.append(deleteCard);

    card.append(cardContent);
    cardContent.append(inputContent);

inputContent.addEventListener("input", size);

function size(e){
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
}

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

const originalInputContent = document.querySelector(".inputContent");

originalInputContent.addEventListener("input", size);

function size(e){
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
}

const originalBtn = document.querySelector(".options");
const originalMenu = document.querySelector(".menuOptions");

originalBtn.addEventListener("click", showOptions)

function showOptions(e){
    e.stopPropagation();
    originalMenu.classList.toggle("visible");
}

document.addEventListener("click", closeOptions);

function closeOptions(){
    originalMenu.classList.remove("visible");
}

//delet card:

const originalDeleteCard = document.querySelector(".deleteCard");
const originalCard = document.querySelector(".card");

originalDeleteCard.addEventListener("click", (e) => {
    e.stopPropagation();
    originalCard.remove();
});





























const listContentContainer = document.querySelector(".listContentContainer");
const originalAddListContent = document.querySelector(".addListContent");

originalAddListContent.addEventListener("click", addContent);

function addContent(){
    console.log("teste123");
    const listContent = document.createElement("div");
    listContent.classList.add("listContent");

    const content = document.createElement("input");
    content.classList.add("content");

    const complete = document.createElement("button");
    complete.classList.add("complete");

    listContentContainer.append(listContent);
    listContent.append(content);
    listContent.append(complete);

}

//    const removeListContent = document.querySelector(".removeListContent");

//    removeListContent.addEventListener("click", removeContent);

//    function removeContent(){
//    listContent.remove();
//}