// array objects- it holds diff data type elements as a key value pair. the key in js is referred as the property, with which its value can be found.
// nested loops- a loops inside another loop is called nested loop.

// defining an array of student objects

const students = [
    {
        name: "Appu",
        subjects : ['Maths','Physics','Chemistry']
    },
    {
        name: "Pappu",
        subjects : ['Biology','Physics','Chemistry']
    },
    {
        name: "Pari",
        subjects : ['Economics','Polity','History']
    },
    {
        name: "Aishu",
        subjects : ['Civics','Economics','Arts']
    },
];

// func to print the name of each student and their subjects
//  the above object is a 2d array. while i represents the name, j represents the subjects.
function studentSubjects(students) {
    for (let i=0;i<students.length;i++) {
        console.log(`Student Name: ${students[i].name}`);
        console.log('Subjects:');
        for (let j=0;j<students[i].subjects.length;j++) {
            console.log(`       ${students[i].subjects[j]}`)
        }
    }
}

studentSubjects(students);