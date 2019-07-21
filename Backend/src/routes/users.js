const { Router } = require('express');
const router = Router();

const { createUser, deleteUser, getUser, getUsers, updateUser } = require('../controllers/user.controller');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;