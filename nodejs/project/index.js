const express = require('express')
const app = express()
const port = 3000

// 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));

// ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// DB연결코드
// schemas파일로 분할함
const connect = require('./schemas');
connect();

// post API 서버 불러오기
const postRouter = require("./routers/post");
app.use("/api", [postRouter]);

app.get('/home', (req, res) => {
    res.render('index');
})

app.get('/post', (req, res) => {
    res.render('post');
})

app.get('/detail', (req, res) => {
    res.render('viewpost');
})
 
app.get('/edit', (req, res) => {
    res.render('revise');
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})