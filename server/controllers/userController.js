const usersDB = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

// create a new user (on signup)
// currently doesn't return the newly created user
userController.createUser = async (req, res, next) => {
  try {
    // destructure the req body containing the first name, last name, password and username
    const { firstName, lastName, username, password } = req.body;
    // hash the password using Bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    // insert the user into the user table in sql
    const createUserQuery = `
      INSERT INTO users (firstName, lastName, username, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const userData = [firstName, lastName, username, hashedPassword];
    const response = await usersDB.query(createUserQuery, userData);
    res.locals.user = response.rows[0];
    // Commented out because we don't need to return widgets on creation
    //  and was causing a nested object on the front end
    // res.locals.user.widgets = [];
    return next();
  } catch (err) {
    return next({
      log: `Error occurred in userController.createUser middleware ${err}`,
      message: { err: 'Unable to create a new user account' },
    });
  }
};

// verify/retrieve a user (on login)
// currently frontend will render the goodies
// when the user refreshes the page, frontend will check localStorage to see if a user has logged in
// the user information will persist as long as page isn't refreshed or the user doesn't log out
userController.verifyUser = async (req, res, next) => {
  try {
    // query string for locating user from database with username from request body
    const getUserQuery = 'SELECT * FROM users WHERE username = $1';
    // get user (if exists) that matches passed in username
    const { rows } = await usersDB.query(getUserQuery, [req.body.username]);
    const user = rows[0];
    // use bcrypt.compare to make sure that the passed in password, once hashed, matches the hashed password in the database.
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      // if yes, go on to next middleware function, adding user info to res.locals
      // NOTE: ONCE WE HAVE A WIDGETS TABLE, WE'LL ALSO WANT TO SEND BACK USER'S WIDGETS
      res.locals.user = user;
      return next();
    }
    return next({
      log: 'Error occurred in userController.verifyUser middleware: incorrect username or password',
      message: { err: 'Incorrect username or password. Try again.' },
    });
  } catch (err) {
    return next({
      log: `Error occurred in userController.verifyUser middleware ${err}`,
      message: { err: 'Unable to verify user' },
    });
  }
};

userController.addWidget = async (req, res, next) => {
  try {
    // expects req.body to contain user id and desired widget combo (i.e. data type, graph type, parameters)
    const { userID, graphType, dataType, parameter1, parameter2, parameter3 } = req.body;
    // make sure a user exists in the database with that userID and get the rest of their info
    const response = await usersDB.query('SELECT * FROM users WHERE id = $1', [userID]);
    const user = response.rows[0];
    // if a user doesn't exist with that ID, return an appropriate error message
    if (!user) {
      return next({
        log: 'Error occurred in userController.addWidget middleware: no user found with user id',
        message: { err: 'No user found with that user id' },
      });
    }
    // add user info to res.locals
    res.locals.user = user;
    // check if that widget exists inside widget table
    const getWidgetQuery = `
      SELECT id FROM widgets
      WHERE 
        graphType = $1 AND
        dataType = $2 AND
        parameter1 = $3 AND
        parameter2 = $4 AND
        parameter3 = $5
    `;
    const widgetParams = [graphType, dataType, parameter1, parameter2, parameter3];
    const { rows } = await usersDB.query(getWidgetQuery, widgetParams);
    let widget = rows[0];
    // if widget doesn't yet exist, add it to the widgets table
    if (!widget) {
      const addWidgetQuery = `
        INSERT INTO widgets (graphType, dataType, parameter1, parameter2, parameter3)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
      const { rows } = await usersDB.query(addWidgetQuery, widgetParams);
      widget = rows[0];
    }
    // then adds user_id/widget_id combo to join table
    const joinUserWidgetQuery = `
      INSERT INTO users_widgets (user_id, widget_id)
      VALUES ($1, $2)
      RETURNING *
    `;
    await usersDB.query(joinUserWidgetQuery, [userID, widget.id]);
    return next();
  } catch (err) {
    return next({
      log: `Error occurred in userController.addWidgetmiddleware ${err}`,
      message: { err: 'Unable to verify user' },
    });
  }
};

userController.getUserWidgets = async (req, res, next) => {
  try {
    // query the database for all widget ids with the id of the user in res.locals
    // we're grabbing all graph information from the widgets table
    // grab the user id which we're getting from res.locals.user.id
    // join the two, effectively being able to send back all the graphs associate with the user
    const userWidgetsQuery = `
      SELECT graphType, dataType, parameter1, parameter2, parameter3
      FROM widgets WHERE id IN (SELECT widget_id FROM users_widgets WHERE user_id = $1)
    `;
    const { rows } = await usersDB.query(userWidgetsQuery, [req.body.userID]);
    // add those to the user info that we send back to the front end
    res.locals.user.widgets = !rows.length ? [] : rows;
    return next();
  } catch (err) {
    return next({
      log: `Error occurred in userController.getUserWidgets ${err}`,
      message: { err: 'Unable to get users widgets' },
    });
  }
};

module.exports = userController;
