import axios from 'axios';

const Signup = ({ showLogin, setShowLogin }) => {
  const changePage = () => {
    setShowLogin('login');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const username = event.target[2].value;
    const password = event.target[3].value;

    createNewUser(firstName, lastName, username, password);
    changePage();
  };

  async function createNewUser(firstName, lastName, userName, password) {
    try {
      const { data } = await axios.post('http://localhost:3000/users/signup', {
        username: userName,
        password,
        firstName,
        lastName,
      });

      const { username, firstname, id } = data;

      localStorage.setItem('id', JSON.stringify(id));
      localStorage.setItem('firstName', firstname);
      localStorage.setItem('username', username);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='bg-trees h-[100vh] flex flex-col content-center	flex'>
      <div className='bg-[var(--cream)] w-[800px] h-fit p-4 rounded grid m-auto '>
        <h1 className='mt-4 text-[var(--darkgreen)] mx-auto text-xl'>Create an account</h1>
        <p className='text-[var(--darkgreen)] text-center m-4'>
          Join our platform to gain access to a world of visualized carbon data and natural disaster
          statistics. Sign up today and start exploring the connections between environmental
          factors and their impact on our world.
        </p>
        <div className='flex justify-center ml-auto mr-auto'>
          <form className='flex flex-col mx-auto' onSubmit={handleSubmit}>
            <label>
              <input
                className='m-4 text-[var(--darkgreen)] text-center p-2 '
                type='text'
                id='fname'
                placeholder='First Name'
              />
            </label>

            <label>
              <input
                className='m-4 text-[var(--darkgreen)] text-center p-2 '
                type='text'
                id='lname'
                placeholder='Last Name'
              />
            </label>

            <label>
              <input
                className='m-4 text-[var(--darkgreen)] text-center p-2 '
                type='text'
                id='username'
                placeholder='Username'
              />
            </label>

            <label>
              <input
                className='m-4 text-[var(--darkgreen)] text-center p-2 '
                type='password'
                id='password'
                placeholder='Password'
              />
            </label>

            <button className='m-4 bg-[var(--darkgreen)] rounded p-2' type='submit'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
