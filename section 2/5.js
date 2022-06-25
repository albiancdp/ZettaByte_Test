/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
    // your code here
    let result = [];
    let newArrayStudent = new Array(...students);
    const lengthStudents = newArrayStudent.length;
    const lengthGroup = Math.ceil(lengthStudents / groups);   // get total student per group
    // sort by first name
    newArrayStudent.sort((a, b) => {
        if (a.firstName < b.firstName) {
            return -1;
        } else if (a.firstName > b.firstName) {
            return 1;
        } else {
            return 0;
        }
    });
    // slice per group
    for (let i = 0; i < groups; i++) {
        result.push(newArrayStudent.slice(i * lengthGroup, (i + 1) * lengthGroup));
    }
    return result;
}

console.log(result(students, groups));