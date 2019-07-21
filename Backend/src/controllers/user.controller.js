const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}
userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    });
    await newUser.save();
    res.json(newUser);
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.updateUser = async (req, res) => {
    const { username } = req.body;
    const user = await User.findOneAndUpdate(req.params.id, {
        username
    });
    res.json(user);
}

userCtrl.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'user deleted' });
}

module.exports = userCtrl;