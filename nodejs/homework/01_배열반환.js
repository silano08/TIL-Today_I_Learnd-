function getChildrens(personArray) {
    let child = []
    // 20세이하의 사람들만 배열로 반환해봅시다
    for (const i of personArray){
        if (i["age"]<=20){
            child.push(i)
        }
    }
    return child
}

var personArray = [
    { "name": "John Doe", "age": 10 },
    { "name": "Jane Doe", "age": 29 },
    { "name": "Fred Doe", "age": 13 },
    { "name": "Chris Doe", "age": 22 },
    { "name": "Layla Doe", "age": 8 },
];

console.log(getChildrens(personArray));
// [
// 	{"name": "John Doe", "age": 10},
// 	{"name": "Fred Doe", "age": 13},
//  {"name": "Layla Doe", "age": 8},
// ]