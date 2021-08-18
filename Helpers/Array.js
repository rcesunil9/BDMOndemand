export const InsertAtParticularIndex = (arr, index, data) => {
  arr.splice(index, 0, data);
  return arr;
};

export const reorderArray = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
