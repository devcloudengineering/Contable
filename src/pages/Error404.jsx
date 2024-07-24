import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-4">Página no encontrada</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
};
