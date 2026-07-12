const createAddListButton = (cardContentElement) => {
  const addList = document.createElement("button");
  addList.classList.add("addList");
  addList.textContent = "Add List";

  addList.addEventListener("click", () => {
    const list = createListElement();

    cardContentElement.append(list);
  });

  return addList;
};

const createAddNotesButton = () => {
  const addNotes = document.createElement("button");
  addNotes.classList.add("addNotes");
  addNotes.textContent = "Add Notes";

  return addNotes;
};
const createUploadFilesButton = () => {
  const uploadFiles = document.createElement("button");
  uploadFiles.classList.add("uploadFiles");
  uploadFiles.textContent = "Upload Files";

  return uploadFiles;
};
const createEditButton = () => {
  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.textContent = "Edit";

  return edit;
};

const createDuplicateButton = () => {
  const duplicate = document.createElement("button");
  duplicate.classList.add("duplicate");
  duplicate.textContent = "duplicate";

  return duplicate;
};
const createDeleteCardButton = (card) => {
  const deleteCard = document.createElement("button");
  deleteCard.classList.add("deleteCard");
  deleteCard.textContent = "Delete card";

  deleteCard.addEventListener("click", (e) => {
    e.stopPropagation();
    card.remove();
  });

  return deleteCard;
};
