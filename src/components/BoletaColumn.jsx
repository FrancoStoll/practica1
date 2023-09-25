import React from "react";
import { idGenerator } from "../helpers/idGenerator";
import useBoleta from "../hooks/useBoleta";

const BoletaColumn = ({ prod }) => {
  const { handleEliminar, handleModal } = useBoleta();

  const { id, nombre, precio, cantidad, categoria } = prod;

  return (
    <tr>
      <td className="border px-4 py-2">{id}</td>
      <td className="border px-4 py-2 uppercase font-bold">{nombre}</td>
      <td className="border px-4 py-2">{precio}</td>
      <td className="border px-4 py-2">{cantidad}</td>
      <td className="border px-4 py-2 uppercase">{categoria}</td>
      <td className="border px-4 py-2 font-bold">${precio * cantidad}</td>
      <td className="border px-2 py-1">
        <button
          onClick={() => handleEliminar(id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-32 h-12 ml-2"
        >
          Eliminar
        </button>

        <button
          onClick={() => handleModal(prod)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-32 h-12 ml-2"
        >
          Editar
        </button>
      </td>
    </tr>
  );
};

export default BoletaColumn;
