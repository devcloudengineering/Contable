export function Boton({ text, classOptional, descripcion, src }) {
  return (
    <div>
      <button className={classOptional ? `${classOptional}` : `button-green`}>
        {src && descripcion && (
          <img
            className="h-10 object-cover object-center"
            src={src}
            alt={descripcion}
          />
        )}
        {text}
      </button>
    </div>
  );
}
