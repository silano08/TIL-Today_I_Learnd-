var num = 10;

if (num == 10) {
	var num = 20;
	console.log("num in if : ", num); // num in if : 20
}

console.log(num); // 20

// 변수의 접근을 결정
let num = 10;

if (num == 10) {
	let num = 20;
	console.log("num in if : ", num); // num in if : 20
}

console.log(num); // 10

// 변하지않는 변수

const A = 3.11
const A = 3.12 // 에러뜸
