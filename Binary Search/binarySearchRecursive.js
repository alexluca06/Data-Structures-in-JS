const binarySearch = (arr, target, left, right) => {
  
  if (right >= left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    console.log(indexToCheck);
  
    if (checking === target) {
      return indexToCheck;
    } 
    if (checking < target) {
      return binarySearch(arr, target, indexToCheck + 1, right)
    }  
    return binarySearch(arr, target, left, indexToCheck - 1)
    
  }
  
  return -1;
}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const right = searchable.length;
const target = 41;

targetIndex = binarySearch(searchable, target, 0, right);

console.log(`The target index is ${targetIndex}.`);

module.exports = binarySearch;
