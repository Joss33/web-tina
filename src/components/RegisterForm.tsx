"use client";
import { useEffect, useState } from "react";

import Head from "next/head";
import { RequestStatus } from "@/models/request-status.model";

import { Modal } from "./Modal";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import axios from "axios";

interface RegisterFormInput {
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  confirmPassword: string;
  fecha_nacimiento: string;
  servicio_ofrecido: string;
  categoria: string;
  comentario: string;
}

interface Category {
  id: string;
  name: string;
}

export const RegisterForm = () => {
  const [status, setStatus] = useState<RequestStatus>("init");
  const [categories, setCategories] = useState<Category[]>([]);
  const [showServiceSection, setShowServiceSection] = useState(false);
  const [showCategoryField, setShowCategoryField] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    reset
  } = useForm<RegisterFormInput>();

  const fechaNacimiento = watch("fecha_nacimiento");

  useEffect(() => {
    const birthDate = new Date(fechaNacimiento);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    setShowServiceSection(age >= 50);
    setShowCategoryField(false);
  }, [fechaNacimiento]);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onServiceSelectionChange = (value: "si" | "no") => {
    setShowCategoryField(value === "si");
  };

  const validateConfirmPassword = (value: string) => {
    const { password } = getValues();
    return value === password || "Las contraseñas no coinciden.";
  };

  const onSubmit = (data: RegisterFormInput) => {
    let form = {
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      password: data.password,
      confirmPassword: data.confirmPassword,
      fecha_nacimiento: data.fecha_nacimiento,
      servicio_ofrecido: data.servicio_ofrecido,
      categoria: data.categoria,
      comentario: data.comentario? data.comentario: '0',
    }
    handleSubmitRequest(form);
  };

  const getCategories = async () => {
    const config = {
      headers: {
        AUTH: "tina@2023",
      },
    };

    try {
      setStatus("loading");
      const response = await axios.get(
        "http://18.220.255.146:7083/usuarios/obtener_categorias_servicios",
        config
      );
      if (response.data.error === false) {
        setCategories(response.data.data);
        setStatus("success");
      }

      if (response.data.error) {
        alert(response.data.mensaje);
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleSubmitRequest = async (data: RegisterFormInput) => {
    const config = {
      headers: {
        AUTH: "tina@2023",
      },
    };

    try {
      setStatus("loading");
      const response = await axios.post(
        "http://18.220.255.146:7083/usuarios/registro",
        data,
        config
      );
      if (response.data?.error === false) {
        handleToggleModal();
        reset();
        setStatus("success");
      }

      if (response.data?.error) {
        alert(response.data.error);
        setStatus("error");
      }
    } catch (error: any) {
      alert(error.data?.error?.mensaje)
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Registro | Tina </title>
      </Head>

      <section className="">
        <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white  md:mt-0 sm:max-w-6xl xl:p-0  ">
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="row">
                <div className="col-12 col-lg-6 mb-5">
                  <label
                    htmlFor="nombre"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className={classNames(
                      "bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3",
                      {
                        "text-red-500 border-red-500": errors.nombre,
                      }
                    )}
                    {...register("nombre", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === "loading"}
                  />
                  {errors.nombre && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.nombre.message}
                    </span>
                  )}
                </div>
                <div className="col-12 col-lg-6 mb-5">
                  <label
                    htmlFor="apellido"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    className={classNames(
                      "bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3",
                      {
                        "text-red-500 border-red-500": errors.apellido,
                      }
                    )}
                    {...register("apellido", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === "loading"}
                  />
                  {errors.apellido && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.apellido.message}
                    </span>
                  )}
                </div>

                <div className="col-12 col-lg-6 mb-5">
                  <label
                    htmlFor="correo"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    id="correo"
                    className={classNames(
                      "bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3",
                      {
                        "text-red-500 border-red-500": errors.correo,
                      }
                    )}
                    {...register("correo", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === "loading"}
                  />
                  {errors.correo && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.correo.message}
                    </span>
                  )}
                </div>
                <div className="col-12 col-lg-6 mb-5">
                  <label
                    htmlFor="fecha_nacimiento"
                    className="block mb-2 text-sm font-medium text-gray-900 pl-3"
                  >
                    Fecha de nacimiento
                  </label>
                  <input
                    type="date"
                    id="fecha_nacimiento"
                    className={classNames(
                      "bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3",
                      {
                        "text-red-500 border-red-500": errors.fecha_nacimiento,
                      }
                    )}
                    {...register("fecha_nacimiento", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === "loading"}
                  />
                  {errors.fecha_nacimiento && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.fecha_nacimiento.message}
                    </span>
                  )}
                </div>
                <div className="col-12 col-lg-6 mb-5">
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
                    className={classNames(
                      "bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3",
                      {
                        "text-red-500 border-red-500": errors.password,
                      }
                    )}
                    {...register("password", {
                      required: "Este campos es obligatorio",
                    })}
                    disabled={status === "loading"}
                  />
                  {errors.password && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="col-12 col-lg-6 mb-5">
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
                    className={classNames(
                      "bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3",
                      {
                        "text-red-500 border-red-500": errors.confirmPassword,
                      }
                    )}
                    {...register("confirmPassword", {
                      required: "Este campos es obligatorio",
                      validate: validateConfirmPassword,
                    })}
                    disabled={status === "loading"}
                  />
                  {errors.confirmPassword && (
                    <span role="alert" className="text-red-500 text-xs">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                {showServiceSection && (
                  <div className="col-12 mb-5">
                    <div className="bg-accent-violet/50 p-5">
                      <div className="row">
                        <div className="col-12">
                          <p className="font-bold text-zinc-700 mb-4">
                            ¿Te gustaría ofrecer algún servicio?
                          </p>
                        </div>
                        <div className="col-12 col-lg-6 mb-5">
                          <div className="flex">
                            <div className="flex items-center mr-4">
                              <label
                                htmlFor="inline-radio"
                                className="ml-2 text-lg font-medium text-gray-700 mr-3"
                              >
                                Si
                              </label>
                              <input
                                id="inline-radio"
                                type="radio"
                                value="si"
                                {...register("servicio_ofrecido")}
                                onChange={() => onServiceSelectionChange("si")}
                                className="w-8 h-8 text-primary-violet-secondary bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                              />
                            </div>
                            <div className="flex items-center mr-4">
                              <label
                                htmlFor="inline-2-radio"
                                className="ml-2 text-lg font-medium text-gray-700 mr-3"
                              >
                                No
                              </label>
                              <input
                                id="inline-2-radio"
                                type="radio"
                                value="no"
                                {...register("servicio_ofrecido")}
                                onChange={() => onServiceSelectionChange("no")}
                                className="w-8 h-8 text-primary-violet-secondary bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {showCategoryField && (
                  <>
                    <div className="col-12">
                      <p className="font-bold text-zinc-700 mb-4">
                        Podrás generar ingresos extra y obtener nuevos clientes
                      </p>
                    </div>

                    <div className="col-12 mb-5">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm  text-gray-900 "
                      >
                        Elige la categoría a la que pertenece tu servicio
                      </label>
                      <select
                        {...register("categoria", {
                          required: "Este campos es obligatorio",
                        })}
                        disabled={status === "loading"}
                        id="countries"
                        className="bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-full focus:ring-violet-600 focus:border-violet-600 block w-full p-3"
                      >
                        <option selected value={0}>Selecciona una opción</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm  text-gray-900 "
                      >
                        Describe brevemente tu experiencia en el servicio que
                        vas a prestar
                      </label>
                      <textarea
                        {...register("comentario")}
                        id="comment"
                        rows={6}
                        className="p-5 w-full text-sm text-gray-900 rounded-3xl  bg-gray-100 border "
                        placeholder="Mensaje"
                      ></textarea>
                    </div>
                  </>
                )}

                <div className="col-lg-3 col-12 mx-auto mt-10 mb-4">
                  {status === "loading" ? (
                    <button
                      disabled
                      type="button"
                      className="w-full text-white bg-primary-violet/80 hover:bg-primary-violet/60 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium  rounded-full text-xl px-5 py-2.5 text-center mr-2  flex justify-center items-center"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-violet/80 hover:bg-primary-violet/60 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-xl px-5 py-2.5 text-center "
                    >
                      Confirma tu registro
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleToggleModal} size="max-w-2xl">
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
            <div className="row">
              <div className="col-8 mx-auto">
                <img
                  src="/assets/images/Grupo 1187@2x.png"
                  width={116}
                  height={92}
                  className="block mx-auto mb-5"
                  alt=""
                />
                <h3 className="text-center text-primary-violet-secondary font-bold text-5xl mb-4">
                  Gracias
                </h3>
                <p className="text-zinc-700 text-lg text-center">
                  Tu solicitud ha sido enviada Te hemos enviado un correo para
                  validar tu cuenta
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
