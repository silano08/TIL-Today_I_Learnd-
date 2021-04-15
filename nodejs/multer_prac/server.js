// 기본세팅
const express = require('express');
const app = express();


const multer = require('multer');
// 기타 express 코드
const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });
app.post('/up', upload.single('img'), (req, res) => {
  console.log(req.file); 
});

app.render("")