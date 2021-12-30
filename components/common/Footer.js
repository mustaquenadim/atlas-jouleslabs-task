import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';
import { RiCompassFill, RiInstagramFill, RiSearchLine, RiCloseFill } from 'react-icons/ri';
import { FaTwitter, FaFacebookSquare, FaPinterest, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='container mx-auto px-8 md:px-24 divide-y dark:divide-gray-800 bg-neutral-100 dark:bg-neutral-900'>
      {/* footer top */}
      <div className='flex items-center justify-between py-9'>
        {/* left side -brand */}
        <div>
          <Link href='/'>
            <a className='flex items-center'>
              <RiCompassFill className='text-4xl fill-blue-600 mr-1' />
              <span className='text-3xl font-medium dark:text-white'>Atlas</span>
            </a>
          </Link>
        </div>
        {/* right side - contact button */}
        <div>
          <button className='text-gray-500 py-2 px-4 focus:outline-none focus:shadow-outline border dark:border-gray-800 flex items-center' type='button'>
            Contact Me <MdArrowForwardIos />
          </button>
        </div>
      </div>
      {/* footer mid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-8 md:py-20'>
        {/* left side */}
        <div className='flex'>
          {/* first column */}
          <div className='w-1/2'>
            <h3 className='text-2xl font-semibold pb-3 dark:text-gray-300'>Atlas</h3>
            <ul className='text-gray-500'>
              <li className='pb-2'>
                <Link href='/'>
                  <a>Homepage</a>
                </Link>
              </li>
              <li className='pb-2'>
                <Link href='/'>
                  <a>About</a>
                </Link>
              </li>
              <li className='pb-2'>
                <Link href='/'>
                  <a>Contact</a>
                </Link>
              </li>
              <li className='pb-2'>
                <Link href='/'>
                  <a>Article Page</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* second column */}
          <div className='w-1/2'>
            <h3 className='text-2xl font-semibold pb-3 dark:text-gray-300'>Template</h3>
            <ul className='text-gray-500'>
              <li className='pb-2'>
                <Link href='/'>
                  <a>Style Guide</a>
                </Link>
              </li>
              <li className='pb-2'>
                <Link href='/about'>
                  <a>Getting Started</a>
                </Link>
              </li>
              <li className='pb-2'>
                <Link href='/about'>
                  <a>Changelog</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* right side */}
        <div className='flex'>
          <div>
            <img src='https://img.icons8.com/color/96/000000/mailbox-closed-flag-down--v2.png' alt='mailbox_icon' />
          </div>
          <div className='ml-5'>
            <h3 className='text-2xl font-semibold dark:text-gray-300'>
              Join the newsletter and <br /> read the new post first
            </h3>
            <p className='my-3 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel corporis quas tempore quasi quibusdam suscipit.</p>
            <div className='flex'>
              <input className='w-64 appearance-none border dark:bg-transparent dark:border-gray-800 py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='email' placeholder='Email' />
              <button className='bg-blue-600 text-white py-2 px-4 focus:outline-none focus:shadow-outline' type='button'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className='flex justify-between text-gray-500 py-9'>
        {/* left side - copyright */}
        <div>
          <p className='text-sm'>&copy; 2021 | All Rights Reserved.</p>
        </div>
        {/* right side - social icons */}
        <div className='flex'>
          <a href='#' className='text-xl px-3'>
            <FaTwitter className='text-gray-500 hover:text-gray-900' />
          </a>
          <a href='#' className='text-xl px-3'>
            <FaFacebookSquare className='text-gray-500 hover:text-gray-900' />
          </a>
          <a href='#' className='text-xl px-3'>
            <RiInstagramFill className='text-gray-500 hover:text-gray-900' />
          </a>
          <a href='#' className='text-xl px-3'>
            <FaPinterest className='text-gray-500 hover:text-gray-900' />
          </a>
          <a href='#' className='text-xl px-3'>
            <FaYoutube className='text-gray-500 hover:text-gray-900' />
          </a>
        </div>
      </div>
    </footer>
  );
}
