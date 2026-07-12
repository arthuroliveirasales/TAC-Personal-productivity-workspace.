/* geral actions */

document.addEventListener("click", (e) => {
  if (!e.target.closest(".options, .popUp")) {
    document
      .querySelectorAll(".popUp")
      .forEach((popUp) => popUp.classList.remove("visible"));
  }
});

/* =================== */

const createCardTopElement = () => {
  const cardTop = document.createElement("div");
  cardTop.classList.add("cardTop");

  return cardTop;
};

const createTitleElement = () => {
  const title = document.createElement("input");
  title.classList.add("title");
  title.placeholder = "Title";

  return title;
};

const createOptionsContainerElement = () => {
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("optionsContainer");

  return optionsContainer;
};

const createOptionsButton = (popUp) => {
  const options = document.createElement("button");
  options.classList.add("options");
  options.textContent = "...";

  options.addEventListener("click", () => {
    popUp.classList.toggle("visible");
  });

  return options;
};

/* Pop up options */

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

const createPopUpElement = (card) => {
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

//List

const createListTitleInput = () => {
  const listTitle = document.createElement("input");
  listTitle.classList.add("listTitle");
  listTitle.placeholder = "Title";

  return listTitle;
};

const createRemoveButton = () => {
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "-";

  return remove;
};

const createListTItleContainerElement = () => {
  const listTitleContainer = document.createElement("div");
  listTitleContainer.classList.add("listTitleContainer");

  listTitleContainer.append(createListTitleInput(), createRemoveButton());

  return listTitleContainer;
};

const createListContentContainerElement = () => {
  const listContentContainer = document.createElement("div");
  listContentContainer.classList.add("listTitleContainer");

  return listContentContainer;
};

const createListContentElement = () => {
  const content = document.createElement("input");
  content.classList.add("content");

  return content;
};
const createCompleteButton = () => {
  const complete = document.createElement("button");
  complete.classList.add("complete");

  complete.addEventListener("click", () => {
    complete.classList.toggle("completed");
  });

  return complete;
};

const createAddListContentButton = (listContentContainer) => {
  const addListContent = document.createElement("button");
  addListContent.classList.add("addListContent");
  addListContent.textContent = "+ Add";

  addListContent.addEventListener("click", () => {
    const content = createListContentElement();
    const complete = createCompleteButton();

    const contentCompleteContainer = createContentCompleteContainerElement();

    const listContentContainer = createListContentContainerElement();
    contentCompleteContainer.append(content, complete);
    listContentContainer.append(contentCompleteContainer);
  });

  return addListContent;
};

const createListActionsContainerElement = () => {
  const listActionsContainer = document.createElement("div");
  listActionsContainer.classList.add("listActionsContainer");

  listActionsContainer.append(
    createAddListContentbutton(),
    createRemoveListContentButton(),
  );

  return listActionsContainer;
};

/* Card content */

const createCardContentElement = () => {
  const cardContentElement = document.createElement("div");
  cardContentElement.classList.add("cardContentElement");

  return cardContentElement;
};

const createListElement = () => {
  const list = document.createElement("div");
  list.classList.add("list");

  list.append(
    createListTItleContainerElement(),
    createListContentContainerElement(),
    createListActionsContainerElement(),
  );

  return list;
};

const createNoteElement = () => {
  const note = document.createElement("textarea");
  note.classList.add("note");
  note.placeholder = "Type something...";

  return note;
};

/* ============================= */

function createCard(card) {
  const cardContentElement = createCardContentElement();
  const cardTop = createCardTopElement();
  const title = createTitleElement();
  const optionsContainer = createOptionsContainerElement();
  const options = createOptionsButton();
  const popup = createPopUpElement(card);
  const list = createListElement();
  const nota = createNoteElement();

  optionsContainer.append(options, popup);
  cardTop.append(title, optionsContainer);
  card.append(cardTop, cardContentElement);

  return card;
}
