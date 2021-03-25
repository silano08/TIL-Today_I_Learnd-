const express = require("express");
const Posts = require("../schemas/post");

const router = express.Router();

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

router.post('/posts', async (req, res) => {
  const { username, title, password, mainpost } = req.body;
  Posts.create({ username, title, password, mainpost });
  console.log("sssssssss");
  res.send({ result: "success" });
});

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