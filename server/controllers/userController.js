const usersDB = require('../models/userModel');
const userController = {};

// create a new user (on signup)
userController.createUser = (req, res, next) => {
  // destructure the req body containing the first name, last name, password and username
  // hash the password using Bcrypt
  // insert the user into the user table in sql
  // send back a status code
  // send back newly created user
};

// verify/retrieve a user (on login)
userController.getUser = (req, res, next) => {};

module.exports = userController;
