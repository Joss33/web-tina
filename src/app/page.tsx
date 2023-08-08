import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <Head>
        <title>Inicio | Tina</title>
      </Head>

      <main role="main" >

        <div className="max-w-screen-xl w-full mx-auto">

        <section role="banner">
          <div className="bg-primary-violet-secondary w-full h-auto py-10 md:h-[28.125rem] bg-cover object-cover flex items-center">
            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="max-w-md">
                <h3 className="text-3xl font-normal text-white mb-3">
                  Usa tus habilidades y genera ingresos extra
                </h3>
                <p className="text-5xl font-bold text-primary-yellow  mb-10">
                  Ofreciendo tus servicios 
                </p>
                <Link
                  href={'/registro'}
                 
                >
                  <button  className=" w-auto text-primary-violet-secondary shadow bg-white hover:bg-primary-violet-secondary/10 focus:ring-4 focus:ring-primary-yellow/30 rounded-full text-3xl px-8 py-2 mr-2 mb-2 focus:outline-none font-bold flex items-center justify-center relative">
                    Regístrate
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/2 h-5 bg-accent-violet"></div>
            <div className="w-1/2 h-5 bg-primary-yellow"></div>
          </div>
        </section>

          <section role="banner">
            <h2 className="text-primary-violet text-center text-4xl max-w-2xl px-10 mx-auto mt-10 mb-4">
              Somos una comunidad digital que <span className="font-bold">funciona como una vitrina de</span>
            </h2>
            <h2 className="text-primary-yellow font-bold text-center text-4xl max-w-2xl mx-auto mb-20">
              servicios ofrecidos por mayores de 50 años, aquí podrás:
            </h2>

            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                <div className="w-full flex flex-col">
                  <div className="w-full h-96 rounded-3xl overflow-hidden mb-4">
                    <Link href={'/blog'}>
                      <img src="/assets/images/home/servicios/SERVICIOS-01.jpg" className="w-full h-full bg-cover bg-no-repeat" alt="servicios" />
                    </Link>
                  </div>
                  <h3 className=" text-zinc-700 text-center text-2xl font-bold mb-3">
                    Leer nuestro Blog
                  </h3>
                  <p className="text-zinc-700 text-center">
                    Entérate de todo y entretente con temas de tu interés
                  </p>
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-full h-96 rounded-3xl overflow-hidden mb-4">
                    <Link href={'/capacitate'}>
                      <img src="/assets/images/home/servicios/SERVICIOS-02.jpg" className="w-full h-full bg-cover bg-no-repeat" alt="servicios" />
                    </Link>
                  </div>
                  <h3 className=" text-zinc-700 text-center text-2xl font-bold mb-3">
                    Capacitarte
                  </h3>
                  <p className="text-zinc-700 text-center">
                    Aprende con las capacitaciones gratuitas para mejorar tus habilidades
                  </p>
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-full h-96 rounded-3xl overflow-hidden mb-4">
                    <Link href={'/servicios'}>
                      <img src="/assets/images/home/servicios/SERVICIOS-03.jpg" className="w-full h-full bg-cover bg-no-repeat" alt="servicios" />
                    </Link>
                  </div>
                  <h3 className=" text-zinc-700 text-center text-2xl font-bold mb-3">
                    Directorio de servicios
                  </h3>
                  <p className="text-zinc-700 text-center">
                    Cotiza y conecta con los servicios que ofrecen otros miembros de la comunidad
                  </p>
                </div>
              </div>
            </div>

          </section>

          <section>
            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="bg-primary-violet-secondary w-full h-auto py-10 md:h-[18.125rem] bg-cover object-cover flex items-center">
                <div className="row w-full"> 
                  <div className="col-lg-6 hidden lg:block"></div>
                  <div className="col-12 col-lg-6">
                    <h3 className="text-4xl font-normal text-white">
                      Conecta, comparte
                    </h3>
                    <p className="text-4xl font-bold text-primary-yellow  mb-4">
                      y prospéra
                    </p>
                    <Link
                      href={'/registro'}
                    >
                      <button  className=" w-auto text-primary-violet-secondary shadow bg-white hover:bg-primary-violet-secondary/10 focus:ring-4 focus:ring-primary-yellow/30 rounded-full text-2xl px-8 py-1 mr-2 mb-2 focus:outline-none font-bold flex items-center justify-center relative">
                        Regístrate
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
        

      </main>
    </>
  )
}
