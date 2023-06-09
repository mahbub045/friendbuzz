const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
})
//update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("The post has been updated!");
        } else {
            res.status(403).json("You can update only your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne({ $set: req.body });
            res.status(200).json("The post has been deleted!");
        } else {
            res.status(403).json("You can delete only your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//react post
router.put("/:id/react", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.reacts.includes(req.body.userId)) {
            await post.updateOne({ $push: { reacts: req.body.userId } });
            res.status(200).json("The post has been reacted");
        } else {
            await post.updateOne({ $pull: { reacts: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});
//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        res.status(500).json(err);
    }
});
//get user's all posts
router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;