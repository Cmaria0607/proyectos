
const Header = () => {
  return (
    <header className="relative  flex-wrap bg-cover bg-no-repeat bg-right-bottom pt-2">

      <div className="absolute flex flex-col top-10 items-center w-full px-4 py-8 sm:py-16 md:py-20 lg:py-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-white text-center leading-tight max-w-lg">
          ¡Genera más clientes potenciales con una página!
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row items-center w-full sm:w-auto sm:space-x-2">
          <input
            className="px-4 py-2 my-2 sm:my-0 rounded-lg w-full sm:w-auto"
            type="email"
            name="email"
            placeholder="Dirección Email"
          />
          <button className="bg-blue-700 text-white px-5 py-2 mt-2 sm:mt-0 sm:ml-2 rounded-lg w-20 sm:w-auto">
            Enviar
          </button>
        </div>

      </div>

      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="bg-masthead.jpg"
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>

    </header>
  );
};

export default Header;
