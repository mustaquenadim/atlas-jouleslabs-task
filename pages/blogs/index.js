import { useState, useEffect } from 'react';
import Post from '../../components/common/Post';

export default function blogs() {
  const API_KEY = '23e29f787dfd4a44b1e723420f807506';
  const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-12-28&sortBy=popularity&apiKey=${API_KEY}`;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.slice(0, 20));
      });
  }, [url]);
  return (
    <div className='container mx-auto p-8 md:p-24 dark:bg-black'>
      <h3 className='pb-24 text-center text-4xl font-bold dark:text-gray-300'>Blogs</h3>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => (
            <Post key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
