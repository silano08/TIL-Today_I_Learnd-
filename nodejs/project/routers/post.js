const express = require("express");
const Posts = require("../schemas/post");

const router = express.Router();

router.get("/posts", async (req, res, next) => {
    try {
        const { username } = req.query;
        const post = await Posts.find({ username }).sort("-postId");
        res.json({ post: post });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get("/posts/:postId", async (req, res) => {
    const { username } = req.params;
    post = await Posts.findOne({ username: username });
    res.json({ detail: post });
});

router.post('/posts', async (req, res) => {
    const { username, title, password, mainpost } = req.body;
    Posts.create({ username, title, password, mainpost });
    console.log("sssssssss");
    res.send({ result: "success" });
});

module.exports = router;