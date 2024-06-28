import { Boton } from "../Boton/Boton.jsx";

const DespliegueServicios = (props) => {
  return (
    <div className="container mx-auto p-2 col-[2/5]">
      <div className="grid gap-6 grid-cols-2">
        {props.valorData.map((elemento) => (
          <div
            key={elemento.id}
            className="grid grid-cols-4 gap-2 mb-4 bg-lime-200 p-2 rounded-lg w-[25rem] hover:bg-lime-300 hover:transition-all hover:scale-105"
          >
            <div className="flex justify-center items-center col-span-1">
              <img className="h-14" src={elemento.src} alt={elemento.titulo} />
            </div>
            <div className="flex flex-col col-span-2 justify-center">
              <h2 className="text-lg font-semibold">{elemento.titulo}</h2>
              <p className="text-xs">{elemento.descripcion}</p>
            </div>
            <div className="flex flex-col justify-around items-center">
              <h2 className="text-lg font-semibold">{elemento.precio}</h2>
              <Boton
                text="Ver más"
                classOptional="bg-lime-400 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DespliegueServicios;
