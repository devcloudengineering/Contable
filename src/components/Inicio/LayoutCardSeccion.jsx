import { Boton } from "../Boton/Boton.jsx";

const LayoutCardSeccion = ({ htext, ptext, src, btext, direccion }) => {
  return (
    <div className="h-5/6 grid grid-cols-2 grid-flow-col mx-12">
      <div
        className={`${
          direccion ? "col-start-1" : "col-start-2"
        }  flex flex-col justify-center items-center gap-4`}
      >
        <h1 className="text-4xl mb-5 font-semibold font-sans text-center">
          {htext}
        </h1>
        <p className="italic text-center">{ptext}</p>
        <Boton text={btext}></Boton>
      </div>
      <div
        className={`${
          direccion ? "col-start-2" : "col-start-1"
        } flex justify-center items-center`}
      >
        <img src={src} className="object-cover h-5/6" />
      </div>
    </div>
  );
};

export default LayoutCardSeccion;
