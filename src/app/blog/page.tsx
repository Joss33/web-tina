import Head from "next/head";

export default function Blog() {
  return (
    <>

      <Head>
        <title> Blog | Tina</title>
      </Head>

      <main role="main" className="mt-20">
        <div className="max-w-screen-xl w-full mx-auto mb-10">
          <section role="banner" >
            <div className="bg-[url('/assets/images/blog/blog@2x.png')] w-full md:h-[22.3125rem] bg-cover object-cover flex items-center">
            </div>
          </section>
        </div>

        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <div className="hidden mb-6 xl:block lg:w-52">
            <div className="sticky top-24">
              <img className="rounded-full w-36 h-36 mb-8" src="/assets/images/Enmascarar grupo 18@2x.png" alt="Extra large avatar" />
              <div className="mb-4">
                <p className="text-lg">
                  Por:
                  <p className="font-bold">
                    Jessica Pérez
                  </p>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <aside className="flex flex-wrap" aria-label="Share social media">
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-3 mr-2 text-xs font-medium text-gray-900 no-underline bg-white rounded-full border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>{" "}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-3 mr-2 text-xs font-medium text-gray-900 no-underline bg-white rounded-full border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>{" "}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-3 text-xs font-medium text-gray-900 no-underline bg-white rounded-full border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                  </a>
                </aside>
              </div>
            </div>
          </div>
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-semibold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Cómo afectaría la reforma a pensionados que ganan más de $10 millones al mes
              </h1>
              <p className="text-center mb-4">
                El investigador pensional Marcelo Duque explicó a EL HERALDO como la reforma tributaria golpea a los pensionados.
              </p>
              <img src="/assets/images/Enmascarar grupo 19@2x.png" className="block text-center rounded-lg mb-4" alt="" />
              <p className="text-zinc-600 text-xl mb-4">
                El pasado martes 23 de agosto, el gobierno del presidente Gustavo Petro, encabezado por el ministro de Hacienda, José Antonio Ocampo, presentó ante el Congreso de la República el nuevo proyecto de reforma tributaria, que ha generado polémica por plantear aumentar los impuestos de las personas naturales y hasta a las pensionadas.
              </p>
              <p className="text-zinc-600 text-xl mb-4">
                De acuerdo con lo plasmado en la reforma, los pensionados que tengan ingresos mensuales después de los $10 millones pagarán más impuestos.
              </p>
              <p className="text-zinc-600 text-xl mb-4">
                Debido a ello, se ha generado un revuelo entre los ciudadanos, pues desconocen de qué se trata este nuevo impuesto y como les afectaría el bolsillo. 
              </p>
              <p className="text-zinc-600 text-xl mb-4">
                Para el Dr. Marcelo Duque, investigador pensional y director de Cómo me pensiono, esta tributación que busca imponer el Gobierno nacional, va en contra del bienestar de los pensionados pues afirma que por Constitución se consideran un público en condición de vulnerabilidad. 
              </p>
              <p className="text-zinc-600 text-xl mb-4">
                v“No estamos de acuerdo con que se le imponga impuesto a los pensionados y las razones son varias, la primera es que si bien es cierto, no hay un número muy grande de personas que superen una pensiones de $10 millones, la realidad es que un pensionado que gana $10 millones no es una persona rica. Es una persona que honestamente trabajó toda su vida y tuvo la posibilidad de tener un buen cargo”, aseguró Duque.
              </p>
            </header>
          </article>
          <div className="hidden mb-6 lg:block lg:w-72">
            <div className="sticky top-24">
              <img src="/assets/images/Grupo 974@2x.png" alt="google analitys" />
            </div>
          </div>
        </div>



      </main>
    </>
  )
}