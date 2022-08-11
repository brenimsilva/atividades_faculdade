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
  setA.innerText = `Conjunto A: { ${setList[0].numList.join(", ")} }`;
  setB.innerText = `Conjunto B: { ${setList[1].numList.join(", ")} }`;
  setC.innerText = `Conjunto C: { ${setList[2].numList.join(", ")} }`;

  aUbUc.innerText = `AUBUC: { ${[...new Set(calcSets(setList).allSets)].join(
    `, `
  )} }`;

  intersectionAll.innerText = `A∩B∩C: { ${calcSets(
    setList
  ).intersectionABC.join(", ")} }`;

  intersectionAB.innerText = `A∩B: { ${calcSets(
    setList
  ).intersectionOnlyAB.join(", ")} }`;

  intersectionAC.innerText = `A∩C: { ${calcSets(
    setList
  ).intersectionOnlyAC.join(", ")} }`;

  intersectionBC.innerText = `B∩C: { ${calcSets(
    setList
  ).intersectionOnlyBC.join(", ")} }`;
}
