/////// 내풀이

// let personArray = [
// 	{"name": "John Doe", "age": 20},
// 	{"name": "Jane Doe", "age": 19},
// 	{"name": "Fred Doe", "age": 32},
// 	{"name": "Chris Doe", "age": 45},
// 	{"name": "Layla Doe", "age": 37},
// ];

// // personArray의 나이 평균을 구해주는 Arrow Function을 작성해봅시다.
// const getAgeAverage = (personArray) => {
// 	var num = 0;
// 	for (const i in personArray){
// 		num = num+personArray[i]["age"];
// 	}
// 	console.log(num);
// }

// console.log(getAgeAverage(personArray));
 
/////// 선생님 풀이

let personArray = [
	{"name": "John Doe", "age": 20},
	{"name": "Jane Doe", "age": 19},
	{"name": "Fred Doe", "age": 32},
	{"name": "Chris Doe", "age": 45},
	{"name": "Layla Doe", "age": 37},
];

// personArray의 나이 평균을 구해주는 Arrow Function을 작성해봅시다.
const getAgeAverage = (personArray) => {
	let sum = 0;
	for (let person of personArray){
		sum = sum+ person['age']
	}

	const aver = sum/personArray.length
	return aver
}

console.log(getAgeAverage(personArray));