export const createPopUpElement = (card, cardContentElement) => {
  const popUp = document.createElement("div");
  popUp.classList.add("popUp");

  popUp.append(
    createAddListButton(cardContentElement),
    createAddNotesButton(),
    createUploadFilesButton(),
    createEditButton(),
    createDuplicateButton(),
    createDeleteCardButton(card),
  );
  return popUp;
};

/* popUp options ==================== */

import { createListElement } from "./list.js";

const createAddListButton = (cardContentElement, remove) => {
  const addList = document.createElement("button");
  addList.classList.add("addList");
  addList.textContent = "Add List";

  addList.addEventListener("click", () => {
    const list = createListElement(remove);

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

export const createEditButton = () => {
  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.textContent = "Edit";

  edit.addEventListener("click", () => {
    remove.classList.toggle("visible");
  });

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
