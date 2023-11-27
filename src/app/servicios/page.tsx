import { Search } from "@/components/Search";
import Head from "next/head";

export default function Servicios() {
  return (
    <>
      <Head>
        <title> Servicios | PERENNIALS</title>
      </Head>

      <main role="main" >

      <Search title="¡Te echamos una mano!" />

        <section>
          <div className="bg-zinc-200 py-6">
            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="hidden md:block">
                <nav role="navigation">
                  <ul className="row justify-center">
                    <li className="col-auto">
                      <input
                        type="checkbox"
                        id="servicio-01"
                        name="servicios"
                        value="servicio-01"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="servicio-01"
                        className="inline-flex items-center justify-between w-full text-xs px-3 py-1.5 text-primary-violet-01 bg-white rounded-full cursor-pointer peer-checked:bg-primary-yellow-01 hover:text-gray-600  peer-checked:text-primary-violet-01 peer-checked:font-semibold  hover:bg-gray-50 shadow-md "
                      >
                        <div className="block">
                          <div className="w-full text-sm">
                            Salud y bienestar
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-auto">
                      <input
                        type="checkbox"
                        id="servicio-02"
                        name="servicios"
                        value="servicio-02"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="servicio-02"
                        className="inline-flex items-center justify-between w-full text-xs px-3 py-1.5 text-primary-violet-01 bg-white rounded-full cursor-pointer peer-checked:bg-primary-yellow-01 hover:text-gray-600  peer-checked:text-primary-violet-01 peer-checked:font-semibold  hover:bg-gray-50 shadow-md "
                      >
                        <div className="block">
                          <div className="w-full text-sm">
                            Servicios domesticos
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-auto">
                      <input
                        type="checkbox"
                        id="servicio-03"
                        name="servicios"
                        value="servicio-03"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="servicio-03"
                        className="inline-flex items-center justify-between w-full text-xs px-3 py-1.5 text-primary-violet-01 bg-white rounded-full cursor-pointer peer-checked:bg-primary-yellow-01 hover:text-gray-600  peer-checked:text-primary-violet-01 peer-checked:font-semibold  hover:bg-gray-50 shadow-md "
                      >
                        <div className="block">
                          <div className="w-full text-sm">
                            Ocio y entretenimiento
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-auto">
                      <input
                        type="checkbox"
                        id="servicio-04"
                        name="servicios"
                        value="servicio-04"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="servicio-04"
                        className="inline-flex items-center justify-between w-full text-xs px-3 py-1.5 text-primary-violet-01 bg-white rounded-full cursor-pointer peer-checked:bg-primary-yellow-01 hover:text-gray-600  peer-checked:text-primary-violet-01 peer-checked:font-semibold  hover:bg-gray-50 shadow-md "
                      >
                        <div className="block">
                          <div className="w-full text-sm">
                            Educacion y formacion
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-auto">
                      <input
                        type="checkbox"
                        id="servicio-05"
                        name="servicios"
                        value="servicio-05"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="servicio-05"
                        className="inline-flex items-center justify-between w-full text-xs px-3 py-1.5 text-primary-violet-01 bg-white rounded-full cursor-pointer peer-checked:bg-primary-yellow-01 hover:text-gray-600  peer-checked:text-primary-violet-01 peer-checked:font-semibold  hover:bg-gray-50 shadow-md "
                      >
                        <div className="block">
                          <div className="w-full text-sm">
                            Asesoramiento empresarial
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="block md:hidden">
                <label htmlFor="categorias" className="block mb-2">Categorías</label>
                <select name="" id="categorias" className="form-control">
                  <option value="">Seleccione...</option>
                  <option value="">Salud y bienestar</option>
                  <option value="">Servicios domesticos</option>
                  <option value="">Ocio y entretenimiento</option>
                  <option value="">Educacion y formacion</option>
                  <option value="">Asesoramiento empresarial</option>
                </select>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
           
            <div className="row mb-10 mt-10">
              <div className="col-12 mb-10">
                <div className="rounded-2xl overflow-hidden w-full">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary-violet-02 px-4 py-10 w-full md:flex-shrink-0 md:w-60">
                      <div className="flex justify-center h-full flex-col">
                        <h3 className="text-center text-white text-xl mb-5 font-bold">
                          Electricidad
                        </h3>
                        <p className="text-center text-sm text-white mb-10">
                          Encuentra ayuda para instalar, arreglar, revisar y
                          mantener en buen estado todas las redes y elementos
                          eléctricos de tu hogar
                        </p>
                        <button
                          type="button"
                          className="text-primary-violet-01 mx-auto shadow bg-white hover:bg-primary-violet/10 focus:ring-4 focus:ring-primary-violet/30 rounded-full text-md px-8 py-1 mb-2 focus:outline-none font-bold flex items-center justify-center"
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                    <div className="bg-zinc-200 flex-grow px-5 md:px-10 py-6">
                      <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                src="/assets/images/home/servicios/SERVICIOS-01.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Electricidad
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Lámparas
                                </h5>
                              </a>

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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                height={103}
                                src="/assets/images/home/servicios/SERVICIOS-02.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Electricidad
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Interruptores y enchufes
                                </h5>
                              </a>

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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                height={103}
                                src="/assets/images/home/servicios/SERVICIOS-03.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Electricidad
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Fluído eléctrico
                                </h5>
                              </a>

                              <div className="flex items-center mb-2">
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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-10">
                <div className="rounded-2xl overflow-hidden w-full">
                  <div className="flex flex-col-reverse md:flex-row">
                    <div className="bg-zinc-200 flex-grow px-5 md:px-10 py-6">
                      <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                src="/assets/images/home/servicios/SERVICIOS-04.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Electricidad
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Aires acondicionados
                                </h5>
                              </a>

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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                height={103}
                                src="/assets/images/home/servicios/SERVICIOS-05.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Electricidad
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Dispositivos electrónicos
                                </h5>
                              </a>

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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                height={103}
                                src="/assets/images/home/servicios/SERVICIOS-06.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Electricidad
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Pequeños electrónicos
                                </h5>
                              </a>

                              <div className="flex items-center mb-2">
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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary-violet-02 px-4 py-10 w-full md:flex-shrink-0 md:w-60">
                      <div className="flex justify-center h-full flex-col">
                        <h3 className="text-center text-white text-xl mb-5 font-bold">
                          Electrodomesticos
                        </h3>
                        <p className="text-center text-sm text-white mb-10">
                          Arreglo, instalación y mantenimiento de grandes y
                          pequeños electrodomésticos del hogar para ayudarte a
                          mantener todo en orden
                        </p>
                        <button
                          type="button"
                          className="text-primary-violet-01 mx-auto shadow bg-white hover:bg-primary-violet/10 focus:ring-4 focus:ring-primary-violet/30 rounded-full text-md px-8 py-1 mb-2 focus:outline-none font-bold flex items-center justify-center"
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-10">
                <div className="rounded-2xl overflow-hidden w-full">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary-violet-02 px-4 py-10 w-full md:flex-shrink-0 md:w-60">
                      <div className="flex justify-center h-full flex-col">
                        <h3 className="text-center text-white text-xl mb-5 font-bold">
                          Jardinería
                        </h3>
                        <p className="text-center text-sm text-white mb-10">
                          Deja el cuidado y mantenimiento de tus plantas y
                          jardín en manos de nuestros jardineros expertos,
                          quienes también prestan servicio de poda de árboles y
                          asesoría en paisajiso
                        </p>
                        <button
                          type="button"
                          className="text-primary-violet-01 mx-auto shadow bg-white hover:bg-primary-violet/10 focus:ring-4 focus:ring-primary-violet/30 rounded-full text-md px-8 py-1 mb-2 focus:outline-none font-bold flex items-center justify-center"
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                    <div className="bg-zinc-200 flex-grow px-5 md:px-10 py-6">
                      <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                src="/assets/images/home/servicios/SERVICIOS-07.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Jardinería
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Plantas y jardines
                                </h5>
                              </a>

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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                height={103}
                                src="/assets/images/home/servicios/SERVICIOS-08.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Jardinería
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Asesoría en jardinería
                                </h5>
                              </a>

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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow ">
                            <a href="#">
                              <img
                                className="rounded-t-lg w-full bg-cover object-cover h-[6.5rem]"
                                height={103}
                                src="/assets/images/home/servicios/SERVICIOS-09.jpg"
                                alt=""
                              />
                            </a>
                            <div className="px-3 py-2 rounded-t-xl">
                              <p className="font-normal text-gray-700 text-sm">
                                Jardinería
                              </p>
                              <a href="#">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
                                  Paisajismo en interiores
                                </h5>
                              </a>

                              <div className="flex items-center mb-2">
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
                                <span className="font-semibold text-xs">
                                  Presencial
                                </span>
                              </div>

                              <div className="flex items-center text-xs mb-4">
                                <a
                                  href="#"
                                  className="underline text-primary-violet-01 mr-1"
                                >
                                  Ver Aliados
                                </a>
                                <p>prestadores de servicios</p>
                              </div>

                              <div className="rounded-full px-4 py-1 bg-primary-violet-02 flex items-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                  />
                                </svg>
                                <span className="text-xs">
                                  <small>
                                    Servicio con garantía de 30 días
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
