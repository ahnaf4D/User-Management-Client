import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../App.css';
import { RiArrowLeftDoubleFill } from 'react-icons/ri';

export default function AddUser() {
  return (
    <>
      <Nav />
      <Link to='/' className='link'>
        <button className='btn btn-primary btn-outline text-white'>
          <RiArrowLeftDoubleFill /> All Users
        </button>
      </Link>
      <div className='roboto-slab flex flex-col items-center'>
        <h2 className='text-center text-3xl font-medium'>New User</h2>
        <form className='form-control text-2xl p-6'>
          <div className='form-group'>
            <label htmlFor='name' className='label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter User Name'
              name='name'
              required
              className='input w-80 input-bordered my-2'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter User Email'
              name='email'
              required
              className='input w-80 input-bordered mb-2'
            />
          </div>
          <div className='form-group flex items-center'>
            <label className='label'>Gender : </label>
            <div className='radio-group flex gap-2 px-2'>
              <label className='radio-label'>
                <input type='radio' name='gender' value='male' />
                <>&nbsp;</>
                Male
              </label>
              <label className='radio-label'>
                <input type='radio' name='gender' value='female' />
                <>&nbsp;</>
                Female
              </label>
            </div>
          </div>
          <div className='form-group flex items-center'>
            <label className='label'>Status : </label>
            <div className='radio-group flex gap-2 px-2'>
              <label className='radio-label'>
                <input type='radio' name='status' value='active' />
                <>&nbsp;</>
                Active
              </label>
              <label className='radio-label'>
                <input type='radio' name='status' value='inactive' />
                <>&nbsp;</>
                Inactive
              </label>
            </div>
          </div>
          <input type='submit' value='Save' className='btn btn-wide w-full' />
        </form>
      </div>
    </>
  );
}
