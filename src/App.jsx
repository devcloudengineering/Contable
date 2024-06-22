import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterMenu from "./components/FooterMenu.jsx";
import NavMenu from "./components/NavMenu.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { Noticias } from "./pages/Noticias.jsx";
import { Servicios } from "./pages/Servicios.jsx";
import { Inicio } from "./pages/Inicio.jsx";
import ModalHome from "./components/ModalHome.jsx";

export function App() {
  return (
    <Router>
      <div className="bg-[url('./assets/images/home/home.png')] h-screen bg-cover bg-bottom bg-no-repeat drop-shadow-2xl">
        <NavMenu></NavMenu>
        <ModalHome></ModalHome>
      </div>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/noticias" element={<Noticias />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
      <hr className="border-none h-[2px] rounded-r-full bg-lime-500/40 mx-16 mb-8" />
      <FooterMenu></FooterMenu>
    </Router>
  );
}
