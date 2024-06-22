import { Boton } from "./Boton/Boton.jsx";

const ModalHome = () => {
  return (
    <div className="flex flex-col gap-4 relative p-6 m-2 w-96 h-[28rem] backdrop-blur-sm rounded-md text-white items-center">
      <h1 className=" text-center text-4xl">
        Asesoria contable y tributaria para Pymes
      </h1>
      <p className="italic">
        La conocida trayectoria de nuestros socios en el ámbito académico y en
        el ejercicio de la profesión en el área privada, aseguran nuestros altos
        estándares de calidad, responsabilidad, ética y conocimiento técnico,
        que repercuten en un trabajo conjunto con el cliente, oportuno y
        eficiente.
      </p>
      <Boton text="Solicitar una llamada"></Boton>
    </div>
  );
};

export default ModalHome;
