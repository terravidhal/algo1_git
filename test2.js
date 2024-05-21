function prefixSumFunc(arr) {
    const prefixSum = []; 

    prefixSum[0] = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i]; 
    }

    return prefixSum;
}

// Ex:
const array = [10, 20, 10, 5, 15];
prefixSumFunc(array);
console.log(prefixSumFunc); // Output: [10, 30, 40, 45, 60]
