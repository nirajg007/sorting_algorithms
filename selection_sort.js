// Sort Array using Selection sort algorithm
function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
}

// Input array
const nums = [1, 4, 5, 0, 2, 3, 1];
const result = selectionSort(nums);
// Expected Output
// [0,1,1,2,3,4,5]
console.log(result);
