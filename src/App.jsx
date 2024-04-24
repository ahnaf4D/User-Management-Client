import { Link } from 'react-router-dom';
import './App.css';
import { FaUserAlt } from 'react-icons/fa';
import AllUsers from './components/AllUsers';
import Nav from './components/Nav';
function App() {
  return (
    <div className='roboto-slab'>
      <Nav></Nav>
      <Link to='/add-user' className=''>
        <button className='my-8 btn btn-primary btn-outline text-white  text-2xl'>
          New User
          <FaUserAlt />
        </button>
      </Link>
      <AllUsers></AllUsers>
    </div>
  );
}

export default App;
