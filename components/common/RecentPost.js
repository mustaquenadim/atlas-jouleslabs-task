import { BiComment } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

export default function RecentPost({ post }) {
  return (
    <div className='flex overflow-hidden border dark:border-gray-900 p-4'>
      <img className='w-1/4 object-cover h-full' src='https://camo.githubusercontent.com/1062c33f73289b4766688c67773f321b959a0ec9c8a62a506c925db066097391/68747470733a2f2f6d61726b6574696e676465636f6e746575646f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f30362f7468756d626e61696c2e706e67' alt='Sunset in the mountains' />
      <div className='w-3/4 pl-3'>
        <div className='px-1 py-4'>
          <div className='font-semibold text-xl dark:text-gray-300 mb-2 line-clamp-2'>{post?.title}</div>
          <p className='text-gray-500 text-base line-clamp-2'>{post?.body}</p>
        </div>
        <div className='flex px-1 pb-2 text-gray-500'>
          <div className='flex items-center mr-5'>
            <BiComment className='mr-2' />
            <span>3</span>
          </div>
          <div className='flex items-center'>
            <AiOutlineEye className='mr-2' />
            <span>14.2K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
