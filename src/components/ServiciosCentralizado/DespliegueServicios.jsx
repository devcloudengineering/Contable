import { Boton } from "../Boton/Boton.jsx";

const DespliegueServicios = () => {
  const coreservicios = [
    {
      titulo: "contrato de trabajo",
      descripcion:
        "Redacción de contrato de trabajo estándar con formato sugerido por la Inspección del Trabajo",
      precio: "$18.990",
      topic: "rrhh",
      src: "contratoTrabajoSrc",
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "rrhh",
      src: "reunionSrc",
    },
    {
      titulo: "Tramitar licencia medica electronica",
      descripcion:
        "Presentación ante las instituciones de salud de Licencia Médica Electrónica emitida a un trabajador",
      precio: "$18.990",
      topic: "rrhh",
      src: "tramitarLicenciaMedicaSrc",
    },
    {
      titulo: "Finiquito de contrato",
      descripcion:
        "Redacción de Finiquito de término de contrato de trabajo estándar con formato sugerido por la Inspección del Trabajo",
      precio: "$18.990",
      topic: "rrhh",
      src: "finiquitoContratoSrc",
    },
    {
      titulo: "Representacion ante inspeccion de trabajo",
      descripcion:
        "Representación Inspección del Trabajo, preparación de carpeta, cálculo de finiquito, exhibición de antecedentes, Negociación",
      precio: "Cotizar",
      topic: "rrhh",
      src: "representacionInspeccionTrabajoSrc",
    },
    {
      titulo: "Tramitar licencia medica manual",
      descripcion:
        "Presentación ante las instituciones de salud de Licencia Médica Manual emitida a un trabajador",
      precio: "Cotizar",
      topic: "rrhh",
      src: "tramitarLicenciaMedicaManualSrc",
    },
    {
      titulo: "Constitucion de empresa en 1 dia",
      descripcion:
        "Preparación de Escritura y Obtención de Rut (considerar un gasto notarial de $6.000 aprox.) Inicio de actividades, compra e instalación de certificado digitar, habilitación de factura electrónica y solicitud de Acreditación de domicilio",
      precio: "$187.990 ",
      topic: "cde",
      src: "constitucionEmpresaUnDiaSrc",
    },
    {
      titulo: "Escritura cambio de socios empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: "escrituraCambioSociosSrc",
    },
    {
      titulo: "Junta de accionistas empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: "juntaAccionistasSrc",
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "37.990",
      topic: "cde",
      src: "reunionAsesoriaLaboralSrc",
    },
    {
      titulo: "Domicilio tributario",
      descripcion:
        "Sub Arriendo oficina para: Iniciar Trámites en el SII y Obtener Patente Municipal",
      precio: "17.990",
      topic: "cde",
      src: "domicilioTributarioSrc",
    },
    {
      titulo: "Gestion de patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "cde",
      src: "gestionPatenteMunicipalSrc",
    },
    {
      titulo: "Modificacion de sociedad",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "cde",
      src: "modificacionDeSociedadlSrc",
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "$56.990 ",
      topic: "cde",
      src: "reunionAsesoriaLegallSrc",
    },
    {
      titulo: "Balance tributario mensual",
      descripcion:
        "Elaboración completa de balance mensual (a fecha propuesta por el cliente), esta incluye la firma legal de un contador titulado",
      precio: "Cotizar",
      topic: "ctb",
      src: "balanceTributarioMensuallSrc",
    },
    {
      titulo: "Elaboracion de encuesta",
      descripcion:
        "Cumplimiento de envío de encuesta anual elaborada por el INE exigida a las empresas",
      precio: "$187.990",
      topic: "ctb",
      src: "elaboracionEncuestaInelSrc",
    },
    {
      titulo: "Reunion de asesoria contable",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "ctb",
      src: "reunionAsesoriaContablelSrc",
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "ctb",
      src: "reunionAsesoriaTributarialSrc",
    },
    {
      titulo: "Cambio domicilio tributario Sii",
      descripcion: "Cambio formal de domicilio tributario en la página del SII",
      precio: "$17.990",
      topic: "ctb",
      src: "cambioDomicilioTributarioSrc",
    },
    {
      titulo: "Estado de resultado mensual",
      descripcion:
        "Elaboración completa de estado de resultados (a fecha propuesta por el cliente), esta incluye la firma legal de un contador titulado",
      precio: "Cotizar",
      topic: "ctb",
      src: "estadoResultadoMensualSrc",
    },
    {
      titulo: "Reunion de asesoria laboral",
      descripcion:
        "Llamada o videollamada con un Contador para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990 ",
      topic: "ctb",
      src: "reunionAsesoriaLaboralSrc",
    },
    {
      titulo: "Reunion de proyeccion de impuesto renta",
      descripcion:
        "Proyección anual de impuesto en base a un estado de resultados, esto incluye: Valor aproximado del impuesto, comportamiento de la empresa en otros régimenes tributarios y asesoria tributaria enfocada al ahorro de impuestos y busqueda de beneficios tributarios",
      precio: "$112.990 ",
      topic: "ctb",
      src: "reunionProyeccionImpuestoRentaSrc",
    },
    {
      titulo: "Constitucion de empresa en 1 dia",
      descripcion:
        "Preparación de Escritura y Obtención de Rut (considerar un gasto notarial de $6.000 aprox.) Inicio de actividades, compra e instalación de certificado digitar, habilitación de factura electrónica y solicitud de Acreditación de domicilio",
      precio: "$187.990",
      topic: "legal",
      src: "constitucionEmpresa1DiaSrc",
    },
    {
      titulo: "Escritura cambio de socios empresa",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "legal",
      src: "escrituraCambioDeSociosSrc",
    },
    {
      titulo: "Junta de accionistas",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día.",
      precio: "Cotizar",
      topic: "legal",
      src: "juntaDeAccionistasSrc",
    },
    {
      titulo: "Representacion ante inspeccion del trabajo",
      descripcion:
        "Representación Inspección del Trabajo, preparación de carpeta, cálculo de finiquito, exhibición de antecedentes, Negociación",
      precio: "Cotizar",
      topic: "legal",
      src: "representacionAnteInspeccionSrc",
    },
    {
      titulo: "Termino de giro patente municipal",
      descripcion:
        "Preparación y Presentación ante Municipalidad para cerrar patente comercial, adjuntando todos los antecedentes solicitados por la administración",
      precio: "Cotizar",
      topic: "legal",
      src: "terminoGiroPatenteSrc",
    },
    {
      titulo: "Domicilio tributario",
      descripcion:
        "Sub Arriendo oficina para: Iniciar Trámites en el SII y Obtener Patente Municipal",
      precio: "Cotizar",
      topic: "legal",
      src: "domicilioTributarioSrc",
    },
    {
      titulo: "Gestion patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "legal",
      src: "gestionPatenteMunicipalSrc",
    },
    {
      titulo: "Modificacion de sociedad",
      descripcion:
        "Redacción de la Escritura, Firma en notaría y Registro de la modificación en empresa en un día",
      precio: "Cotizar",
      topic: "legal",
      src: "modificacionDeSociedadSrc",
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "Cotizar",
      topic: "legal",
      src: "reunionAsesoriaLegalSrc",
    },
    {
      titulo: "Gestion patente municipal",
      descripcion:
        "Comunas de Santiago, Providencia, Ñuñoa y Las Condes. Tramitación de carpeta y presentación de solicitud de patente comercial",
      precio: "Cotizar",
      topic: "pm",
      src: "gestionPatenteMunicipalSrc",
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "pm",
      src: "reunionAsesoriaTributariaSrc",
    },
    {
      titulo: "Reunion de asesoria legal",
      descripcion:
        "Dudas Legales respecto a: Quiebra Empresa, Demandas Laborales, Redacción de Contratos, Querellas y Derecho Comercial y Juicios Civiles",
      precio: "$56.990",
      topic: "pm",
      src: "reunionAsesoriaLegalSrc",
    },
    {
      titulo: "Termino de giro patente municipal",
      descripcion:
        "Preparación y Presentación ante Municipalidad para cerrar patente comercial, adjuntando todos los antecedentes solicitados por la administración",
      precio: "Cotizar",
      topic: "pm",
      src: "terminoGiroPatenteMunicipalSrc",
    },
    {
      titulo: "Cambio domicilio tributario",
      descripcion: "Cambio formal de domicilio tributario en la página del SII",
      precio: "$18.990 ",
      topic: "sii",
      src: "cambioDomicilioTributarioSrc",
    },
    {
      titulo: "Regularizacion tributaria formulario N°29",
      descripcion:
        "Regularización de IVAS atrasados, caracterización del Registro de Compras y Ventas del mes correspodiente, preparación de Formulario 29 atrasado",
      precio: "Cotizar",
      topic: "sii",
      src: "formulario29Src",
    },
    {
      titulo: "Reunion de asesoria tributaria",
      descripcion:
        "Llamada o videollamada con un Contador Tributario para resolver dudas de la empresa, con un máximo de 30 min",
      precio: "$37.990",
      topic: "sii",
      src: "reunionAsesoriaTributariaSrc",
    },
    {
      titulo: "Generar carpeta tributaria",
      descripcion:
        "Solicitud de carpeta tributaria personalizada en formato PDF para presentación en instituciones",
      precio: "$18.990",
      topic: "sii",
      src: "generarCarpetaTributariaSrc",
    },
    {
      titulo: "Regularizacion tributaria de declaracion de renta",
      descripcion:
        "Regularización de contabilidades atrasadas, representación en citaciones, rectificación de renta, declaraciones juradas",
      precio: "Cotizar",
      topic: "sii",
      src: "regularizacionTributariaDeclaracionRentaSrc",
    },
    {
      titulo: "Termino de giro empresa",
      descripcion:
        "Preparación y Presentación ante el SII en base a F29, Declaraciones Juradas, Balance y otros antencedentes tributarios",
      precio: "Cotizar",
      topic: "sii",
      src: "terminoGiroEmpresaSrc",
    },
  ];
  return (
    <div className="flex flex-wrap">
      <div className="container">
        {coreservicios.map((elemento) => {
          <div className="grid grid-cols-3 ">
            <img src={elemento.src} alt="" />
            <div className="flex flex-col">
              <h2>{elemento.titulo}</h2>
              <p>{elemento.descripcion}</p>
            </div>
            <div className="flex flex-col">
              <h2> Cotizar</h2>
              <Boton text="Ver mas"></Boton>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default DespliegueServicios;
