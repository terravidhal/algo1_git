function isMajority(arr, n, x) {
    const countMap = new Map();

    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1); 
    }

    return countMap.get(x) > (n / 2);
}

// Ex :
const arr1 = [1, 2, 3, 3, 3, 3, 10];
const x1 = 3;
console.log(isMajority(arr1, arr1.length, x1)); // Output: true

const arr2 = [1, 1, 2, 4, 4, 4, 6, 6];
const x2 = 4;
console.log(isMajority(arr2, arr2.length, x2)); // Output: false

const arr3 = [1, 1, 1, 2, 2];
const x3 = 1;
console.log(isMajority(arr3, arr3.length, x3)); // Output: true


