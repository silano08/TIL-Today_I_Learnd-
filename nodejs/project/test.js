
app.get('/mongodb', async (req, res) => {
    await mongoose.connect('"mongodb://localhost:27017/postpro', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    });


    const { Schema } = mongoose;
    const postSchema = new Schema({
        postId: {
            type: Number,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        password: {
            type: Number
        },
        mainpost: {
            type: String
        }
    });

    let Posts = mongoose.model("post", postSchema);

    await Posts.create({
        postId: 1,
        username: "긍긍",
        title: "test no 1",
        password: "0000",
        mainpost: "게시글이 들어갈 자리입니다 으뱌뱌뱥"
    });

    res.send('ok');
})
