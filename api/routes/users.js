const router = require('express').Router()
const bcrypt = require('bcrypt');
const { response, json } = require('express');
const User = require('../models/User')

// get User
router.get("/", async (req, res) => {
    const userId = req.query.userId
    const username = req.query.username

    try {

        const user = userId
            ? await User.findById(userId)
            : await User.findOne({ username: username })
        // no se trae el password ni el updateAt del usuario
        const { password, updateAt, ...other } = user._doc
        console.log(user._doc);
        res.status(200).json(user._doc)

    } catch (error) {
        res.status(500).json(error);
    }
})
// update User
router.put('/:id', async (req, res) => {

    if (req.body.userId === req.params.id || req.body.isAdmin) {
        //update de password
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)

            } catch (err) {
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json('El usuario se ha actualizado')

        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        res.status(500).json('You cant update only your account')
    }

})

// delete user
router.delete('/:id', async (req, res) => {

    if (req.body.userId === req.params.id || req.body.isAdmin) {

        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json('El usuario se ha eliminado')

        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        res.status(403).json('You cant delete only your account')
    }

})

// get friends

router.get("/friends/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const friends = await Promise.all(
            user.followings.map(friendId => {
                return User.findById(friendId)
            })
        )
        let friendList = []
        friends.map((friend) => {
            const { _id, username, profilePicture } = friend
            friendList.push({ _id, username, profilePicture })
        })
        res.status(200).json(friendList)

    } catch (error) {
        res.status(500), json(error)
    }

})


// follow a user

router.put("/:id/follow", async (req, res) => {
    if (req.body.userId != req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json("User has been followed")

            } else {
                res.satatus(500).json("You all ready fallow this user")
            }

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You cant follow yourself")
    }
})


// Unfollow a user 
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId != req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })
                res.status(200).json("User has been unfollowed")

            } else {
                res.satatus(500).json("You dont follow this user")
            }

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You cant unfollow yourself")
    }
})


module.exports = router