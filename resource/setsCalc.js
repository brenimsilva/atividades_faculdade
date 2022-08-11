/**
 * @param {Array} setList - Receive a list of sets and returns results for each possible intersection and unions
 */

export default function calcSets(setList) {
  const setData = {
    allSets: [],
    intersectionTotalAB: [],
    intersectionTotalAC: [],
    intersectionTotalBC: [],
    intersectionABC: [],
    intersectionOnlyAB: [],
    intersectionOnlyAC: [],
    intersectionOnlyBC: [],
  };
  setList.forEach((set) => {
    setData.allSets.push(...set.numList);
  });

  setList[0].numList.forEach((num) => {
    if (setList[1].numList.includes(num) && setList[2].numList.includes(num)) {
      setData.intersectionABC.push(num);
      setData.intersectionTotalAB.push(num);
      setData.intersectionTotalAC.push(num);
      setData.intersectionTotalBC.push(num);
    } else if (setList[1].numList.includes(num)) {
      //   setData.intersectionOnlyAB.push(num);
      setData.intersectionTotalAB.push(num);
    } else if (setList[2].numList.includes(num)) {
      //   setData.intersectionOnlyAC.push(num);
      setData.intersectionTotalAC.push(num);
    }
  });
  setList[1].numList.forEach((num) => {
    if (setList[2].numList.includes(num) && setList[0].numList.includes(num)) {
    } else if (setList[2].numList.includes(num)) {
      //   setData.intersectionOnlyBC.push(num);
      setData.intersectionTotalBC.push(num);
    }
  });

  return setData;
}
