export const createRemoveButton = (element) => {
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "-";

  console.log(element);

  remove.addEventListener("click", () => {
    element.remove();
  });

  return remove;
};
