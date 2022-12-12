// create a router to handle calls to the api
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get(
  '/disaster/:state/:type',
  apiController.getData,
  apiController.getCarbon,
  apiController.getAllDisasters,
  (req, res) => {
    return res.status(200).json({
      data: res.locals.data,
      carbon: res.locals.carbonData,
      typeData: res.locals.allDisasters,
    });
  },
);

module.exports = router;
