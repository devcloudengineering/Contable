import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FooterMenu, NavMenu, ModalHome } from "./components";
import {
  Contacto,
  Noticias,
  Servicios,
  Inicio,
  Error404,
  Cursos,
} from "./pages";

export function App() {
  return (
    <Router>
      <div className="bg-[url('./assets/images/home/home.png')] h-screen bg-cover bg-bottom bg-no-repeat drop-shadow-2xl">
        <NavMenu />
        <ModalHome />
      </div>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/noticias" element={<Noticias />}></Route>
        <Route path="/cursos" element={<Cursos />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <hr className="border-none h-[2px] rounded-r-full bg-lime-500/40 mx-16 mb-8" />
      <FooterMenu />
    </Router>
  );
}
