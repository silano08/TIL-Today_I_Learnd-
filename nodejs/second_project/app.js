const express = require('express');
const app = express();
const port = 3000;

// 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// app.use(express.static("views"));

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
    res.render('login');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.get('/main', (req, res) => {
    res.render('post');
})

app.get('/addpost', (req, res) => {
    res.render('addpost');
})
 
app.get('/detail', (req, res) => {
    res.render('viewdetail');
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })