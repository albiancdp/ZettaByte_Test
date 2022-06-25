/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */

const data = [
    { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
    { firstName: 'Deddy', lastName: 'Dores', age: 25 }
];

function result(data) {
    // Your Code Here
    let result = [];
    const lengthData = data.length;
    // for data
    for (let i = 0; i < lengthData; i++) {
        const element = data[i];
        const keys = Object.keys(element);
        const lengthKeys = keys.length;
        // for object name
        for (let j = 0; j < lengthKeys; j++) {
            const key = keys[j];
            // if data under length data
            if (i + 1 < lengthData) {
                // if data object is different
                if (data[i][key] !== data[i + 1][key]) {
                    result.push(key);
                }
            }
        }
    }
    return result;
}

console.log(result(data));