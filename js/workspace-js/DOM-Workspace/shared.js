export const createRemoveButton = (element) => {
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "-";

  remove.addEventListener("click", () => {
    element.remove();
  });

  return remove;
};
