import { MdModeEdit } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
export default function AllUsers() {
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr className='text-xl'>
              <th>ID</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-xl'>
            {/* row 1 */}
            <tr className='hover'>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Active</td>
              <td className='flex items-center gap-2'>
                <button className='btn btn-ghost btn-outline text-2xl'>
                  <MdModeEdit />
                </button>
                <button className='btn btn-ghost btn-outline text-2xl'>
                  <IoClose />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
