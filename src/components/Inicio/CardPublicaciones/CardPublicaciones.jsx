const CardPublicaciones = ({ titulo, fecha, body, src, descripcion }) => {
  return (
    <div className="flex flex-col w-[28%] p-4 items-center justify-center shadow border cursor-pointer transition-all scale-100 hover:scale-105 bg-lime-50">
      <img
        src={src}
        className="object-cover h-[150px] w-full rounded mb-2"
        alt={descripcion}
      />
      <h3 className="italic">{titulo}</h3>
      <h4 className="mb-2 text-xs">{fecha}</h4>
      <p className="text-center mb-2">{body}</p>
    </div>
  );
};

export default CardPublicaciones;
