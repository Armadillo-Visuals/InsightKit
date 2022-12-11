// create a router to handle calls to the api
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/disaster', apiController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});


module.exports = router;