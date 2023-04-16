const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");


//REGISTER
router.post("/register", async (req, res) => {
    const { username, email, password, profilePicture, coverPicture, followers, followings, isAdmin, desc, city, from, relationship } = req.body;

    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
            profilePicture: profilePicture,
            coverPicture: coverPicture,
            followers: followers,
            followings: followings,
            desc: desc,
            city: city,
            from: from,
            relationship: relationship
            //     username, email, password, profilePicture, desc, city, from, relationship
        });

        //save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    };
});
//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found!");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong Password!");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;