const express = require('express');
const { registerUser, authLogin} = require("../controllers/userController")

const router = express.Router()


router.route('/').post(registerUser);
router.route('/login').post(authLogin);

module.exports = router;

