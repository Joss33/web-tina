"use client";
import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <header role="navigation" className="pt-20">
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
          <div className="relative max-w-screen-xl w-full px-5 md:px-12 lg:px-20 flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href={"/"} className="flex items-center">
              <img
                src="/assets/images/logo/logo-01.png"
                className="h-12 mr-3"
                alt="PERENNIALS Logo"
              />
            </Link>

            {pathname === "/" ? (
              <>
                <div className="hidden md:block">
                  <div className="row">
                    <div className="col-auto">
                      <Link href={"/ingresa"}>
                        <button
                          type="button"
                          className="btn btn-primary-yellow--outline mr-2 mb-2 "
                        >
                          Ingresa
                        </button>
                      </Link>
                    </div>
                    <div className="col-auto">
                      <Link href={"/registro"}>
                        <button
                          type="button"
                          className="btn btn-primary-yellow--outline mr-2 mb-2 "
                        >
                          Regístrate
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    onClick={() => handleOpenMenu()}
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
                </div>
              </>
            ) : (
              <>
                <div className="flex md:order-2">
                  <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    onClick={() => handleOpenMenu()}
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
                </div>
                <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                    <li>
                      <Link
                        href="/dashboard"
                        className={classNames("block py-0.5 px-2.5 rounded-lg text-gray-900 hover:text-accent-violet ", {'bg-primary-violet-01 text-primary-yellow-01 font-Montserrat-Bold font-bold': pathname === '/dashboard'})}
                        aria-current="page"
                      >
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios"
                        className={classNames("block py-0.5 px-2.5 rounded-lg text-gray-900 hover:text-accent-violet ", {'bg-primary-violet-01 text-primary-yellow-01 font-Montserrat-Bold font-bold': pathname === '/servicios'})}
                      >
                        Servicios
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className={classNames("block py-0.5 px-2.5 rounded-lg text-gray-900 hover:text-accent-violet ", {'bg-primary-violet-01 text-primary-yellow-01 font-Montserrat-Bold font-bold': pathname === '/blog'})}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/capacitate"
                        className={classNames("block py-0.5 px-2.5 rounded-lg text-gray-900 hover:text-accent-violet ", {'bg-primary-violet-01 text-primary-yellow-01 font-Montserrat-Bold font-bold': pathname === '/capacitate'})}
                      >
                        Capacítate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/perfil/${"Luisa-Mendoza"}`}
                        className={classNames("block py-0.5 px-2.5 rounded-lg text-gray-900 hover:text-accent-violet ", {'bg-primary-violet-01 text-primary-yellow-01 font-Montserrat-Bold font-bold': pathname === '/perfil'})}
                      >
                        Mi perfil
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
            <div
              className={classNames(
                "z-50 absolute right-6 top-20 my-4 text-base list-none bg-primary-violet-01 divide-y divide-gray-100 shadow",
                { block: isOpenMenu, hidden: !isOpenMenu }
              )}
              id="user-dropdown"
            >
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-white hover:bg-accent-violet"
                  >
                    Conoce a Tina
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="block px-4 py-2 text-sm text-white hover:bg-accent-violet"
                  >
                    Salud y bienestar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="block px-4 py-2 text-sm text-white hover:bg-accent-violet"
                  >
                    Servicios domésticos{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="block px-4 py-2 text-sm text-white hover:bg-accent-violet"
                  >
                    Ocio y entretenimiento
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-accent-violet"
                  >
                    Educación
                  </a>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="block px-4 py-2 text-sm text-white hover:bg-accent-violet"
                  >
                    Asesoramiento empresarial
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
