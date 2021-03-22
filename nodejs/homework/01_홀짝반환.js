function isEven(n) { 
    // n이 짝수면 true, 홀수면 false 를 반환하는 함수를 만들어 봅시다
    if (n%2==0){
        return "true";
    } else{
        return "false";
    }
  }
  function isOdd(n) { 
    // 반대로 n이 홀수면 true, 짝수면 false 를 반환하는 함수를 만들어 봅시다
    if (n%2==0){
        return "false";
    }else{
        return "true";
    }
}
  
  console.log(isEven(10)); // true
  console.log(isEven(3)); // false
  console.log(isOdd(5)); // true
  console.log(isOdd(8)); // false