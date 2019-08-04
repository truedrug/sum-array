function sumOfList(arr) {
  let sum = 0;
  (arr || []).forEach(num => (sum += num));

  return sum;
}

module.exports = sumOfList;
