const User = require("../models/User");
const router = require("express").Router();

router.post("/login", async (req, res) => {
    const { name, lastname, email, phone, project } = req.body;
    const user = await User.find({ name: name })
    if (!user.length) {
        const users = new User({
            name,
            lastname,
            phone,
            email,
            project,
        })
        await users.save();
        return res.json({ messsage: "Record Registered" })
    } else {
        res.send({ messsage: "User Already exist" })
    }

})
router.post("/getuser", async (req, res) => {
    console.log(req.body.id)
    const user = await User.findById(req.body.id)
    res.json(user);
})

router.get("/alluser", async (req, res) => {
    const user = await User.find({});
    console.log(user)
    res.json(user);
})
router.delete("/delete/:id", async (req, res) => {
    console.log(req.params.id)
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.send({ message: "Deleted successfuly" })
    }
    catch (err) {
        console.log(err)
    }
})
router.put("/update", async (req, res) => {
    console.log(req.body)
    const { name, lastname, email, phone, project, _id } = req.body;
    const user = await User.findById(_id);
    console.log(user)
    user.name = name,
        user.lastname = lastname,
        user.email = email,
        user.phone = phone,
        user.project = project,

        await user.save();

    return res.send({ message: "Updated successfuly" })
})

module.exports = router;