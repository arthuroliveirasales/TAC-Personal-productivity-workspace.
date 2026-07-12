export const createNoteElement = () => {
  const note = document.createElement("textarea");
  note.classList.add("note");
  note.placeholder = "Type something...";

  return note;
};
