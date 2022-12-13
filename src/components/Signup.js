import React from 'react';

const Signup = ({ showLogin, setShowLogin }) => {
  const changePage = () => {
    setShowLogin(!showLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // this handle submit will console log the input fields and their values using event.target[index of form].value
    console.log('First Name: ', event.target[0].value);
    console.log('Last Name: ', event.target[1].value);
    console.log('Username: ', event.target[2].value);
    console.log('Password: ', event.target[3].value);
    // form will also make a request to the back end storing the relevant data in a database
    // axios request goes here
  };

  //   should send post request to the server to create a new user

  return (
    <div>
      <h1>Hello, this is the signup page</h1>
      <button onClick={changePage}>Register Login</button>
      <div className='signupFormContainer'>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input type='text' id='fname' placeholder='First Name' />
          </label>
          <label>
            Last Name
            <input type='text' id='lname' placeholder='Last Name' />
          </label>
          <label>
            Username
            <input type='text' id='username' placeholder='Username' />
          </label>
          <label>
            Password
            <input type='text' id='password' placeholder='Password' />
          </label>

          <button type='submit'> Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
