export default function Banner() {
  return (
    <div className='container mx-auto px-8 md:px-24 bg-neutral-100 dark:bg-neutral-900'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='my-auto py-5'>
          <p className='uppercase tracking-wider text-blue-600'>Welcome to my blog</p>
          <h1 className='text-8xl font-bold tracking-tighter py-3 dark:text-gray-100'>
            We all owe <br /> death a life.
          </h1>
          <p className='my-5 text-gray-500'>
            Here is a place that I share my writings about design <br /> and photography. Read, write & discuss with me.
          </p>
          <div className='flex'>
            <input className='w-64 appearance-none border bg-transparent dark:border-gray-800 py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='email' placeholder='Email' />
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 focus:outline-none focus:shadow-outline' type='button'>
              Subscribe
            </button>
          </div>
        </div>
        <img className='w-full' src='https://i.ibb.co/JQpjHC6/man-removebg-preview.png' alt='portrait' />
      </div>
    </div>
  );
}
