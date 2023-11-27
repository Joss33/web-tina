"use client";
import { useState } from "react";

import { Modal } from "@/components/Modal";
import { RegisterForm } from "@/components/RegisterForm";
import Head from "next/head";

export default function Registro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Head>
        <title> Registro | PERENNIALS</title>
      </Head>

      <main role="main">
        <section role="banner">
          <div className=" bg-primary-violet-02 md:bg-[url('/assets/images/registro/formulario.jpg')] w-full md:h-[572px] relative bg-cover object-cover flex items-center">
            <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-20 mx-auto">
              <div className="max-w-2xl py-10">
                <h3 className="text-3xl md:text-6xl font-Montserrat-Bold font-bold text-center text-white mb-3">
                  ÚNETE A NUESTRA COMUNIDAD
                </h3>
                <p className="text-xl md:text-3xl text-center text-white font-light">
                  Diligencia el formulario
                </p>
              </div>
            </div>
          </div>
        </section>

        <section role="banner">
          <RegisterForm />
        </section>

        <Modal
          isOpen={isModalOpen}
          onClose={handleToggleModal}
          size="max-w-3xl"
        >
          <div className="py-8 px-4 lg:px-6">
            <button
              onClick={handleToggleModal}
              className="w-8 h-8 absolute top-0 right-0 flex justify-center items-center text-zinc-700 opacity-80 text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="px-3">
              <div className="row justify-center">
                <div className="col-12 mb-5">
                  <p className="text-3xl text-center text-primary-violet-secondary font-bold mb-8">
                    ¿En qué te encuentras interesado?
                  </p>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-violet-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">Salud y bienestar</span>
                  </a>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">Mecánica automotríz</span>
                  </a>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <div className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center">
                    <span className="relative z-20">
                      Mantenimiento y reparación
                    </span>
                  </div>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">Mudanza o transporte</span>
                  </a>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">Mascotas</span>
                  </a>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-violet-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">Servicios generales</span>
                  </a>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">Cocina y alimentación</span>
                  </a>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-violet-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">
                      Asesoramiento empresarial
                    </span>
                  </a>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">Educación</span>
                  </a>
                </div>
                <div className="col-12 col-lg-4 flex items-center mb-3">
                  <a
                    role="button"
                    className="bg-[url('/assets/images/dashboard/servicios/IMAGEN-SERVICIOS-01.jpg')] relative bg-cover object-cover before:contents-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-violet-500/60 before:z-10 before:absolute  w-full h-full flex justify-center items-center text-white font-bold py-2 px-5 text-center"
                  >
                    <span className="relative z-20">Otra/Cual?</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </main>
    </>
  );
}
