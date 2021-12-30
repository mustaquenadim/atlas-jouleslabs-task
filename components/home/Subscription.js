import { RiMailSendFill } from 'react-icons/ri';

export default function Subscription() {
  return (
    <div className='container mx-auto dark:bg-black pb-8 md:pb-24'>
      <div className='container mx-auto px-8 md:px-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 md:p-12 gap-6 border dark:border-gray-800 bg-neutral-100 dark:bg-neutral-900'>
          <div className='flex items-center'>
            <div className='bg-blue-600 rounded-full p-3 mr-5'>
              <RiMailSendFill className='text-4xl text-white' />
            </div>
            <h3 className='text-2xl font-semibold dark:text-gray-100'>
              Join the newsletter and <br /> read the new post first
            </h3>
          </div>
          <div className='flex justify-end my-auto'>
            <input className='w-64 appearance-none border dark:bg-transparent dark:border-gray-800 py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='email' placeholder='Email' />
            <button className='bg-blue-600 text-white py-2 px-4 focus:outline-none focus:shadow-outline' type='button'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
