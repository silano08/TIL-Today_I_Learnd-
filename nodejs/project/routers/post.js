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


module.exports = router;