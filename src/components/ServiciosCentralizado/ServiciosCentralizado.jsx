import { useState } from "react";
import DespliegueServicios from "./DespliegueServicios";
import ListaServicios from "./ListaServicios";
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

const ServiciosCentralizado = () => {
  const coreservicios = [
    {
      titulo: "Contrato de trabajo",
      descripcion:
        "Redacción de contrato de trabajo estándar con formato sugerido por la Inspección del Trabajo",
      precio: "$18.990",
      topic: "rrhh",
      src: contratoTrabajoSrc,
      id: 1,
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "rrhh",
      src: reunionSrc,
      id: 2,
    },
    {
      titulo: "Tramitar licencia medica electronica",
      descripcion:
        "Presentación ante las instituciones de salud de Licencia Médica Electrónica emitida a un trabajador",
      precio: "$18.990",
      topic: "rrhh",
      src: tramitarLicenciaMedicaSrc,
      id: 3,
    },
    {
      titulo: "Finiquito de contrato",
      descripcion:
        "Redacción de Finiquito de término de contrato de trabajo estándar con formato sugerido por la Inspección del Trabajo",
      precio: "$18.990",
      topic: "rrhh",
      src: finiquitoContratoSrc,
      id: 4,
    },
    {
      titulo: "Representacion ante inspeccion de trabajo",
      descripcion:
        "Representación Inspección del Trabajo, preparación de carpeta, cálculo de finiquito, exhibición de antecedentes, Negociación",
      precio: "Cotizar",
      topic: "rrhh",
      src: representacionInspeccionTrabajoSrc,
      id: 5,
    },
    {
      titulo: "Tramitar licencia medica manual",
      descripcion:
        "Presentación ante las instituciones de salud de Licencia Médica Manual emitida a un trabajador",
      precio: "Cotizar",
      topic: "rrhh",
      src: tramitarLicenciaMedicaManualSrc,
      id: 6,
    },
    {
      titulo: "Constitucion de empresa en 1 dia",
      descripcion:
        "Preparación de Escritura y Obtención de Rut Inicio de actividades, compra e instalación de certificado digitar",
      precio: "$187.990 ",
      topic: "cde",
      src: constitucionEmpresaUnDiaSrc,
      id: 7,
    },
    {
      titulo: "Escritura cambio de socios empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: escrituraCambioSociosSrc,
      id: 8,
    },
    {
      titulo: "Junta de accionistas empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: juntaAccionistasSrc,
      id: 9,
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "37.990",
      topic: "cde",
      src: reunionAsesoriaLaboralSrc,
      id: 10,
    },
    {
      titulo: "Domicilio tributario",
      descripcion:
        "Sub Arriendo oficina para: Iniciar Trámites en el SII y Obtener Patente Municipal",
      precio: "17.990",
      topic: "cde",
      src: domicilioTributarioSrc,
      id: 11,
    },
    {
      titulo: "Gestion de patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "cde",
      src: gestionPatenteMunicipalSrc,
      id: 12,
    },
    {
      titulo: "Modificacion de sociedad",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: modificacionDeSociedadlSrc,
      id: 13,
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "$56.990 ",
      topic: "cde",
      src: reunionAsesoriaLegallSrc,
      id: 14,
    },
    {
      titulo: "Balance tributario mensual",
      descripcion:
        "Elaboración completa de balance mensual (a fecha propuesta por el cliente), esta incluye la firma legal de un contador titulado",
      precio: "Cotizar",
      topic: "ctb",
      src: balanceTributarioMensuallSrc,
      id: 15,
    },
    {
      titulo: "Elaboracion de encuesta",
      descripcion:
        "Cumplimiento de envío de encuesta anual elaborada por el INE exigida a las empresas",
      precio: "$187.990",
      topic: "ctb",
      src: elaboracionEncuestaInelSrc,
      id: 16,
    },
    {
      titulo: "Reunion de asesoria contable",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "ctb",
      src: reunionAsesoriaContablelSrc,
      id: 17,
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "ctb",
      src: reunionAsesoriaTributarialSrc,
      id: 18,
    },
    {
      titulo: "Cambio domicilio tributario Sii",
      descripcion: "Cambio formal de domicilio tributario en la página del SII",
      precio: "$17.990",
      topic: "ctb",
      src: cambioDomicilioTributarioSrc,
      id: 19,
    },
    {
      titulo: "Estado de resultado mensual",
      descripcion:
        "Elaboración completa de estado de resultados (a fecha propuesta por el cliente), esta incluye la firma legal de un contador titulado",
      precio: "Cotizar",
      topic: "ctb",
      src: estadoResultadoMensualSrc,
      id: 20,
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990 ",
      topic: "ctb",
      src: reunionAsesoriaLaboralSrc,
      id: 21,
    },
    {
      titulo: "Reunion de proyeccion de impuesto renta",
      descripcion:
        "Proyección anual de impuesto en base a un estado de resultados, esto incluye: Valor aproximado del impuesto",
      precio: "$112.990 ",
      topic: "ctb",
      src: reunionProyeccionImpuestoRentaSrc,
      id: 22,
    },
    {
      titulo: "Constitucion de empresa en 1 dia",
      descripcion:
        "Preparación de Escritura y Obtención de Rut,inicio de actividades, compra e instalación de certificado digitar",
      precio: "$187.990",
      topic: "legal",
      src: constitucionEmpresa1DiaSrc,
      id: 23,
    },
    {
      titulo: "Escritura cambio de socios empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "legal",
      src: escrituraCambioDeSociosSrc,
      id: 24,
    },
    {
      titulo: "Junta de accionistas",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día.",
      precio: "Cotizar",
      topic: "legal",
      src: juntaDeAccionistasSrc,
      id: 25,
    },
    {
      titulo: "Representacion ante inspeccion del trabajo",
      descripcion:
        "Representación Inspección del Trabajo, preparación de carpeta, cálculo de finiquito, exhibición de antecedentes, Negociación",
      precio: "Cotizar",
      topic: "legal",
      src: representacionAnteInspeccionSrc,
      id: 26,
    },
    {
      titulo: "Termino de giro patente municipal",
      descripcion:
        "Preparación y Presentación ante Municipalidad para cerrar patente comercial, adjuntando todos los antecedentes solicitados por la administración",
      precio: "Cotizar",
      topic: "legal",
      src: terminoGiroPatenteSrc,
      id: 27,
    },
    {
      titulo: "Domicilio tributario",
      descripcion:
        "Sub Arriendo oficina para: Iniciar Trámites en el SII y Obtener Patente Municipal",
      precio: "Cotizar",
      topic: "legal",
      src: domicilioTributarioSrc,
      id: 28,
    },
    {
      titulo: "Gestion patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "legal",
      src: gestionPatenteMunicipalSrc,
      id: 29,
    },
    {
      titulo: "Modificacion de sociedad",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "legal",
      src: modificacionDeSociedadSrc,
      id: 30,
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "Cotizar",
      topic: "legal",
      src: reunionAsesoriaLegalSrc,
      id: 31,
    },
    {
      titulo: "Gestion patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "pm",
      src: gestionPatenteMunicipalSrc,
      id: 32,
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "pm",
      src: reunionAsesoriaTributariaSrc,
      id: 33,
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "$56.990",
      topic: "pm",
      src: reunionAsesoriaLegalSrc,
      id: 34,
    },
    {
      titulo: "Termino de giro patente municipal",
      descripcion:
        "Preparación y Presentación ante Municipalidad para cerrar patente comercial, adjuntando todos los antecedentes solicitados por la administración",
      precio: "Cotizar",
      topic: "pm",
      src: terminoGiroPatenteMunicipalSrc,
      id: 35,
    },
    {
      titulo: "Cambio domicilio tributario",
      descripcion: "Cambio formal de domicilio tributario en la página del SII",
      precio: "$18.990 ",
      topic: "sii",
      src: cambioDomicilioTributarioSrc,
      id: 36,
    },
    {
      titulo: "Regularizacion tributaria formulario N°29",
      descripcion:
        "Regularización de IVAS atrasados preparación de Formulario 29 atrasado",
      precio: "Cotizar",
      topic: "sii",
      src: formulario29Src,
      id: 37,
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "sii",
      src: reunionAsesoriaTributariaSrc,
      id: 38,
    },
    {
      titulo: "Generar carpeta tributaria",
      descripcion:
        "Solicitud de carpeta tributaria personalizada en formato PDF para presentación en instituciones",
      precio: "$18.990",
      topic: "sii",
      src: generarCarpetaTributariaSrc,
      id: 39,
    },
    {
      titulo: "Regularizacion tributaria de declaracion de renta",
      descripcion:
        "Regularización de contabilidades atrasadas, representación en citaciones, rectificación de renta, declaraciones juradas",
      precio: "Cotizar",
      topic: "sii",
      src: regularizacionTributariaDeclaracionRentaSrc,
      id: 40,
    },
    {
      titulo: "Termino de giro empresa",
      descripcion:
        "Preparación y Presentación ante el SII en base a F29, Declaraciones Juradas, Balance y otros antencedentes tributarios",
      precio: "Cotizar",
      topic: "sii",
      src: terminoGiroEmpresaSrc,
      id: 41,
    },
  ];
  const [data, setData] = useState(coreservicios);
  const [focusStyle, setfocusStyle] = useState(0);

  return (
    <div className="grid grid-cols-4 mx-10 mb-10">
      <ListaServicios
        valorStyle={focusStyle}
        data={coreservicios}
        setvalorStyle={setfocusStyle}
        setvalueData={setData}
      />
      <DespliegueServicios valorData={data} setvalueData={setData} />
    </div>
  );
};

export default ServiciosCentralizado;
