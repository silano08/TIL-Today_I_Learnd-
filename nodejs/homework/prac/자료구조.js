// console.log('Hello world!')

// 주석처리

// var age = 20;
// console.log(age);

// 리스트?배열?
// var parr = [10,20,30]
// console.log(parr);

// 객체, 파이썬에선 딕셔너리
var pdict = { "k": "v", "n1": "HH", "b2": "AA", "age": 19 }
// console.log(pdict["k"]);

if (pdict["age"] == 20) {
	console.log("correct")
} else {
	console.log("Nope!")
}

// 반복문
var personArray = [
	{ "name": "John Doe", "age": 20 },
	{ "name": "Jane Doe", "age": 19 },
];

for (var i = 0; i < personArray.length; i++) {
	if (personArray[i]["age"] > 19) {
		console.log("Here is your beer! ", personArray[i]["name"]);
	} else {
		console.log("Get out! ", personArray[i]["name"]);
	}
}
// Here is your beer! John Doe
// Get out! Jane Doe

// 함수
function isValidAge(person) {
	if (person["age"] > 19) {
		return true;
	} else {
		return false;
	}
}

var personArray = [
	{ "name": "John Doe", "age": 20 },
	{ "name": "Jane Doe", "age": 19 },
];

for (var i = 0; i < personArray.length; i++) {
	if (isValidAge(personArray[i])) {
		console.log("Here is your beer! ", personArray[i]["name"]);
	} else {
		console.log("Get out! ", personArray[i]["name"]);
	}
}

// Here is your beer! John Doe
// Get out! Jane Doe