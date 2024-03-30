'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavBarListItems from './navbar-list-items';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => setNavOpen((prevState) => !prevState);

  return (
    <>
      <nav
        className={`${
          navOpen ? 'fixed top-0' : ''
        } items-baseline flex xl:hidden px-4 py-5 w-full bg-inherit`}
      >
        <div className="flex items-center w-full">
          <button onClick={handleNavOpen}>
            <Bars3Icon className="w-10 h-10" />
          </button>

          <Link href="/" className="font-bold text-3xl mx-auto">
            Marshal<span className="text-primary">Blog</span>
          </Link>

          <div className="flex justify-center items-center gap-4">
            <a
              href="#"
              className="border text-primary bg-white dark:bg-inherit border-primary py-1 px-4 rounded-md hover:bg-primary hover:text-white transition duration-150 ease-out hover:ease-in"
            >
              Book online
            </a>
            <ModeToggle />
          </div>
        </div>

        <div
          className={`${
            navOpen ? 'translate-x-0' : '-translate-x-full'
          } transition duration-300 ease-out z-10 h-screen w-screen bg-inherit fixed top-0 left-0 right-0 bottom-0 px-4 py-5`}
        >
          <div className="flex items-center w-full">
            <button onClick={handleNavOpen}>
              <XMarkIcon className="w-10 h-10" />
            </button>

            <Link href="/" className="font-bold text-3xl mx-auto">
              Marshal<span className="text-primary">Blog</span>
            </Link>

            <a
              href="#"
              className="border text-primary bg-inherit dark:bg-inherit border-primary py-1 px-4 rounded-md hover:bg-primary hover:text-white transition duration-150 ease-out hover:ease-in"
            >
              Book online
            </a>
          </div>

          <a href="#" className="flex justify-center items-center gap-1 mt-10">
            <span>
              <PhoneIcon className="w-4 h-4" />
            </span>
            <span>0777777777</span>
          </a>
          <NavBarListItems />
        </div>
      </nav>

      <nav className="w-full relative hidden xl:flex flex-center items-center justify-between max-w-6xl mx-auto px-4 py-5">
        <Link href="/" className="font-bold text-3xl">
          Marshal<span className="text-primary">Blog</span>
        </Link>

        <NavBarListItems />

        <a href="#" className="flex justify-center items-center gap-1">
          <span>
            <PhoneIcon className="w-4 h-4" />
          </span>
          <span>0777777777</span>
        </a>

        <div className="flex justify-center items-center gap-4">
          <a
            href="#"
            className="border text-primary bg-white dark:bg-inherit border-primary py-1 px-4 rounded-md hover:bg-primary hover:text-white transition duration-150 ease-out hover:ease-in"
          >
            Book online
          </a>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
