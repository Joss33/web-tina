import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title> Blog | PERENNIALS</title>
      </Head>

      <main role="main" >
        <div className="max-w-screen-xl w-full bg-white mx-auto pt-10 pb-10 mb-10">
          <div className="lg:max-w-screen-lg px-5 lg:px-20 w-full bg-white mx-auto">
            <div className="px-3">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-primary-violet-01 font-Montserrat-Bold font-bold text-5xl">
                    Blog
                  </h2>
                  <hr className="my-3" />
                  <h3 className="text-primary-violet-01 font-semibold text-base">
                    TENDENCIAS DE HOY
                  </h3>
                  <hr className="my-3" />
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="row">
                <div className="col-12 col-lg-4 mb-4">
                  <img
                    src="/assets/images/blog/Enmascarar grupo 12@2x.png"
                    className=" bg-cover object-cover mb-3 h-auto w-full "
                    alt=""
                  />
                  <div className="flex justify-between items-center flex-wrap gap-4 mb-4 text-sm text-zinc-500">
                    <span>Jul 24</span>
                    <span>Por: Angelica Barrios</span>
                  </div>
                  <Link href={`/blog/${'tecnicas-de-rejuvenecimiento-despues-de-los-50-anos'}`}>
                    <p className="text-lg font-bold text-zinc-700">
                      Técnicas de rejuvenecimiento recomendadas por expertos
                    </p>
                  </Link>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <img
                    src="/assets/images/blog/Enmascarar grupo 13@2x.png"
                    className=" bg-cover object-cover mb-3 h-auto w-full "
                    alt=""
                  />
                  <div className="flex justify-between items-center flex-wrap gap-4 mb-4 text-sm text-zinc-500">
                    <span>Jul 24</span>
                    <span>Por: Jesús Rodríguez</span>
                  </div>
                  <Link href={`/blog/${'consejos-para-superar-situaciones-de-abuso'}`}>
                    <p className="text-lg font-bold text-zinc-700">
                      Consejos para superar las situaciones de abuso
                    </p>
                  </Link>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <img
                    src="/assets/images/blog/Enmascarar grupo 14@2x.png"
                    className=" bg-cover object-cover mb-3 h-auto w-full "
                    alt=""
                  />
                  <div className="flex justify-between items-center flex-wrap gap-4 mb-4 text-sm text-zinc-500">
                    <span>Jul 24</span>
                    <span>Por: Geraldine Giménez</span>
                  </div>
                  <Link href={`/blog/${'plantas-ideales-para-cada-espacio-de-tu-hogar'}`}>
                    <p className="text-lg font-bold text-zinc-700">
                      5 plantas ideales para tener en casa
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-3 mb-5">
              <div className="row">
                <div className="col-12">
                  <hr className="my-3" />
                  <div className="hidden md:block">
                    <div className="row">
                      <div className="col flex justify-center">
                        <a
                          href="#"
                          className="text-primary-violet-01 font-Montserrat-Medium font-medium underline "
                        >
                          Ver todo
                        </a>
                      </div>
                      <div className="col flex justify-center">
                        <a href="#" className="text-primary-violet-01 font-Montserrat-Medium font-medium">
                          Tendencias
                        </a>
                      </div>
                      <div className="col flex justify-center">
                        <a href="#" className="text-primary-violet-01 font-Montserrat-Medium font-medium">
                          Cultura
                        </a>
                      </div>
                      <div className="col flex justify-center">
                        <a href="#" className="text-primary-violet-01 font-Montserrat-Medium font-medium">
                          Negocios
                        </a>
                      </div>
                      <div className="col flex justify-center">
                        <a href="#" className="text-primary-violet-01 font-Montserrat-Medium font-medium">
                          Opinión
                        </a>
                      </div>
                      <div className="col flex justify-center">
                        <a href="#" className="text-primary-violet-01 font-Montserrat-Medium font-medium">
                          Arte
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="block md:hidden">
                    <label htmlFor="categorias" className="block mb-2">Categorías</label>
                    <select name="" id="categorias" className="form-control">
                      <option value="">Ver todo</option>
                      <option value="">Tendencias</option>
                      <option value="">Cultura</option>
                      <option value="">Cultura</option>
                      <option value="">Negocios</option>
                      <option value="">Opinión</option>
                      <option value="">Arte</option>
                    </select>
                  </div>
                  <hr className="my-3" />
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="row">
                <div className="col-12 mb-5">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <Link href={`/blog/${'como-afectaria-la-reforma-a-pensionados-que-ganan-mas-de-10-millones-al-mes'}`}>
                        <img
                          src="/assets/images/blog/Enmascarar grupo 15@2x.png" 
                          className="w-full h-auto bg-cover object-cover"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="col-md">
                      <p className="text-zinc-700 text-xs mb-3">
                        Por: Adriana Saéz
                      </p>
                      <p className="text-base text-zinc-700 font-bold mb-3">
                        ¿Por qué ser parte de una membresía probienestar después de los 50 años?
                      </p>
                      <p className="text-sm text-zinc-700 mb-3">
                        Ser parte de una membresía que brinda acceso a un mundo de descuentos en diversas áreas que representan necesidades diarias es una oportunidad que puede marcar la diferencia en la vida…
                      </p>
                      <p className="text-zinc-700 text-sm">Jul 24</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <Link href={`/blog/${'por-que-ser-parte-de-una-membresia-probienestar-despues-de-los-50-anos'}`}>
                        <img
                          src="/assets/images/blog/Enmascarar grupo 16@2x.png"
                          className="w-full h-auto bg-cover object-cover"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="col-12 col-md">
                      <p className="text-zinc-700 text-xs mb-3">
                        Por: Jessica Pérez
                      </p>
                      <p className="text-base text-zinc-700 font-bold mb-3">
                        Cómo afectará la reforma a pensionados que ganan más de 10 millones de pesos al mes
                      </p>
                      <p className="text-sm text-zinc-700 mb-3">
                        Las pensiones de más de diez millones de pesos están en la mira de la próxima reforma tributaria, tema polémico que ha dado de qué hablar
                      </p>
                      <p className="text-zinc-700 text-sm">Jul 22</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <Link href={`/blog/${'por-que-ser-parte-de-una-membresia-probienestar-despues-de-los-50-anos'}`}>
                        <img
                          src="/assets/images/blog/Enmascarar grupo 17@2x.png"
                          className="w-full h-auto bg-cover object-cover"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="col-12 col-md">
                      <p className="text-zinc-700 text-xs mb-3">
                        Por: Adriana Saéz
                      </p>
                      <p className="text-base text-zinc-700 font-bold mb-3">
                        Cómo escoger mi auto ideal para el día a día
                      </p>
                      <p className="text-sm text-zinc-700 mb-3">
                        Trasladarnos de nuestra casa a trabajo es una de las actividades que forman parte de nuestra rutina del día a día. Dependiendo de la distancia que esto abarque, el trayecto podrá ser algo que…
                      </p>
                      <p className="text-zinc-700 text-sm">Jul 24</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
