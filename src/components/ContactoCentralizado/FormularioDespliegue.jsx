import { useForm } from "react-hook-form";
import { Boton } from "../Boton";

const FormularioDespliegue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="col-start-2 mb-12 bg-lime-200 rounded-lg drop-shadow-xl">
      <form onSubmit={onSubmit} className="p-8 flex flex-col gap-2">
        <label htmlFor="nombre" className="block italic">
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
              message: "El nombre excede la cantidad maxima de caracteres",
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

        <label htmlFor="apellido" className="block italic">
          Apellido
        </label>
        <input
          className="border border-lime-400 rounded-lg p-2"
          type="text"
          placeholder="Escribe tu apellido ..."
          {...register("apellido")}
        />

        <label htmlFor="email" className="block italic">
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
              message: "Correo no valido",
            },
          })}
        />

        {errors.email && (
          <span className="text-red-500 font-serif block text-xs my-2">
            {errors.email.message}
          </span>
        )}

        <label htmlFor="telefono" className="block italic">
          Telefono
        </label>
        <input
          type="tel"
          className="border border-lime-400 rounded-lg p-2"
          placeholder="Escribe tu telefono ..."
          {...register("telefono", {
            required: {
              value: true,
              message: "Telefono de contacto requerido",
            },
          })}
        />

        {errors.telefono && (
          <span className="text-red-500 font-serif block text-xs my-2">
            {errors.telefono.message}
          </span>
        )}

        <label htmlFor="mensaje" className="block italic">
          Mensaje
        </label>
        <textarea
          className="border border-lime-400 rounded-lg p-2"
          name="mensaje"
          id="mensaje"
          cols={50}
          rows={5}
          placeholder="Cuentanos en que te podemos ayudar ..."
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
    </div>
  );
};

export { FormularioDespliegue };
