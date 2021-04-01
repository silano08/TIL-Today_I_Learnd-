const express = require("express");
const Posts = require("../schemas/post");
const User = require("../schemas/users");
const Comment = require("../schemas/comment");
const authMiddleware = require("../middlewares/auth-middleware");
const jwt = require("jsonwebtoken");
const router = express.Router();

/////////////////// 로그인 API

router.post("/users", async (req, res) => {
  const { nickname, password, confirmPassword } = req.body;

  // if (password !== confirmPassword) {
  //     res.status(400).send({
  //         errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
  //     });
  //     return;
  // }

  // const existUsers = await User.find({
  //     $or: [{ nickname }],
  // });
  // if (existUsers.length) {
  //     res.status(400).send({
  //         errorMessage: "이미 가입된 이메일 또는 닉네임이 있습니다.",
  //     });
  //     return;
  // }

  User.create({nickname, password});
  res.status(201).send({});
});

router.post("/auth", async (req, res) => {
  const { password } = req.body;

  const user = await User.findOne({ password }).exec();

  if (!user) {
      res.status(400).send({
          errorMessage: "이메일 또는 패스워드가 잘못됐습니다.",
      });
      return;
  }

  const token = jwt.sign({ userId: user.userId }, "customized-secret-key");
  res.send({
      token,
  });
});

router.get("/users/me", authMiddleware, async (req, res) => {
  const { user } = res.locals;
  res.send({user});
});


///////////// 게시글 API

router.get("/posts", async (req, res, next) => {
  try {
    const { _id } = req.query;
    const post = await Posts.find({ _id }).sort("date");
    res.json({ post: post });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/posts/:_id", async (req, res) => {
  const { _id } = req.params;
  post = await Posts.findOne({ _id: _id });
  res.json({ detail: post });
});

/// 게시글 작성 코드
router.post('/posts', async (req, res) => {
  const { title,mainpost,token} = req.body;
  const{userId} =jwt.verify(token, "customized-secret-key");
  const user = await User.findOne({_id:userId});
  const nickname = user["nickname"];
  const newPost = new Posts({title,mainpost,nickname});
  await newPost.save();
  res.send({ result: "success" });
});

/// 댓글 작성코드
router.post('/comments', async (req, res) => {
  const {comment,token,postid} = req.body;
  const{userId} =jwt.verify(token, "customized-secret-key");
  const user = await User.findOne({_id:userId});
  const nickname = user["nickname"];
  const newComment = new Comment({nickname,comment,postid});
  await newComment.save();
  res.send({ result: "success" });
});

router.get("/comments/:_id", async (req, res) => {
  const { _id } = req.params;
  comments = await Comment.find({ postid:_id});
  console.log(comments);
  res.json({ detail: comments });
});

////

router.delete("/posts/:_id/edit", async (req, res) => {
  const { _id } = req.params;
  const post = await Posts.find({ _id });

  posts = await Posts.findOne({ _id: _id });
  if (post.length > 0) {
    await Posts.deleteOne({ _id });
  }
  res.send({ result: "success", detail: posts });
})

router.get("/posts/:_id/edit", async (req, res) => {
  const { _id } = req.params;
  post = await Posts.findOne({ _id: _id });
  res.json({ detail: post });
});

router.patch("/posts/:_id/edit", async (req, res) => {
  const { _id } = req.params;

  posts = await Posts.findOne({ _id: _id });
  const { username, title, mainpost } = req.body;

  isPost = await Posts.find({ _id });
  if (isPost.length) {
    await Posts.updateOne({ _id }, { $set: { username, title, mainpost } });
  }

  res.send({ result: "success", detail: posts });
})


module.exports = router;