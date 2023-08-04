import Head from "next/head";

export default function About() {
  return (
    <>

      <Head>
        <title>About | Tina</title>
      </Head>

      <main role='main' className="mt-20">

        <section className="bg-white  antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-20 sm:py-16 lg:py-24">
            <div className="px-3">
              <div className="row">
                <div className="col">
                  <div>
                    <h2 className="text-2xl font-bold leading-none tracking-tight text-primary-violet-secondary sm:text-3xl dark:text-white">
                      ¿Quién es Tina?
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 md:max-w-3xl md:mx-auto sm:text-lg dark:text-gray-400">
                    Una plataforma digital, amigable e intuitiva, que permite a las personas mayores de 50 años conectarse, compartir experiencias y tener oportunidades de generación de ingresos. En Tina creemos y valoramos la experiencia de los mayores de 50 años, por eso creamos diferentes espacios para que puedan conectar con otros y explorar contenido de su interés para promover sus habilidades.
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-[url('/assets/images/about/Enmascarargrupo30@2x.png')] bg-cover object-cover flex justify-center items-center w-full h-[13.625rem]">
                  <img
                    className="object-cover bg-cover relative bottom-3"
                    src="/assets/images/about/Rectángulo 540@2x.png"
                    width={283}
                    height={242}
                    alt="Book cover"
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-accent-violet rounded-tr-[10rem]">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-20 sm:py-10 lg:py-16">
            <div className="px-3">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-center text-white text-2xl font-bold mb-8">En la comunidad encontrarás</h2>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="w-36 h-36 bg-primary-violet-secondary  flex justify-center items-center mx-auto mb-3 rounded-full">
                    <img src="/assets/images/about/Grupo 1167.svg" alt="" />
                  </div>
                  <p className="text-center font-semibold text-white">
                    Espacios de actualidad y entretenimiento con temas de tu interes
                  </p>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="w-36 h-36 bg-primary-violet-secondary  flex justify-center items-center mx-auto mb-3 rounded-full">
                    <img src="/assets/images/about/Grupo 1169.svg" alt="" />
                  </div>
                  <p className="text-center font-semibold text-white">
                    Podrás acceder o ser parte de un directorio de servicios prestados por independientes mayores de 50 años
                  </p>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="w-36 h-36 bg-primary-violet-secondary  flex justify-center items-center mx-auto mb-3 rounded-full">
                    <img src="/assets/images/about/Grupo 1171.svg" alt="" />
                  </div>
                  <p className="text-center font-semibold text-white">
                    Te conectaremos con personas con intereses comunes y nuevos clientes
                  </p>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="w-36 h-36 bg-primary-violet-secondary  flex justify-center items-center mx-auto mb-3 rounded-full">
                    <img src="/assets/images/about/Grupo 1173.svg" alt="" />
                  </div>
                  <p className="text-center font-semibold text-white">
                   Encontrarás espacios para divertirte, aprender y potenciar tus habilidades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="bg-white  antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-20 sm:py-16 lg:py-24">
            <div className="px-3">
              <div className="row">
                <div className="col">
                  <div>
                    <h2 className="text-2xl font-bold leading-none tracking-tight text-primary-violet-secondary sm:text-3xl dark:text-white">
                      ¿Para quiénes se créo Tina?
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 md:max-w-3xl md:mx-auto sm:text-lg dark:text-gray-400">
                      Tina quiere crear un impacto social con un espacio para la creación de relaciones sociales colaborativas y la oportunidad de generación de ingresos enfocados en las habilidades y conocimientos de sus usuarios. Nuestro modelo de negocio se basa en servicios de suscripción y oportunidades publicitarias. Ofrecemos un acceso freemium, permitiendo a nuestros usuarios disfrutar de una experiencia integral sin costo alguno. Creemos en la importancia de tener una comunidad cautiva antes de implementar cualquier proceso de cobros.
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <img
                    className="object-cover bg-cover relative bottom-3"
                    src="/assets/images/about/quienes somos@2x.png"
                    alt="Book cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}