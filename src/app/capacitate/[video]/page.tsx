'use client'
import Head from "next/head";
import { useRouter } from 'next/navigation'

export default function CapacitateVideo(){

  const router = useRouter();

  return (
    <>

      <Head>
        <title> Video | PERENNIALS</title>
      </Head>

      <main role="main">
        <div className="max-w-screen-md w-full mx-auto mb-10">

          <div className="pt-10 pb-10 px-5">

            <button className="text-gray-700" type="button" onClick={() => router.back()}>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span className="font-semibold">Volver</span>
              </div>
            </button>

            <video className="w-full h-auto max-w-full border border-gray-200 rounded-lg  " controls>
              <source src="/docs/videos/flowbite.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          

          <div className="px-3">
            <div className="row">
              <div className="col-12 mx-auto">
                <h2 className="text-center font-Montserrat-Bold text-primary-violet-01 font-bold text-3xl mb-7">
                  Empleabilidad Informal
                </h2>
                <p className="text-zinc-500 text-sm mb-10">
                  ​¿Quieres despejar todas tus dudas sobre la empleabilidad? ¡Este webinar es para ti! En el Día del Programador nos acompañará Alanis Gosiker, Tech Recruiter/Head Hunter - team builder para startups. Aprovecha esta oportunidad para aclarar todas tus consultas relacionadas a la empleabilidad, tips para y armado de CV y todo lo que necesitas saber para seguir desarrollando tu perfil profesional.
                </p>
              </div>
            </div>

            <div className="row items-center mb-10">
              <div className="col-12">
                <div className="row">
                  <div className="col-auto mb-3">
                    <img className="rounded-full w-20 h-20" src="/assets/images/Enmascarar grupo 18@2x.png" alt="Extra large avatar" />
                  </div>
                  <div className="col flex flex-col justify-center mb-3">
                    <p className="font-bold text-zinc-800">
                      Alanis Gosiker
                    </p>
                    <p className="text-zinc-700 text-sm">
                      Tech Recruiter/Head Hunter - team builder para startups.
                    </p>
                  </div>
                  <div className="col-auto mb-3">
                    <p>
                      Contenido
                    </p>
                    <p className="font-bold">
                      Gratuito
                    </p>
                  </div>
                  <div className="col-auto mb-3">
                    <button type="button" className="btn btn-primary-violet-03 ">Inscribirse</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h3 className="text-xl font-bold text-primary-violet-01 mb-5">
                  Comentarios
                </h3>
              </div>
              <div className="col-12">
                <article className="p-6 mb-6  text-base bg-white rounded-lg ">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-lg text-gray-900 ">
                        <img
                          className="mr-2 w-12 h-12 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese Leos"
                        />
                        Jese Leos
                      </p>
                      
                    </div>
                    
                  </footer>
                  <p className="text-gray-500 ">
                    Much appreciated! Glad you liked it ☺️
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500 hover:underline "
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
                      Responder
                    </button>
                  </div>
                </article>
              </div>
              <div className="col-12">
                <article className="p-6 mb-6  text-base bg-white rounded-lg ">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-lg text-gray-900 ">
                        <img
                          className="mr-2 w-12 h-12 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese Leos"
                        />
                        Jese Leos
                      </p>
                      
                    </div>
                    
                  </footer>
                  <p className="text-gray-500 ">
                    Much appreciated! Glad you liked it ☺️
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500 hover:underline "
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
                      Responder
                    </button>
                  </div>
                </article>
              </div>
              <div className="col-12">
                <article className="p-6 mb-6  text-base bg-white rounded-lg ">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-lg text-gray-900 ">
                        <img
                          className="mr-2 w-12 h-12 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese Leos"
                        />
                        Jese Leos
                      </p>
                      
                    </div>
                    
                  </footer>
                  <p className="text-gray-500 ">
                    Much appreciated! Glad you liked it ☺️
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500 hover:underline "
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
                      Responder
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