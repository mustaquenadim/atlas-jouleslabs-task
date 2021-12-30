import { useSelector } from 'react-redux';

const Profile = () => {
  const { profile } = useSelector((state) => state.user);
  return (
    <div className='h-96 flex items-center justify-center dark:bg-black'>
      <div className='h-80 text-center border dark:border-gray-800 drop-shadow-xl bg-neutral-100 dark:bg-neutral-900 p-5'>
        <img className='rounded-full mx-auto' src={profile?.payload?.picture} alt={profile?.payload?.name} />
        <div className='my-3'>
          <h6 className='text-sm dark:text-gray-100'>{profile?.payload?.id}</h6>
          <h2 className='text-2xl dark:text-gray-100'>{profile?.payload?.name}</h2>
          <h5 className='text-lg dark:text-gray-100'>{profile?.payload?.email}</h5>
        </div>
        <button className='flex items-center m-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
