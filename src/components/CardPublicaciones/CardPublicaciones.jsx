import { Boton } from "../Boton/Boton";

const CardPublicaciones = ({ titulo, fecha, body, src, descripcion }) => {
  return (
    <div className="flex flex-col w-[28%] p-4 items-center justify-center shadow border cursor-pointer">
      <img
        src={src}
        className="object-cover h-[150px] w-full rounded mb-2"
        alt={descripcion}
      />
      <h3 className="italic">{titulo}</h3>
      <h4 className="mb-2 text-xs">{fecha}</h4>
      <p className="text-center mb-2">{body}</p>
      <Boton text="Revisar"></Boton>
    </div>
  );
};

export default CardPublicaciones;
