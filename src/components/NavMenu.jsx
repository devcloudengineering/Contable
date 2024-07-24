// src/components/NavMenu.jsx
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logocorporativo/logo.png";

export const NavMenu = () => {
  const handleClickScroll = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };
  return (
    <nav className="p-6">
      <ul className="flex items-center justify-between gap-10">
        <li className="flex items-center text-2xl italic font-medium text-lime-100">
          <img className="h-10" src={logo} alt="Asesoria contable" />
          <p>Asesoria Pymes</p>
        </li>
        <div className="flex flex-grow justify-center gap-8">
          <li>
            <NavLink
              to="/"
              onClick={handleClickScroll}
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
              onClick={handleClickScroll}
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
              onClick={handleClickScroll}
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
              to="/cursos"
              onClick={handleClickScroll}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-lime-700 px-3 py-2 font-bold line-clamp-5 uppercase text-2xl underline decoration-5 underline-offset-8 transition-all"
                    : "text-black px-3 py-2 font-bold hover:text-2xl hover:text-lime-500 transition-all cursor-pointer h-8 uppercase italic"
                }`
              }
            >
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              onClick={handleClickScroll}
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
