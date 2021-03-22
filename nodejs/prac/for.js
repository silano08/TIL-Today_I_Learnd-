///// 그냥 for문

const students = ["John", "Jane", "Alex"]

for (let i = 0; i < students.length; i++) {
	console.log(students[i]);
}

// John
// Jane
// Alex

/////// for of

const students = ["John", "Jane", "Alex"]

for (const student of students) {
	console.log(student);
}

// John
// Jane
// Alex

/////// for in

const students = ["John", "Jane", "Alex"]

// in은 인덱스번호를 찍어줌

for (const index in students) {
	console.log(index, students[index]);
}

// 0 John
// 1 Jane
// 2 Alex

//////// forEach

const students = ["John", "Jane", "Alex"]

students.forEach(v => {
	console.log(v);
});

// John
// Jane
// Alex