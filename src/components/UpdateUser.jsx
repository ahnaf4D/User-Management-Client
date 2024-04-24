import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import '../App.css';
import { RiArrowLeftDoubleFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
export default function UpdateUser() {
  const navigate = useNavigate();
  const loadUserData = useLoaderData();
  const { _id, name, email, gender, status } = loadUserData;
  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const updatedInfo = { name, email, gender, status };
    fetch(`https://api-user-managment.vercel.app/update/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'User Information Updated',
            icon: 'success',
          });
          form.reset();
          navigate('/');
        }
      });
  };
  return (
    <div>
      <Nav />
      <Link to='/' className='link'>
        <button className='btn btn-primary btn-outline text-white'>
          <RiArrowLeftDoubleFill /> All Users
        </button>
      </Link>
      <div className='roboto-slab flex flex-col items-center'>
        <h2 className='text-center text-3xl font-medium'>Update User</h2>
        <form
          className='form-control text-2xl p-6'
          onSubmit={handleUpdateUserInfo}
        >
          <div className='form-group'>
            <label htmlFor='name' className='label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter User Name'
              name='name'
              defaultValue={name}
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
              defaultValue={email}
              required
              className='input w-80 input-bordered mb-2'
            />
          </div>
          <div className='form-group flex items-center'>
            <label className='label'>Gender : </label>
            <div className='radio-group flex gap-2 px-2'>
              <label className='radio-label'>
                <input
                  type='radio'
                  name='gender'
                  defaultChecked={gender === 'male'}
                  value='male'
                />
                <>&nbsp;</>
                Male
              </label>
              <label className='radio-label'>
                <input
                  type='radio'
                  name='gender'
                  defaultChecked={gender === 'female'}
                  value='female'
                />
                <>&nbsp;</>
                Female
              </label>
            </div>
          </div>
          <div className='form-group flex items-center'>
            <label className='label'>Status : </label>
            <div className='radio-group flex gap-2 px-2'>
              <label className='radio-label'>
                <input
                  type='radio'
                  name='status'
                  defaultChecked={status === 'active'}
                  value='active'
                />
                <>&nbsp;</>
                Active
              </label>
              <label className='radio-label'>
                <input
                  type='radio'
                  name='status'
                  defaultChecked={status === 'inactive'}
                  value='inactive'
                />
                <>&nbsp;</>
                Inactive
              </label>
            </div>
          </div>
          <input type='submit' value='Update' className='btn btn-wide w-full' />
        </form>
      </div>
    </div>
  );
}
