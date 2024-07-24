import { CursosCentralizado } from "../components/CursosCentralizado/CursosCentralizado.jsx";

export function Cursos() {
  return (
    <>
      <h1 className="text-4xl text-start italic mx-16 mt-12 mb-12">
        Servicio integral de desarrollo
      </h1>
      <div className="flex flex-col gap-6 justify-center items-center mb-5 mx-12">
        <CursosCentralizado />
      </div>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Planificación Tributaria</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Introducción a la Planificación Tributaria
          </h2>
          <p>
            La planificación tributaria es el proceso estratégico que permite a
            las empresas y a los individuos organizar sus actividades
            financieras de manera que optimicen su carga impositiva y cumplan
            con las normativas fiscales. Esta práctica implica la evaluación de
            las estructuras financieras y operativas para identificar
            oportunidades de ahorro en impuestos y minimizar las obligaciones
            tributarias. Una planificación adecuada puede involucrar la elección
            de estructuras corporativas eficientes, la aplicación de deducciones
            fiscales permitidas y la utilización de incentivos fiscales
            específicos. Al implementar una planificación tributaria efectiva,
            las organizaciones no solo pueden reducir sus costos fiscales, sino
            también mejorar su rentabilidad y sostenibilidad financiera.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Aspectos Fundamentales de la Planificación Tributaria
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Estructura Empresarial</li>
            <li>Elección del Régimen Fiscal</li>
            <li>Gestión de Ingresos y Gastos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Estrategias de Planificación Tributaria
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Uso de Deducciones y Créditos Fiscales</li>
            <li>Planificación de Inversiones</li>
            <li>Aprovechamiento de Incentivos Fiscales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Instrumentos y Herramientas de Planificación
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Software de Planificación Tributaria</li>
            <li>Consultoría Fiscal</li>
            <li>Modelos de Simulación de Impuestos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Aspectos Legales y Normativos
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cumplimiento de la Legislación Tributaria</li>
            <li>Normativas Locales e Internacionales</li>
            <li>Cambios Legislativos y su Impacto</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Casos de Estudio y Ejemplos Prácticos
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ejemplos de Planificación Exitosa</li>
            <li>Errores Comunes y Cómo Evitarlos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Consideraciones Éticas y de Transparencia
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prácticas de Planificación Responsable</li>
            <li>Evitación de Evasión Fiscal</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Conclusión y Recomendaciones
          </h2>
          <p>
            Resumen de Estrategias y Recomendaciones para la Implementación.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recursos Adicionales</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lecturas Recomendadas</li>
            <li>Enlaces a Herramientas y Recursos en Línea</li>
          </ul>
        </section>
      </div>
    </>
  );
}
