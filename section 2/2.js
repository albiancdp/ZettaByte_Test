/**
 * Direction:
 * - combine the data between numbersOne and numberTwo and get the deleted data between originalData and the result of merge
 * - divide the data between total value of numbersOne and numbersTwo that already merge, and total value of deletedData
 *
 * Expected Result:
 * 2.21
 */

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9]

function result(originalData, numbersOne, numbersTwo) {
    // Your Code Here
    let result = [];

    const combineNumber = numbersOne.concat(numbersTwo);
    const deletedNumber = originalData.filter(item => !combineNumber.includes(item));
    const totalMerge = combineNumber.reduce((total, index) => total + index, 0);
    const totalDeleted = deletedNumber.reduce((total, index) => total + index, 0);
    console.log(totalMerge, totalDeleted, totalMerge / totalDeleted);

    return result;
}

console.log(result(originalData, numbersOne, numbersTwo));