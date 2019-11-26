function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum;
  
    for (let i = 0; i < arr.length; i++) {
      sum = 0;

      for (let j = i; j < arr.length; j++) {
        sum += arr[j];

        if (sum > maxSum) {
            maxSum = sum;
        }
      }
    }
  
    return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]); //= 5
getMaxSubSum([2, -1, 2, 3, -9]);// = 6
getMaxSubSum([-1, 2, 3, -9, 11]);// = 11
getMaxSubSum([-2, -1, 1, 2]);// = 3
getMaxSubSum([100, -9, 2, -3, 5]);// = 100
getMaxSubSum([1, 2, 3]);// = 6