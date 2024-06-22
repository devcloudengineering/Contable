export function Boton({ text }) {
  return (
    <button className="bg-lime-400 text-black font-bold font-serif p-2 rounded-md cursor-pointer hover:bg-lime-600 w-fit border">
      {text}
    </button>
  );
}
