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
import btnwhatsapp from "../assets/icons/footer/btn_whatsapp.png";
import { NavLink } from "react-router-dom";

export const FooterMenu = () => {
  const handleClickScroll = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-[15rem] flex flex-col justify-between mb-10">
      <div className="grid grid-rows-1 grid-cols-3 justify-center items-center h-[15rem]">
        <div className="flex col-start-1 justify-center text-4xl gap-2 font-serif self-center">
          <img className="h-10" src={logo} alt="Asesoria contable" />
          <p>Asesoria Pymes</p>
        </div>
        <div className="col-start-2">
          <ul className="flex flex-col justtify-center items-center italic gap-4 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-3 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all "
                    : "hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8"
                }`
              }
              onClick={handleClickScroll}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-3 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all"
                    : "hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 "
                }`
              }
              onClick={handleClickScroll}
            >
              Servicios
            </NavLink>
            <NavLink
              to="/noticias"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-3 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all"
                    : "hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8"
                }`
              }
              onClick={handleClickScroll}
            >
              Noticias
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-3 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all"
                    : "hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8"
                }`
              }
              onClick={handleClickScroll}
            >
              Contacto
            </NavLink>
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
          text="WhattsApp Aqui"
          src={btnwhatsapp}
          descripcion="Boton de whattsap corporativo"
          classOptional="text-white rounded-xl bg-green-500 hover:bg-green-600 flex items-center gap-1 font-bold font-serif p-2 cursor-pointer border tracking-wider transition-all"
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
