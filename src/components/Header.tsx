'use client'
import { useState } from "react";
import Link from "next/link"
import classNames from "classnames";

export const Header = () =>{

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }


  return (
    <>
      <header role="navigation" className="h-[4.5rem]">
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center">
              <img
                src="/assets/images/LOGO-TINA.svg"
                className="h-12 mr-3"
                alt="Tina Logo"
              />
            </a>
            <div className="flex md:order-2">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={()=> handleOpenMenu()}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>

              <div className={classNames("z-50 fixed top-20 my-4 text-base list-none bg-primary-violet-secondary divide-y divide-gray-100 shadow", {'block': isOpenMenu, 'hidden': !isOpenMenu})} id="user-dropdown">
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link href="/about" className="block px-4 py-2 text-sm text-white hover:bg-accent-violet">Conoce a Tina</Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-accent-violet">Salud y bienestar</a>
                  </li>
                  <li>
                    <Link href="/servicios" className="block px-4 py-2 text-sm text-white hover:bg-accent-violet">Servicios domésticos </Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-accent-violet">Ocio y entretenimiento</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-accent-violet">Educación</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-accent-violet">Asesoramiento empresarial</a>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-accent-violet md:p-0 "
                    aria-current="page"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-accent-violet md:p-0 "
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-accent-violet md:p-0 "
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="capacitate"
                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-accent-violet md:p-0 "
                  >
                    Capacítate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mi-perfil"
                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-accent-violet md:p-0 "
                  >
                    Mi perfil
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}