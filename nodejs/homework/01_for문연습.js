var personArray = [
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
];
// 위에서 배운 4가지 for문을 이용해서 아래 문장을 출력해봅시다 (console.log)

// His/her name is John Doe. He/She is 20 years old.
// His/her name is Jane Doe. He/She is 19 years old.

////////////////////////////////////////////////////////

// 그냥 for문
// 첫번째
for (let i=0; i<personArray.length; i++){
    console.log("His/her name is"+personArray[i]["name"]+". He/She is "+personArray[i]["age"]+" years old.")
}

// for of문
// 두번째
for (const per of personArray){
    console.log("His/her name is"+per["name"]+". He/She is "+per["age"]+" years old.");
}

// for in문
// 세번째

for (const i in personArray){
    console.log("His/her name is"+personArray[i]["name"]+". He/She is "+personArray[i]["age"]+" years old.")
}

// for each문
// 네번째

personArray.forEach(v => {
    console.log("His/her name is"+v["name"]+". He/She is "+v["age"]+" years old.");
});