import Head from "next/head";

export default function signIn(){
  return (
    <>

      <Head>
        <title> Ingresar | Tina</title>
      </Head>

      <main role="main">
        <section role="banner">
          <div className="bg-[url('/assets/images/ingresa/login.jpg')] w-full md:h-[357px] bg-cover object-cover flex items-center">
            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="flex justify-between items-center">
                <div className="max-w-md ">
                  <h3 className="text-5xl font-bold text-primary-violet/80">
                    Conecta, comparte y prospera usando tu experiencia y habilidades
                  </h3>
                </div>
                <form className="bg-white w-full max-w-xs py-5 px-5 rounded-2xl shadow" >
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-white border border-gray-700 placeholder:text-gray-700 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full px-5 py-2.5 mb-4 "
                      placeholder="Correo electrónico"
                      required
                    />
                  </div>
                  <div>
                    
                    <input
                      type="password"
                      name="password"
                      id="confirm-password"
                      placeholder="Contraseña"
                      className="bg-white border border-gray-700 placeholder:text-gray-700 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full px-5 py-2.5 mb-4 "
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
                  >
                    Ingresa a su cuenta
                  </button>
                  <div className="flex items-center justify-center">
                    
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-800 hover:underline mb-3"
                    >
                      ¿Has olvidado tu contraseña?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-primary-violet bg-primary-yellow hover:bg-primary-yellow/70 focus:ring-4 focus:outline-none focus:ring-primary-yellow/30 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
                  >
                    Crear cuenta
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}