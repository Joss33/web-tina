import Head from "next/head";

export default function Home() {
  return (
    <>

      <Head>
        <title> Inicio | Tina</title>
      </Head>

      <main role="main" className="mt-20" >
        <section role="banner" >
          <div className="bg-[url('/assets/images/home/CAPASITACIONES.jpg')] w-full md:h-[357px] bg-cover object-cover flex items-center">
            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="max-w-sm ">
                <h3 className="text-3xl text-white">
                  Usa tus habilidades y genera ingresos extra
                </h3>
                <h2 className="text-5xl text-primary-yellow font-bold mb-4">
                  Ofrecivendo tus servicios
                </h2>
                <button type="button" className="text-primary-violet shadow bg-white hover:bg-primary-violet/10 focus:ring-4 focus:ring-primary-violet/30 rounded-full text-3xl px-8 py-2.5 mr-2 mb-2 focus:outline-none font-bold flex items-center justify-center">Regístrate</button>
              </div>
            </div>
          </div>
        </section>

        <section role="banner">
          <h2 className="text-primary-violet text-center text-4xl max-w-2xl mx-auto mt-10 mb-4">
            Somos una comunidad digital que <span className="font-bold">funciona como una vitrina de</span>
          </h2>
          <h2 className="text-primary-yellow font-bold text-center text-4xl max-w-2xl mx-auto mb-20">
            servicios ofrecidos por mayores de 50 años, aquí podrás:
          </h2>

          <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
              <div className="w-full flex flex-col">
                <div className="w-full h-96 rounded-3xl overflow-hidden mb-4">
                  <img src="/assets/images/home/servicios/SERVICIOS-01.jpg" className="w-full h-full bg-cover bg-no-repeat" alt="servicios" />
                </div>
                <h3 className="text-center text-2xl font-bold mb-3">
                  Leer nuestro Blog
                </h3>
                <p>
                  Entérate de todo y entretente con temas de tu interés
                </p>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full h-96 rounded-3xl overflow-hidden mb-4">
                  <img src="/assets/images/home/servicios/SERVICIOS-02.jpg" className="w-full h-full bg-cover bg-no-repeat" alt="servicios" />
                </div>
                <h3 className="text-center text-2xl font-bold mb-3">
                  Capacitarte
                </h3>
                <p>
                  Aprende con las capacitaciones gratuitas para mejorar tus habilidades
                </p>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full h-96 rounded-3xl overflow-hidden mb-4">
                  <img src="/assets/images/home/servicios/SERVICIOS-03.jpg" className="w-full h-full bg-cover bg-no-repeat" alt="servicios" />
                </div>
                <h3 className="text-center text-2xl font-bold mb-3">
                  Directorio de servicios
                </h3>
                <p>
                  Cotiza y conecta con los servicios que ofrecen otros miembros de la comunidad
                </p>
              </div>
            </div>
          </div>

        </section>

      </main>
    </>
  )
}
