import Head from "next/head";
import Link from "next/link";

export default function Capacitate() {
  return (
    <>
      <Head>
        <title> Capacitate | PERENNIALS</title>
      </Head>

      <main role="main">
        <div className="max-w-screen-xl w-full mx-auto mb-10 px-3">
          <section role="banner" className="row">
            <div className="bg-primary-violet-01 md:bg-[url('/assets/images/home/CAPASITACIONES.jpg')] w-full h-[22.3125rem] bg-cover flex items-center">
              <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
                  <div className="max-w-sm ">
                    <h3 className="text-5xl text-center md:text-left text-white">
                      Fortalece tus habilidades
                    </h3>
                    <h2 className="text-6xl text-center md:text-left font-Montserrat-Bold text-primary-yellow-01 font-bold mb-4">
                      Capacítate
                    </h2>
                  </div>
                </div>
            </div>
          </section>

          <section className="row mt-10">
            <div className="col-12 block lg:hidden mb-10">
            <label htmlFor="filtros" className="block mb-2">Filtrar por:</label>
              <select name="" id="filtros" className="form-control">
                <option value="">Seleccione...</option>
                <option value="">Categorías</option>
                <option value="">- Empresas</option>
                <option value="">- Hogar</option>
                <option value="">- Informal</option>
                <option value="">- Marca Personal</option>
                <option value="">Duración</option>
                <option value="">- de 10 a 20 mins</option>
                <option value="">- de 25 a 45 mins</option>
                <option value="">- de 50 a 60 mins</option>
                <option value="">- de 60 y más</option>
              </select>
            </div>
            <div className="col-3 hidden lg:block">
              <aside>
                <h3 className="text-xl font-semibold text-primary-violet-01 font-bold font-Montserrat-Bold">
                  Filtrar por:
                </h3>
                <hr className="my-3 bg-zinc-800" />
                <h4 className="text-zinc-800 font-semibold mb-4">Categorías</h4>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    Empresas
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    Hogar
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    Informal
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    Marca Personal
                  </label>
                </div>
                <hr className="my-3 bg-zinc-800" />
                <h4 className="text-zinc-800 font-semibold mb-4">Duración</h4>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    de 10 a 20 mins
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    de 25 a 45 mins
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    de 50 a 60 mins
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    de 60 y más
                  </label>
                </div>
                <hr className="my-3 bg-zinc-800" />
                <h4 className="text-zinc-800 font-semibold mb-4">Recientes</h4>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    ¿Cómo cotizo mis servicios?
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    Crisis profesional en adultos
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-normal text-gray-700 "
                  >
                    Reinvención inclusiva
                  </label>
                </div>
              </aside>
            </div>
            <div className="col-12 col-lg-9">
              <div className="row items-center">
                <div className="col-12 col-lg-4 mb-4">
                  <div className="w-full h-full">
                    <div className="">
                      <img
                        src="/assets/images/capacitate/Enmascarar grupo 20@2x.png"
                        alt=""
                      />
                    </div>
                    <div className=" bg-primary-violet-01 p-4">
                      <p className="text-base font-bold text-white mb-4">
                        Cómo vender en redes sociales usando nada más que
                        palabras
                      </p>
                      <div className="flex justify-between">
                        <img
                          src="/assets/images/capacitate/Grupo 976@2x.png"
                          className="w-10 h-10"
                          alt=""
                        />
                        <Link
                          href={`/capacitate/${"empleabilidad"}`}
                          className="text-primary-violet-01 font-bold font-Montserrat-Bold bg-primary-yellow-01 hover:bg-primary-yellow-01/80 focus:ring-4 focus:ring-primary-yellow/30 rounded-full text-lg px-10 py-2 mr-2 mb-2 focus:outline-none "
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="w-full h-full">
                    <div className="">
                      <img
                        src="/assets/images/capacitate/Enmascarar grupo 21@2x.png"
                        alt=""
                      />
                    </div>
                    <div className=" bg-primary-violet-01 p-4">
                      <p className="text-base font-bold text-white mb-4">
                        Crisis profesional para adultos mayores
                      </p>
                      <div className="flex justify-between">
                        <img
                          src="/assets/images/capacitate/Grupo 976@2x.png"
                          className="w-10 h-10"
                          alt=""
                        />
                        <Link
                          href={`/capacitate/${"empleabilidad"}`}
                          role="button"
                          className="text-primary-violet-01 font-bold font-Montserrat-Bold bg-primary-yellow-01 hover:bg-primary-yellow-01/80 focus:ring-4 focus:ring-primary-yellow/30 rounded-full text-lg px-10 py-2 mr-2 mb-2 focus:outline-none "
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="w-full h-full">
                    <div className="">
                      <img
                        src="/assets/images/capacitate/Enmascarar grupo 22@2x.png"
                        alt=""
                      />
                    </div>
                    <div className=" bg-primary-violet-01 p-4">
                      <p className="text-base font-bold text-white mb-4">
                        Empleabilidad Informal
                      </p>
                      <div className="flex justify-between">
                        <img
                          src="/assets/images/capacitate/Grupo 976@2x.png"
                          className="w-10 h-10"
                          alt=""
                        />
                        <Link 
                          href={`/capacitate/${"empleabilidad"}`}
                          className="text-primary-violet-01 font-bold font-Montserrat-Bold bg-primary-yellow-01 hover:bg-primary-yellow-01/80 focus:ring-4 focus:ring-primary-yellow/30 rounded-full text-lg px-10 py-2 mr-2 mb-2 focus:outline-none "
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="w-full h-full">
                    <div className="">
                      <img
                        src="/assets/images/capacitate/Enmascarar grupo 23@2x.png"
                        alt=""
                      />
                    </div>
                    <div className=" bg-primary-violet-01 p-4">
                      <p className="text-base font-bold text-white mb-4">
                        Cómo vender en redes sociales usando nada más que
                        palabras
                      </p>
                      <div className="flex justify-between">
                        <img
                          src="/assets/images/capacitate/Grupo 976@2x.png"
                          className="w-10 h-10"
                          alt=""
                        />
                        <Link
                          href={`/capacitate/${"empleabilidad"}`}
                          className="text-primary-violet-01 font-bold font-Montserrat-Bold bg-primary-yellow-01 hover:bg-primary-yellow-01/80 focus:ring-4 focus:ring-primary-yellow/30 rounded-full text-lg px-10 py-2 mr-2 mb-2 focus:outline-none "
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="w-full h-full">
                    <div className="">
                      <img
                        src="/assets/images/capacitate/Enmascarar grupo 24@2x.png"
                        alt=""
                      />
                    </div>
                    <div className=" bg-primary-violet-01 p-4">
                      <p className="text-base font-bold text-white mb-4">
                        Crisis profesional para adultos mayores
                      </p>
                      <div className="flex justify-between">
                        <img
                          src="/assets/images/capacitate/Grupo 976@2x.png"
                          className="w-10 h-10"
                          alt=""
                        />
                        <Link
                          href={`/capacitate/${"empleabilidad"}`}
                          className="text-primary-violet-01 font-bold font-Montserrat-Bold bg-primary-yellow-01 hover:bg-primary-yellow-01/80 focus:ring-4 focus:ring-primary-yellow/30 rounded-full text-lg px-10 py-2 mr-2 mb-2 focus:outline-none "
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="w-full h-full">
                    <div className="">
                      <img
                        src="/assets/images/capacitate/Enmascarar grupo 25@2x.png"
                        alt=""
                      />
                    </div>
                    <div className=" bg-primary-violet-01 p-4">
                      <p className="text-base font-bold text-white mb-4">
                        Empleabilidad Informal
                      </p>
                      <div className="flex justify-between">
                        <img
                          src="/assets/images/capacitate/Grupo 976@2x.png"
                          className="w-10 h-10"
                          alt=""
                        />
                        <Link
                          href={`/capacitate/${"empleabilidad"}`}
                          className="text-primary-violet-01 font-bold font-Montserrat-Bold bg-primary-yellow-01 hover:bg-primary-yellow-01/80 focus:ring-4 focus:ring-primary-yellow/30 rounded-full text-lg px-10 py-2 mr-2 mb-2 focus:outline-none "
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
