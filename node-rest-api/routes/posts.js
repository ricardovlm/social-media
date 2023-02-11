const router = require("express").Router()
const Post = require("../models/Post");
const User = require("../models/User");

// get post
router.get("/", (req, res) => {
    console.log("Post Page");
})


// create a post
router.put("/", async (req, res) => {

    const newPost = new Post(req.body)
    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch (error) {
        res.status(500).json(error)
    }

})

//update Post

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        console.log("post.userId:", post.userId);
        console.log("req.body.userId:", req.body.userId);
        if (post.userId === req.body.userId) {

            await post.updateOne({ $set: req.body })
            res.status(200).json('The post was updated')

        } else {
            res.status(403).json('Only con update your post')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete Post

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        console.log("post.userId:", post.userId);
        console.log("req.body.userId:", req.body.userId);
        if (post.userId === req.body.userId) {

            await post.deleteOne()
            res.status(200).json('The post was deleted')

        } else {
            res.status(403).json('Only con delete your post')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// like / dislike a Post

router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json("The post has been liked")
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json("The post has been disliked")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// get post

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get Timeline
router.get('/timeline/all', async (req, res) => {

    try {
        const currentUser = await User.findById(req.body.userId)
        const userPost = await Post.find({ userId: currentUser._id })
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId })
            })
        )
        res.json(userPost.concat(...friendPosts))


    } catch (error) {
        res.status(500).json(error)
    }
})



router.get(("/posts/:id"), (req, res) => {

})


module.exports = router