const jwt = require("jsonwebtoken")

// 이건 오프소스로 만들때 키가 노출되지않게 주의해야함
const token = jwt.sign({test:true},'my-secret-key');
console.log(token);

// 둘중에 하나라도 키가 다르면 invalid signature에러가 뜸
const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2MTY4MDgyODF9.5GZDVzvl8iUI6xKkiBmkrkryxMEm42RdxPD1sh-m5V8","my-secret-key");
console.log(decoded);

const de = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2MTY4MDgyODF9.5GZDVzvl8iUI6xKkiBmkrkryxMEm42RdxPD1sh-m5V8");
console.log(de);