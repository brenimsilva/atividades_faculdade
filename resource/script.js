import setList from "./sets.js";
import writeResults from "./resultsHelper.js";

const btnConfirm = document.getElementById("btn_show_results");
const btnReset = document.querySelector(".btn_reset");

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

btnReset.addEventListener("click", (e) => {
  e.preventDefault();
  document.location.reload();
});
