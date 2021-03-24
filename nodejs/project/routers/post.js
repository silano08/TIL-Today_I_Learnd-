const express = require("express");
const Posts = require("../schemas/post");

const router = express.Router();

router.get("/posts", async (req, res, next) => {
    try {
        const { postId } = req.query;
        const post = await Posts.find({ postId }).sort("-postId");
        res.json({ post: post });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get("/posts/:postId", async (req, res) => {
    const { postId } = req.params;
    post = await Posts.findOne({ postId: postId });
    res.json({ detail: post });
});

router.post('/posts', async (req, res) => {
    const { postId, username, title, password, mainpost } = req.body;
    Posts.create({ postId, username, title, password, mainpost });
    console.log("sssssssss");
    res.send({ result: "success" });
});

module.exports = router;