import Head from "next/head";

export default function CapacitateVideo(){
  return (
    <>

      <Head>
        <title> Video | Tina</title>
      </Head>

      <main role="main" className="mt-20">
        <div className="max-w-screen-md w-full mx-auto mb-10">

          <div className="pt-10 pb-10">
            <video className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 " controls>
              <source src="/docs/videos/flowbite.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          

          <div className="px-3">
            <div className="row">
              <div className="col-12 mx-auto">
                <h2 className="text-center text-primary-violet-secondary font-bold text-3xl mb-7">
                  Empleabilidad Informal
                </h2>
                <p className="text-center text-zinc-500 text-sm mb-10">
                  ​¿Quieres despejar todas tus dudas sobre la empleabilidad? ¡Este webinar es para ti! En el Día del Programador nos acompañará Alanis Gosiker, Tech Recruiter/Head Hunter - team builder para startups. Aprovecha esta oportunidad para aclarar todas tus consultas relacionadas a la empleabilidad, tips para y armado de CV y todo lo que necesitas saber para seguir desarrollando tu perfil profesional.
                </p>
              </div>
            </div>

            <div className="row items-center mb-10">
              <div className="col-12">
                <div className="row">
                  <div className="col-auto">
                    <img className="rounded-full w-20 h-20" src="/assets/images/Enmascarar grupo 18@2x.png" alt="Extra large avatar" />
                  </div>
                  <div className="col flex flex-col justify-center">
                    <p className="font-bold text-zinc-800">
                      Alanis Gosiker
                    </p>
                    <p className="text-zinc-700 text-sm">
                      Tech Recruiter/Head Hunter - team builder para startups.
                    </p>
                  </div>
                  <div className="col-auto">
                    <p>
                      Contenido
                    </p>
                    <p className="font-bold">
                      Gratuito
                    </p>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="text-primary-violet-secondary bg-primary-yellow hover:bg-primary-yellow/80 focus:ring-4 focus:ring-primary-yellow/30 font-medium rounded-xl text-lg px-10 py-2 focus:outline-none ">Inscribirse</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h3 className="text-xl font-bold text-primary-violet-secondary mb-5">
                  Comentarios
                </h3>
              </div>
              <div className="col-12">
                <article className="p-6 mb-6  text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img
                          className="mr-2 w-6 h-6 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese Leos"
                        />
                        Jese Leos
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time  dateTime="2022-02-12" title="February 12th, 2022">
                          Feb. 12, 2022
                        </time>
                      </p>
                    </div>
                    
                  </footer>
                  <p className="text-gray-500 dark:text-gray-400">
                    Much appreciated! Glad you liked it ☺️
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        aria-hidden="true"
                        className="mr-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </article>
              </div>
              <div className="col-12">
                <article className="p-6 mb-6  text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img
                          className="mr-2 w-6 h-6 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese Leos"
                        />
                        Jese Leos
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time  dateTime="2022-02-12" title="February 12th, 2022">
                          Feb. 12, 2022
                        </time>
                      </p>
                    </div>
                    
                  </footer>
                  <p className="text-gray-500 dark:text-gray-400">
                    Much appreciated! Glad you liked it ☺️
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        aria-hidden="true"
                        className="mr-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </article>
              </div>
              <div className="col-12">
                <article className="p-6 mb-6  text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img
                          className="mr-2 w-6 h-6 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese Leos"
                        />
                        Jese Leos
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time  dateTime="2022-02-12" title="February 12th, 2022">
                          Feb. 12, 2022
                        </time>
                      </p>
                    </div>
                    
                  </footer>
                  <p className="text-gray-500 dark:text-gray-400">
                    Much appreciated! Glad you liked it ☺️
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        aria-hidden="true"
                        className="mr-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </article>
              </div>
            </div>

          </div>

        </div>
      </main>
    </>
  )
}