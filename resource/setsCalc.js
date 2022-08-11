/**
 * @param {Array} setList - Receive a list of sets and returns results for each possible intersection and unions
 */

export default function calcSets(setList) {
  const setData = {
    allSets: [],
    aUbUc: [],
    intersectionTotalAB: [],
    intersectionTotalAC: [],
    intersectionTotalBC: [],
    intersectionABC: [],
  };

  setList.forEach((set) => {
    setData.allSets.push(...set.numList);
  });

  setData.aUbUc = [...new Set(setData.allSets)];

  setData.aUbUc.forEach((num) => {
    if (
      setList[0].numList.includes(num) &&
      setList[1].numList.includes(num) &&
      setList[2].numList.includes(num)
    ) {
      setData.intersectionABC.push(num);
    } else if (
      setList[0].numList.includes(num) &&
      setList[1].numList.includes(num)
    ) {
      setData.intersectionTotalAB.push(num);
    } else if (
      setList[0].numList.includes(num) &&
      setList[2].numList.includes(num)
    ) {
      setData.intersectionTotalAC.push(num);
    } else if (
      setList[1].numList.includes(num) &&
      setList[2].numList.includes(num)
    ) {
      setData.intersectionTotalBC.push(num);
    }
  });

  return setData;
}
