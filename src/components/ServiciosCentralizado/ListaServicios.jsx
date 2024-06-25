import menu from "../../assets/icons/servicioscentralizado/menu.png";

const ListaServicios = () => {
  return (
    <div className="col-start-1 flex flex-col justify-center items-start gap-2">
      <div className="flex justify-between">
        <img
          className="h-10"
          src={menu}
          alt="Menu de hamburguesa para filtrar servicios contables"
        />
        <p className="uppercase">Todos</p>
      </div>
      <div>
        <p className="uppercase">Recursos humanos</p>
      </div>
      <div>
        <p className="uppercase">Constitucion de empresa</p>
      </div>
      <div>
        <p className="uppercase">Contabilidad</p>
      </div>
      <div>
        <p className="uppercase">Legales</p>
      </div>
      <div>
        <p className="uppercase">Patente municipal</p>
      </div>
      <div>
        <p className="uppercase">Tramites Sii</p>
      </div>
    </div>
  );
};

export default ListaServicios;
