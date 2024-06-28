import { useState } from "react";
import menu from "../../assets/icons/servicioscentralizado/menu.png";
useState;

const ListaServicios = (props) => {
  const handlefocusStyle = (index) => {
    props.setvalorStyle(index);
    if (index === 0) {
      props.setvalueData(props.data);
    } else if (index === 1) {
      props.setvalueData(props.data.filter((items) => items.topic === "rrhh"));
    } else if (index === 2) {
      props.setvalueData(props.data.filter((items) => items.topic === "cde"));
    } else if (index === 3) {
      props.setvalueData(props.data.filter((items) => items.topic === "ctb"));
    } else if (index === 4) {
      props.setvalueData(props.data.filter((items) => items.topic === "legal"));
    } else if (index === 5) {
      props.setvalueData(props.data.filter((items) => items.topic === "pm"));
    } else if (index === 6) {
      props.setvalueData(props.data.filter((items) => items.topic === "sii"));
    }
  };

  return (
    <div className="col-start-1 flex flex-col items-start justify-start gap-2 px-10">
      <div
        className={` ${
          props.valorStyle === 0
            ? "bg-lime-500 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
            : "bg-lime-300 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
        } flex cursor-pointer w-full h-[3rem] items-center`}
        onClick={() => {
          handlefocusStyle(0);
        }}
      >
        <img
          className="h-10"
          src={menu}
          alt="Menu de hamburguesa para filtrar servicios contables"
        />
        <p className="uppercase">Todos</p>
      </div>
      <div
        className={` ${
          props.valorStyle === 1
            ? "bg-lime-500 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
            : "bg-lime-300 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
        } flex justify-between cursor-pointer w-full h-[3rem] items-center`}
        onClick={() => {
          handlefocusStyle(1);
        }}
      >
        <p className="uppercase">Recursos humanos</p>
      </div>
      <div
        className={` ${
          props.valorStyle === 2
            ? "bg-lime-500 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
            : "bg-lime-300 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
        } flex justify-between cursor-pointer w-full h-[3rem] items-center`}
        onClick={() => {
          handlefocusStyle(2);
        }}
      >
        <p className="uppercase">Constitucion de empresa</p>
      </div>
      <div
        className={` ${
          props.valorStyle === 3
            ? "bg-lime-500 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
            : "bg-lime-300 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
        } flex justify-between cursor-pointer w-full h-[3rem] items-center`}
        onClick={() => {
          handlefocusStyle(3);
        }}
      >
        <p className="uppercase">Contabilidad</p>
      </div>
      <div
        className={` ${
          props.valorStyle === 4
            ? "bg-lime-500 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
            : "bg-lime-300 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
        } flex justify-between cursor-pointer w-full h-[3rem] items-center`}
        onClick={() => {
          handlefocusStyle(4);
        }}
      >
        <p className="uppercase">Legales</p>
      </div>
      <div
        className={` ${
          props.valorStyle === 5
            ? "bg-lime-500 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
            : "bg-lime-300 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
        } flex justify-between cursor-pointer w-full h-[3rem] items-center`}
        onClick={() => {
          handlefocusStyle(5);
        }}
      >
        <p className="uppercase">Patente municipal</p>
      </div>
      <div
        className={` ${
          props.valorStyle === 6
            ? "bg-lime-400 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
            : " bg-lime-300 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
        } flex justify-between cursor-pointer w-full h-[3rem] items-center`}
        onClick={() => {
          handlefocusStyle(6);
        }}
      >
        <p className="uppercase">Tramites Sii</p>
      </div>
    </div>
  );
};

export default ListaServicios;
