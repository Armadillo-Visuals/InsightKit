const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// sign up
router.post('/', userController.createUser, (req, res) => {
  res.status(200);
});
// log in
router.post();

module.exports = router;
