import axios from 'axios';
import LeafLogo from '../assets/leafLogo.png';
const Login = ({ showLogin, setShowLogin, setSignedIn }) => {
  const changePage = (page) => {
    setShowLogin(page);
  };

  // Event handler for the login form
  function handleLoginAttempt(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    authenticateUser(username, password);
  }

  async function authenticateUser(username, password) {
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        username,
        password,
      });
      const user = response.data.username;
      const id = response.data.id;
      const widgets = response.data.widgets;
      const first = response.data.firstname;

      localStorage.setItem('username', user);
      localStorage.setItem('id', JSON.stringify(id));
      localStorage.setItem('firstName', first);
      localStorage.setItem('widgets', JSON.stringify(widgets));
      localStorage.setItem('signedIn', 'true');
      changePage('main');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='bg-landing h-[100vh] flex flex-col items-center '>
      <div className='bg-[var(--cream)] w-[50%] pt-[5%] h-[100%]'>
        <div className='grid'>
          <img className='h-[60px] m-auto' src={LeafLogo}></img>

          <h1 className='mt-4 text-[var(--darkgreen)] mx-auto text-xl md:text-[50px]'>
            Environment IQ
          </h1>
        </div>

        <div className='flex flex-col justify-center mt-[40px] text-center'>
          <p className='mt-20 text-sm text-[var(--darkgreen)] m-8'>
            Already have an account? Log in now to access your dashboard. Otherwise, sign up{' '}
            <button className='text-[#b41866]' onClick={() => changePage('signup')}>
              here
            </button>
            .
          </p>
          <form className='flex flex-col mx-auto' onSubmit={(e) => handleLoginAttempt(e)}>
            <input
              className='m-4 text-[var(--darkgreen)] text-center p-2 '
              type='text'
              name='username'
              placeholder='Username'
            />
            <input
              className='m-4 text-[var(--darkgreen)] text-center p-2 '
              type='password'
              name='password'
              placeholder='Password'
            />

            <button className='m-4 bg-[var(--darkgreen)] rounded p-2' type='submit'>
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
