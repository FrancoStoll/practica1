import React from "react";
import useBoleta from "../hooks/useBoleta";
import BoletaColumn from "./BoletaColumn";

const Boleta = () => {
  const { boleta, handleReset, handleImprimir } = useBoleta();

  return (
    <div className="md:w-2/2 lg:w-3/5 mx-5">
      <p className="text-center block p-3 text-xl font-black mb-6">
        Vista Previa
      </p>

      <div>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Producto</th>
              <th className="px-4 py-2">Precio</th>
              <th className="px-4 py-2">Cantidad</th>
              <th className="px-4 py-2">Categoría</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {boleta?.map((prod) => (
              <BoletaColumn key={prod?.id} prod={prod} />
            ))}
          </tbody>
        </table>
        {boleta?.length > 0 ? (
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white font-bold my-4 rounded hover:bg-blue-900"
              onClick={handleImprimir}
            >
              Imprimir
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white font-bold my-4 rounded hover:bg-red-900"
              onClick={handleReset}
            >
              Eliminar
            </button>
          </div>
        ) : ''}
      </div>
    </div>
  );
};

export default Boleta;
