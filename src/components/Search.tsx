'use client'
import { FC, useState } from "react";
import classNames from "classnames";
import Link from "next/link";

interface SearchProps{
  title: string;
  alternative?: boolean;
}

export const Search: FC<SearchProps> = ({alternative, title} = {alternative: false, title: '¡Te echamos una mano!'}) =>{


  const [showCategories, setShowCategories] = useState(false);

  const handleChangeShowCategories = () => {
    setShowCategories(!showCategories);
  }

  return (
    <>
      <div className={classNames("py-5 ", {'bg-primary-violet-01': !alternative, 'bg-stone-200': alternative})}>
        <div className="max-w-[54.875rem] w-full px-5 mx-auto">
          <h2 className={classNames("text-2xl font-Montserrat-Bold font-bold text-center mb-5", {'text-white': !alternative, 'text-primary-violet-01': alternative})}>
            {title}
          </h2>
          <div className="w-full rounded-full bg-white flex py-2 md:py-3 px-2 md:px-10 mb-3 relative">
            <button onClick={handleChangeShowCategories} type="button" className="hidden md:flex max-w-[11.25rem] w-full items-center border-r border-gray-400 mr-5 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary-violet-01">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </svg>
              <span className="px-[30px] font-Montserrat-Bold font-bold text-gray-800">Categoría</span>
            </button>
            <input type="text" className="flex-grow border-0 text-gray-500 outline-none" placeholder="Encuentra el servicio que necesitas…" />
            <div className="hidden md:block max-w-[14.5rem] w-full">
              <button className="btn w-full btn-primary-violet-01">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-yellow-01">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <span className="mx-auto">Buscar</span>
                </div>
              </button>
            </div>

            <div id="userDropdown" className={classNames("z-10 top-20 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ", {'hidden': !showCategories, 'block': showCategories}) }>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                <li>
                  <Link href={'/servicios'} onClick={handleChangeShowCategories} className="block px-4 py-2 hover:bg-gray-100">Salud y bienestar</Link>
                </li>
                <li>
                  <Link href={'/servicios'} onClick={handleChangeShowCategories} className="block px-4 py-2 hover:bg-gray-100">Servicios domesticos</Link>
                </li>
                <li>
                  <Link href={'/servicios'} onClick={handleChangeShowCategories} className="block px-4 py-2 hover:bg-gray-100">Ocio y entretenimiento</Link>
                </li>
                <li>
                  <Link href={'/servicios'} onClick={handleChangeShowCategories} className="block px-4 py-2 hover:bg-gray-100">Educacion y formacion</Link>
                </li>
                <li>
                  <Link href={'/servicios'} onClick={handleChangeShowCategories} className="block px-4 py-2 hover:bg-gray-100">Asesoramiento empresarial</Link>
                </li>
              </ul>
            </div>

          </div>
          <p className={classNames("text-center text-sm", {'text-white': !alternative, 'text-primary-violet-01': alternative})}>
            Explora nuestras categorías y cotiza los servicios de independientes con experiencia
          </p>
        </div>
      </div>
    </>
  )
}