function hello() {
	console.log("Hello function");
}

// 첫번째 arrow function
const arrowFunction = () => {
	console.log("Hello arrow function");
}

function hello(){pass}
hello = () => {}
// 에로우함수는 결국 함수를 변수처럼 저장해 호출을 편하게해주는용도


// 두번째 arrow function
// 함수가 한줄만있으면 이런식으로 써도됨
const arrowFunctionWithoutReturn = () => console.log("Hello arrow function without return");

hello(); // Hello function
arrowFunction(); // Hello arrow function
arrowFunctionWithoutReturn(); // Hello arrow function without return