// src/components/NavMenu.jsx
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logocorporativo/logo.png";

export const NavMenu = () => {
  return (
    <nav className="p-6">
      <ul className="flex items-center justify-between gap-4">
        <li className="flex items-center text-2xl italic font-medium text-lime-100">
          <img className="h-10" src={logo} alt="Asesoria contable" />
          <p>Asesoria Pymes</p>
        </li>
        <div className="flex flex-grow justify-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-4 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all"
                    : "text-black px-3 py-2 font-bold text hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 italic uppercase"
                }`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-3 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all"
                    : "text-black px-3 py-2 font-bold hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 uppercase italic"
                }`
              }
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/noticias"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-3 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all"
                    : "text-black px-3 py-2 font-bold hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 uppercase italic"
                }`
              }
            >
              Noticias
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-3 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all"
                    : "text-black px-3 py-2 font-bold hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 uppercase italic "
                }`
              }
            >
              Contacto
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
