import Head from "next/head";
import { Search } from "@/components/Search";
import Link from "next/link";
import classNames from "classnames";

interface User{
  name: string,
  username: string,
  city: string,
  country: string,
  description: string,
  image: string,
  categories: string[]
}

const USERS: User[] = [
  {
    name: 'Luisa Maria Mendoza',
    username: 'luisa-maria-mendoza',
    city: 'Puerto Colombia',
    country: 'Colombia',
    description: `
      <p className="text-sm text-zinc-700 mb-5">
        Con más de 24 años de experiencia en aseo y limpieza de
        hogares y oficinas, mi objetivo es brindar un servicio
        impecable y acogedor. Como mujer en esta industria, me
        enorgullece romper barreras de género y dejar una huella
        positiva en cada lugar que atiendo, ofreciendo un ambiente
        limpio y cuidado para todos.
      </p>
      <p className="text-sm text-zinc-700 mb-5">
        Mi pasión y dedicación en el aseo y limpieza me han llevado a
        especializarme en el cuidado meticuloso de cada detalle.
        Valorando la puntualidad y la seguridad en el trabajo, estoy
        emocionada de seguir proporcionando espacios impecables y
        acogedores para transformar hogares y oficinas en espacios
        especiales y cuidados.
      </p>
    `,
    image: '/assets/images/perfil/Enmascarar grupo 29@2x.png',
    categories: [
      'Limpieza',
      'Aseo',
      'Cocina',
      'Lavado',
      'Planchado',
      'Limpieza',
    ]
  },
  {
    name: 'Maria Luisa Robayo',
    username: 'juliana-robayo',
    city: 'Bogota',
    country: 'Colombia',
    description: `
      <p className="text-sm text-zinc-700 mb-5">
        Una asistente empresarial a distancia con más de 8 años de experiencia en el área administrativa. Estoy aquí para brindarte un apoyo integral en la gestión de correos electrónicos, la programación de reuniones, la organización de documentos y cualquier tarea que necesites para que puedas concentrarte en lo esencial de tu negocio. Mi objetivo es simplificar tu vida laboral y garantizar que cada detalle esté en orden, ¡Espero trabajar contigo!
      </p>
    `,
    image: '/assets/images/perfil/PERFIL 04.jpg',
    categories: [
      'Asistente',
      'Secretaria',
      'Gestión',
      'Comercial',
    ]
  },
  {
    name: 'Maria Jaimes',
    username: 'maria-jaimes',
    city: 'Cali',
    country: 'Colombia',
    description: `
      <p className="text-sm text-zinc-700 mb-5">
        Soy chef apasionada por llevar deliciosas comidas directamente a tu mesa. Con mi experiencia en restaurantes de alta cocina, estoy lista para crear almuerzos y cenas que combinen sabores auténticos y opciones saludables. Si buscas opciones culinarias que te ahorren tiempo y te hagan disfrutar de cada bocado, estás en el lugar correcto. ¡No puedo esperar para cocinar para ti!
      </p>
    `,
    image: '/assets/images/perfil/PERFIL 05.jpg',
    categories: [
      'Chef',
      'Comida',
      'Cocina',
      'Catering',
    ]
  },
  {
    name: 'Mario Jimenez',
    username: 'mario-jaimes',
    city: 'Puerto Colombia',
    country: 'Colombia',
    description: `
      <p className="text-sm text-zinc-700 mb-5">
        Tengo más de 15 años de experiencia en mantenimiento y reparaciones eléctricas y de tuberías, estoy aquí para solucionar tus problemas de forma eficiente. Ya sea un interruptor que no funciona o una fuga de agua, estoy preparado para abordar cualquier desafío. Mi objetivo es brindarte soluciones duraderas y un servicio confiable para mantener tu hogar en óptimas condiciones. ¡Contáctame y hagamos que todo funcione perfectamente de nuevo!
      </p>
    `,
    image: '/assets/images/perfil/PERFIL03.jpg',
    categories: [
      'Limpieza',
      'Aseo',
      'Cocina',
      'Lavado',
      'Planchado',
      'Limpieza',
    ]
  },
]

export default function User({ params }: { params: { user: string } }) {

  const foundBlog = USERS.find(blog => blog.username === params.user);

  const classes = classNames('bg-gray-200 text-zinc-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded text-sm text-zinc-700 mb-5')

  if (!foundBlog) {
    return (
      <main role="main">
        <div className="max-w-screen-xl w-full mx-auto mt-10 mb-10">

          <div className="flex items-center">
            <Link href="/dashboard">
              <button className="text-gray-700" type="button">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  <span className="font-semibold">Volver</span>
                </div>
              </button>
            </Link>
            <h1 className="text-center text-primary-violet-01 font-Montserrat-Bold mx-auto text-3xl">Perfil no encontrado</h1>
          </div>

        </div>
      </main>
    ) 
    ;
  }

  const { name, city, country, description, username, image, categories } = foundBlog;

  return (
    <>
      <Head>
        <title> Perfil - {username} | PERENNIALS</title>
      </Head>
      <main role="main" >

        <div hidden className={classes}></div>

        <section className="mb-20">
          <Search alternative={true} title="Servicios destacados" />
        </section>

        <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
          <div className="px-3">
            <div className="row mb-5">
              <div className="col-12 col-md-3 mb-4">
                <div className="bg-zinc-100 mx-auto pb-5 rounded-3xl overflow-hidden">
                  <img
                    src={image}
                    className="mb-5 w-full h-[19.0625rem] object-cover rounded-3xl bg-center"
                    alt="Perfil"
                  />
                  <div className="flex justify-center items-center mb-2">
                    <svg
                      className="w-6 h-6 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-gray-300 mr-1 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-2 text-lg font-Montserrat-Bold font-bold text-gray-800 ">
                      4.95
                    </p>
                  </div>
                  <p className="text-center font-semibold text-zinc-500">
                    Ver comentarios (29)
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-9">
                <h2 className="text-2xl text-zinc-700 font-Montserrat-Bold font-bold mb-1">
                  {name}
                </h2>
                <p className="text-zinc-700 text-lg mb-5">
                  {city}, {country}
                </p>
                <div dangerouslySetInnerHTML={{ __html: description }} ></div>
                <div className="row mb-5">
                  {
                    categories.map((category)=>(
                      <div className="col-auto mb-3" key={category}>
                        <span className="bg-gray-200 text-zinc-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          {category}
                        </span>
                      </div>
                    ))
                  }
                  <div className="col-auto mb-3">
                    <a href="#" className="underline">
                      Ver más{" "}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="text-primary-violet-01 w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>
                  </div>
                  <div className="col-auto flex items-center">
                    <p className="font-bold text-sm text-zinc-700">
                      Medios de pago
                    </p>
                  </div>
                  <hr className="my-5 h-0.5 bg-zinc-400" />
                </div>

                <div className="row mb-5">
                  <div className="col-auto">
                    <div className="w-10 h-10 rounded-full flex justify-center items-center bg-primary-violet-02 text-primary-violet">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col-auto">
                    <p className="text-lg text-zinc-600">Nequi</p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-auto">
                    <div className="w-10 h-10 rounded-full flex justify-center items-center bg-primary-violet-02 text-primary-violet">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col-auto">
                    <p className="text-lg text-zinc-600">Efecivo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="flex items-center gap-5 mb-6">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
                    Califica mi servicio
                  </h2>
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-300 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
                <form className="mb-6">
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows={6}
                      className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  "
                      placeholder="Escribe una reseña…."
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
                  >
                    Post comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
