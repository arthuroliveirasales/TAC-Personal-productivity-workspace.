import { createRemoveButton } from "./shared.js";

export const createNoteElement = (noteData) => {
  const note = document.createElement("textarea");
  note.classList.add("note");
  note.placeholder = "Type something...";
  note.value = noteData.content;

  note.addEventListener("input", (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  });

  return note;
};

export const createNoteContainerElement = (noteData) => {
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("noteContainer");

  const remove = createRemoveButton(noteContainer);
  const note = createNoteElement(noteData);

  noteContainer.append(note, remove);

  noteContainer.dataset.id = noteData.id;

  return noteContainer;
};
