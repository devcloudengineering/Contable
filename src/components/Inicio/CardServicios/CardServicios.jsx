import impuestos from "../../../assets/icons/servicioshome/impuestos_sii.png";
import legales from "../../../assets/icons/servicioshome/legales.png";
import contabilidad from "../../../assets/icons/servicioshome/contabilidad.png";
import patente from "../../../assets/icons/servicioshome/patente.png";
import recursos from "../../../assets/icons/servicioshome/recursos_humanos.png";
import constitucion from "../../../assets/icons/servicioshome/constitucion_empresa.png";

const CardServicios = () => {
  const servicios = [
    {
      titulo: "Contabilidad",
      src: contabilidad,
      descripcion:
        "Con nuestro servicio podras cumplir con todas las obligaciones tributarias necesarias con la contabilidad de tu empresa",
    },
    {
      titulo: "Legales",
      src: legales,
      descripcion:
        "Nuestro equipo esta listo para colaborar en tareas legales a las que se vea afectada tu empresa, comercial o laboral",
    },
    {
      titulo: "Recursos humanos",
      src: recursos,
      descripcion:
        "Nuestro servicio incluye generar contratos de trabajo, cartas de aviso, certificados, constancias y finiquitos",
    },
    {
      titulo: "Constitucion de empresa",
      src: constitucion,
      descripcion:
        "Te ayudamos en la creacion y gestion de todos los ambitos legales y contables para la creacion de tu empresa",
    },
    {
      titulo: "Tramites SII",
      src: impuestos,
      descripcion:
        "Nuestro equipo esta listo para ayudarte con todos tus tramites en el SII, como son inicio de actividades, modificaciones, entre otros",
    },
    {
      titulo: "Patente municipal",
      src: patente,
      descripcion:
        "Te ayudamos con la obtencion de tu patente comercial, en el municipio en donde este ubicada tu empresa",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap items-center gap-4 justify-center md:flex-column p-6">
      {servicios.map((elementos) => (
        <div
          key={elementos.titulo}
          className="flex flex-col items-start w-[20rem] gap-2 mb-4 cursor-pointer border-2 border-white shadow-lg scale-100 hover:scale-105 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2">
            <img className="h-8" src={elementos.src} alt={elementos.titulo} />
            <h2 className="text-base font-serif font-semibold">
              {elementos.titulo}
            </h2>
          </div>
          <p className="italic text-sm text-start ">{elementos.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default CardServicios;
