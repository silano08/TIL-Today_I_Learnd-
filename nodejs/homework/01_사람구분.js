function checkName(person) {
	// 사람의 이름이 "John Doe" 일때만 true 를 리턴해주도록 합시다.
    if (person["name"]=="John Doe"){
        return true;
    }
}

var personArray = [
                    {"name": "Mark Bae", "age": 30},
                    {"name": "John Doe", "age": 20},
                    {"name": "Jane Doe", "age": 19},
                ];

for (var person of personArray) {
	if (checkName(person)) {
		console.log("Here is your beer! ", person["name"]);
	} else {
		console.log("Get out! ", person["name"]);
	}
}