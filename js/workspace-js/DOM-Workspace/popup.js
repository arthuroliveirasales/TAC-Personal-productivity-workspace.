export const createPopUpElement = (card, cardContentElement) => {
  const popUp = document.createElement("div");
  popUp.classList.add("popUp");

  popUp.append(
    createAddListButton(cardContentElement),
    createAddNotesButton(cardContentElement),
    createUploadFilesButton(),
    createEditButton(),
    createDuplicateButton(),
    createDeleteCardButton(card),
  );
  return popUp;
};

/* popUp options ==================== */

import { createListElement } from "./list.js";

import { createNoteElement } from "./note.js";
import { createNoteContainerElement } from "./note.js";

const createAddListButton = (cardContentElement) => {
  const addList = document.createElement("button");
  addList.classList.add("addList");
  addList.textContent = "Add List";

  return addList;
};

const createAddNotesButton = (cardContentElement) => {
  const addNotes = document.createElement("button");
  addNotes.classList.add("addNotes");
  addNotes.textContent = "Add Notes";

  addNotes.addEventListener("click", () => {
    const noteContainer = createNoteContainerElement();

    cardContentElement.append(noteContainer);

    /*     note.addEventListener("input", size); */
  });

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
    const card = edit.closest(".card");
    const removeButtons = card.querySelectorAll(".remove");
    removeButtons.forEach((remove) => {
      remove.classList.toggle("visible");
    });
  });

  return edit;
};

const createDuplicateButton = () => {
  const duplicate = document.createElement("button");
  duplicate.classList.add("duplicate");
  duplicate.textContent = "Duplicate";

  return duplicate;
};
const createDeleteCardButton = (card) => {
  const deleteCard = document.createElement("button");
  deleteCard.classList.add("deleteCard");
  deleteCard.textContent = "Delete card";

  return deleteCard;
};
