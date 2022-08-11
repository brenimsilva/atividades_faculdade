import calcSets from "./setsCalc.js";
import setList from "./sets.js";

const setA = document.getElementById("setA");
const setB = document.getElementById("setB");
const setC = document.getElementById("setC");
const aUbUc = document.getElementById("aubuc");
const intersectionAll = document.getElementById("intersectionABC");
const intersectionAB = document.getElementById("intersectionAB");
const intersectionAC = document.getElementById("intersectionAC");
const intersectionBC = document.getElementById("intersectionBC");
const onlyAB = document.getElementById("intersectionOnlyAB");
const onlyAC = document.getElementById("intersectionOnlyAC");
const onlyBC = document.getElementById("intersectionOnlyBC");

export default function writeResults() {
  setA.innerText = `{ ${setList[0].numList.join(", ")} }`;
  setB.innerText = `{ ${setList[1].numList.join(", ")} }`;
  setC.innerText = `{ ${setList[2].numList.join(", ")} }`;

  aUbUc.innerText = `{ ${[...new Set(calcSets(setList).allSets)].join(`, `)} }`;

  intersectionAll.innerText = `{ ${calcSets(setList).intersectionABC.join(
    ", "
  )} }`;

  intersectionAB.innerText = `{ ${calcSets(setList).intersectionTotalAB.join(
    ", "
  )} }`;

  intersectionAC.innerText = `{ ${calcSets(setList).intersectionTotalAC.join(
    ", "
  )} }`;

  intersectionBC.innerText = `{ ${calcSets(setList).intersectionTotalBC.join(
    ", "
  )} }`;

  console.log(calcSets(setList));
}
