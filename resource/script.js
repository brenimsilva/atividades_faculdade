import { setList } from "./sets.js";

const btnConfirm = document.getElementById("btn_show_results");
const setsListDiv = document.querySelector(".sets_list");

setList.forEach((set) => {
  set.inputBtn.addEventListener("click", () => {
    if (!set.numInput.value) {
      throw new Error("Precisa Inserir um número");
    } else {
      set.numList.push(set.numInput.value);
      set.box.innerText = `{ ${set.numList.join(", ")} }`;
    }
  });
});

btnConfirm.addEventListener("click", (e) => {
  e.preventDefault();
  const allSets = [];
  setList.forEach((set) => {
    allSets.push(...set.numList);
  });
  setsListDiv.innerText = `{ ${[...new Set(allSets)].join(`, `)} }`;
});
