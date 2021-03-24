const express = require('express')
const app = express()
const port = 3000


// 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));


// DB연결코드
// schemas파일로 분할함
const connect = require('./schemas');
connect();


// 굿즈 라우터
const goodsRouter = require("./routers/goods");
app.use("/api", [goodsRouter]);

// ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// name이라는 객체를 담아 넘겨주는것
app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', { name });
})

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/detail', (req, res) => {
  res.render('detail');
})

app.get('/cart', (req, res) => {
  res.render('cart');
})

app.get('/order', (req, res) => {
  res.render('order');
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})