import React from 'react';
import axios from 'axios';
import '../stylesheets/signup.css';

const Signup = ({ showLogin, setShowLogin }) => {
  // function to switch page back to the login page
  const changePage = () => {
    setShowLogin('login');
  };

  // Get the user data from the form and send it to the db to create a new user
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const username = event.target[2].value;
    const password = event.target[3].value;

    //post request to the database to add the user
    createNewUser(firstName, lastName, username, password);
    // change back to the login page
    changePage();
  };

  // post request to the db to add the new user
  async function createNewUser(firstName, lastName, username, password) {
    try {
      const response = await axios.post('http://localhost:3000/users/signup', {
        username,
        password,
        firstName,
        lastName,
      });
      // deconstruct the response data
      const user = response.data.username;
      const firstname = response.data.firstname;
      const id = response.data.id;

      // set local storage for the first name, username, and widgets
      localStorage.setItem('id', JSON.stringify(id));
      localStorage.setItem('firstName', firstname);
      localStorage.setItem('username', user);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='mainContainer'>
      <div className='trees'>
        <img id='treeImage' src='https://i.imgur.com/BMsOvGT.png'></img>
      </div>
      <div className='signupWrapper'>
        <img id='createAccountLogo' src='https://i.imgur.com/6S45Suy.png'></img>

        <div className='signupFormContainer'>
          <form onSubmit={handleSubmit}>
            <label>
              <input type='text' id='fname' placeholder='First Name' />
            </label>
            <br />
            <br />

            <label>
              <input type='text' id='lname' placeholder='Last Name' />
            </label>
            <br />
            <br />

            <label>
              <input type='text' id='username' placeholder='Username' />
            </label>
            <br />
            <br />

            <label>
              <input type='text' id='password' placeholder='Password' />
            </label>
            <br />
            <br />
            <button id='submit' type='submit'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
