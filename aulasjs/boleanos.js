const classA = [{
        name: 'Adonis',
        grade: 6
    },
    {
        name: 'Michelle',
        grade: 5
    },
    {
        name: 'Fulano',
        grade: 2
    },
    {
        name: 'Felipe',
        grade: 1.8
    },
    {
        name: 'Arthur',

        grade: 4.99
    }
];
const classB = [{
        name: 'Flávio',
        grade: 5
    },
    {
        name: 'Willian',
        grade: 10
    },
    {
        name: 'Jéssica',
        grade: 5
    },
    {
        name: 'More one students',
        grade: 10
    }
];

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade;
    }
    const average = sum / students.length;
    return average;
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats!`);
    } else {
        console.log(`${turma} average: ${average}. Is not good!`);
    }
}

function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}


function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} flunked!`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student);
    }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, 'Class Spartanos');
sendMessage(average2, 'Class Troianos');

studentsflunkeds(classA);
studentsflunkeds(classB);
