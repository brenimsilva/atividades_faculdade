import setList from "./sets.js";
import calcSets from "./setsCalc.js";
import writeResults from "./resultsHelper.js";

const btnConfirm = document.getElementById("btn_show_results");

setList.forEach((set) => {
  set.inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!set.numInput.value) {
      throw new Error("Precisa Inserir um número");
    } else {
      set.numList.push(set.numInput.value);
      set.numInput.value = "";
      set.box.innerText = `{ ${set.numList.join(", ")} }`;
    }
  });
});

btnConfirm.addEventListener("click", (e) => {
  e.preventDefault();
  writeResults();
});
