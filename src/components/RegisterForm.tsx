'use client'
import { useState } from "react";

import classNames from "classnames";
import Head from "next/head";

import { useForm } from "react-hook-form";
import axios from "axios";
import { RequestStatus } from "@/models/request-status.model";

interface RegisterFormInput {
  nombre: string,
  snombre: string,
  apellido: string,
  sapellido: string,
  correo: string,
  password: string,
  confirmPassword: string,
  fecha_nacimiento: string,
  categoria: number
};

export const RegisterForm = () => {

  const [status, setStatus] = useState<RequestStatus>('init');

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormInput>();

  const validateConfirmPassword = (value: string) => {
    const { password } = getValues();
    return value === password || "Las contraseñas no coinciden.";
  };

  const onSubmit = (data: RegisterFormInput) => {
    handleSubmitRequest(data);
  };

  const handleSubmitRequest = async (data: RegisterFormInput) => {

    const config = {
      headers: {
        AUTH : 'tina@2023',
      },
    };

    try {
      setStatus('loading');
      const response = await axios.post('http://18.220.255.146:7083/usuarios/registro', data, config );
      if(response.data.error === false){
        setStatus('success');
      }
      
      if(response.data.error){
        alert(response.data.mensaje);
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

  }

  return (
    <>

      <Head> 
        <title>Registro | Tina </title>
      </Head>

      <section  className="dark:bg-gray-900">
        <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white dark:border md:mt-0 sm:max-w-6xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -mx-4">
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:w-1/2 max-w-full px-4 mb-5">
                  <label
                    htmlFor="nombre"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className={classNames("bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3", {
                      'text-red-500 border-red-500': errors.nombre,
                    })}
                    {...register("nombre", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === 'loading'}
                  />
                  {errors.nombre && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.nombre.message}
                    </span>
                  )}
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:w-1/2 max-w-full px-4 mb-5">
                  <label
                    htmlFor="apellido"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    className={classNames("bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3", {
                      'text-red-500 border-red-500': errors.apellido,
                    })}
                    {...register("apellido", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === 'loading'}
                  />
                  {errors.apellido && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.apellido.message}
                    </span>
                  )}
                </div>
                
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:w-1/2 max-w-full px-4 mb-5">
                  <label
                    htmlFor="correo"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    id="correo"
                    className={classNames("bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3", {
                      'text-red-500 border-red-500': errors.correo,
                    })}
                    {...register("correo", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === 'loading'}
                  />
                  {errors.correo && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.correo.message}
                    </span>
                  )}
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:w-1/2 max-w-full px-4 mb-5">
                  <label
                    htmlFor="fecha_nacimiento"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Fecha de nacimiento
                  </label>
                  <input
                    type="date"
                    id="fecha_nacimiento"
                    className={classNames("bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3", {
                      'text-red-500 border-red-500': errors.fecha_nacimiento,
                    })}
                    {...register("fecha_nacimiento", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === 'loading'}
                  />
                  {errors.fecha_nacimiento && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.fecha_nacimiento.message}
                    </span>
                  )}
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:w-1/2 max-w-full px-4 mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className={classNames("bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3", {
                      'text-red-500 border-red-500': errors.password,
                    })}
                    {...register("password", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === 'loading'}
                  />
                  {errors.password && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:w-1/2 max-w-full px-4 mb-5">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className={classNames("bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3", {
                      'text-red-500 border-red-500': errors.confirmPassword,
                    })}
                    {...register("confirmPassword", {
                      required: "Este campos es obligatorio",
                      validate: validateConfirmPassword,
                    })}
                    disabled={status === 'loading'}
                  />
                  {errors.confirmPassword && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:w-1/3 mx-auto max-w-full px-4 mt-10 mb-4">
                  {
                    status === 'loading' ?
                    <button disabled type="button" className="w-full text-white bg-primary-violet/80 hover:bg-primary-violet/60 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium  rounded-full text-xl px-5 py-2.5 text-center mr-2  flex justify-center items-center">
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                      </svg>
                    Loading...
                    </button>
                    : 
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-violet/80 hover:bg-primary-violet/60 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-xl px-5 py-2.5 text-center "
                    >
                      Confirma tu registro
                    </button>
                  }
                  
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}