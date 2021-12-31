import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiComment } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

export default function BlogDetails() {
  const router = useRouter();
  const { blogId } = router.query;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const details = data.filter((post) => post.id === Number(blogId));
        setPosts(details[0]);
      });
  }, [blogId]);
  return (
    <div className='px-8 md:px-24 py-16'>
      <div className='overflow-hidden'>
        <h3 className='font-bold text-4xl dark:text-gray-300 mb-12 line-clamp-2'>{posts?.title}</h3>
        <img className='w-full' src='https://camo.githubusercontent.com/1062c33f73289b4766688c67773f321b959a0ec9c8a62a506c925db066097391/68747470733a2f2f6d61726b6574696e676465636f6e746575646f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f30362f7468756d626e61696c2e706e67' alt='Sunset in the mountains' />
        <p className='text-gray-500 text-base py-9'>{posts?.body}</p>
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
