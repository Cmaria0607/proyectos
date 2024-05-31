
/* hacer lista horizontal y hacer otra caja que contenga los logos de las redes tambien horizontal  */
const Footer = () => {
  return (
    <div className="my-10 px-4 md:px-20">
      <ul className="flex flex-col md:flex-row flex-wrap space-y-2 md:space-y-0 md:space-x-4 text-blue-500 underline list-disc list-inside">
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Condiciones</a></li>
        <li><a href="#">Política de privacidad</a></li>
      </ul>
      
      <h4 className="text-xs mt-4 md:mt-0">© Eslogan. Todos los derechos reservados.</h4>
      <ul className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
        <li><img className="h-6 w-6" src="facebook.svg" alt="Facebook" /></li>
        <li><img className="h-6 w-6" src="twitter-x.svg" alt="Twitter" /></li>
        <li><img className="h-6 w-6" src="instagram.svg" alt="Instagram" /></li>
      </ul>
    </div>
  );
};

export default Footer;
