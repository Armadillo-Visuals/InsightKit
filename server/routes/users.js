const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// sign up
router.post('/signup', userController.createUser, (req, res) => {
  return res.status(201).json(res.locals.user);
});

// endpoint to verify user on login AND respond with user info (including widgets)
router.post('/login', userController.verifyUser, userController.getUserWidgets, (req, res) => {
  return res.status(201).json(res.locals.user);
});

// expects req.body to contain user id and desired widget combo (i.e. data type, graph type, parameters)
// pass request through middleware that checks if that widget exists inside widget table (and creates it if not)
// then adds user_id/widget_id combo to join table
// sends back updated user info
router.patch('/widget', userController.addWidget, userController.getUserWidgets, (req, res) => {
  return res.status(200).json(res.locals.user);
});

// deletes a widget from a user's widgets (i.e. from users_widgets join table) but NOT from entire DB
// returns updated user info with that widget removed from user widgets array
router.delete(
  '/widget/:userID/:joinID',
  userController.deleteWidget,
  userController.getUserWidgets,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  },
);

module.exports = router;
