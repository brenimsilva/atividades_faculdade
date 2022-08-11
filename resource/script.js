import { setList } from "./sets.js";

const btnConfirm = document.getElementById("btn_show_results");

setList.forEach((set) => {
  set.inputBtn.addEventListener("click", () => {
    set.numList.push(set.numInput.value);
    set.box.innerText = `{ ${set.numList.join(", ")} }`;
  });
});
