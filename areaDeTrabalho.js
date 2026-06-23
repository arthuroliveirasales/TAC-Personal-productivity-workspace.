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

    const addTask = document.createElement("button");
    addTask.classList.add("addTask");
    addTask.textContent = "AddTask";

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


