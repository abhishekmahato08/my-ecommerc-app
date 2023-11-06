const express = require('express');
const {userController,auth} = require('../controller/userController.js');

const router = express.Router();

router.route('/').post(userController);
router.route('/signIn').post(auth);

module.exports = router;