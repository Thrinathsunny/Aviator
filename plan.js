// const a = 'mukeshambani'

// const b= 'ambanil'

// function indexOfAB(a,b) {
//     for (let i = 0; i < a.length - b.length; i++) {
//         if (needle = '') return 0
//         let j = 0;
//         while (j < needle.length && a[i + j] === b[j]) {
//             j++

//             if (j === needle.length) return i
//         }
//         return -1
//     }
// }

// const value = indexOfAB(a, b)

// console.log(value)



// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//     if (nums.length === 0) { return 0 }
//     if (nums[0] >= target) { return 0 }
//     if (nums[nums.length - 1] <= target) { return Number(nums.length - 1) }

//     for (i = 1; i < nums.length; i++) {
//         console.log(i,'started')
//         if (nums[i] === target) {
//             return i
//         }
//          else if (target < nums[i] && target > nums[i - 1]) {
//             return i
//         } 
//         console.log(i,'ended')
//     }
// };


// console.log(searchInsert([1, 3, 5 ],5))

const arr = [1, 3, 5, 7, 10]
const target = 20
function insertElement(arr,target) {
    let start = 0;
    let end = arr.length
let mid = Math.floor(start+end/2)
    while (start < end) {
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            start = mid + 1
        } else {
           end = mid-1
        }
    }
    return start
}

insertElement(arr,target)
