const CardTestimonios = ({ empresa, descripcion, src, agradecimiento }) => {
  return (
    <div className="flex flex-col rounded w-[300px] h-[500px] justify-between p-4 mx-4 my-6 bg-neutral-50 shadow-xl">
      <div className="">
        <p className="italic text-center">{agradecimiento}</p>
      </div>
      <div className="flex flex-row justify-center items-start gap-4 px-4 h-[7rem]">
        <img className="h-[5rem] object-contain" src={src} alt={descripcion} />
        <div>
          <h5 className="font-medium text-md">{empresa}</h5>
          <p className="text-sm font-sans">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonios;
