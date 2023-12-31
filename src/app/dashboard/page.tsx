import { Search } from "@/components/Search";
import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title> Dashboard | PERENNIALS</title>
      </Head>

      <main role="main">
        <section role="banner">
          <div className=" bg-stone-200 lg:bg-[url('/assets/images/dashboard/banner-web-home.jpg')] py-10 w-full md:h-[572px] bg-cover object-cover flex items-center">
            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="max-w-md">
                <h3 className="text-6xl text-center lg:text-left font-Montserrat-Bold font-bold text-primary-violet-02 mb-3">
                  Contrata experiencia
                </h3>
                <p className="text-4xl text-center lg:text-left font-Montserrat-Medium font-medium text-primary-violet-01  mb-10">
                  Conoce nuestro directorio de servicios
                </p>
                <Link href={'/servicios'}>
                  <button
                    type="button"
                    className="text-primary-violet-01 mx-auto lg:mx-0 font-Montserrat-Bold shadow bg-primary-yellow-01 hover:bg-primary-yellow-01/80 focus:ring-4 focus:ring-primary-yellowbg-primary-yellow-01/30 rounded-full text-2xl px-12 py-2.5 pr-20 lg:mr-2 mb-2 focus:outline-none font-bold flex items-center justify-center relative"
                  >
                    COTIZAR
                    <span className="absolute top-2/3 -translate-y-1/2 right-0">
                      <img src="/assets/images/dashboard/Grupo 1191.svg" alt="" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Search title="¡Te echamos una mano!" />

        <section>
          <div className="bg-gray-50">
            <h2 className="text-center text-3xl font-bold font-Montserrat-Bold py-10 text-primary-violet-01">
              Servicios destacados
            </h2>

            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pb-10">
                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5 rounded-t-3xl bg-white -mt-5 relative">
                    <div className="flex items-center justify-end gap-2 flex-wrap -mt-9 mb-4">
                      <div className="px-2.5 py-2 rounded-full bg-white shadow-md">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-400 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p className="ml-2 text-xs  text-gray-900 ">
                            4.95
                          </p>
                        </div>
                      </div>

                      <div className="px-2.5 py-2 rounded-full bg-red-100 shadow-md">
                        <div className="flex items-center">
                          <p className="ml-2 text-xs  text-gray-900 ">
                            Para tu hogar
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mb-3 font-normal text-gray-700 text-sm ">
                      Aseo y desinfección
                    </p>
                    <a href="#">
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 font-Montserrat-Bold ">
                        Limpieza y descontaminación casa u oﬁcina
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-xs text-gray-700 ">
                      Armamos un paquete exclusivo para dejar reluciente tus
                      espacios
                    </p>

                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="font-semibold text-xs">Presencial</span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/assets/images/perfil/Enmascarar grupo 29@2x.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold font-Montserrat-Bold text-gray-900 truncate ">
                          Luisa Maria Mendoza
                        </p>
                        <Link
                          href={`/perfil/${'luisa-maria-mendoza'}`}
                          className="text-xs underline text-gray-500 truncate "
                        >
                          Ver perfil
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-02.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5 rounded-t-3xl bg-white -mt-5 relative">
                    <div className="flex items-center justify-end gap-2 flex-wrap -mt-9 mb-4">
                      <div className="px-2.5 py-2 rounded-full bg-white shadow-md">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-400 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p className="ml-2 text-xs  text-gray-900 ">
                            4.95
                          </p>
                        </div>
                      </div>

                      <div className="px-2.5 py-2 rounded-full bg-red-100 shadow-md">
                        <div className="flex items-center">
                          <p className="ml-2 text-xs  text-gray-900 ">
                            Para tu emrpesa
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mb-3 font-normal text-gray-700 text-sm ">
                      Oficina y negocios
                    </p>
                    <a href="#">
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 font-Montserrat-Bold ">
                        Asistente o secretaria empresarial a distancia
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-xs text-gray-700 ">
                      Organizaré tu agenda y te ayudaré a lograr tus objetivos
                      con actividades diarias
                    </p>

                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="font-semibold text-xs">Virtual</span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/assets/images/perfil/Enmascarar grupo 2-2@2x.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold font-Montserrat-Bold text-gray-900 truncate ">
                          Juliana Robayo
                        </p>
                        <Link
                          href={`/perfil/${'juliana-robayo'}`}
                          className="text-xs underline text-gray-500 truncate "
                        >
                          Ver perfil
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-03.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5 rounded-t-3xl bg-white -mt-5 relative">
                    <div className="flex items-center justify-end gap-2 flex-wrap -mt-9 mb-4">
                      <div className="px-2.5 py-2 rounded-full bg-white shadow-md">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-400 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p className="ml-2 text-xs  text-gray-900 ">
                            4.95
                          </p>
                        </div>
                      </div>

                      <div className="px-2.5 py-2 rounded-full bg-red-100 shadow-md">
                        <div className="flex items-center">
                          <p className="ml-2 text-xs  text-gray-900 ">
                            Para tu hogar
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mb-3 font-normal text-gray-700 text-sm ">
                      Cocina
                    </p>
                    <a href="#">
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 font-Montserrat-Bold ">
                        Preparación almuerzos y cenas
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-xs text-gray-700 ">
                      Los más deliciosos banquetes para tus eventos los tienes
                      conmigo, a un precio muy accesible.
                    </p>

                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="font-semibold text-xs">Presencial</span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/assets/images/perfil/Enmascarar grupo 2-3@2x.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold font-Montserrat-Bold text-gray-900 truncate ">
                          Maria Jaimes
                        </p>
                        <Link
                          href={`/perfil/${'maria-jaimes'}`}
                          className="text-xs underline text-gray-500 truncate "
                        >
                          Ver perfil
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-04.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5 rounded-t-3xl bg-white -mt-5 relative">
                    <div className="flex items-center justify-end gap-2 flex-wrap -mt-9 mb-4">
                      <div className="px-2.5 py-2 rounded-full bg-white shadow-md">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-400 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p className="ml-2 text-xs  text-gray-900 ">
                            4.95
                          </p>
                        </div>
                      </div>

                      <div className="px-2.5 py-2 rounded-full bg-red-100 shadow-md">
                        <div className="flex items-center">
                          <p className="ml-2 text-xs  text-gray-900 ">
                            Para tu hogar
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mb-3 font-normal text-gray-700 text-sm ">
                      Reparaciones
                    </p>
                    <a href="#">
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 font-Montserrat-Bold ">
                        Mantenimientos y arreglos eléctricos y de tuberías
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-xs text-gray-700 ">
                      Te ayudaré a solucionar cualquier emergencia de tu hogar,
                      con mis servicios de mantenimiento.
                    </p>

                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="font-semibold text-xs">Presencial</span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/assets/images/perfil/PERFIL03.jpg"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold font-Montserrat-Bold text-gray-900 truncate ">
                          Mario Jimenez
                        </p>
                        <Link
                          href={`/perfil/${'mario-jaimes'}`}
                          className="text-xs underline text-gray-500 truncate "
                        >
                          Ver perfil
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 py-10 mx-auto">
            <div className="row">
              <div className="col-12 col-lg-8 mb-4">
                <div className="bg-zinc-200 w-full rounded-3xl">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="py-6 pl-12 pr-9">
                        <div className="bg-primary-yellow-01 text-primary-violet-01 inline-flex items-center font-semibold text-base rounded-full px-5 py-2 mb-2.5 relative">
                          <img
                            src="/assets/images/dashboard/Grupo 44.svg"
                            width={34}
                            height={28}
                            className="mr-2"
                            alt=""
                          />
                          Capacitación
                        </div>
                        <p className="text-2xl font-bold font-Montserrat-Bold text-gray-800 mb-5">
                          Clase GRATIS Pizzas gourmet
                        </p>
                        <p className="text-gray-800 ">
                          Martes 25 de octubre del 2023
                        </p>
                        <p className="text-gray-800 font-bold font-Montserrat-Bold mb-5">de 5:00 p.m. a 8:00 p.m.</p>
                        <a
                          href="https://forms.gle/8TvVqQhERqQhERq7fTA7e7"
                          className="text-white shadow bg-primary-violet-01 hover:bg-primary-violet-01/10 focus:ring-4 focus:ring-primary-violet-01/30 rounded-full text-base px-14 py-2.5 mr-2 mb-2 focus:outline-none font-semibold flex items-center justify-center relative leading-[1.125rem] "
                        >
                          REGÍSTRATE AQUÍ
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg">
                      <div className="rounded-3xl overflow-hidden">
                        <img
                          src="/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-05.jpg"
                          className="w-full h-[18.75rem] bg-cover bg-no-repeat"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg mb-4">
                <div className="bg-zinc-200 rounded-2xl">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="/assets/images/dashboard/imagen home.png"
                      className="w-full h-48 relative z-0 bg-cover object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-0 z-10">
                      <h2 className="text-white px-5 pb-5 font-bold text-lg">
                        Tips para generar ingresos extra
                      </h2>
                    </div>
                  </div>
                  <p className="p-5 text-sm text-zinc-800">
                    Te damos algunos consejos para usar tu experiencia y
                    habilidades como fuente de ingreso sin necesidad de un
                    contrato.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
