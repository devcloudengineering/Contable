import { useState } from "react";
import DespliegueServicios from "./DespliegueServicios";
import ListaServicios from "./ListaServicios";

const ServiciosCentralizado = () => {
  const [value, setValue] = useState([]);
  return (
    <div className="grid grid-cols-4">
      <ListaServicios></ListaServicios>
      <DespliegueServicios
        valor={value}
        setvalue={setValue}
      ></DespliegueServicios>
    </div>
  );
};

export default ServiciosCentralizado;
