import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <Head>
        <title>Inicio | PERENNIALS</title>
      </Head>

      <main role="main" >

        <div className="max-w-screen-xl w-full mx-auto">

          <section role="banner">
            <div className=" bg-primary-violet-01 py-10 md:py-0 lg:bg-[url('/assets/images/home/Bannerprincipal.jpg')] w-full md:h-[357px] bg-cover object-cover flex items-center">
              <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
                <div className="max-w-sm ">
                  <h3 className="text-3xl text-center md:text-left text-white">
                    Usa tus habilidades y genera ingresos extra
                  </h3>
                  <h2 className="text-5xl text-center md:text-left text-primary-yellow-01 font-Montserrat-Bold font-bold mb-4">
                    Ofreciendo tus servicios
                  </h2>
                  <Link href={'/registro'}>
                    <button type="button" className="text-primary-violet-01 font-Montserrat-Bold shadow bg-white hover:bg-priring-primary-violet-01/10 focus:ring-4 focus:ring-primary-violet-01/30 rounded-full text-2xl px-8 py-2 md:mr-2 mb-2 focus:outline-none font-bold block mx-auto md:mx-0 md:flex items-center justify-center">Regístrate</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/2 h-5 bg-accent-violet"></div>
              <div className="w-1/2 h-5 bg-primary-yellow"></div>
            </div>
          </section>

          <section role="banner" className="max-w-screen-xl px-4 py-8 mx-auto lg:px-20">
            <h2 className="text-primary-violet-01 text-center text-3xl max-w-2xl mx-auto mt-10 mb-4">
              Somos una comunidad digital que <span className="font-Montserrat-Bold font-bold">funciona como una vitrina de</span>
            </h2>
            <h2 className="text-primary-yellow-01/70 font-Montserrat-Bold font-bold text-center text-4xl max-w-2xl mx-auto mb-20">
              servicios ofrecidos por mayores de 50 años, aquí podrás:
            </h2>

            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                <div className="w-full flex flex-col">
                  <div className="w-full h-96 rounded-3xl overflow-hidden mb-4">
                    <Link href={'/blog'}>
                      <img src="/assets/images/home/banner (1).jpg" className="w-full h-full bg-cover object-cover bg-no-repeat" alt="servicios" />
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
                      <img src="/assets/images/home/shutterstock_2260275637 (1).jpg" className="w-full h-full bg-cover object-cover bg-no-repeat" alt="servicios" />
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
                      <img src="/assets/images/home/banner2 (1).jpg" className="w-full h-full bg-cover object-cover bg-no-repeat" alt="servicios" />
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

          <section role="banner">
            <div className=" bg-primary-violet-01 py-10 md:py-0 lg:bg-[url('/assets/images/home/FOOTER.jpg')] w-full md:h-[357px] bg-cover object-cover flex items-center">
              <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 ">
                <div className="max-w-sm ml-auto px-0 lg:px-10">
                  <h3 className="text-3xl text-center md:text-left text-white">
                    Conecta, comparte 
                  </h3>
                  <h2 className="text-3xl text-center md:text-left text-primary-yellow-01 font-Montserrat-Bold font-bold mb-4">
                    y prospéra
                  </h2>
                  <Link href={'/registro'}>
                    <button type="button" className="text-primary-violet-01 font-Montserrat-Bold shadow bg-white hover:bg-priring-primary-violet-01/10 focus:ring-4 focus:ring-primary-violet-01/30 rounded-full text-2xl px-8 py-2 md:mr-2 mb-2 focus:outline-none font-bold block mx-auto md:mx-0 md:flex items-center justify-center">Regístrate</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/2 h-5 bg-accent-violet"></div>
              <div className="w-1/2 h-5 bg-primary-yellow"></div>
            </div>
          </section>

        </div>
        

      </main>
    </>
  )
}
