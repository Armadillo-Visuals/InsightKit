const Navbar = ({ setShowLogin }) => {
  function handleSignOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    localStorage.removeItem('firstName');
    localStorage.removeItem('widgets');
    localStorage.setItem('signedIn', 'false');
    // Return user back to the login page
    setShowLogin('login');
  }

  return (
    <nav className='bg-[var(--darkgreen)] p-4 flex flex-row justify-between items-center'>
      <h1 className='text-xl pl-4'>Environment IQ</h1>
      <button className='pr-4' onClick={handleSignOut}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
