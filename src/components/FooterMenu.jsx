import { Boton } from "./Boton/Boton.jsx";
import logo from "../assets/icons/logocorporativo/logo.png";
import chat from "../assets/icons/footer/chat.png";
import { NavLink } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className="h-[15rem] flex flex-col justify-between mb-10">
      <div className="grid grid-rows-1 grid-cols-3 justify-center items-center h-[15rem]">
        <div className="flex col-start-1 justify-center items-start text-4xl gap-2 font-serif">
          <img className="h-10" src={logo} alt="Asesoria contable" />
          <p>Asesoria</p>
        </div>
        <div className="col-start-2">
          <ul className="flex flex-col justtify-center items-center italic gap-4 font-semibold">
            <li className="hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8">
              Inicio
            </li>
            <li className="hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 ">
              Servicios
            </li>
            <li className="hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 ">
              Contacto
            </li>
            <li className="hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 ">
              Noticias
            </li>
          </ul>
        </div>
        <div className="col-start-3 flex justify-center items-center">
          <div className="flex flex-col italic">
            <div className="flex flex-row">
              <img src="" alt="" />
              <p>Santiago, Chile</p>
            </div>
            <div className="flex flex-row">
              <img src="" alt="" />
              <p>contacto@gmail.com</p>
            </div>
            <div className="flex flex-row">
              <img src="" alt="" />
              <p>+569 99999999</p>
            </div>
            <div className="flex flex-row">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-10 mb-4 mt-4">
        <Boton
          text="📞 WhattsApp Aqui"
          classOptional="text-white italic rounded-xl"
        />
        <img
          className="h-14 object-cover object-center cursor-pointer scale-90 hover:scale-110 transition-all"
          src={chat}
          alt="Chat integral corporativo de servicios"
        />
      </div>
    </div>
  );
};

export default FooterMenu;
