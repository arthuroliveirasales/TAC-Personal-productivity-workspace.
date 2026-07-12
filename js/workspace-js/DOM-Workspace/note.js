import { createRemoveButton } from "./shared.js";

export const createNoteElement = () => {
  const note = document.createElement("textarea");
  note.classList.add("note");
  note.placeholder = "Type something...";

  note.addEventListener("input", (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  });

  return note;
};

export const createNoteContainerElement = () => {
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("noteContainer");

  const remove = createRemoveButton(noteContainer);
  const note = createNoteElement();

  noteContainer.append(note, remove);

  return noteContainer;
};
