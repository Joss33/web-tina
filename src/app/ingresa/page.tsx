import Head from "next/head";

export default function signIn() {
  return (
    <>
      <Head>
        <title> Ingresar | PERENNIALS</title>
      </Head>

      <main role="main">
        <section role="banner">
          <div className="bg-[url('/assets/images/ingresa/login.jpg')] w-full md:h-[22.3125rem] bg-cover flex items-center">
            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center py-12 md:py-0">
                <div className="max-w-2xl md:max-w-md text-center md:text-left text-primary-violet-01">
                  <h3 className="text-4xl font-Montserrat-Black font-bold leading-10 mb-5">
                    Conecta, comparte y prospera usando tu experiencia y
                    habilidades
                  </h3>
                </div>
                <form className="bg-white w-full max-w-xs py-5 px-5 rounded-2xl shadow">
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control mb-4 "
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
                      className="form-control mb-4 "
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary-violet-01 w-full mx-auto mb-2"
                  >
                    Iniciar sesión
                  </button>
                  <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="text-sm font-semibold text-gray-800 hover:underline mb-3"
                    >
                      ¿Has olvidado tu contraseña?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary-violet-03 mx-auto -mb-10"
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
  );
}
