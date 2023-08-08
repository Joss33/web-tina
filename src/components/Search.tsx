export const Search = () =>{
  return (
    <>
      <div className="bg-primary-violet-secondary py-5">
        <div className="max-w-[54.875rem] w-full px-5 mx-auto">
          <h2 className="text-lg font-bold text-center text-white mb-5">
            ¡Te echamos una mano!
          </h2>
          <div className="w-full rounded-full bg-white flex py-5 px-10 mb-3">
            <div className=""></div>
            <input type="text" className="flex-grow border-0 text-gray-500 outline-none" placeholder="Encuentra el servicio que necesitas…" />
            <div className=""></div>
          </div>
          <p className="text-center text-white text-xs">
            Explora nuestras categorías y cotiza los servicios de independientes con experiencia
          </p>
        </div>
      </div>
    </>
  )
}