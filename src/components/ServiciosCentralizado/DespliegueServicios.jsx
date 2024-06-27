import { Boton } from "../Boton/Boton.jsx";
import contratoTrabajoSrc from "@icons/contratoTrabajoSrc.png";
import reunionSrc from "@icons/reunionSrc.png";
import tramitarLicenciaMedicaSrc from "@icons/tramitarLicenciaMedicaSrc.png";
import finiquitoContratoSrc from "@icons/finiquitoContratoSrc.png";
import representacionInspeccionTrabajoSrc from "@icons/representacionInspeccionTrabajoSrc.png";
import tramitarLicenciaMedicaManualSrc from "@icons/tramitarLicenciaMedicaManualSrc.png";
import constitucionEmpresaUnDiaSrc from "@icons/constitucionEmpresaUnDiaSrc.png";
import domicilioTributarioSrc from "@icons/domicilioTributarioSrc.png";
import escrituraCambioSociosSrc from "@icons/escrituraCambioSociosSrc.png";
import juntaAccionistasSrc from "@icons/juntaAccionistasSrc.png";
import reunionAsesoriaLaboralSrc from "@icons/reunionAsesoriaLaboralSrc.png";
import gestionPatenteMunicipalSrc from "@icons/gestionPatenteMunicipalSrc.png";
import modificacionDeSociedadlSrc from "@icons/modificacionDeSociedadlSrc.png";
import reunionAsesoriaLegallSrc from "@icons/reunionAsesoriaLegallSrc.png";
import balanceTributarioMensuallSrc from "@icons/balanceTributarioMensuallSrc.png";
import elaboracionEncuestaInelSrc from "@icons/elaboracionEncuestaInelSrc.png";
import terminoGiroPatenteMunicipalSrc from "@icons/terminoGiroPatenteMunicipalSrc.png";
import reunionAsesoriaTributariaSrc from "@icons/reunionAsesoriaTributariaSrc.png";
import reunionAsesoriaLegalSrc from "@icons/reunionAsesoriaLegalSrc.png";
import modificacionDeSociedadSrc from "@icons/modificacionDeSociedadSrc.png";
import terminoGiroPatenteSrc from "@icons/terminoGiroPatenteSrc.png";
import representacionAnteInspeccionSrc from "@icons/representacionAnteInspeccionSrc.png";
import juntaDeAccionistasSrc from "@icons/juntaDeAccionistasSrc.png";
import escrituraCambioDeSociosSrc from "@icons/escrituraCambioDeSociosSrc.png";
import constitucionEmpresa1DiaSrc from "@icons/constitucionEmpresa1DiaSrc.png";
import reunionProyeccionImpuestoRentaSrc from "@icons/reunionProyeccionImpuestoRentaSrc.png";
import estadoResultadoMensualSrc from "@icons/estadoResultadoMensualSrc.png";
import cambioDomicilioTributarioSrc from "@icons/cambioDomicilioTributarioSrc.png";
import reunionAsesoriaTributarialSrc from "@icons/reunionAsesoriaTributarialSrc.png";
import reunionAsesoriaContablelSrc from "@icons/reunionAsesoriaContablelSrc.png";
import terminoGiroEmpresaSrc from "@icons/terminoGiroEmpresaSrc.png";
import regularizacionTributariaDeclaracionRentaSrc from "@icons/regularizacionTributariaDeclaracionRentaSrc.png";
import generarCarpetaTributariaSrc from "@icons/generarCarpetaTributariaSrc.png";
import formulario29Src from "@icons/formulario29Src.png";

const DespliegueServicios = () => {
  const coreservicios = [
    {
      titulo: "Contrato de trabajo",
      descripcion:
        "Redacción de contrato de trabajo estándar con formato sugerido por la Inspección del Trabajo",
      precio: "$18.990",
      topic: "rrhh",
      src: contratoTrabajoSrc,
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "rrhh",
      src: reunionSrc,
    },
    {
      titulo: "Tramitar licencia medica electronica",
      descripcion:
        "Presentación ante las instituciones de salud de Licencia Médica Electrónica emitida a un trabajador",
      precio: "$18.990",
      topic: "rrhh",
      src: tramitarLicenciaMedicaSrc,
    },
    {
      titulo: "Finiquito de contrato",
      descripcion:
        "Redacción de Finiquito de término de contrato de trabajo estándar con formato sugerido por la Inspección del Trabajo",
      precio: "$18.990",
      topic: "rrhh",
      src: finiquitoContratoSrc,
    },
    {
      titulo: "Representacion ante inspeccion de trabajo",
      descripcion:
        "Representación Inspección del Trabajo, preparación de carpeta, cálculo de finiquito, exhibición de antecedentes, Negociación",
      precio: "Cotizar",
      topic: "rrhh",
      src: representacionInspeccionTrabajoSrc,
    },
    {
      titulo: "Tramitar licencia medica manual",
      descripcion:
        "Presentación ante las instituciones de salud de Licencia Médica Manual emitida a un trabajador",
      precio: "Cotizar",
      topic: "rrhh",
      src: tramitarLicenciaMedicaManualSrc,
    },
    {
      titulo: "Constitucion de empresa en 1 dia",
      descripcion:
        "Preparación de Escritura y Obtención de Rut Inicio de actividades, compra e instalación de certificado digitar",
      precio: "$187.990 ",
      topic: "cde",
      src: constitucionEmpresaUnDiaSrc,
    },
    {
      titulo: "Escritura cambio de socios empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: escrituraCambioSociosSrc,
    },
    {
      titulo: "Junta de accionistas empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: juntaAccionistasSrc,
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "37.990",
      topic: "cde",
      src: reunionAsesoriaLaboralSrc,
    },
    {
      titulo: "Domicilio tributario",
      descripcion:
        "Sub Arriendo oficina para: Iniciar Trámites en el SII y Obtener Patente Municipal",
      precio: "17.990",
      topic: "cde",
      src: domicilioTributarioSrc,
    },
    {
      titulo: "Gestion de patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "cde",
      src: gestionPatenteMunicipalSrc,
    },
    {
      titulo: "Modificacion de sociedad",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: modificacionDeSociedadlSrc,
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "$56.990 ",
      topic: "cde",
      src: reunionAsesoriaLegallSrc,
    },
    {
      titulo: "Balance tributario mensual",
      descripcion:
        "Elaboración completa de balance mensual (a fecha propuesta por el cliente), esta incluye la firma legal de un contador titulado",
      precio: "Cotizar",
      topic: "ctb",
      src: balanceTributarioMensuallSrc,
    },
    {
      titulo: "Elaboracion de encuesta",
      descripcion:
        "Cumplimiento de envío de encuesta anual elaborada por el INE exigida a las empresas",
      precio: "$187.990",
      topic: "ctb",
      src: elaboracionEncuestaInelSrc,
    },
    {
      titulo: "Reunion de asesoria contable",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "ctb",
      src: reunionAsesoriaContablelSrc,
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "ctb",
      src: reunionAsesoriaTributarialSrc,
    },
    {
      titulo: "Cambio domicilio tributario Sii",
      descripcion: "Cambio formal de domicilio tributario en la página del SII",
      precio: "$17.990",
      topic: "ctb",
      src: cambioDomicilioTributarioSrc,
    },
    {
      titulo: "Estado de resultado mensual",
      descripcion:
        "Elaboración completa de estado de resultados (a fecha propuesta por el cliente), esta incluye la firma legal de un contador titulado",
      precio: "Cotizar",
      topic: "ctb",
      src: estadoResultadoMensualSrc,
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990 ",
      topic: "ctb",
      src: reunionAsesoriaLaboralSrc,
    },
    {
      titulo: "Reunion de proyeccion de impuesto renta",
      descripcion:
        "Proyección anual de impuesto en base a un estado de resultados, esto incluye: Valor aproximado del impuesto",
      precio: "$112.990 ",
      topic: "ctb",
      src: reunionProyeccionImpuestoRentaSrc,
    },
    {
      titulo: "Constitucion de empresa en 1 dia",
      descripcion:
        "Preparación de Escritura y Obtención de Rut,inicio de actividades, compra e instalación de certificado digitar",
      precio: "$187.990",
      topic: "legal",
      src: constitucionEmpresa1DiaSrc,
    },
    {
      titulo: "Escritura cambio de socios empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "legal",
      src: escrituraCambioDeSociosSrc,
    },
    {
      titulo: "Junta de accionistas",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día.",
      precio: "Cotizar",
      topic: "legal",
      src: juntaDeAccionistasSrc,
    },
    {
      titulo: "Representacion ante inspeccion del trabajo",
      descripcion:
        "Representación Inspección del Trabajo, preparación de carpeta, cálculo de finiquito, exhibición de antecedentes, Negociación",
      precio: "Cotizar",
      topic: "legal",
      src: representacionAnteInspeccionSrc,
    },
    {
      titulo: "Termino de giro patente municipal",
      descripcion:
        "Preparación y Presentación ante Municipalidad para cerrar patente comercial, adjuntando todos los antecedentes solicitados por la administración",
      precio: "Cotizar",
      topic: "legal",
      src: terminoGiroPatenteSrc,
    },
    {
      titulo: "Domicilio tributario",
      descripcion:
        "Sub Arriendo oficina para: Iniciar Trámites en el SII y Obtener Patente Municipal",
      precio: "Cotizar",
      topic: "legal",
      src: domicilioTributarioSrc,
    },
    {
      titulo: "Gestion patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "legal",
      src: gestionPatenteMunicipalSrc,
    },
    {
      titulo: "Modificacion de sociedad",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "legal",
      src: modificacionDeSociedadSrc,
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "Cotizar",
      topic: "legal",
      src: reunionAsesoriaLegalSrc,
    },
    {
      titulo: "Gestion patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "pm",
      src: gestionPatenteMunicipalSrc,
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "pm",
      src: reunionAsesoriaTributariaSrc,
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "$56.990",
      topic: "pm",
      src: reunionAsesoriaLegalSrc,
    },
    {
      titulo: "Termino de giro patente municipal",
      descripcion:
        "Preparación y Presentación ante Municipalidad para cerrar patente comercial, adjuntando todos los antecedentes solicitados por la administración",
      precio: "Cotizar",
      topic: "pm",
      src: terminoGiroPatenteMunicipalSrc,
    },
    {
      titulo: "Cambio domicilio tributario",
      descripcion: "Cambio formal de domicilio tributario en la página del SII",
      precio: "$18.990 ",
      topic: "sii",
      src: cambioDomicilioTributarioSrc,
    },
    {
      titulo: "Regularizacion tributaria formulario N°29",
      descripcion:
        "Regularización de IVAS atrasados, caracterización del Registro de Compras y Ventas del mes correspodiente, preparación de Formulario 29 atrasado",
      precio: "Cotizar",
      topic: "sii",
      src: formulario29Src,
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "sii",
      src: reunionAsesoriaTributariaSrc,
    },
    {
      titulo: "Generar carpeta tributaria",
      descripcion:
        "Solicitud de carpeta tributaria personalizada en formato PDF para presentación en instituciones",
      precio: "$18.990",
      topic: "sii",
      src: generarCarpetaTributariaSrc,
    },
    {
      titulo: "Regularizacion tributaria de declaracion de renta",
      descripcion:
        "Regularización de contabilidades atrasadas, representación en citaciones, rectificación de renta, declaraciones juradas",
      precio: "Cotizar",
      topic: "sii",
      src: regularizacionTributariaDeclaracionRentaSrc,
    },
    {
      titulo: "Termino de giro empresa",
      descripcion:
        "Preparación y Presentación ante el SII en base a F29, Declaraciones Juradas, Balance y otros antencedentes tributarios",
      precio: "Cotizar",
      topic: "sii",
      src: terminoGiroEmpresaSrc,
    },
  ];
  return (
    <div className="container mx-auto p-2 col-[2/5]">
      <div className="grid gap-6 grid-cols-2">
        {coreservicios.map((elemento) => (
          <div
            key={elemento.descripcion}
            className="grid grid-cols-4 gap-2 mb-4 bg-lime-200 p-2 rounded-lg w-[25rem] hover:bg-lime-300 hover:transition-all hover:scale-105"
          >
            <div className="flex justify-center items-center col-span-1">
              <img className="h-14" src={elemento.src} alt={elemento.titulo} />
            </div>
            <div className="flex flex-col col-span-2 justify-center">
              <h2 className="text-lg font-semibold">{elemento.titulo}</h2>
              <p className="text-xs">{elemento.descripcion}</p>
            </div>
            <div className="flex flex-col justify-around items-center">
              <h2 className="text-lg font-semibold">{elemento.precio}</h2>
              <Boton
                text="Ver más"
                classOptional="bg-lime-400 text-black text-xs font-bold font-serif px-2 py-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border tracking-wider transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DespliegueServicios;
