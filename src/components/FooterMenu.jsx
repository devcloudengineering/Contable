import { Boton } from "./Boton/Boton.jsx";
import logo from "../assets/icons/logocorporativo/logo.png";
import chat from "../assets/icons/footer/chat.png";
import facebook from "../assets/icons/footer/facebook.png";
import instagram from "../assets/icons/footer/instagram.png";
import twitter from "../assets/icons/footer/twitter.png";
import whatsapp from "../assets/icons/footer/whatsapp.png";
import youtube from "../assets/icons/footer/youtube.png";
import ubicacion from "../assets/icons/footer/ubicacion.png";
import mensaje from "../assets/icons/footer/mensaje.png";
import llamada from "../assets/icons/footer/llamada.png";
import { NavLink } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className="h-[15rem] flex flex-col justify-between mb-10">
      <div className="grid grid-rows-1 grid-cols-3 justify-center items-center h-[15rem]">
        <div className="flex col-start-1 justify-center text-4xl gap-2 font-serif self-center">
          <img className="h-10" src={logo} alt="Asesoria contable" />
          <p>Asesoria Pymes</p>
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
          <div className="flex flex-col italic gap-2">
            <div className="flex flex-row gap-2">
              <img
                src={ubicacion}
                alt="Ubicacion corporativa de asesoria contable"
                className="object-cover object-center h-10 cursor-pointer"
              />
              <p>Santiago, Chile</p>
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={mensaje}
                alt="Correo corporativo de asesoria contable"
                className="object-cover object-center h-10 cursor-pointer"
              />
              <p>contacto@gmail.com</p>
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={llamada}
                alt="Telefono corporativo de asesoria contable"
                className="object-cover object-center h-10 cursor-pointer"
              />
              <p>+569 99999999</p>
            </div>
            <div className="flex flex-row gap-2">
              <img
                className="object-cover object-center h-10 cursor-pointer"
                src={facebook}
                alt="Redes sociales"
              />
              <img
                className="object-cover object-center h-10 cursor-pointer"
                src={instagram}
                alt="Redes sociales"
              />
              <img
                className="object-cover object-center h-10 cursor-pointer"
                src={twitter}
                alt="Redes sociales"
              />
              <img
                className="object-cover object-center h-10 cursor-pointer"
                src={whatsapp}
                alt="Redes sociales"
              />
              <img
                className="object-cover object-center h-10 cursor-pointer"
                src={youtube}
                alt="Redes sociales"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-10 mb-4 mt-4">
        <Boton
          text="📞WhattsApp Aqui"
          classOptional="text-white italic rounded-xl bg-green-500 hover:bg-green-600"
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
