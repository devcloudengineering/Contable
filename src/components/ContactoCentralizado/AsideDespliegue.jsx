import mensaje from "../../assets/icons/footer/mensaje.png";
import llamada from "../../assets/icons/footer/llamada.png";
import whatsapp_cotacto from "../../assets/icons/footer/whatsapp_cotacto.png";

const AsideDespliegue = () => {
  return (
    <div className="col-start-1 w-[30rem]">
      <p className="text-3xl text-start italic my-12 inline-block">
        ¿Necesitas ayuda
      </p>
      <span className="text-4xl text-start font-serif my-12 text-lime-500 ml-2">
        Contable?
      </span>
      <p className="italic">
        Escribenos y llena el siguiente formulario para que estemos al tanto de
        la situacion
      </p>
      <p className="mt-12">O por nuestros canales de comunicacion oficiales</p>
      <div>
        <div className="flex gap-8 object-cover object-center h-16  mt-8">
          <img
            src={mensaje}
            alt="Correo corporativo"
            className="cursor-pointer transition-all hover:scale-125 "
          />
          <img
            src={llamada}
            alt="Contacto telefonico corporativo"
            className="cursor-pointer transition-all hover:scale-125 "
          />
          <img
            src={whatsapp_cotacto}
            alt="Contacto de whatsapp"
            className="cursor-pointer transition-all hover:scale-125 "
          />
        </div>
        <div className="flex gap-4 object-cover object-center h-5  mt-8">
          <img src={llamada} alt="Telefono de contacto" />
          <p className="italic text-lime-700 font-semibold cursor-pointer transition-all hover:text-lime-500 hover:scale-110">
            +569 9999 9999 Chile - Santiago
          </p>
        </div>
      </div>
    </div>
  );
};

export { AsideDespliegue };
