import Link from 'next/link';
import { useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import { RiCompassFill, RiInstagramFill, RiSearchLine, RiCloseFill } from 'react-icons/ri';
import { FaTwitter, FaFacebookSquare, FaPinterest, FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function Header() {
  const [active, setActive] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className='bg-white dark:bg-black sticky top-0 drop-shadow-xl'>
      <div className='mx-auto px-8'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            {/* brand */}
            <Link href='/'>
              <a className='flex items-center py-5 px-2'>
                <RiCompassFill className='text-4xl fill-blue-600 mr-1' />
                <span className='text-3xl font-medium dark:text-white'>Atlas</span>
              </a>
            </Link>
            {/* primary nav */}
            <div className='hidden md:flex items-center space-x-1'>
              <Link href='/blogs'>
                <a className='py-5 px-3 text-gray-600 hover:text-gray-900'>Blogs</a>
              </Link>
              <Link href='/products'>
                <a className='py-5 px-3 text-gray-600 hover:text-gray-900'>Shop</a>
              </Link>
              <Link href='/checkout'>
                <a className='py-5 px-3 text-gray-600 hover:text-gray-900'>Checkout</a>
              </Link>
              <Link href='/login'>
                <a className='py-5 px-3 text-gray-600 hover:text-gray-900'>Login</a>
              </Link>
              <Link href='/profile'>
                <a className='py-5 px-3 text-gray-600 hover:text-gray-900'>Profile</a>
              </Link>
            </div>
          </div>
          {/* secondary nav */}
          <div className='hidden md:flex items-center space-x-1'>
            <label className='relative block'>
              <span className='sr-only'>Search</span>
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <RiSearchLine className='text-gray-600' />
              </span>
              <input className='placeholder:text-gray-600 block dark:bg-black w-full border dark:border-gray-900 py-2 pl-7 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Search' type='text' name='search' />
            </label>
            <a href='#' className='py-5 px-3'>
              <FaTwitter className='text-gray-600 hover:text-gray-900' />
            </a>
            <a href='#' className='py-5 px-3'>
              <FaFacebookSquare className='text-gray-600 hover:text-gray-900' />
            </a>
            <a href='#' className='py-5 px-3'>
              <RiInstagramFill className='text-gray-600 hover:text-gray-900' />
            </a>
            <a href='#' className='py-5 px-3'>
              <FaPinterest className='text-gray-600 hover:text-gray-900' />
            </a>
            <a href='#' className='py-5 px-3'>
              <FaYoutube className='text-gray-600 hover:text-gray-900' />
            </a>
            {colorTheme === 'dark' ? (
              <div className='py-5 px-3'>
                <MdOutlineLightMode className='fill-blue-600' onClick={() => setTheme('dark')} />
              </div>
            ) : (
              <div className='py-5 px-3'>
                <MdDarkMode className='fill-gray-600' onClick={() => setTheme('light')} />
              </div>
            )}
          </div>
          {/* hamburger icon for mobile view */}
          <div className='md:hidden flex items-center'>{active ? <RiCloseFill className='text-2xl py-5' onClick={handleClick} /> : <GiHamburgerMenu className='text-2xl py-5' onClick={handleClick} />}</div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`${active ? '' : 'hidden'}`}>
        <Link href='/'>
          <a className='block py-2 px-4 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200'>Services</a>
        </Link>
        <Link href='/'>
          <a className='block py-2 px-4 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200'>About us</a>
        </Link>
        <Link href='/'>
          <a className='block py-2 px-4 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200'>Contact us</a>
        </Link>
      </div>
    </nav>
  );
}
