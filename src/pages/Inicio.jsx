import LayoutCardSeccion from "../components/Inicio/LayoutCardSeccion";
import CardServicios from "../components/Inicio/CardServicios/CardServicios.jsx";
import teletrabajo from "../assets/images/secciones/teletrabajo.png";
import conexion from "../assets/images/secciones/conexion.png";
import CardPublicaciones from "../components/Inicio/CardPublicaciones/CardPublicaciones.jsx";
import publicacion01 from "../assets/images/publicaciones/publicacion01.png";
import CarruselTestimonios from "../components/Inicio/CardTestimonios/CarruselTestimonios.jsx";
export function Inicio() {
  return (
    <>
      <h1 className="text-4xl text-center mb-12 italic">
        Servicios Integrados
      </h1>
      <CardServicios />
      <LayoutCardSeccion
        htext="Hemos diseñado un servicio contable moderno y de calidad que te
          sorprenderá"
        ptext="Logramos menores tiempos de respuesta, ya que asignamos un ejecutivo
          de cuentas para tu empresa. Planes personalizados para que no pagues
          de más, tarifas flexibles para todo tipo de empresas"
        src={teletrabajo}
        btext="Agenda una reunion"
        direccion={false}
      />
      <LayoutCardSeccion
        htext="Conectados al Servicio de Impuestos Internos para una contabilidad completa y ordenada"
        ptext="Trabajamos con software certificado por el SII para poder contabilizar todos los documentos emitidos y recibidos por tu empresa y tener una contabilidad completa y ordenada."
        src={conexion}
        btext="Solicita mas informacion"
        direccion={true}
      />
      <h2 className="text-4xl text-start mb-12 italic mx-16">
        Ultimas publicaciones
      </h2>
      <div className="container m-auto flex flex-row flex-wrap justify-center gap-10 mb-4">
        <CardPublicaciones
          titulo="Operación Renta 2024"
          fecha="13/06/2024"
          body="Solo un 11,6% del total de Declaraciones de Renta recibidas resultaron observadas"
          src={publicacion01}
          descripcion="Operacion renta"
        />
        <CardPublicaciones
          titulo="Operación Renta 2024"
          fecha="13/06/2024"
          body="Solo un 11,6% del total de Declaraciones de Renta recibidas resultaron observadas"
          src={publicacion01}
          descripcion="Operacion renta"
        />
        <CardPublicaciones
          titulo="Operación Renta 2024"
          fecha="13/06/2024"
          body="Solo un 11,6% del total de Declaraciones de Renta recibidas resultaron observadas"
          src={publicacion01}
          descripcion="Operacion renta"
        />
        <CardPublicaciones
          titulo="Operación Renta 2024"
          fecha="13/06/2024"
          body="Solo un 11,6% del total de Declaraciones de Renta recibidas resultaron observadas"
          src={publicacion01}
          descripcion="Operacion renta"
        />
        <CardPublicaciones
          titulo="Operación Renta 2024"
          fecha="13/06/2024"
          body="Solo un 11,6% del total de Declaraciones de Renta recibidas resultaron observadas"
          src={publicacion01}
          descripcion="Operacion renta"
        />
      </div>
      <h2 className="text-4xl text-start italic mx-16 mt-12">
        Testimonios de nuestros clientes
      </h2>
      <div className="container mx-auto ">
        <CarruselTestimonios />
      </div>
    </>
  );
}
