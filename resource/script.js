import { setList } from "./sets.js";

const btnConfirm = document.getElementById("btn_show_results");
const aUbUc = document.getElementById("aubuc");
const intersectionAll = document.getElementById("intersectionABC");
const intersection12 = document.getElementById("intersectionAB");
const intersection13 = document.getElementById("intersectionAC");
const intersection23 = document.getElementById("intersectionBC");

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
  const intersectionABC = [];
  const intersectionAB = [];
  const intersectionAC = [];
  const intersectionBC = [];
  setList.forEach((set) => {
    allSets.push(...set.numList);
  });

  setList[0].numList.forEach((num) => {
    if (setList[1].numList.includes(num) && setList[2].numList.includes(num)) {
      intersectionABC.push(num);
    } else if (setList[1].numList.includes(num)) {
      intersectionAB.push(num);
    } else if (setList[2].numList.includes(num)) {
      intersectionAC.push(num);
    }
  });
  setList[1].numList.forEach((num) => {
    if (setList[2].numList.includes(num) && setList[0].numList.includes(num)) {
    } else if (setList[2].numList.includes(num)) {
      intersectionBC.push(num);
    }
  });

  // console.log(intersectionABC);
  // console.log(intersectionAB);
  // console.log(intersectionAC);
  // console.log(intersectionBC);

  aUbUc.innerText = `AUBUC: { ${[...new Set(allSets)].join(`, `)} }`;
  intersectionAll.innerText = `A∩B∩C: { ${intersectionABC.join(", ")} }`;
  intersection12.innerText = `A∩B: { ${intersectionAB.join(", ")} }`;
  intersection13.innerText = `A∩C: { ${intersectionAC.join(", ")} }`;
  intersection23.innerText = `B∩C: { ${intersectionBC.join(", ")} }`;
});
