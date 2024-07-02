import { useState } from "react";
import { useForm } from "react-hook-form";
import { Boton } from "../Boton";

const FormularioDespliegue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("El formulario se envió correctamente");
        reset();
      } else {
        throw new Error(result.error || "Error desconocido");
      }
    } catch (error) {
      setSubmitStatus(
        `En estos momentos tenemos problemas con la solicitud, porfavor contactarnos con nuestros otros canales de comunicacion ... Gracias por la comprension`
      );
    }
  };

  return (
    <div className="col-start-2 mb-12 bg-lime-200 rounded-lg drop-shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 flex flex-col gap-2"
      >
        <label
          htmlFor="nombre"
          className="block italic text-lime-700/65 text-xl font-semibold"
        >
          Nombre
        </label>
        <input
          className="border border-lime-400 rounded-lg p-2"
          type="text"
          placeholder="Escribe tu nombre ..."
          {...register("nombre", {
            required: {
              value: true,
              message: "El nombre es requerido",
            },
            maxLength: {
              value: 20,
              message: "El nombre excede la cantidad máxima de caracteres",
            },
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
          })}
        />

        {errors.nombre?.message && (
          <span className="text-red-500 font-serif block text-xs my-2">
            {errors.nombre.message}
          </span>
        )}

        <label
          htmlFor="apellido"
          className="block italic text-lime-700/65 text-xl font-semibold"
        >
          Apellido
        </label>
        <input
          className="border border-lime-400 rounded-lg p-2"
          type="text"
          placeholder="Escribe tu apellido ..."
          {...register("apellido")}
        />

        <label
          htmlFor="email"
          className="block italic text-lime-700/65 text-xl font-semibold"
        >
          Email
        </label>
        <input
          className="border border-lime-400 rounded-lg p-2"
          type="email"
          placeholder="Escribe tu email ..."
          {...register("email", {
            required: {
              value: true,
              message: "Correo requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Correo no válido",
            },
          })}
        />

        {errors.email && (
          <span className="text-red-500 font-serif block text-xs my-2">
            {errors.email.message}
          </span>
        )}

        <label
          htmlFor="telefono"
          className="block italic text-lime-700/65 text-xl font-semibold"
        >
          Teléfono
        </label>
        <input
          type="tel"
          className="border border-lime-400 rounded-lg p-2"
          placeholder="Escribe tu teléfono ..."
          {...register("telefono", {
            required: {
              value: true,
              message: "Teléfono de contacto requerido",
            },
          })}
        />

        {errors.telefono && (
          <span className="text-red-500 font-serif block text-xs my-2">
            {errors.telefono.message}
          </span>
        )}

        <label
          htmlFor="mensaje"
          className="block italic text-lime-700/65 text-xl font-semibold"
        >
          Mensaje
        </label>
        <textarea
          className="border border-lime-400 rounded-lg p-2"
          name="mensaje"
          id="mensaje"
          cols={50}
          rows={5}
          placeholder="Cuéntanos en qué te podemos ayudar ..."
          {...register("mensaje", {
            required: {
              value: true,
              message: "Mensaje requerido",
            },
          })}
        ></textarea>

        {errors.mensaje && (
          <span className="text-red-500 font-serif block text-xs my-2">
            {errors.mensaje.message}
          </span>
        )}

        <Boton
          classOptional="bg-lime-400 text-black font-bold font-serif p-2 rounded-md cursor-pointer hover:bg-lime-600 border tracking-wider transition-all w-full mt-6"
          text="Enviar"
        />
      </form>
      {submitStatus && (
        <p className="text-center mt-2 mb-8 text-xl font-mono font-semibold text-lime-700/80">
          {submitStatus}
        </p>
      )}
    </div>
  );
};

export { FormularioDespliegue };
