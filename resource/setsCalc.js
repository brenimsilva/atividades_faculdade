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

  function getList(list1, list2) {
    const list = {
      smaller: null,
      larger: null,
    };
    if (list1.length >= list2.length) {
      list.smaller = list2;
      list.larger = list1;
      return list;
    } else {
      list.smaller = list1;
      list.larger = list2;
      return list;
    }
  }

  setList.forEach((set) => {
    setData.allSets.push(...set.numList);
  });

  const listAB = getList(setList[0].numList, setList[1].numList);
  const listBC = getList(setList[1].numList, setList[2].numList);

  listAB.larger.forEach((num) => {
    if (listAB.smaller.includes(num) && setList[2].numList.includes(num)) {
      setData.intersectionABC.push(num);
      setData.intersectionTotalAB.push(num);
      setData.intersectionTotalAC.push(num);
      setData.intersectionTotalBC.push(num);
    } else if (listAB.smaller.includes(num)) {
      //   setData.intersectionOnlyAB.push(num);
      setData.intersectionTotalAB.push(num);
    } else if (
      setList[2].numList.includes(num) &&
      setList[0].numList.includes(num)
    ) {
      //   setData.intersectionOnlyAC.push(num);
      setData.intersectionTotalAC.push(num);
    }
  });
  listBC.larger.forEach((num) => {
    if (listBC.smaller.includes(num) && setList[0].numList.includes(num)) {
    } else if (listBC.smaller.includes(num)) {
      //   setData.intersectionOnlyBC.push(num);
      setData.intersectionTotalBC.push(num);
    }
  });
  return setData;
}
